"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Eye, EyeOff, AlertCircle, CheckCircle } from "lucide-react";
import { supabase } from "@/lib/supabase";

export default function ResetPasswordPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Verificar erros no hash da URL
    const hashParams = new URLSearchParams(window.location.hash.substring(1));
    const errorCode = hashParams.get('error_code');
    const errorDescription = hashParams.get('error_description');

    if (errorCode === 'otp_expired') {
      setError("O link de recuperação expirou. Por favor, solicite um novo link.");
      return;
    }

    if (errorDescription) {
      setError(decodeURIComponent(errorDescription));
      return;
    }

    // Verificar se há uma sessão de recuperação
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        setError("Link de recuperação inválido ou expirado. Solicite um novo link.");
      }
    };
    checkSession();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");
    setSuccess(false);

    // Validações
    if (password.length < 6) {
      setError("A senha deve ter no mínimo 6 caracteres");
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem");
      setIsLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: password,
      });

      if (error) throw error;

      setSuccess(true);

      // Redirecionar para login após 2 segundos
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Erro ao redefinir senha"
      );
    } finally {
      setIsLoading(false);
    }
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
            href="/login"
            className="inline-flex items-center gap-2 text-vogel-gray hover:text-vogel-gold transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar para o login
          </Link>

          {/* Card de redefinir senha */}
          <div className="bg-vogel-black/50 border border-vogel-green-dark/30 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-display font-semibold text-vogel-white mb-2">
                Redefinir senha
              </h1>
              <p className="text-vogel-gray">
                Digite sua nova senha
              </p>
            </div>

            {/* Error message */}
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Success message */}
            {success && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-400 text-sm font-medium mb-1">
                    Senha redefinida com sucesso!
                  </p>
                  <p className="text-green-400/80 text-xs">
                    Redirecionando para o login...
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-vogel-gray mb-2"
                >
                  Nova senha
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-vogel-black border border-vogel-green-dark/30 rounded-lg text-vogel-white placeholder-vogel-gray/50 focus:border-vogel-gold focus:outline-none transition-colors pr-12"
                    placeholder="Mínimo 6 caracteres"
                    minLength={6}
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

              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-vogel-gray mb-2"
                >
                  Confirmar nova senha
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-4 py-3 bg-vogel-black border border-vogel-green-dark/30 rounded-lg text-vogel-white placeholder-vogel-gray/50 focus:border-vogel-gold focus:outline-none transition-colors pr-12"
                    placeholder="Digite a senha novamente"
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-vogel-gray hover:text-vogel-gold transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || success}
                className="w-full btn-primary py-4 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Redefinindo..." : "Redefinir senha"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
