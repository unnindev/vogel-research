"use client";

import { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  GripVertical,
  FileText,
  Video,
  Bell,
  BookOpen,
  Calendar,
  MessageCircle,
} from "lucide-react";

type ContentType = "analise" | "video" | "alerta" | "tutorial";

interface Content {
  id: number;
  title: string;
  type: ContentType;
  status: "publicado" | "rascunho" | "agendado";
  date: string;
  views: number;
  comments: number;
  author: string;
}

const conteudos: Content[] = [
  {
    id: 1,
    title: "Análise: Apple (AAPL) - Janeiro 2025",
    type: "analise",
    status: "publicado",
    date: "20 Jan 2025",
    views: 342,
    comments: 28,
    author: "Bruno Voegel",
  },
  {
    id: 2,
    title: "Live: Revisão de Mercado Semanal",
    type: "video",
    status: "publicado",
    date: "19 Jan 2025",
    views: 518,
    comments: 45,
    author: "Bruno Voegel",
  },
  {
    id: 3,
    title: "Alerta: Resultados NVDA acima do esperado",
    type: "alerta",
    status: "publicado",
    date: "18 Jan 2025",
    views: 721,
    comments: 62,
    author: "Bruno Voegel",
  },
  {
    id: 4,
    title: "Guia: Declaração de IR 2025",
    type: "tutorial",
    status: "publicado",
    date: "15 Jan 2025",
    views: 234,
    comments: 15,
    author: "Bruno Voegel",
  },
  {
    id: 5,
    title: "Análise: Microsoft (MSFT)",
    type: "analise",
    status: "rascunho",
    date: "-",
    views: 0,
    comments: 0,
    author: "Bruno Voegel",
  },
  {
    id: 6,
    title: "Live: Resultados Q4 das Big Techs",
    type: "video",
    status: "agendado",
    date: "25 Jan 2025",
    views: 0,
    comments: 0,
    author: "Bruno Voegel",
  },
];

const typeConfig = {
  analise: { label: "Análise", icon: FileText, color: "bg-blue-500/20 text-blue-400" },
  video: { label: "Vídeo", icon: Video, color: "bg-purple-500/20 text-purple-400" },
  alerta: { label: "Alerta", icon: Bell, color: "bg-vogel-gold/20 text-vogel-gold" },
  tutorial: { label: "Tutorial", icon: BookOpen, color: "bg-green-500/20 text-green-400" },
};

const statusConfig = {
  publicado: { label: "Publicado", color: "text-green-400" },
  rascunho: { label: "Rascunho", color: "text-vogel-gray" },
  agendado: { label: "Agendado", color: "text-blue-400" },
};

