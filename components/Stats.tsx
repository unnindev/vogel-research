"use client";

import { Users, FileText, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1.247+",
    label: "Membros Ativos",
    description: "Investidores acompanhando nossas análises",
  },
  {
    icon: FileText,
    value: "156",
    label: "Análises Publicadas",
    description: "Conteúdo exclusivo sobre ações americanas",
  },
  {
    icon: TrendingUp,
    value: "+24.5%",
    label: "Retorno Médio",
    description: "Performance da carteira Growth em 2024",
  },
  {
    icon: Award,
    value: "98%",
    label: "Satisfação",
    description: "Membros que recomendam nossos serviços",
  },
];

export default function Stats() {
  return (
    <section className="py-20 bg-vogel-white relative">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(14, 79, 61, 0.5) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-vogel-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Resultados que falam
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-vogel-black mb-4">
            Números que comprovam nossa{" "}
            <span className="text-vogel-green-dark">excelência</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-vogel-green-dark/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-vogel-green-dark" />
              </div>
              <p className="text-4xl md:text-5xl font-bold font-display text-vogel-green-dark mb-2">
                {stat.value}
              </p>
              <p className="text-xl font-semibold text-vogel-black mb-2">
                {stat.label}
              </p>
              <p className="text-vogel-black/60 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
