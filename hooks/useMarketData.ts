import { useEffect, useState } from 'react';

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
  cached?: boolean;
  cacheAge?: number;
  nextUpdate?: string;
}

export function useMarketData() {
  const [data, setData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/market-data');
      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error || 'Erro ao buscar dados');
      }

      setData(json);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();

    // Atualiza a cada 5 minutos (o cache server-side é de 30min)
    const interval = setInterval(fetchData, 5 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return { data, loading, error, refetch: fetchData };
}
