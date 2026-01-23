"use client";

import {
  Users,
  DollarSign,
  FileText,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Eye,
  MessageCircle,
} from "lucide-react";

const stats = [
  {
    title: "Total de Usuários",
    value: "1,247",
    change: "+12%",
    isPositive: true,
    icon: Users,
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    title: "Receita Mensal",
    value: "R$ 96.019",
    change: "+8%",
    isPositive: true,
    icon: DollarSign,
    color: "bg-green-500/20 text-green-400",
  },
  {
    title: "Conteúdos Publicados",
    value: "156",
    change: "+24",
    isPositive: true,
    icon: FileText,
    color: "bg-purple-500/20 text-purple-400",
  },
  {
    title: "Taxa de Churn",
    value: "2.3%",
    change: "-0.5%",
    isPositive: true,
    icon: TrendingDown,
    color: "bg-vogel-gold/20 text-vogel-gold",
  },
];

const recentUsers = [
  { name: "Carlos Silva", email: "carlos@email.com", plan: "Anual", date: "Hoje" },
  { name: "Ana Costa", email: "ana@email.com", plan: "Mensal", date: "Hoje" },
  { name: "Pedro Mendes", email: "pedro@email.com", plan: "Anual", date: "Ontem" },
  { name: "Maria Santos", email: "maria@email.com", plan: "Anual", date: "Ontem" },
  { name: "João Lima", email: "joao@email.com", plan: "Mensal", date: "23 Jan" },
];

const recentContent = [
  { title: "Análise: Apple (AAPL)", views: 342, comments: 28, date: "Há 2h" },
  { title: "Live: Revisão Semanal", views: 518, comments: 45, date: "Há 5h" },
  { title: "Alerta: Resultados NVDA", views: 721, comments: 62, date: "Há 1d" },
  { title: "Tutorial: Imposto de Renda", views: 234, comments: 15, date: "Há 2d" },
];

export default function AdminDashboard() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-display font-semibold text-vogel-white mb-2">
          Dashboard
        </h1>
        <p className="text-vogel-gray">
          Visão geral da plataforma Vogel Research
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <span
                className={`flex items-center gap-1 text-sm font-medium ${
                  stat.isPositive ? "text-green-400" : "text-red-400"
                }`}
              >
                {stat.isPositive ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                {stat.change}
              </span>
            </div>
            <p className="text-vogel-gray text-sm mb-1">{stat.title}</p>
            <p className="text-2xl font-bold text-vogel-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Últimos usuários */}
        <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl">
          <div className="p-4 border-b border-vogel-green-dark/20 flex items-center justify-between">
            <h2 className="font-semibold text-vogel-white">Novos Usuários</h2>
            <a href="/admin/usuarios" className="text-vogel-gold text-sm hover:underline">
              Ver todos
            </a>
          </div>
          <div className="divide-y divide-vogel-green-dark/20">
            {recentUsers.map((user, index) => (
              <div key={index} className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-vogel-green-dark/30 flex items-center justify-center text-vogel-white font-semibold">
                    {user.name[0]}
                  </div>
                  <div>
                    <p className="text-vogel-white font-medium">{user.name}</p>
                    <p className="text-vogel-gray text-sm">{user.email}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-vogel-white text-sm">{user.plan}</p>
                  <p className="text-vogel-gray text-xs">{user.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Últimos conteúdos */}
        <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl">
          <div className="p-4 border-b border-vogel-green-dark/20 flex items-center justify-between">
            <h2 className="font-semibold text-vogel-white">Conteúdos Recentes</h2>
            <a href="/admin/conteudos" className="text-vogel-gold text-sm hover:underline">
              Ver todos
            </a>
          </div>
          <div className="divide-y divide-vogel-green-dark/20">
            {recentContent.map((content, index) => (
              <div key={index} className="p-4">
                <p className="text-vogel-white font-medium mb-2">{content.title}</p>
                <div className="flex items-center gap-4 text-vogel-gray text-sm">
                  <span className="flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    {content.views}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {content.comments}
                  </span>
                  <span className="ml-auto">{content.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
