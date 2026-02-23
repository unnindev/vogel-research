"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
} from "lucide-react";

// Mock data - será substituído por API real
const marketData = {
  sp500: { value: "4,783.45", change: "+1.23%", isPositive: true },
  nasdaq: { value: "15,011.35", change: "+2.15%", isPositive: true },
  dow: { value: "37,305.16", change: "+0.56%", isPositive: true },
  vix: { value: "13.42", change: "-5.23%", isPositive: true },
};

const fearGreedIndex = {
  value: 67,
  label: "Ganância",
  description: "O mercado está mostrando sinais de ganância",
  color: "text-green-400",
  bgColor: "bg-green-500/20",
};

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
  return (
    <>
      <DashboardHeader title="Dashboard" />

      <div className="p-6">
        {/* Welcome banner */}
        <div className="bg-gradient-to-r from-vogel-green-dark/30 to-vogel-gold/10 rounded-2xl p-6 mb-8 border border-vogel-green-dark/30">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-display font-semibold text-vogel-white mb-2">
                Bem-vindo de volta! 👋
              </h2>
              <p className="text-vogel-gray">
                Acompanhe as principais métricas do mercado americano
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 text-vogel-gray text-sm">
              <Clock className="w-4 h-4" />
              Atualizado há 5 minutos
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Fear & Greed Index */}
          <div className="lg:col-span-1">
            <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-6 h-full">
              <h3 className="text-lg font-semibold text-vogel-white mb-4">
                Fear & Greed Index
              </h3>

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
                    strokeDasharray={`${(fearGreedIndex.value / 100) * 267} 267`}
                    className={fearGreedIndex.color}
                    strokeLinecap="round"
                  />
                  {/* Center value */}
                  <text
                    x="100"
                    y="130"
                    textAnchor="middle"
                    className="text-5xl font-bold fill-vogel-white"
                  >
                    {fearGreedIndex.value}
                  </text>
                </svg>
              </div>

              <div className="text-center">
                <p
                  className={`text-2xl font-bold mb-2 ${fearGreedIndex.color}`}
                >
                  {fearGreedIndex.label}
                </p>
                <p className="text-vogel-gray text-sm">
                  {fearGreedIndex.description}
                </p>
              </div>
            </div>
          </div>

          {/* Market indices */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(marketData).map(([key, data]) => (
                <div
                  key={key}
                  className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-6"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-vogel-gray text-sm uppercase tracking-wide mb-1">
                        {key === "sp500"
                          ? "S&P 500"
                          : key === "nasdaq"
                          ? "NASDAQ"
                          : key === "dow"
                          ? "DOW JONES"
                          : "VIX"}
                      </p>
                      <p className="text-2xl font-bold text-vogel-white">
                        {data.value}
                      </p>
                    </div>
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        data.isPositive
                          ? "bg-green-500/20"
                          : "bg-red-500/20"
                      }`}
                    >
                      {data.isPositive ? (
                        <TrendingUp className="w-5 h-5 text-green-400" />
                      ) : (
                        <TrendingDown className="w-5 h-5 text-red-400" />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`flex items-center gap-1 text-sm font-semibold ${
                        data.isPositive ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {data.isPositive ? (
                        <ArrowUpRight className="w-4 h-4" />
                      ) : (
                        <ArrowDownRight className="w-4 h-4" />
                      )}
                      {data.change}
                    </span>
                    <span className="text-vogel-gray text-xs">hoje</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent analyses */}
        <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-vogel-green-dark/20 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-vogel-white">
              Análises Recentes
            </h3>
            <a
              href="/dashboard/feed"
              className="text-vogel-gold text-sm hover:underline"
            >
              Ver todas
            </a>
          </div>

          <div className="divide-y divide-vogel-green-dark/20">
            {recentAnalyses.map((analysis) => (
              <div
                key={analysis.id}
                className="p-6 hover:bg-vogel-green-dark/10 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-vogel-gold/20 flex items-center justify-center">
                    <span className="font-mono font-bold text-vogel-gold text-sm">
                      {analysis.ticker}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-vogel-white font-medium hover:text-vogel-gold transition-colors">
                      {analysis.title}
                    </p>
                    <p className="text-vogel-gray text-sm">{analysis.date}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-vogel-gray" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
