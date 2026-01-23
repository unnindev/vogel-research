"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, ArrowLeft, Shield, Clock, CreditCard } from "lucide-react";

const plans = [
  {
    id: "mensal",
    name: "Mensal",
    price: "97",
    period: "/mês",
    description: "Ideal para conhecer a plataforma",
    features: [
      "Acesso a todas as análises",
      "Carteiras recomendadas",
      "Alertas de mercado",
      "Vídeos exclusivos",
      "Materiais educativos",
      "Comunidade privada",
    ],
  },
  {
    id: "anual",
    name: "Anual",
    price: "77",
    period: "/mês",
    totalPrice: "924",
    description: "Melhor custo-benefício",
    features: [
      "Tudo do plano mensal",
      "2 meses grátis",
      "Acesso antecipado a novidades",
      "Calls exclusivas ao vivo",
      "Suporte prioritário",
      "Bônus: Planilhas premium",
    ],
    savings: "Economize R$ 240",
    popular: true,
  },
];

export default function AssinarPage() {
  const [selectedPlan, setSelectedPlan] = useState("anual");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrar com gateway de pagamento
    console.log("Dados:", formData, "Plano:", selectedPlan);
  };

  return (
    <div className="min-h-screen bg-vogel-black">
      {/* Header simples */}
      <header className="border-b border-vogel-green-dark/20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <Link href="/" className="flex items-center gap-2 w-fit">
            <Image
              src="/logo-transparent.png"
              alt="Vogel Research"
              width={40}
              height={40}
            />
            <span className="font-display text-lg font-semibold text-vogel-white tracking-wide">
              VOGEL RESEARCH
            </span>
          </Link>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        {/* Voltar */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-vogel-gray hover:text-vogel-gold transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o site
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Coluna esquerda - Seleção de plano */}
          <div>
            <h1 className="text-3xl md:text-4xl font-display font-semibold text-vogel-white mb-2">
              Assine a Vogel Research
            </h1>
            <p className="text-vogel-gray mb-8">
              Escolha seu plano e comece a investir com mais inteligência.
            </p>

            {/* Seleção de planos */}
            <div className="space-y-4 mb-8">
              {plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`w-full text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                    selectedPlan === plan.id
                      ? "border-vogel-gold bg-vogel-gold/5"
                      : "border-vogel-green-dark/30 hover:border-vogel-gold/50"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-xl font-semibold text-vogel-white">
                          {plan.name}
                        </h3>
                        {plan.popular && (
                          <span className="text-xs bg-vogel-gold text-vogel-black px-2 py-0.5 rounded-full font-semibold">
                            POPULAR
                          </span>
                        )}
                      </div>
                      <p className="text-vogel-gray text-sm mt-1">
                        {plan.description}
                      </p>
                      {plan.savings && (
                        <p className="text-vogel-gold text-sm font-semibold mt-2">
                          {plan.savings}
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="flex items-baseline">
                        <span className="text-vogel-gray text-sm">R$</span>
                        <span className="text-3xl font-bold text-vogel-white mx-1">
                          {plan.price}
                        </span>
                        <span className="text-vogel-gray text-sm">
                          {plan.period}
                        </span>
                      </div>
                      {plan.totalPrice && (
                        <p className="text-vogel-gray text-xs mt-1">
                          ou R$ {plan.totalPrice} à vista
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Features quando selecionado */}
                  {selectedPlan === plan.id && (
                    <ul className="mt-6 pt-6 border-t border-vogel-green-dark/30 grid grid-cols-2 gap-3">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-center gap-2 text-sm text-vogel-white/80"
                        >
                          <Check className="w-4 h-4 text-vogel-gold flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </button>
              ))}
            </div>

            {/* Garantias */}
            <div className="flex flex-wrap gap-6 text-sm text-vogel-gray">
              <span className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-vogel-gold" />
                Pagamento seguro
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-vogel-gold" />
                Garantia de 7 dias
              </span>
              <span className="flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-vogel-gold" />
                Cancele quando quiser
              </span>
            </div>
          </div>

          {/* Coluna direita - Formulário */}
          <div className="lg:pl-8 lg:border-l border-vogel-green-dark/20">
            <h2 className="text-xl font-semibold text-vogel-white mb-6">
              Seus dados
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="nome"
                  className="block text-sm font-medium text-vogel-gray mb-2"
                >
                  Nome completo
                </label>
                <input
                  type="text"
                  id="nome"
                  required
                  value={formData.nome}
                  onChange={(e) =>
                    setFormData({ ...formData, nome: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-vogel-black border border-vogel-green-dark/30 rounded-lg text-vogel-white placeholder-vogel-gray/50 focus:border-vogel-gold focus:outline-none transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-vogel-gray mb-2"
                >
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-vogel-black border border-vogel-green-dark/30 rounded-lg text-vogel-white placeholder-vogel-gray/50 focus:border-vogel-gold focus:outline-none transition-colors"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="telefone"
                  className="block text-sm font-medium text-vogel-gray mb-2"
                >
                  WhatsApp
                </label>
                <input
                  type="tel"
                  id="telefone"
                  required
                  value={formData.telefone}
                  onChange={(e) =>
                    setFormData({ ...formData, telefone: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-vogel-black border border-vogel-green-dark/30 rounded-lg text-vogel-white placeholder-vogel-gray/50 focus:border-vogel-gold focus:outline-none transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>

              {/* Resumo */}
              <div className="bg-vogel-green-dark/10 rounded-lg p-6 border border-vogel-green-dark/30">
                <h3 className="text-sm font-semibold text-vogel-white mb-4">
                  Resumo do pedido
                </h3>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-vogel-gray">
                    Plano {selectedPlan === "anual" ? "Anual" : "Mensal"}
                  </span>
                  <span className="text-vogel-white">
                    R$ {selectedPlan === "anual" ? "924,00" : "97,00"}
                  </span>
                </div>
                {selectedPlan === "anual" && (
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-vogel-gold">Desconto anual</span>
                    <span className="text-vogel-gold">- R$ 240,00</span>
                  </div>
                )}
                <hr className="border-vogel-green-dark/30 my-4" />
                <div className="flex justify-between">
                  <span className="font-semibold text-vogel-white">Total</span>
                  <span className="font-bold text-vogel-gold text-xl">
                    R$ {selectedPlan === "anual" ? "924,00" : "97,00"}
                  </span>
                </div>
                {selectedPlan === "anual" && (
                  <p className="text-vogel-gray text-xs mt-2">
                    ou 12x de R$ 77,00
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-4 text-lg font-semibold"
              >
                Continuar para pagamento
              </button>

              <p className="text-vogel-gray text-xs text-center">
                Ao continuar, você concorda com nossos{" "}
                <Link href="/termos" className="text-vogel-gold hover:underline">
                  Termos de Uso
                </Link>{" "}
                e{" "}
                <Link
                  href="/privacidade"
                  className="text-vogel-gold hover:underline"
                >
                  Política de Privacidade
                </Link>
                .
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
