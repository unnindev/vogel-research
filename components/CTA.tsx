"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="section bg-vogel-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-vogel-green-dark/20 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vogel-gold/5 rounded-full blur-[150px]" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Icon/Visual */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-vogel-gold/10 border border-vogel-gold/30 flex items-center justify-center">
          <Image
            src="/logo-transparent.png"
            alt="Vogel Research"
            width={50}
            height={50}
          />
        </div>

        {/* Content */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-vogel-white mb-6">
          Pronto para investir com{" "}
          <span className="text-gradient">mais inteligência</span>?
        </h2>

        <p className="text-lg md:text-xl text-vogel-gray max-w-2xl mx-auto mb-10">
          Junte-se a milhares de investidores que já estão tomando decisões mais
          informadas no mercado americano.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/assinar" className="btn-primary group text-lg px-10 py-5">
            Começar Agora
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-12 text-vogel-gray text-sm">
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-vogel-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
            Pagamento seguro
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-vogel-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Garantia de 7 dias
          </span>
          <span className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-vogel-gold"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            Cancele quando quiser
          </span>
        </div>
      </div>
    </section>
  );
}
