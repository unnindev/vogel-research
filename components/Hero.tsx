"use client";

import Link from "next/link";
import { ArrowRight, TrendingUp, Shield, Users } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-90" />
      
      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(191, 166, 107, 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(191, 166, 107, 0.3) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-vogel-green/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-vogel-gold/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "-3s" }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-32 md:py-40">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-vogel-green-dark/30 border border-vogel-green-dark/50 rounded-full mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-vogel-gold rounded-full animate-pulse" />
            <span className="text-sm text-vogel-white/80 font-medium">
              Análise de Ações Americanas
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-semibold text-vogel-white leading-tight mb-6 animate-fade-in-up">
            Invista com{" "}
            <span className="text-gradient">inteligência</span>
            <br />
            no mercado americano
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-vogel-gray max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Acesse análises exclusivas, acompanhe portfolios recomendados e tome
            decisões de investimento baseadas em dados e expertise.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link href="/assinar" className="btn-primary group">
              Começar Agora
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#servicos" className="btn-secondary">
              Conhecer Serviços
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="flex flex-col items-center p-6 bg-vogel-black/30 border border-vogel-green-dark/20 rounded-xl">
              <TrendingUp className="w-8 h-8 text-vogel-gold mb-3" />
              <span className="text-3xl font-display font-bold text-vogel-white">+500</span>
              <span className="text-sm text-vogel-gray mt-1">Análises publicadas</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-vogel-black/30 border border-vogel-green-dark/20 rounded-xl">
              <Users className="w-8 h-8 text-vogel-gold mb-3" />
              <span className="text-3xl font-display font-bold text-vogel-white">2K+</span>
              <span className="text-sm text-vogel-gray mt-1">Membros ativos</span>
            </div>
            <div className="flex flex-col items-center p-6 bg-vogel-black/30 border border-vogel-green-dark/20 rounded-xl">
              <Shield className="w-8 h-8 text-vogel-gold mb-3" />
              <span className="text-3xl font-display font-bold text-vogel-white">5 anos</span>
              <span className="text-sm text-vogel-gray mt-1">De experiência</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-vogel-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-vogel-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
