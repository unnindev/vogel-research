import { NextResponse } from 'next/server';

// Cache em memória
let cachedData: any = null;
let lastFetch = 0;
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutos

interface MarketData {
  sp500: { value: string; change: string; isPositive: boolean };
  nasdaq: { value: string; change: string; isPositive: boolean };
  dow: { value: string; change: string; isPositive: boolean };
  vix: { value: string; change: string; isPositive: boolean };
  fearGreedIndex: {
    value: number;
    label: string;
    description: string;
    color: string;
  };
  lastUpdate: string;
}

// Helper para formatar números
function formatNumber(num: number, decimals = 2): string {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

// Helper para calcular mudança percentual
function formatChange(current: number, previous: number): { change: string; isPositive: boolean } {
  const diff = current - previous;
  const percentChange = (diff / previous) * 100;
  const isPositive = percentChange >= 0;

  return {
    change: `${isPositive ? '+' : ''}${percentChange.toFixed(2)}%`,
    isPositive,
  };
}

// Função para obter Fear & Greed Index da CNN
async function fetchFearGreedIndex() {
  try {
    const response = await fetch('https://production.dataviz.cnn.io/index/fearandgreed/graphdata');
    const data = await response.json();

    const currentValue = data.fear_and_greed.score;
    const currentRating = data.fear_and_greed.rating;

    // Mapear rating para português e cores
    const ratingMap: Record<string, { label: string; color: string; description: string }> = {
      'Extreme Fear': {
        label: 'Medo Extremo',
        color: 'text-red-400',
        description: 'O mercado está em pânico extremo',
      },
      'Fear': {
        label: 'Medo',
        color: 'text-orange-400',
        description: 'O mercado está mostrando sinais de medo',
      },
      'Neutral': {
        label: 'Neutro',
        color: 'text-yellow-400',
        description: 'O mercado está equilibrado',
      },
      'Greed': {
        label: 'Ganância',
        color: 'text-green-400',
        description: 'O mercado está mostrando sinais de ganância',
      },
      'Extreme Greed': {
        label: 'Ganância Extrema',
        color: 'text-green-400',
        description: 'O mercado está em ganância extrema',
      },
    };

    const mappedData = ratingMap[currentRating] || ratingMap['Neutral'];

    return {
      value: currentValue,
      ...mappedData,
    };
  } catch (error) {
    console.error('Erro ao buscar Fear & Greed Index:', error);
    // Retorna dados neutros em caso de erro
    return {
      value: 50,
      label: 'Neutro',
      color: 'text-yellow-400',
      description: 'Dados indisponíveis no momento',
    };
  }
}

// Função para obter dados de mercado do Finnhub
async function fetchMarketData(): Promise<MarketData> {
  const apiKey = process.env.FINNHUB_API_KEY;

  if (!apiKey || apiKey === 'your_api_key_here') {
    console.warn('FINNHUB_API_KEY não configurada. Usando dados mock.');
    // Retorna dados mock se não tiver API key
    return {
      sp500: { value: "4,783.45", change: "+1.23%", isPositive: true },
      nasdaq: { value: "15,011.35", change: "+2.15%", isPositive: true },
      dow: { value: "37,305.16", change: "+0.56%", isPositive: true },
      vix: { value: "13.42", change: "-5.23%", isPositive: true },
      fearGreedIndex: {
        value: 67,
        label: "Ganância",
        description: "O mercado está mostrando sinais de ganância",
        color: "text-green-400",
      },
      lastUpdate: new Date().toISOString(),
    };
  }

  try {
    // Buscar dados em paralelo
    // Nota: Finnhub usa símbolos sem o prefixo ^
    const [sp500Data, nasdaqData, dowData, vixData, fearGreedData] = await Promise.all([
      // S&P 500 (usando SPY ETF como proxy para melhor disponibilidade)
      fetch(`https://finnhub.io/api/v1/quote?symbol=SPY&token=${apiKey}`).then(r => r.json()),
      // NASDAQ (usando QQQ ETF como proxy)
      fetch(`https://finnhub.io/api/v1/quote?symbol=QQQ&token=${apiKey}`).then(r => r.json()),
      // DOW JONES (usando DIA ETF como proxy)
      fetch(`https://finnhub.io/api/v1/quote?symbol=DIA&token=${apiKey}`).then(r => r.json()),
      // VIX
      fetch(`https://finnhub.io/api/v1/quote?symbol=VIX&token=${apiKey}`).then(r => r.json()),
      // Fear & Greed Index
      fetchFearGreedIndex(),
    ]);

    // Processar dados do S&P 500
    const sp500 = {
      value: formatNumber(sp500Data.c),
      ...formatChange(sp500Data.c, sp500Data.pc),
    };

    // Processar dados do NASDAQ
    const nasdaq = {
      value: formatNumber(nasdaqData.c),
      ...formatChange(nasdaqData.c, nasdaqData.pc),
    };

    // Processar dados do DOW
    const dow = {
      value: formatNumber(dowData.c),
      ...formatChange(dowData.c, dowData.pc),
    };

    // Processar dados do VIX
    const vix = {
      value: formatNumber(vixData.c),
      ...formatChange(vixData.c, vixData.pc),
    };

    return {
      sp500,
      nasdaq,
      dow,
      vix,
      fearGreedIndex: fearGreedData,
      lastUpdate: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Erro ao buscar dados de mercado:', error);
    throw new Error('Falha ao buscar dados de mercado');
  }
}

export async function GET() {
  const now = Date.now();

  // Verifica se tem cache válido
  if (cachedData && (now - lastFetch) < CACHE_DURATION) {
    return NextResponse.json({
      ...cachedData,
      cached: true,
      cacheAge: Math.floor((now - lastFetch) / 1000), // segundos
      nextUpdate: new Date(lastFetch + CACHE_DURATION).toISOString(),
    });
  }

  try {
    // Busca dados frescos
    const freshData = await fetchMarketData();

    // Atualiza cache
    cachedData = freshData;
    lastFetch = now;

    return NextResponse.json({
      ...freshData,
      cached: false,
      cacheAge: 0,
      nextUpdate: new Date(now + CACHE_DURATION).toISOString(),
    });
  } catch (error) {
    console.error('Erro ao buscar dados de mercado:', error);

    // Se falhar e tiver cache antigo, retorna ele
    if (cachedData) {
      return NextResponse.json({
        ...cachedData,
        cached: true,
        stale: true,
        error: 'Dados podem estar desatualizados',
      });
    }

    return NextResponse.json(
      { error: 'Erro ao buscar dados de mercado' },
      { status: 500 }
    );
  }
}
