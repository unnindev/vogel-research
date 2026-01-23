"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // TODO: Implementar autenticação
    console.log("Login:", formData);
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-vogel-black flex flex-col">
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

      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Voltar */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-vogel-gray hover:text-vogel-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o site
          </Link>

          {/* Card de login */}
          <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-display font-semibold text-vogel-white mb-2">
                Bem-vindo de volta
              </h1>
              <p className="text-vogel-gray">
                Entre para acessar sua conta
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
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
                  htmlFor="password"
                  className="block text-sm font-medium text-vogel-gray mb-2"
                >
                  Senha
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    required
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-vogel-black border border-vogel-green-dark/30 rounded-lg text-vogel-white placeholder-vogel-gray/50 focus:border-vogel-gold focus:outline-none transition-colors pr-12"
                    placeholder="Sua senha"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-vogel-gray hover:text-vogel-gold transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-vogel-green-dark/30 bg-vogel-black text-vogel-gold focus:ring-vogel-gold focus:ring-offset-0"
                  />
                  <span className="text-sm text-vogel-gray">Lembrar de mim</span>
                </label>
                <Link
                  href="/esqueci-senha"
                  className="text-sm text-vogel-gold hover:underline"
                >
                  Esqueci minha senha
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full btn-primary py-4 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Entrando..." : "Entrar"}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-vogel-green-dark/30 text-center">
              <p className="text-vogel-gray">
                Ainda não é membro?{" "}
                <Link
                  href="/assinar"
                  className="text-vogel-gold font-semibold hover:underline"
                >
                  Assine agora
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
