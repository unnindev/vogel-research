"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { useMarketData } from "@/hooks/useMarketData";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Loader2,
  AlertCircle,
} from "lucide-react";

const recentAnalyses = [
  {
    id: 1,
    ticker: "AAPL",
    title: "Análise: Apple (AAPL) - Janeiro 2025",
    date: "Há 2 horas",
  },
  {
    id: 2,
    ticker: "NVDA",
    title: "Alerta: Resultados NVDA acima do esperado",
    date: "Há 1 dia",
  },
  {
    id: 3,
    ticker: "MSFT",
    title: "Por que estou de olho na Microsoft",
    date: "Há 2 dias",
  },
];

export default function DashboardPage() {
  const { data, loading, error } = useMarketData();

  // Formata a idade do cache para exibição
  const formatCacheAge = (cacheAge?: number) => {
    if (!cacheAge) return "agora";
    if (cacheAge < 60) return `há ${cacheAge}s`;
    const minutes = Math.floor(cacheAge / 60);
    return `há ${minutes} min`;
  };

  return (
    <>
      <DashboardHeader title="Dashboard" />

      <div className="p-6">
        {/* Welcome banner */}
        <div className="bg-gradient-to-r from-vogel-green-dark/30 to-vogel-gold/10 rounded-2xl p-6 mb-8 border border-gray-200 dark:border-vogel-green-dark/30">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-display font-semibold text-gray-900 dark:text-vogel-white mb-2">
                Bem-vindo de volta! 👋
              </h2>
              <p className="text-gray-600 dark:text-vogel-gray">
                Acompanhe as principais métricas do mercado americano
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-gray-600 dark:text-vogel-gray text-sm">
              <Clock className="w-4 h-4" />
              {loading ? (
                <span className="flex items-center gap-2">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  Carregando...
                </span>
              ) : error ? (
                <span className="flex items-center gap-2 text-red-400">
                  <AlertCircle className="w-3 h-3" />
                  Erro ao carregar
                </span>
              ) : (
                <span>
                  Atualizado {formatCacheAge(data?.cacheAge)}
                  {data?.cached && " (cache)"}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Fear & Greed Index */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-vogel-black/50 border border-gray-200 dark:border-vogel-green-dark/30 rounded-xl p-6 h-full">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-vogel-white mb-4">
                Fear & Greed Index
              </h3>

              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <Loader2 className="w-8 h-8 text-vogel-gold animate-spin" />
                </div>
              ) : error ? (
                <div className="flex flex-col items-center justify-center h-64 text-red-400">
                  <AlertCircle className="w-12 h-12 mb-2" />
                  <p className="text-sm">Erro ao carregar dados</p>
                </div>
              ) : data?.fearGreedIndex ? (
                <>
                  {/* Gauge visual */}
                  <div className="relative w-48 h-48 mx-auto mb-4">
                    <svg className="w-full h-full" viewBox="0 0 200 200">
                      {/* Background arc */}
                      <path
                        d="M 30 170 A 85 85 0 0 1 170 170"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="20"
                        className="text-vogel-green-dark/30"
                      />
                      {/* Colored arc based on value */}
                      <path
                        d="M 30 170 A 85 85 0 0 1 170 170"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="20"
                        strokeDasharray={`${(data.fearGreedIndex.value / 100) * 267} 267`}
                        className={data.fearGreedIndex.color}
                        strokeLinecap="round"
                      />
                      {/* Center value */}
                      <text
                        x="100"
                        y="130"
                        textAnchor="middle"
                        className="text-5xl font-bold fill-gray-900 dark:fill-vogel-white"
                      >
                        {data.fearGreedIndex.value}
                      </text>
                    </svg>
                  </div>

                  <div className="text-center">
                    <p
                      className={`text-2xl font-bold mb-2 ${data.fearGreedIndex.color}`}
                    >
                      {data.fearGreedIndex.label}
                    </p>
                    <p className="text-gray-600 dark:text-vogel-gray text-sm">
                      {data.fearGreedIndex.description}
                    </p>
                  </div>
                </>
              ) : null}
            </div>
          </div>

          {/* Market indices */}
          <div className="lg:col-span-2">
            {loading ? (
              <div className="flex items-center justify-center h-full min-h-[300px]">
                <Loader2 className="w-8 h-8 text-vogel-gold animate-spin" />
              </div>
            ) : error ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-red-400">
                <AlertCircle className="w-12 h-12 mb-2" />
                <p className="text-sm">Erro ao carregar dados do mercado</p>
              </div>
            ) : data ? (
              <div className="grid grid-cols-2 gap-4">
                {[
                  { key: "sp500", label: "S&P 500", data: data.sp500 },
                  { key: "nasdaq", label: "NASDAQ", data: data.nasdaq },
                  { key: "dow", label: "DOW JONES", data: data.dow },
                  { key: "vix", label: "VIX", data: data.vix },
                ].map((item) => (
                  <div
                    key={item.key}
                    className="bg-gray-50 dark:bg-vogel-black/50 border border-gray-200 dark:border-vogel-green-dark/30 rounded-xl p-6"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <p className="text-gray-600 dark:text-vogel-gray text-sm uppercase tracking-wide mb-1">
                          {item.label}
                        </p>
                        <p className="text-2xl font-bold text-gray-900 dark:text-vogel-white">
                          {item.data.value}
                        </p>
                      </div>
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          item.data.isPositive
                            ? "bg-green-500/20"
                            : "bg-red-500/20"
                        }`}
                      >
                        {item.data.isPositive ? (
                          <TrendingUp className="w-5 h-5 text-green-400" />
                        ) : (
                          <TrendingDown className="w-5 h-5 text-red-400" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`flex items-center gap-1 text-sm font-semibold ${
                          item.data.isPositive ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {item.data.isPositive ? (
                          <ArrowUpRight className="w-4 h-4" />
                        ) : (
                          <ArrowDownRight className="w-4 h-4" />
                        )}
                        {item.data.change}
                      </span>
                      <span className="text-gray-600 dark:text-vogel-gray text-xs">hoje</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        {/* Recent analyses */}
        <div className="bg-gray-50 dark:bg-vogel-black/50 border border-gray-200 dark:border-vogel-green-dark/30 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-vogel-green-dark/20 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-vogel-white">
              Análises Recentes
            </h3>
            <a
              href="/dashboard/feed"
              className="text-vogel-gold text-sm hover:underline"
            >
              Ver todas
            </a>
          </div>

          <div className="divide-y divide-gray-200 dark:divide-vogel-green-dark/20">
            {recentAnalyses.map((analysis) => (
              <div
                key={analysis.id}
                className="p-6 hover:bg-gray-100 dark:hover:bg-vogel-green-dark/10 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-vogel-gold/20 flex items-center justify-center">
                    <span className="font-mono font-bold text-vogel-gold text-sm">
                      {analysis.ticker}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900 dark:text-vogel-white font-medium hover:text-vogel-gold transition-colors">
                      {analysis.title}
                    </p>
                    <p className="text-gray-600 dark:text-vogel-gray text-sm">{analysis.date}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-600 dark:text-vogel-gray" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
