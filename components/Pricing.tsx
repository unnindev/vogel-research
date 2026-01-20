"use client";

import { Check } from "lucide-react";
import Link from "next/link";

const plans = [
  {
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
    cta: "Começar Agora",
    popular: false,
  },
  {
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
    cta: "Assinar Anual",
    popular: true,
    savings: "Economize R$ 240",
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="section bg-vogel-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-vogel-gold/5 blur-[200px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-vogel-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Planos
          </span>
          <h2 className="section-title text-vogel-white mb-6">
            Escolha o plano ideal{" "}
            <span className="text-gradient">para você</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Invista em conhecimento e tenha acesso às melhores análises do
            mercado americano.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-b from-vogel-green-dark/30 to-vogel-black border-2 border-vogel-gold scale-105 shadow-2xl shadow-vogel-gold/10"
                  : "bg-vogel-black/50 border border-vogel-green-dark/30 hover:border-vogel-gold/30"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-vogel-gold text-vogel-black text-xs font-bold px-4 py-1.5 rounded-full">
                    MAIS POPULAR
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-display font-semibold text-vogel-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-vogel-gray text-sm mb-6">{plan.description}</p>

                <div className="flex items-baseline justify-center">
                  <span className="text-vogel-gray text-xl">R$</span>
                  <span className="text-5xl font-display font-bold text-vogel-white mx-1">
                    {plan.price}
                  </span>
                  <span className="text-vogel-gray">{plan.period}</span>
                </div>

                {plan.totalPrice && (
                  <p className="text-vogel-gray text-sm mt-2">
                    ou R$ {plan.totalPrice} à vista
                  </p>
                )}

                {plan.savings && (
                  <span className="inline-block mt-3 text-vogel-gold text-sm font-semibold">
                    {plan.savings}
                  </span>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-vogel-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-vogel-gold" />
                    </div>
                    <span className="text-vogel-white/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="/assinar"
                className={`block w-full text-center py-4 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? "bg-vogel-gold text-vogel-black hover:bg-vogel-gold-light"
                    : "border border-vogel-gold text-vogel-gold hover:bg-vogel-gold hover:text-vogel-black"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-12">
          <p className="text-vogel-gray text-sm">
            🔒 Garantia de 7 dias. Se não gostar, devolvemos seu dinheiro.
          </p>
        </div>
      </div>
    </section>
  );
}
