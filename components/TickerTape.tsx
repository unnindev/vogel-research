'use client';

import { useTickerData } from '@/hooks/useTickerData';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function TickerTape() {
  const { data, loading, error } = useTickerData();

  if (error) {
    return (
      <div className="bg-[#0E4F3D] border-b border-[#18785A] py-2">
        <div className="container mx-auto px-4">
          <p className="text-xs text-red-400 text-center">
            Erro ao carregar dados do mercado
          </p>
        </div>
      </div>
    );
  }

  if (loading || !data) {
    return (
      <div className="bg-[#0E4F3D] border-b border-[#18785A] py-2.5 overflow-hidden">
        <div className="flex gap-8 animate-pulse">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-3 min-w-[200px]">
              <div className="h-4 w-16 bg-[#18785A] rounded"></div>
              <div className="h-4 w-20 bg-[#18785A] rounded"></div>
              <div className="h-4 w-14 bg-[#18785A] rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Duplica os items para criar efeito de loop infinito
  const duplicatedItems = [...data.items, ...data.items, ...data.items];

  return (
    <div className="bg-[#0E4F3D] border-b border-[#18785A] py-2.5 overflow-hidden relative">
      <div className="ticker-wrapper">
        <div className="ticker-content group">
          {duplicatedItems.map((item, index) => (
            <div
              key={`${item.symbol}-${index}`}
              className="ticker-item flex items-center gap-3 px-6 min-w-fit"
            >
              {/* Símbolo */}
              <span className="text-[#BFA66B] font-semibold text-sm whitespace-nowrap">
                {item.symbol}
              </span>

              {/* Preço */}
              <span className="text-white font-medium text-sm whitespace-nowrap">
                {item.price}
              </span>

              {/* Mudança */}
              <div
                className={`flex items-center gap-1 text-xs font-medium whitespace-nowrap ${
                  item.isPositive ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {item.isPositive ? (
                  <TrendingUp className="w-3 h-3" />
                ) : (
                  <TrendingDown className="w-3 h-3" />
                )}
                <span>{item.changePercent}</span>
              </div>

              {/* Separador */}
              <div className="w-px h-4 bg-[#18785A]" />
            </div>
          ))}
        </div>
      </div>

      {/* Gradientes nas bordas para efeito visual */}
      <div className="absolute top-0 left-0 bottom-0 w-20 bg-gradient-to-r from-[#0E4F3D] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-l from-[#0E4F3D] to-transparent pointer-events-none z-10" />

      <style jsx>{`
        .ticker-wrapper {
          overflow: hidden;
          position: relative;
        }

        .ticker-content {
          display: flex;
          animation: scroll 60s linear infinite;
        }

        .ticker-content:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        /* Ajuste de velocidade em telas menores */
        @media (max-width: 768px) {
          .ticker-content {
            animation-duration: 45s;
          }
        }
      `}</style>
    </div>
  );
}