export default function ConteudosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("todos");
  const [showActions, setShowActions] = useState<number | null>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);

  const filteredContent = conteudos.filter((content) => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === "todos" || content.type === typeFilter;
    return matchesSearch && matchesType;
  });

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-display font-semibold text-vogel-white mb-2">
            Conteúdos
          </h1>
          <p className="text-vogel-gray">
            Crie e gerencie análises, vídeos, alertas e tutoriais
          </p>
        </div>
        <button
          onClick={() => setShowCreateModal(true)}
          className="flex items-center gap-2 px-4 py-2 bg-vogel-gold text-vogel-black rounded-lg font-medium hover:bg-vogel-gold-light transition-colors"
        >
          <Plus className="w-4 h-4" />
          Novo Conteúdo
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {Object.entries(typeConfig).map(([key, config]) => {
          const count = conteudos.filter((c) => c.type === key).length;
          return (
            <div
              key={key}
              className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-4"
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg ${config.color} flex items-center justify-center`}>
                  <config.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-vogel-gray text-sm">{config.label}s</p>
                  <p className="text-xl font-bold text-vogel-white">{count}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-vogel-gray" />
          <input
            type="text"
            placeholder="Buscar conteúdos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-vogel-black border border-vogel-green-dark/30 rounded-lg text-vogel-white placeholder-vogel-gray focus:border-vogel-gold outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-vogel-gray" />
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="bg-vogel-black border border-vogel-green-dark/30 rounded-lg px-4 py-3 text-vogel-white focus:border-vogel-gold outline-none"
          >
            <option value="todos">Todos os tipos</option>
            <option value="analise">Análises</option>
            <option value="video">Vídeos</option>
            <option value="alerta">Alertas</option>
            <option value="tutorial">Tutoriais</option>
          </select>
        </div>
      </div>

      {/* Content list */}
      <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-vogel-green-dark/20">
                <th className="w-10"></th>
                <th className="text-left text-vogel-gray text-sm font-medium px-4 py-4">
                  Título
                </th>
                <th className="text-left text-vogel-gray text-sm font-medium px-4 py-4">
                  Tipo
                </th>
                <th className="text-left text-vogel-gray text-sm font-medium px-4 py-4">
                  Status
                </th>
                <th className="text-left text-vogel-gray text-sm font-medium px-4 py-4">
                  Data
                </th>
                <th className="text-left text-vogel-gray text-sm font-medium px-4 py-4">
                  Métricas
                </th>
                <th className="text-left text-vogel-gray text-sm font-medium px-4 py-4">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredContent.map((content) => {
                const type = typeConfig[content.type];
                const status = statusConfig[content.status];
                return (
                  <tr
                    key={content.id}
                    className="border-b border-vogel-green-dark/10 hover:bg-vogel-green-dark/10 group"
                  >
                    <td className="px-2">
                      <button className="p-2 text-vogel-gray/30 hover:text-vogel-gray cursor-grab opacity-0 group-hover:opacity-100 transition-opacity">
                        <GripVertical className="w-4 h-4" />
                      </button>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-vogel-white font-medium hover:text-vogel-gold cursor-pointer">
                        {content.title}
                      </p>
                      <p className="text-vogel-gray text-sm">{content.author}</p>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${type.color}`}
                      >
                        <type.icon className="w-3 h-3" />
                        {type.label}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`text-sm font-medium ${status.color}`}>
                        {status.label}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-vogel-gray">
                      {content.status === "agendado" ? (
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {content.date}
                        </span>
                      ) : (
                        content.date
                      )}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-4 text-vogel-gray text-sm">
                        <span className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {content.views}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {content.comments}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="relative">
                        <button
                          onClick={() =>
                            setShowActions(showActions === content.id ? null : content.id)
                          }
                          className="p-2 text-vogel-gray hover:text-vogel-white rounded-lg hover:bg-vogel-green-dark/20"
                        >
                          <MoreHorizontal className="w-5 h-5" />
                        </button>

                        {showActions === content.id && (
                          <div className="absolute right-0 top-full mt-1 w-44 bg-vogel-black border border-vogel-green-dark/30 rounded-lg shadow-xl overflow-hidden z-10">
                            <button className="w-full flex items-center gap-2 px-4 py-3 text-vogel-gray hover:text-vogel-white hover:bg-vogel-green-dark/20 text-sm">
                              <Edit className="w-4 h-4" />
                              Editar
                            </button>
                            {content.status === "publicado" ? (
                              <button className="w-full flex items-center gap-2 px-4 py-3 text-vogel-gray hover:text-vogel-white hover:bg-vogel-green-dark/20 text-sm">
                                <EyeOff className="w-4 h-4" />
                                Despublicar
                              </button>
                            ) : (
                              <button className="w-full flex items-center gap-2 px-4 py-3 text-vogel-gray hover:text-vogel-white hover:bg-vogel-green-dark/20 text-sm">
                                <Eye className="w-4 h-4" />
                                Publicar
                              </button>
                            )}
                            <button className="w-full flex items-center gap-2 px-4 py-3 text-red-400 hover:bg-red-400/10 text-sm">
                              <Trash2 className="w-4 h-4" />
                              Excluir
                            </button>
                          </div>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Create modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-vogel-black border border-vogel-green-dark/30 rounded-2xl w-full max-w-lg mx-4">
            <div className="p-6 border-b border-vogel-green-dark/20 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-vogel-white">
                Novo Conteúdo
              </h2>
              <button
                onClick={() => setShowCreateModal(false)}
                className="text-vogel-gray hover:text-vogel-white"
              >
                ✕
              </button>
            </div>
            <div className="p-6">
              <p className="text-vogel-gray mb-6">
                Selecione o tipo de conteúdo que deseja criar:
              </p>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(typeConfig).map(([key, config]) => (
                  <button
                    key={key}
                    className="flex items-center gap-3 p-4 border border-vogel-green-dark/30 rounded-xl hover:border-vogel-gold/50 hover:bg-vogel-green-dark/10 transition-colors"
                  >
                    <div className={`w-12 h-12 rounded-xl ${config.color} flex items-center justify-center`}>
                      <config.icon className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <p className="text-vogel-white font-medium">{config.label}</p>
                      <p className="text-vogel-gray text-xs">
                        {key === "analise" && "Análise de empresa"}
                        {key === "video" && "Vídeo ou live"}
                        {key === "alerta" && "Alerta de mercado"}
                        {key === "tutorial" && "Guia educativo"}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
