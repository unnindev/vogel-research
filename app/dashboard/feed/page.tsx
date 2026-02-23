"use client";

import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import {
  Heart,
  MessageCircle,
  Bookmark,
  TrendingUp,
  TrendingDown,
  Clock,
  Play,
} from "lucide-react";

// Dados mock para o feed
const feedPosts = [
  {
    id: 1,
    type: "analise",
    title: "Análise: Apple (AAPL) - Janeiro 2025",
    excerpt:
      "A Apple continua mostrando resiliência em seus resultados trimestrais. Vamos analisar os números e o que esperar para o próximo trimestre...",
    author: "Bruno Voegel",
    date: "Há 2 horas",
    likes: 48,
    comments: 12,
    ticker: "AAPL",
    change: "+2.34%",
    isPositive: true,
  },
  {
    id: 2,
    type: "video",
    title: "Live: Revisão de Mercado Semanal",
    excerpt:
      "Nesta live, analisamos os principais movimentos da semana e discutimos as perspectivas para os próximos dias.",
    author: "Bruno Voegel",
    date: "Há 5 horas",
    likes: 86,
    comments: 34,
    duration: "45:32",
    thumbnail: "/video-thumb.jpg",
  },
  {
    id: 3,
    type: "alerta",
    title: "Alerta: Resultados NVDA acima do esperado",
    excerpt:
      "A Nvidia reportou resultados trimestrais acima das expectativas. O lucro por ação foi de $5.16 vs $4.64 esperado...",
    author: "Bruno Voegel",
    date: "Há 1 dia",
    likes: 124,
    comments: 45,
    ticker: "NVDA",
    change: "+8.12%",
    isPositive: true,
  },
  {
    id: 4,
    type: "analise",
    title: "Por que estou de olho na Microsoft",
    excerpt:
      "A Microsoft tem se posicionado muito bem no mercado de IA com o Copilot e Azure. Veja minha análise completa...",
    author: "Bruno Voegel",
    date: "Há 2 dias",
    likes: 67,
    comments: 23,
    ticker: "MSFT",
    change: "-0.45%",
    isPositive: false,
  },
];

export default function DashboardPage() {
  const [savedPosts, setSavedPosts] = useState<number[]>([]);

  const toggleSave = (postId: number) => {
    setSavedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    );
  };

  return (
    <>
      <DashboardHeader title="Feed" />

      <div className="p-6">
        {/* Welcome banner */}
        <div className="bg-gradient-to-r from-vogel-green-dark/30 to-vogel-gold/10 rounded-2xl p-6 mb-8 border border-vogel-green-dark/30">
          <h2 className="text-2xl font-display font-semibold text-vogel-white mb-2">
            Bem-vindo de volta! 👋
          </h2>
          <p className="text-vogel-gray">
            Confira as últimas análises e atualizações da Vogel Research.
          </p>
        </div>

        {/* Feed */}
        <div className="space-y-6">
          {feedPosts.map((post) => (
            <article
              key={post.id}
              className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-6 hover:border-vogel-gold/30 transition-colors"
            >
              {/* Post header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-vogel-gold/20 flex items-center justify-center text-vogel-gold font-semibold">
                    B
                  </div>
                  <div>
                    <p className="text-vogel-white font-medium">{post.author}</p>
                    <p className="text-vogel-gray text-sm flex items-center gap-2">
                      <Clock className="w-3 h-3" />
                      {post.date}
                    </p>
                  </div>
                </div>

                {/* Type badge */}
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    post.type === "analise"
                      ? "bg-blue-500/20 text-blue-400"
                      : post.type === "video"
                      ? "bg-purple-500/20 text-purple-400"
                      : "bg-vogel-gold/20 text-vogel-gold"
                  }`}
                >
                  {post.type === "analise"
                    ? "Análise"
                    : post.type === "video"
                    ? "Vídeo"
                    : "Alerta"}
                </span>
              </div>

              {/* Post content */}
              <h3 className="text-xl font-semibold text-vogel-white mb-2 hover:text-vogel-gold cursor-pointer transition-colors">
                {post.title}
              </h3>
              <p className="text-vogel-gray mb-4">{post.excerpt}</p>

              {/* Ticker info if available */}
              {post.ticker && (
                <div className="flex items-center gap-4 mb-4 p-3 bg-vogel-green-dark/10 rounded-lg w-fit">
                  <span className="font-mono font-semibold text-vogel-white">
                    {post.ticker}
                  </span>
                  <span
                    className={`flex items-center gap-1 font-semibold ${
                      post.isPositive ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {post.isPositive ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    {post.change}
                  </span>
                </div>
              )}

              {/* Video thumbnail if video */}
              {post.type === "video" && (
                <div className="relative mb-4 rounded-lg overflow-hidden bg-vogel-green-dark/20 aspect-video flex items-center justify-center cursor-pointer group">
                  <div className="w-16 h-16 rounded-full bg-vogel-gold/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-vogel-black ml-1" />
                  </div>
                  {post.duration && (
                    <span className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {post.duration}
                    </span>
                  )}
                </div>
              )}

              {/* Post actions */}
              <div className="flex items-center gap-6 pt-4 border-t border-vogel-green-dark/20">
                <button className="flex items-center gap-2 text-vogel-gray hover:text-red-400 transition-colors">
                  <Heart className="w-5 h-5" />
                  <span className="text-sm">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-vogel-gray hover:text-vogel-gold transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  <span className="text-sm">{post.comments}</span>
                </button>
                <button
                  onClick={() => toggleSave(post.id)}
                  className={`flex items-center gap-2 transition-colors ${
                    savedPosts.includes(post.id)
                      ? "text-vogel-gold"
                      : "text-vogel-gray hover:text-vogel-gold"
                  }`}
                >
                  <Bookmark
                    className={`w-5 h-5 ${
                      savedPosts.includes(post.id) ? "fill-current" : ""
                    }`}
                  />
                  <span className="text-sm">Salvar</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
