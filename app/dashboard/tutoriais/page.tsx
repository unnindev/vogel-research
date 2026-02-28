"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import {
  BookOpen,
  FileText,
  Calculator,
  Building2,
  TrendingUp,
  ChevronRight,
  Clock,
  CheckCircle,
} from "lucide-react";

const categorias = [
  {
    id: 1,
    icon: Building2,
    title: "Abrindo Conta em Corretora",
    description: "Guia completo para abrir conta em corretoras americanas",
    tutoriais: 5,
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    id: 2,
    icon: Calculator,
    title: "Imposto de Renda",
    description: "Tudo sobre declaração de investimentos no exterior",
    tutoriais: 8,
    color: "bg-green-500/20 text-green-400",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Análise Fundamentalista",
    description: "Aprenda a analisar empresas como um profissional",
    tutoriais: 12,
    color: "bg-purple-500/20 text-purple-400",
  },
  {
    id: 4,
    icon: FileText,
    title: "Leitura de Balanços",
    description: "Entenda os demonstrativos financeiros das empresas",
    tutoriais: 6,
    color: "bg-vogel-gold/20 text-vogel-gold",
  },
];

const tutoriaisDestaque = [
  {
    id: 1,
    title: "Como abrir conta na Interactive Brokers",
    categoria: "Abrindo Conta em Corretora",
    duration: "15 min",
    completed: true,
  },
  {
    id: 2,
    title: "Declaração de Imposto de Renda 2025 - Guia Completo",
    categoria: "Imposto de Renda",
    duration: "45 min",
    completed: false,
  },
  {
    id: 3,
    title: "Entendendo o P/E Ratio (Preço/Lucro)",
    categoria: "Análise Fundamentalista",
    duration: "20 min",
    completed: true,
  },
  {
    id: 4,
    title: "Como enviar dólares para a corretora",
    categoria: "Abrindo Conta em Corretora",
    duration: "10 min",
    completed: false,
  },
  {
    id: 5,
    title: "Lendo o Income Statement (DRE)",
    categoria: "Leitura de Balanços",
    duration: "30 min",
    completed: false,
  },
  {
    id: 6,
    title: "Como calcular o ganho de capital",
    categoria: "Imposto de Renda",
    duration: "25 min",
    completed: false,
  },
];

export default function TutoriaisPage() {
  return (
    <>
      <DashboardHeader title="Tutoriais" />

      <div className="p-6">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-2xl font-display font-semibold text-gray-900 dark:text-vogel-white mb-2">
            Aprenda a investir no mercado americano
          </h2>
          <p className="text-gray-600 dark:text-vogel-gray">
            Guias e tutoriais para você dominar os investimentos internacionais.
          </p>
        </div>

        {/* Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {categorias.map((cat) => (
            <div
              key={cat.id}
              className="bg-gray-50 dark:bg-vogel-black/50 border border-gray-200 dark:border-vogel-green-dark/30 rounded-xl p-6 hover:border-vogel-gold/30 transition-colors cursor-pointer group"
            >
              <div
                className={`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center mb-4`}
              >
                <cat.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-vogel-white mb-2 group-hover:text-vogel-gold transition-colors">
                {cat.title}
              </h3>
              <p className="text-gray-600 dark:text-vogel-gray text-sm mb-4">{cat.description}</p>
              <p className="text-vogel-gold text-sm font-medium">
                {cat.tutoriais} tutoriais
              </p>
            </div>
          ))}
        </div>

        {/* Lista de tutoriais */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-vogel-white">
              Todos os Tutoriais
            </h2>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 dark:text-vogel-gray text-sm">Filtrar por:</span>
              <select className="bg-white dark:bg-vogel-black border border-gray-200 dark:border-vogel-green-dark/30 rounded-lg px-3 py-2 text-gray-900 dark:text-vogel-white text-sm focus:border-vogel-gold outline-none">
                <option>Todas as categorias</option>
                <option>Abrindo Conta em Corretora</option>
                <option>Imposto de Renda</option>
                <option>Análise Fundamentalista</option>
                <option>Leitura de Balanços</option>
              </select>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-vogel-black/50 border border-gray-200 dark:border-vogel-green-dark/30 rounded-xl overflow-hidden">
            {tutoriaisDestaque.map((tutorial, index) => (
              <div
                key={tutorial.id}
                className={`flex items-center justify-between p-4 hover:bg-gray-100 dark:hover:bg-vogel-green-dark/10 cursor-pointer group ${
                  index !== tutoriaisDestaque.length - 1
                    ? "border-b border-gray-200 dark:border-vogel-green-dark/20"
                    : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      tutorial.completed
                        ? "bg-green-500/20"
                        : "bg-gray-200 dark:bg-vogel-green-dark/20"
                    }`}
                  >
                    {tutorial.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <BookOpen className="w-5 h-5 text-gray-600 dark:text-vogel-gray" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-gray-900 dark:text-vogel-white font-medium group-hover:text-vogel-gold transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-gray-600 dark:text-vogel-gray text-sm">{tutorial.categoria}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-gray-600 dark:text-vogel-gray text-sm flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {tutorial.duration}
                  </span>
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-vogel-gray group-hover:text-vogel-gold transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
