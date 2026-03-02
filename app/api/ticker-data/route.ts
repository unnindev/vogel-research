import { NextResponse } from 'next/server';

// Cache em memória
let cachedData: any = null;
let lastFetch = 0;
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutos

interface TickerItem {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
}

interface TickerData {
  items: TickerItem[];
  lastUpdate: string;
}

// Lista de símbolos para o ticker tape
const TICKER_SYMBOLS = [
  // Índices (via ETFs)
  { symbol: 'SPY', name: 'S&P 500' },
  { symbol: 'QQQ', name: 'NASDAQ' },
  { symbol: 'DIA', name: 'DOW' },
  { symbol: 'VIX', name: 'VIX' },

  // Big Tech
  { symbol: 'AAPL', name: 'Apple' },
  { symbol: 'MSFT', name: 'Microsoft' },
  { symbol: 'GOOGL', name: 'Google' },
  { symbol: 'AMZN', name: 'Amazon' },
  { symbol: 'META', name: 'Meta' },
  { symbol: 'NVDA', name: 'Nvidia' },

  // Outras ações populares
  { symbol: 'TSLA', name: 'Tesla' },
  { symbol: 'JPM', name: 'JPMorgan' },
  { symbol: 'V', name: 'Visa' },
  { symbol: 'JNJ', name: 'Johnson & Johnson' },
  { symbol: 'WMT', name: 'Walmart' },
  { symbol: 'DIS', name: 'Disney' },
  { symbol: 'NFLX', name: 'Netflix' },
  { symbol: 'BA', name: 'Boeing' },
  { symbol: 'KO', name: 'Coca-Cola' },
  { symbol: 'PFE', name: 'Pfizer' },
];

// Helper para formatar números
function formatNumber(num: number, decimals = 2): string {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

// Helper para calcular mudança
function formatChange(current: number, previous: number): { change: string; changePercent: string; isPositive: boolean } {
  const diff = current - previous;
  const percentChange = (diff / previous) * 100;
  const isPositive = percentChange >= 0;

  return {
    change: `${isPositive ? '+' : ''}${formatNumber(diff, 2)}`,
    changePercent: `${isPositive ? '+' : ''}${percentChange.toFixed(2)}%`,
    isPositive,
  };
}

// Função para obter dados do ticker do Finnhub
async function fetchTickerData(): Promise<TickerData> {
  const apiKey = process.env.FINNHUB_API_KEY;

  if (!apiKey || apiKey === 'your_api_key_here') {
    console.warn('FINNHUB_API_KEY não configurada. Usando dados mock.');
    // Retorna dados mock se não tiver API key
    return {
      items: TICKER_SYMBOLS.map((stock, index) => ({
        symbol: stock.symbol,
        name: stock.name,
        price: `$${(100 + index * 10).toFixed(2)}`,
        change: `+${(Math.random() * 5).toFixed(2)}`,
        changePercent: `+${(Math.random() * 3).toFixed(2)}%`,
        isPositive: Math.random() > 0.5,
      })),
      lastUpdate: new Date().toISOString(),
    };
  }

  try {
    // Buscar dados de todas as ações em paralelo
    const promises = TICKER_SYMBOLS.map(stock =>
      fetch(`https://finnhub.io/api/v1/quote?symbol=${stock.symbol}&token=${apiKey}`)
        .then(r => r.json())
        .then(data => ({
          symbol: stock.symbol,
          name: stock.name,
          data,
        }))
    );

    const results = await Promise.all(promises);

    // Processar dados
    const items: TickerItem[] = results.map(result => {
      const { symbol, name, data } = result;
      const changeData = formatChange(data.c, data.pc);

      return {
        symbol,
        name,
        price: `$${formatNumber(data.c)}`,
        change: changeData.change,
        changePercent: changeData.changePercent,
        isPositive: changeData.isPositive,
      };
    });

    return {
      items,
      lastUpdate: new Date().toISOString(),
    };
  } catch (error) {
    console.error('Erro ao buscar dados do ticker:', error);
    throw new Error('Falha ao buscar dados do ticker');
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
    const freshData = await fetchTickerData();

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
    console.error('Erro ao buscar dados do ticker:', error);

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
      { error: 'Erro ao buscar dados do ticker' },
      { status: 500 }
    );
  }
}
