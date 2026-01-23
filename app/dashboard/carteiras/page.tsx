"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import {
  TrendingUp,
  TrendingDown,
  PieChart,
  DollarSign,
  Calendar,
  ChevronRight,
} from "lucide-react";

const carteiras = [
  {
    id: 1,
    name: "Carteira Growth",
    description: "Foco em empresas de alto crescimento no setor de tecnologia",
    returnYTD: "+24.5%",
    isPositive: true,
    totalStocks: 8,
    lastUpdate: "20 Jan 2025",
  },
  {
    id: 2,
    name: "Carteira Dividendos",
    description: "Empresas sólidas com histórico de pagamento de dividendos",
    returnYTD: "+12.3%",
    isPositive: true,
    totalStocks: 10,
    lastUpdate: "18 Jan 2025",
  },
  {
    id: 3,
    name: "Carteira Value",
    description: "Empresas subvalorizadas com fundamentos sólidos",
    returnYTD: "+8.7%",
    isPositive: true,
    totalStocks: 6,
    lastUpdate: "15 Jan 2025",
  },
];

const ultimasOperacoes = [
  {
    id: 1,
    type: "compra",
    ticker: "GOOGL",
    name: "Alphabet Inc.",
    date: "20 Jan 2025",
    price: "$178.50",
    carteira: "Carteira Growth",
  },
  {
    id: 2,
    type: "venda",
    ticker: "META",
    name: "Meta Platforms",
    date: "18 Jan 2025",
    price: "$612.30",
    carteira: "Carteira Growth",
  },
  {
    id: 3,
    type: "compra",
    ticker: "JNJ",
    name: "Johnson & Johnson",
    date: "15 Jan 2025",
    price: "$152.80",
    carteira: "Carteira Dividendos",
  },
  {
    id: 4,
    type: "compra",
    ticker: "PG",
    name: "Procter & Gamble",
    date: "12 Jan 2025",
    price: "$168.20",
    carteira: "Carteira Dividendos",
  },
];

export default function CarteirasPage() {
  return (
    <>
      <DashboardHeader title="Carteiras Recomendadas" />

      <div className="p-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-vogel-gold/20 flex items-center justify-center">
                <PieChart className="w-5 h-5 text-vogel-gold" />
              </div>
              <span className="text-vogel-gray text-sm">Total de Carteiras</span>
            </div>
            <p className="text-3xl font-bold text-vogel-white">3</p>
          </div>

          <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-400" />
              </div>
              <span className="text-vogel-gray text-sm">Melhor Performance</span>
            </div>
            <p className="text-3xl font-bold text-green-400">+24.5%</p>
            <p className="text-vogel-gray text-xs">Carteira Growth</p>
          </div>

          <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-vogel-gray text-sm">Total de Ações</span>
            </div>
            <p className="text-3xl font-bold text-vogel-white">24</p>
          </div>
        </div>

        {/* Carteiras */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-vogel-white mb-4">
            Suas Carteiras
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {carteiras.map((carteira) => (
              <div
                key={carteira.id}
                className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-6 hover:border-vogel-gold/30 transition-colors cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-vogel-white group-hover:text-vogel-gold transition-colors">
                    {carteira.name}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-vogel-gray group-hover:text-vogel-gold transition-colors" />
                </div>

                <p className="text-vogel-gray text-sm mb-4">
                  {carteira.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-vogel-green-dark/20">
                  <div>
                    <p className="text-vogel-gray text-xs">Retorno YTD</p>
                    <p
                      className={`text-lg font-bold ${
                        carteira.isPositive ? "text-green-400" : "text-red-400"
                      }`}
                    >
                      {carteira.returnYTD}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-vogel-gray text-xs">Ações</p>
                    <p className="text-lg font-bold text-vogel-white">
                      {carteira.totalStocks}
                    </p>
                  </div>
                </div>

                <p className="text-vogel-gray text-xs mt-4 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  Atualizada em {carteira.lastUpdate}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Últimas operações */}
        <div>
          <h2 className="text-xl font-semibold text-vogel-white mb-4">
            Últimas Operações
          </h2>
          <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-vogel-green-dark/20">
                    <th className="text-left text-vogel-gray text-sm font-medium px-6 py-4">
                      Operação
                    </th>
                    <th className="text-left text-vogel-gray text-sm font-medium px-6 py-4">
                      Ativo
                    </th>
                    <th className="text-left text-vogel-gray text-sm font-medium px-6 py-4">
                      Preço
                    </th>
                    <th className="text-left text-vogel-gray text-sm font-medium px-6 py-4">
                      Carteira
                    </th>
                    <th className="text-left text-vogel-gray text-sm font-medium px-6 py-4">
                      Data
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ultimasOperacoes.map((op) => (
                    <tr
                      key={op.id}
                      className="border-b border-vogel-green-dark/10 hover:bg-vogel-green-dark/10"
                    >
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1 text-sm font-medium ${
                            op.type === "compra"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {op.type === "compra" ? (
                            <TrendingUp className="w-4 h-4" />
                          ) : (
                            <TrendingDown className="w-4 h-4" />
                          )}
                          {op.type === "compra" ? "Compra" : "Venda"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-vogel-white font-mono font-semibold">
                            {op.ticker}
                          </p>
                          <p className="text-vogel-gray text-xs">{op.name}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-vogel-white">{op.price}</td>
                      <td className="px-6 py-4 text-vogel-gray text-sm">
                        {op.carteira}
                      </td>
                      <td className="px-6 py-4 text-vogel-gray text-sm">
                        {op.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
