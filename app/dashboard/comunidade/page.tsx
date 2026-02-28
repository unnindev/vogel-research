"use client";

import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import {
  MessageCircle,
  Heart,
  Send,
  Image as ImageIcon,
  Smile,
  MoreHorizontal,
  Pin,
  Users,
} from "lucide-react";

const posts = [
  {
    id: 1,
    author: "Bruno Voegel",
    avatar: "B",
    isAdmin: true,
    isPinned: true,
    content:
      "Bem-vindos à comunidade Vogel Research! 🎉 Este é o espaço para trocarmos ideias, tirar dúvidas e discutir oportunidades no mercado americano. Respeitem as regras e aproveitem!",
    time: "Fixado",
    likes: 156,
    comments: 42,
  },
  {
    id: 2,
    author: "Carlos Silva",
    avatar: "C",
    isAdmin: false,
    isPinned: false,
    content:
      "Pessoal, alguém mais está de olho na $PLTR? Os resultados vieram muito bons e a empresa está crescendo bem no segmento de IA.",
    time: "Há 30 min",
    likes: 24,
    comments: 18,
  },
  {
    id: 3,
    author: "Ana Costa",
    avatar: "A",
    isAdmin: false,
    isPinned: false,
    content:
      "Acabei de assistir a live do Bruno sobre dividendos. Muito esclarecedor! Já adicionei JNJ e PG na minha watchlist.",
    time: "Há 2 horas",
    likes: 45,
    comments: 8,
  },
  {
    id: 4,
    author: "Bruno Voegel",
    avatar: "B",
    isAdmin: true,
    isPinned: false,
    content:
      "Lembrete: amanhã às 19h teremos live sobre os resultados da NVDA! Preparem suas perguntas. 📊",
    time: "Há 5 horas",
    likes: 89,
    comments: 31,
  },
  {
    id: 5,
    author: "Pedro Mendes",
    avatar: "P",
    isAdmin: false,
    isPinned: false,
    content:
      "Dúvida sobre IR: se eu vendi ações com lucro mas o total de vendas foi menor que R$ 35 mil no mês, preciso pagar imposto?",
    time: "Há 1 dia",
    likes: 12,
    comments: 15,
  },
];

const membrosOnline = [
  { name: "Bruno Voegel", isAdmin: true },
  { name: "Carlos Silva", isAdmin: false },
  { name: "Maria Santos", isAdmin: false },
  { name: "João Pedro", isAdmin: false },
  { name: "Ana Costa", isAdmin: false },
];

export default function ComunidadePage() {
  const [newPost, setNewPost] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implementar criação de post
    console.log("Novo post:", newPost);
    setNewPost("");
  };

  return (
    <>
      <DashboardHeader title="Comunidade" />

      <div className="p-6">
        <div className="flex gap-6">
          {/* Main content */}
          <div className="flex-1">
            {/* Create post */}
            <div className="bg-gray-50 dark:bg-vogel-black/50 border border-gray-200 dark:border-vogel-green-dark/30 rounded-xl p-4 mb-6">
              <form onSubmit={handleSubmit}>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-vogel-gold/20 flex items-center justify-center text-vogel-gold font-semibold flex-shrink-0">
                    U
                  </div>
                  <div className="flex-1">
                    <textarea
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                      placeholder="Compartilhe algo com a comunidade..."
                      className="w-full bg-transparent border-none outline-none text-gray-900 dark:text-vogel-white placeholder-gray-500 dark:placeholder-vogel-gray resize-none min-h-[80px]"
                    />
                    <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-vogel-green-dark/20">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          className="p-2 text-gray-600 dark:text-vogel-gray hover:text-vogel-gold hover:bg-gray-100 dark:hover:bg-vogel-green-dark/20 rounded-lg transition-colors"
                        >
                          <ImageIcon className="w-5 h-5" />
                        </button>
                        <button
                          type="button"
                          className="p-2 text-gray-600 dark:text-vogel-gray hover:text-vogel-gold hover:bg-gray-100 dark:hover:bg-vogel-green-dark/20 rounded-lg transition-colors"
                        >
                          <Smile className="w-5 h-5" />
                        </button>
                      </div>
                      <button
                        type="submit"
                        disabled={!newPost.trim()}
                        className="btn-primary py-2 px-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                      >
                        <Send className="w-4 h-4" />
                        Publicar
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* Posts */}
            <div className="space-y-4">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className={`bg-gray-50 dark:bg-vogel-black/50 border rounded-xl p-4 ${
                    post.isPinned
                      ? "border-vogel-gold/50"
                      : "border-gray-200 dark:border-vogel-green-dark/30"
                  }`}
                >
                  {/* Post header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                          post.isAdmin
                            ? "bg-vogel-gold/20 text-vogel-gold"
                            : "bg-gray-200 dark:bg-vogel-green-dark/30 text-gray-900 dark:text-vogel-white"
                        }`}
                      >
                        {post.avatar}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="text-gray-900 dark:text-vogel-white font-medium">
                            {post.author}
                          </p>
                          {post.isAdmin && (
                            <span className="text-xs bg-vogel-gold/20 text-vogel-gold px-2 py-0.5 rounded-full">
                              Admin
                            </span>
                          )}
                          {post.isPinned && (
                            <Pin className="w-4 h-4 text-vogel-gold" />
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-vogel-gray text-sm">{post.time}</p>
                      </div>
                    </div>
                    <button className="p-2 text-gray-600 dark:text-vogel-gray hover:text-gray-900 dark:hover:text-vogel-white rounded-lg hover:bg-gray-100 dark:hover:bg-vogel-green-dark/20">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Post content */}
                  <p className="text-gray-900 dark:text-vogel-white mb-4">{post.content}</p>

                  {/* Post actions */}
                  <div className="flex items-center gap-6 pt-3 border-t border-gray-200 dark:border-vogel-green-dark/20">
                    <button className="flex items-center gap-2 text-gray-600 dark:text-vogel-gray hover:text-red-400 transition-colors">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-gray-600 dark:text-vogel-gray hover:text-vogel-gold transition-colors">
                      <MessageCircle className="w-5 h-5" />
                      <span className="text-sm">{post.comments} comentários</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="hidden lg:block w-80">
            {/* Online members */}
            <div className="bg-gray-50 dark:bg-vogel-black/50 border border-gray-200 dark:border-vogel-green-dark/30 rounded-xl p-4 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <Users className="w-5 h-5 text-vogel-gold" />
                <h3 className="font-semibold text-gray-900 dark:text-vogel-white">
                  Membros Online
                </h3>
                <span className="ml-auto text-gray-600 dark:text-vogel-gray text-sm">
                  {membrosOnline.length}
                </span>
              </div>

              <div className="space-y-3">
                {membrosOnline.map((membro, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="relative">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                          membro.isAdmin
                            ? "bg-vogel-gold/20 text-vogel-gold"
                            : "bg-gray-200 dark:bg-vogel-green-dark/30 text-gray-900 dark:text-vogel-white"
                        }`}
                      >
                        {membro.name[0]}
                      </div>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-vogel-black"></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-900 dark:text-vogel-white text-sm">
                        {membro.name}
                      </span>
                      {membro.isAdmin && (
                        <span className="text-xs text-vogel-gold">Admin</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-vogel-green-dark/20">
                <p className="text-gray-600 dark:text-vogel-gray text-xs">
                  Total de membros: <strong className="text-gray-900 dark:text-vogel-white">1,247</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
