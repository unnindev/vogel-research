"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  MoreHorizontal,
  Pin,
  Trash2,
  AlertTriangle,
  MessageCircle,
  Heart,
  Flag,
  CheckCircle,
  Users,
  TrendingUp,
} from "lucide-react";

interface Post {
  id: number;
  author: string;
  content: string;
  time: string;
  likes: number;
  comments: number;
  isPinned: boolean;
  isReported: boolean;
  isAdmin: boolean;
}

const posts: Post[] = [
  {
    id: 1,
    author: "Bruno Voegel",
    content:
      "Bem-vindos à comunidade Vogel Research! Este é o espaço para trocarmos ideias, tirar dúvidas e discutir oportunidades no mercado americano.",
    time: "Fixado",
    likes: 156,
    comments: 42,
    isPinned: true,
    isReported: false,
    isAdmin: true,
  },
  {
    id: 2,
    author: "Carlos Silva",
    content: "Alguém mais está de olho na $PLTR? Os resultados vieram muito bons.",
    time: "Há 30 min",
    likes: 24,
    comments: 18,
    isPinned: false,
    isReported: false,
    isAdmin: false,
  },
  {
    id: 3,
    author: "Usuário Anônimo",
    content: "Conteúdo reportado por linguagem inadequada...",
    time: "Há 2 horas",
    likes: 2,
    comments: 5,
    isPinned: false,
    isReported: true,
    isAdmin: false,
  },
  {
    id: 4,
    author: "Ana Costa",
    content: "Acabei de assistir a live do Bruno sobre dividendos. Muito esclarecedor!",
    time: "Há 3 horas",
    likes: 45,
    comments: 8,
    isPinned: false,
    isReported: false,
    isAdmin: false,
  },
];

const stats = {
  totalPosts: 1847,
  postsHoje: 23,
  reportados: 3,
  membrosAtivos: 892,
};

export default function AdminComunidadePage() {
  const [showActions, setShowActions] = useState<number | null>(null);
  const [filter, setFilter] = useState("todos");

  const filteredPosts = posts.filter((post) => {
    if (filter === "reportados") return post.isReported;
    if (filter === "fixados") return post.isPinned;
    return true;
  });

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-display font-semibold text-vogel-white mb-2">
          Comunidade
        </h1>
        <p className="text-vogel-gray">
          Modere e gerencie as discussões da comunidade
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <p className="text-vogel-gray text-sm">Total de Posts</p>
              <p className="text-xl font-bold text-vogel-white">{stats.totalPosts}</p>
            </div>
          </div>
        </div>
        <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-green-400" />
            </div>
            <div>
              <p className="text-vogel-gray text-sm">Posts Hoje</p>
              <p className="text-xl font-bold text-vogel-white">{stats.postsHoje}</p>
            </div>
          </div>
        </div>
        <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
              <Flag className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <p className="text-vogel-gray text-sm">Reportados</p>
              <p className="text-xl font-bold text-red-400">{stats.reportados}</p>
            </div>
          </div>
        </div>
        <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-vogel-gold/20 flex items-center justify-center">
              <Users className="w-5 h-5 text-vogel-gold" />
            </div>
            <div>
              <p className="text-vogel-gray text-sm">Membros Ativos</p>
              <p className="text-xl font-bold text-vogel-white">{stats.membrosAtivos}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-vogel-gray" />
          <input
            type="text"
            placeholder="Buscar posts..."
            className="w-full pl-10 pr-4 py-3 bg-vogel-black border border-vogel-green-dark/30 rounded-lg text-vogel-white placeholder-vogel-gray focus:border-vogel-gold outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-vogel-gray" />
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-vogel-black border border-vogel-green-dark/30 rounded-lg px-4 py-3 text-vogel-white focus:border-vogel-gold outline-none"
          >
            <option value="todos">Todos os posts</option>
            <option value="reportados">Reportados</option>
            <option value="fixados">Fixados</option>
          </select>
        </div>
      </div>

      {/* Reported posts alert */}
      {stats.reportados > 0 && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6 flex items-center gap-3">
          <AlertTriangle className="w-5 h-5 text-red-400" />
          <p className="text-red-400">
            <strong>{stats.reportados} posts</strong> aguardando moderação
          </p>
          <button
            onClick={() => setFilter("reportados")}
            className="ml-auto text-red-400 hover:underline text-sm"
          >
            Ver reportados
          </button>
        </div>
      )}

      {/* Posts list */}
      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className={`bg-vogel-black/50 border rounded-xl p-4 ${
              post.isReported
                ? "border-red-500/50"
                : post.isPinned
                ? "border-vogel-gold/50"
                : "border-vogel-green-dark/30"
            }`}
          >
            {/* Post header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                    post.isAdmin
                      ? "bg-vogel-gold/20 text-vogel-gold"
                      : "bg-vogel-green-dark/30 text-vogel-white"
                  }`}
                >
                  {post.author[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-vogel-white font-medium">{post.author}</p>
                    {post.isAdmin && (
                      <span className="text-xs bg-vogel-gold/20 text-vogel-gold px-2 py-0.5 rounded-full">
                        Admin
                      </span>
                    )}
                    {post.isPinned && <Pin className="w-4 h-4 text-vogel-gold" />}
                    {post.isReported && (
                      <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Flag className="w-3 h-3" />
                        Reportado
                      </span>
                    )}
                  </div>
                  <p className="text-vogel-gray text-sm">{post.time}</p>
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={() => setShowActions(showActions === post.id ? null : post.id)}
                  className="p-2 text-vogel-gray hover:text-vogel-white rounded-lg hover:bg-vogel-green-dark/20"
                >
                  <MoreHorizontal className="w-5 h-5" />
                </button>

                {showActions === post.id && (
                  <div className="absolute right-0 top-full mt-1 w-48 bg-vogel-black border border-vogel-green-dark/30 rounded-lg shadow-xl overflow-hidden z-10">
                    {post.isReported && (
                      <button className="w-full flex items-center gap-2 px-4 py-3 text-green-400 hover:bg-green-400/10 text-sm">
                        <CheckCircle className="w-4 h-4" />
                        Aprovar post
                      </button>
                    )}
                    <button className="w-full flex items-center gap-2 px-4 py-3 text-vogel-gray hover:text-vogel-white hover:bg-vogel-green-dark/20 text-sm">
                      <Pin className="w-4 h-4" />
                      {post.isPinned ? "Desafixar" : "Fixar"} post
                    </button>
                    <button className="w-full flex items-center gap-2 px-4 py-3 text-red-400 hover:bg-red-400/10 text-sm">
                      <Trash2 className="w-4 h-4" />
                      Excluir post
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Post content */}
            <p className="text-vogel-white mb-4">{post.content}</p>

            {/* Post stats */}
            <div className="flex items-center gap-6 pt-3 border-t border-vogel-green-dark/20">
              <span className="flex items-center gap-2 text-vogel-gray text-sm">
                <Heart className="w-4 h-4" />
                {post.likes} curtidas
              </span>
              <span className="flex items-center gap-2 text-vogel-gray text-sm">
                <MessageCircle className="w-4 h-4" />
                {post.comments} comentários
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
