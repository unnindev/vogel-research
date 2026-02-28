"use client";

import { useState } from "react";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import {
  User,
  Mail,
  Phone,
  CreditCard,
  Calendar,
  Shield,
  Bell,
  ChevronRight,
  AlertCircle,
  CheckCircle,
} from "lucide-react";

export default function ContaPage() {
  const [activeTab, setActiveTab] = useState("perfil");

  // Dados mock do usuário
  const usuario = {
    nome: "João Silva",
    email: "joao@email.com",
    telefone: "(11) 99999-9999",
    plano: "Anual",
    status: "Ativo",
    proximaCobranca: "20 Fev 2025",
    valorMensal: "R$ 77,00",
    membroDesde: "Janeiro 2024",
  };

  return (
    <>
      <DashboardHeader title="Minha Conta" />

      <div className="p-6">
        <div className="max-w-4xl">
          {/* Tabs */}
          <div className="flex gap-1 mb-6 border-b border-gray-200 dark:border-vogel-green-dark/20">
            {[
              { id: "perfil", label: "Perfil" },
              { id: "assinatura", label: "Assinatura" },
              { id: "notificacoes", label: "Notificações" },
              { id: "seguranca", label: "Segurança" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 font-medium text-sm transition-colors relative ${
                  activeTab === tab.id
                    ? "text-vogel-gold"
                    : "text-gray-600 dark:text-vogel-gray hover:text-gray-900 dark:hover:text-vogel-white"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-vogel-gold"></span>
                )}
              </button>
            ))}
          </div>

          {/* Perfil */}
          {activeTab === "perfil" && (
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-vogel-black/50 border border-gray-200 dark:border-vogel-green-dark/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-vogel-white mb-6">
                  Informações Pessoais
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-600 dark:text-vogel-gray text-sm mb-2">
                      Nome completo
                    </label>
                    <div className="flex items-center gap-3">
                      <User className="w-5 h-5 text-gray-600 dark:text-vogel-gray" />
                      <input
                        type="text"
                        defaultValue={usuario.nome}
                        className="flex-1 bg-white dark:bg-vogel-black border border-gray-200 dark:border-vogel-green-dark/30 rounded-lg px-4 py-3 text-gray-900 dark:text-vogel-white focus:border-vogel-gold outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-600 dark:text-vogel-gray text-sm mb-2">
                      E-mail
                    </label>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gray-600 dark:text-vogel-gray" />
                      <input
                        type="email"
                        defaultValue={usuario.email}
                        className="flex-1 bg-white dark:bg-vogel-black border border-gray-200 dark:border-vogel-green-dark/30 rounded-lg px-4 py-3 text-gray-900 dark:text-vogel-white focus:border-vogel-gold outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-600 dark:text-vogel-gray text-sm mb-2">
                      Telefone
                    </label>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-600 dark:text-vogel-gray" />
                      <input
                        type="tel"
                        defaultValue={usuario.telefone}
                        className="flex-1 bg-white dark:bg-vogel-black border border-gray-200 dark:border-vogel-green-dark/30 rounded-lg px-4 py-3 text-gray-900 dark:text-vogel-white focus:border-vogel-gold outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button className="btn-primary mt-6">Salvar alterações</button>
              </div>
            </div>
          )}

          {/* Assinatura */}
          {activeTab === "assinatura" && (
            <div className="space-y-6">
              {/* Status atual */}
              <div className="bg-gray-50 dark:bg-vogel-black/50 border border-gray-200 dark:border-vogel-green-dark/30 rounded-xl p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-vogel-white mb-1">
                      Plano {usuario.plano}
                    </h3>
                    <p className="text-gray-600 dark:text-vogel-gray text-sm">
                      Membro desde {usuario.membroDesde}
                    </p>
                  </div>
                  <span className="flex items-center gap-1 text-green-400 text-sm font-medium bg-green-400/10 px-3 py-1 rounded-full">
                    <CheckCircle className="w-4 h-4" />
                    {usuario.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-100 dark:bg-vogel-green-dark/10 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-vogel-gray text-sm mb-1">
                      <CreditCard className="w-4 h-4" />
                      Valor
                    </div>
                    <p className="text-gray-900 dark:text-vogel-white font-semibold">
                      {usuario.valorMensal}
                    </p>
                  </div>

                  <div className="p-4 bg-gray-100 dark:bg-vogel-green-dark/10 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-vogel-gray text-sm mb-1">
                      <Calendar className="w-4 h-4" />
                      Próxima cobrança
                    </div>
                    <p className="text-gray-900 dark:text-vogel-white font-semibold">
                      {usuario.proximaCobranca}
                    </p>
                  </div>

                  <div className="p-4 bg-gray-100 dark:bg-vogel-green-dark/10 rounded-lg">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-vogel-gray text-sm mb-1">
                      <Shield className="w-4 h-4" />
                      Tipo de plano
                    </div>
                    <p className="text-gray-900 dark:text-vogel-white font-semibold">
                      {usuario.plano}
                    </p>
                  </div>
                </div>
              </div>

              {/* Ações */}
              <div className="bg-gray-50 dark:bg-vogel-black/50 border border-gray-200 dark:border-vogel-green-dark/30 rounded-xl overflow-hidden">
                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-100 dark:hover:bg-vogel-green-dark/10 transition-colors border-b border-gray-200 dark:border-vogel-green-dark/20">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-5 h-5 text-gray-600 dark:text-vogel-gray" />
                    <span className="text-gray-900 dark:text-vogel-white">
                      Alterar forma de pagamento
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-vogel-gray" />
                </button>

                <button className="w-full flex items-center justify-between p-4 hover:bg-gray-100 dark:hover:bg-vogel-green-dark/10 transition-colors border-b border-gray-200 dark:border-vogel-green-dark/20">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-600 dark:text-vogel-gray" />
                    <span className="text-gray-900 dark:text-vogel-white">
                      Ver histórico de pagamentos
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-600 dark:text-vogel-gray" />
                </button>

                <button className="w-full flex items-center justify-between p-4 hover:bg-red-400/10 transition-colors text-red-400">
                  <div className="flex items-center gap-3">
                    <AlertCircle className="w-5 h-5" />
                    <span>Cancelar assinatura</span>
                  </div>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Notificações */}
          {activeTab === "notificacoes" && (
            <div className="bg-gray-50 dark:bg-vogel-black/50 border border-gray-200 dark:border-vogel-green-dark/30 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-vogel-white mb-6">
                Preferências de Notificação
              </h3>

              <div className="space-y-4">
                {[
                  {
                    title: "Novas análises",
                    desc: "Receba alertas quando novas análises forem publicadas",
                  },
                  {
                    title: "Atualizações de carteira",
                    desc: "Seja notificado sobre mudanças nas carteiras recomendadas",
                  },
                  {
                    title: "Alertas de mercado",
                    desc: "Receba alertas sobre movimentações importantes",
                  },
                  {
                    title: "Lives e eventos",
                    desc: "Lembretes sobre lives e eventos ao vivo",
                  },
                  {
                    title: "Comunidade",
                    desc: "Respostas e menções na comunidade",
                  },
                  {
                    title: "E-mail marketing",
                    desc: "Novidades e promoções por e-mail",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 bg-gray-100 dark:bg-vogel-green-dark/10 rounded-lg"
                  >
                    <div>
                      <p className="text-gray-900 dark:text-vogel-white font-medium">{item.title}</p>
                      <p className="text-gray-600 dark:text-vogel-gray text-sm">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        defaultChecked={index < 4}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-300 dark:bg-vogel-green-dark/50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-vogel-gold"></div>
                    </label>
                  </div>
                ))}
              </div>

              <button className="btn-primary mt-6">Salvar preferências</button>
            </div>
          )}

          {/* Segurança */}
          {activeTab === "seguranca" && (
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-vogel-black/50 border border-gray-200 dark:border-vogel-green-dark/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-vogel-white mb-6">
                  Alterar Senha
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-600 dark:text-vogel-gray text-sm mb-2">
                      Senha atual
                    </label>
                    <input
                      type="password"
                      className="w-full bg-white dark:bg-vogel-black border border-gray-200 dark:border-vogel-green-dark/30 rounded-lg px-4 py-3 text-gray-900 dark:text-vogel-white focus:border-vogel-gold outline-none"
                      placeholder="••••••••"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 dark:text-vogel-gray text-sm mb-2">
                      Nova senha
                    </label>
                    <input
                      type="password"
                      className="w-full bg-white dark:bg-vogel-black border border-gray-200 dark:border-vogel-green-dark/30 rounded-lg px-4 py-3 text-gray-900 dark:text-vogel-white focus:border-vogel-gold outline-none"
                      placeholder="••••••••"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-600 dark:text-vogel-gray text-sm mb-2">
                      Confirmar nova senha
                    </label>
                    <input
                      type="password"
                      className="w-full bg-white dark:bg-vogel-black border border-gray-200 dark:border-vogel-green-dark/30 rounded-lg px-4 py-3 text-gray-900 dark:text-vogel-white focus:border-vogel-gold outline-none"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <button className="btn-primary mt-6">Alterar senha</button>
              </div>

              <div className="bg-gray-50 dark:bg-vogel-black/50 border border-gray-200 dark:border-vogel-green-dark/30 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-vogel-white mb-2">
                  Excluir Conta
                </h3>
                <p className="text-gray-600 dark:text-vogel-gray text-sm mb-4">
                  Ao excluir sua conta, todos os seus dados serão permanentemente
                  removidos. Esta ação não pode ser desfeita.
                </p>
                <button className="px-4 py-2 border border-red-400 text-red-400 rounded-lg hover:bg-red-400/10 transition-colors">
                  Excluir minha conta
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
