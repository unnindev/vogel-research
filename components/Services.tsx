"use client";

import {
  FileText,
  PieChart,
  Bell,
  Video,
  BookOpen,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Análises Detalhadas",
    description:
      "Relatórios completos sobre empresas americanas, com análise fundamentalista, valuations e teses de investimento.",
  },
  {
    icon: PieChart,
    title: "Carteiras Recomendadas",
    description:
      "Acompanhe portfolios montados estrategicamente, com alocações e timing de entrada e saída.",
  },
  {
    icon: Bell,
    title: "Alertas de Mercado",
    description:
      "Receba notificações sobre movimentações importantes, resultados de empresas e oportunidades.",
  },
  {
    icon: Video,
    title: "Vídeos Exclusivos",
    description:
      "Conteúdo em vídeo aprofundado sobre análises, estratégias e comentários de mercado.",
  },
  {
    icon: BookOpen,
    title: "Materiais Educativos",
    description:
      "Guias, planilhas e materiais para você evoluir como investidor no mercado americano.",
  },
  {
    icon: MessageSquare,
    title: "Comunidade Privada",
    description:
      "Participe de discussões com outros membros, tire dúvidas e troque ideias sobre investimentos.",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="section bg-vogel-black/50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(191, 166, 107, 0.5) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-vogel-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            Serviços
          </span>
          <h2 className="section-title text-vogel-white mb-6">
            Tudo que você precisa para investir{" "}
            <span className="text-gradient">com confiança</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Ferramentas, análises e suporte para você tomar as melhores decisões
            no mercado americano.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-vogel-green-dark/30 flex items-center justify-center mb-6 group-hover:bg-vogel-gold/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-vogel-gold" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-display font-semibold text-vogel-white mb-3 group-hover:text-vogel-gold transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-vogel-gray leading-relaxed">
                {service.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center text-vogel-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Saiba mais</span>
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
