"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  MoreHorizontal,
  Mail,
  Ban,
  Trash2,
  Eye,
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  UserPlus,
  Download,
} from "lucide-react";

type UserStatus = "ativo" | "cancelado" | "inadimplente" | "trial";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  plan: string;
  status: UserStatus;
  lastPayment: string;
  nextPayment: string;
  memberSince: string;
  totalPaid: string;
}

const usuarios: User[] = [
  {
    id: 1,
    name: "Carlos Silva",
    email: "carlos@email.com",
    phone: "(11) 99999-1111",
    plan: "Anual",
    status: "ativo",
    lastPayment: "20 Jan 2025",
    nextPayment: "20 Jan 2026",
    memberSince: "Jan 2024",
    totalPaid: "R$ 924,00",
  },
  {
    id: 2,
    name: "Ana Costa",
    email: "ana@email.com",
    phone: "(11) 99999-2222",
    plan: "Mensal",
    status: "ativo",
    lastPayment: "15 Jan 2025",
    nextPayment: "15 Fev 2025",
    memberSince: "Dez 2024",
    totalPaid: "R$ 194,00",
  },
  {
    id: 3,
    name: "Pedro Mendes",
    email: "pedro@email.com",
    phone: "(11) 99999-3333",
    plan: "Anual",
    status: "inadimplente",
    lastPayment: "10 Dez 2024",
    nextPayment: "Vencido",
    memberSince: "Dez 2023",
    totalPaid: "R$ 924,00",
  },
  {
    id: 4,
    name: "Maria Santos",
    email: "maria@email.com",
    phone: "(11) 99999-4444",
    plan: "Mensal",
    status: "cancelado",
    lastPayment: "01 Jan 2025",
    nextPayment: "-",
    memberSince: "Out 2024",
    totalPaid: "R$ 291,00",
  },
  {
    id: 5,
    name: "João Lima",
    email: "joao@email.com",
    phone: "(11) 99999-5555",
    plan: "Trial",
    status: "trial",
    lastPayment: "-",
    nextPayment: "27 Jan 2025",
    memberSince: "Jan 2025",
    totalPaid: "R$ 0,00",
  },
  {
    id: 6,
    name: "Fernanda Oliveira",
    email: "fernanda@email.com",
    phone: "(11) 99999-6666",
    plan: "Anual",
    status: "ativo",
    lastPayment: "05 Jan 2025",
    nextPayment: "05 Jan 2026",
    memberSince: "Jan 2025",
    totalPaid: "R$ 924,00",
  },
  {
    id: 7,
    name: "Ricardo Souza",
    email: "ricardo@email.com",
    phone: "(11) 99999-7777",
    plan: "Mensal",
    status: "ativo",
    lastPayment: "18 Jan 2025",
    nextPayment: "18 Fev 2025",
    memberSince: "Nov 2024",
    totalPaid: "R$ 291,00",
  },
];

const statusConfig = {
  ativo: { label: "Ativo", color: "bg-green-500/20 text-green-400", icon: CheckCircle },
  cancelado: { label: "Cancelado", color: "bg-red-500/20 text-red-400", icon: XCircle },
  inadimplente: { label: "Inadimplente", color: "bg-yellow-500/20 text-yellow-400", icon: AlertCircle },
  trial: { label: "Trial", color: "bg-blue-500/20 text-blue-400", icon: AlertCircle },
};

