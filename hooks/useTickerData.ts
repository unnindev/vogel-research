import { useEffect, useState } from 'react';

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
  cached?: boolean;
  cacheAge?: number;
  nextUpdate?: string;
}

export function useTickerData() {
  const [data, setData] = useState<TickerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/ticker-data');
      const json = await response.json();

      if (!response.ok) {
        throw new Error(json.error || 'Erro ao buscar dados do ticker');
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

    // Atualiza a cada 30 minutos (alinhado com o cache server-side)
    const interval = setInterval(fetchData, 30 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  return { data, loading, error, refetch: fetchData };
}
