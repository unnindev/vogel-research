"use client";

import { Youtube, Linkedin, Instagram } from "lucide-react";

export default function About() {
  return (
    <section id="sobre" className="section bg-vogel-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-vogel-green-dark/10 blur-[150px] rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image/Visual side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0">
              {/* Frame decoration */}
              <div className="absolute inset-4 border border-vogel-gold/30 rounded-2xl" />
              
              {/* Main image placeholder */}
              <div className="relative z-10 h-full bg-gradient-to-br from-vogel-green-dark to-vogel-black rounded-2xl overflow-hidden">
                {/* Placeholder for Bruno's photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-vogel-green/20 border-2 border-vogel-gold/30 flex items-center justify-center">
                      <span className="text-5xl font-display text-vogel-gold">B</span>
                    </div>
                    <p className="text-vogel-gray text-sm">Foto do Bruno</p>
                  </div>
                </div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-vogel-black via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <div className="absolute -right-4 md:-right-8 bottom-20 bg-vogel-black/90 border border-vogel-green-dark/30 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-vogel-gold/20 flex items-center justify-center">
                    <Youtube className="w-5 h-5 text-vogel-gold" />
                  </div>
                  <div>
                    <p className="text-vogel-white font-semibold">50K+</p>
                    <p className="text-vogel-gray text-xs">Inscritos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="order-1 lg:order-2">
            <span className="text-vogel-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
              Sobre Nós
            </span>
            
            <h2 className="section-title text-vogel-white mb-6">
              Conheça quem está por trás da{" "}
              <span className="text-gradient">Vogel Research</span>
            </h2>

            <div className="space-y-6 text-vogel-gray">
              <p className="text-lg">
                A Vogel Research nasceu da paixão por investimentos e da vontade de
                democratizar o acesso a análises de qualidade do mercado americano.
              </p>

              <p>
                Bruno, fundador e analista principal, possui anos de experiência
                analisando empresas americanas e compartilhando conhecimento através
                do seu canal no YouTube, onde já ajudou milhares de investidores a
                entenderem melhor o mercado de ações dos EUA.
              </p>

              <p>
                Agora, com a Vogel Research, você tem acesso a análises ainda mais
                profundas, carteiras recomendadas e uma comunidade de investidores
                focados em construir patrimônio no longo prazo.
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8">
              <span className="text-vogel-gray text-sm">Siga nas redes:</span>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-vogel-green-dark/30 flex items-center justify-center text-vogel-white/70 hover:bg-vogel-gold hover:text-vogel-black transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-vogel-green-dark/30 flex items-center justify-center text-vogel-white/70 hover:bg-vogel-gold hover:text-vogel-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-vogel-green-dark/30 flex items-center justify-center text-vogel-white/70 hover:bg-vogel-gold hover:text-vogel-black transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