export default function UsuariosPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("todos");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showActions, setShowActions] = useState<number | null>(null);

  const filteredUsers = usuarios.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "todos" || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const stats = {
    total: usuarios.length,
    ativos: usuarios.filter((u) => u.status === "ativo").length,
    cancelados: usuarios.filter((u) => u.status === "cancelado").length,
    inadimplentes: usuarios.filter((u) => u.status === "inadimplente").length,
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-display font-semibold text-vogel-white mb-2">
            Usuários
          </h1>
          <p className="text-vogel-gray">
            Gerencie os usuários e assinaturas da plataforma
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-vogel-green-dark/30 rounded-lg text-vogel-gray hover:text-vogel-white hover:border-vogel-gold/50 transition-colors">
            <Download className="w-4 h-4" />
            Exportar
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-vogel-gold text-vogel-black rounded-lg font-medium hover:bg-vogel-gold-light transition-colors">
            <UserPlus className="w-4 h-4" />
            Adicionar
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-4">
          <p className="text-vogel-gray text-sm">Total</p>
          <p className="text-2xl font-bold text-vogel-white">{stats.total}</p>
        </div>
        <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-4">
          <p className="text-vogel-gray text-sm">Ativos</p>
          <p className="text-2xl font-bold text-green-400">{stats.ativos}</p>
        </div>
        <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-4">
          <p className="text-vogel-gray text-sm">Inadimplentes</p>
          <p className="text-2xl font-bold text-yellow-400">{stats.inadimplentes}</p>
        </div>
        <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl p-4">
          <p className="text-vogel-gray text-sm">Cancelados</p>
          <p className="text-2xl font-bold text-red-400">{stats.cancelados}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-vogel-gray" />
          <input
            type="text"
            placeholder="Buscar por nome ou e-mail..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-vogel-black border border-vogel-green-dark/30 rounded-lg text-vogel-white placeholder-vogel-gray focus:border-vogel-gold outline-none"
          />
        </div>
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-vogel-gray" />
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-vogel-black border border-vogel-green-dark/30 rounded-lg px-4 py-3 text-vogel-white focus:border-vogel-gold outline-none"
          >
            <option value="todos">Todos os status</option>
            <option value="ativo">Ativos</option>
            <option value="inadimplente">Inadimplentes</option>
            <option value="cancelado">Cancelados</option>
            <option value="trial">Trial</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-vogel-green-dark/20">
                <th className="text-left text-vogel-gray text-sm font-medium px-6 py-4">
                  Usuário
                </th>
                <th className="text-left text-vogel-gray text-sm font-medium px-6 py-4">
                  Plano
                </th>
                <th className="text-left text-vogel-gray text-sm font-medium px-6 py-4">
                  Status
                </th>
                <th className="text-left text-vogel-gray text-sm font-medium px-6 py-4">
                  Último Pagamento
                </th>
                <th className="text-left text-vogel-gray text-sm font-medium px-6 py-4">
                  Próximo Pagamento
                </th>
                <th className="text-left text-vogel-gray text-sm font-medium px-6 py-4">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => {
                const status = statusConfig[user.status];
                return (
                  <tr
                    key={user.id}
                    className="border-b border-vogel-green-dark/10 hover:bg-vogel-green-dark/10"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-vogel-green-dark/30 flex items-center justify-center text-vogel-white font-semibold">
                          {user.name[0]}
                        </div>
                        <div>
                          <p className="text-vogel-white font-medium">{user.name}</p>
                          <p className="text-vogel-gray text-sm">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-vogel-white">{user.plan}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${status.color}`}
                      >
                        <status.icon className="w-3 h-3" />
                        {status.label}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-vogel-gray">{user.lastPayment}</td>
                    <td className="px-6 py-4 text-vogel-gray">{user.nextPayment}</td>
                    <td className="px-6 py-4">
                      <div className="relative">
                        <button
                          onClick={() =>
                            setShowActions(showActions === user.id ? null : user.id)
                          }
                          className="p-2 text-vogel-gray hover:text-vogel-white rounded-lg hover:bg-vogel-green-dark/20"
                        >
                          <MoreHorizontal className="w-5 h-5" />
                        </button>

                        {showActions === user.id && (
                          <div className="absolute right-0 top-full mt-1 w-48 bg-vogel-black border border-vogel-green-dark/30 rounded-lg shadow-xl overflow-hidden z-10">
                            <button
                              onClick={() => {
                                setSelectedUser(user);
                                setShowActions(null);
                              }}
                              className="w-full flex items-center gap-2 px-4 py-3 text-vogel-gray hover:text-vogel-white hover:bg-vogel-green-dark/20 text-sm"
                            >
                              <Eye className="w-4 h-4" />
                              Ver detalhes
                            </button>
                            <button className="w-full flex items-center gap-2 px-4 py-3 text-vogel-gray hover:text-vogel-white hover:bg-vogel-green-dark/20 text-sm">
                              <Mail className="w-4 h-4" />
                              Enviar e-mail
                            </button>
                            <button className="w-full flex items-center gap-2 px-4 py-3 text-yellow-400 hover:bg-yellow-400/10 text-sm">
                              <Ban className="w-4 h-4" />
                              Bloquear usuário
                            </button>
                            <button className="w-full flex items-center gap-2 px-4 py-3 text-red-400 hover:bg-red-400/10 text-sm">
                              <Trash2 className="w-4 h-4" />
                              Excluir usuário
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

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-vogel-green-dark/20">
          <p className="text-vogel-gray text-sm">
            Mostrando {filteredUsers.length} de {usuarios.length} usuários
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 text-vogel-gray hover:text-vogel-white rounded-lg hover:bg-vogel-green-dark/20 disabled:opacity-50">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="px-3 py-1 bg-vogel-gold text-vogel-black rounded font-medium text-sm">
              1
            </button>
            <button className="px-3 py-1 text-vogel-gray hover:text-vogel-white rounded text-sm">
              2
            </button>
            <button className="px-3 py-1 text-vogel-gray hover:text-vogel-white rounded text-sm">
              3
            </button>
            <button className="p-2 text-vogel-gray hover:text-vogel-white rounded-lg hover:bg-vogel-green-dark/20">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* User detail modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-vogel-black border border-vogel-green-dark/30 rounded-2xl w-full max-w-lg mx-4">
            <div className="p-6 border-b border-vogel-green-dark/20 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-vogel-white">
                Detalhes do Usuário
              </h2>
              <button
                onClick={() => setSelectedUser(null)}
                className="text-vogel-gray hover:text-vogel-white"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-vogel-green-dark/30 flex items-center justify-center text-vogel-white text-2xl font-semibold">
                  {selectedUser.name[0]}
                </div>
                <div>
                  <p className="text-vogel-white text-lg font-semibold">
                    {selectedUser.name}
                  </p>
                  <p className="text-vogel-gray">{selectedUser.email}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <p className="text-vogel-gray text-sm">Telefone</p>
                  <p className="text-vogel-white">{selectedUser.phone}</p>
                </div>
                <div>
                  <p className="text-vogel-gray text-sm">Plano</p>
                  <p className="text-vogel-white">{selectedUser.plan}</p>
                </div>
                <div>
                  <p className="text-vogel-gray text-sm">Membro desde</p>
                  <p className="text-vogel-white">{selectedUser.memberSince}</p>
                </div>
                <div>
                  <p className="text-vogel-gray text-sm">Total pago</p>
                  <p className="text-vogel-white">{selectedUser.totalPaid}</p>
                </div>
                <div>
                  <p className="text-vogel-gray text-sm">Último pagamento</p>
                  <p className="text-vogel-white">{selectedUser.lastPayment}</p>
                </div>
                <div>
                  <p className="text-vogel-gray text-sm">Próximo pagamento</p>
                  <p className="text-vogel-white">{selectedUser.nextPayment}</p>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button className="flex-1 py-2 border border-vogel-gold text-vogel-gold rounded-lg hover:bg-vogel-gold/10 transition-colors">
                  Enviar e-mail
                </button>
                <button className="flex-1 py-2 bg-vogel-gold text-vogel-black rounded-lg font-medium hover:bg-vogel-gold-light transition-colors">
                  Editar usuário
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
