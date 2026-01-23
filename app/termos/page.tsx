import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function TermosPage() {
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

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        {/* Voltar */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-vogel-gray hover:text-vogel-gold transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar para o site
        </Link>

        <article className="prose prose-invert prose-gold max-w-none">
          <h1 className="text-3xl md:text-4xl font-display font-semibold text-vogel-white mb-8">
            Termos de Uso
          </h1>

          <p className="text-vogel-gray text-sm mb-8">
            Última atualização: Janeiro de 2025
          </p>

          <div className="space-y-8 text-vogel-gray">
            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                1. Aceitação dos Termos
              </h2>
              <p>
                Ao acessar e utilizar os serviços da Vogel Research, você concorda
                em cumprir e estar vinculado aos seguintes termos e condições de
                uso. Se você não concordar com qualquer parte destes termos, não
                deverá utilizar nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                2. Descrição dos Serviços
              </h2>
              <p>
                A Vogel Research oferece serviços de análise e informações sobre o
                mercado de ações americano, incluindo:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Relatórios e análises de empresas</li>
                <li>Carteiras recomendadas</li>
                <li>Alertas de mercado</li>
                <li>Conteúdo educativo</li>
                <li>Acesso a comunidade exclusiva</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                3. Isenção de Responsabilidade
              </h2>
              <p>
                <strong className="text-vogel-white">
                  As informações fornecidas pela Vogel Research têm caráter
                  meramente informativo e educacional, e NÃO constituem
                  recomendação de investimento.
                </strong>
              </p>
              <p className="mt-4">
                Investimentos em renda variável envolvem riscos. Rentabilidade
                passada não é garantia de rentabilidade futura. Você deve avaliar
                cuidadosamente sua situação financeira e consultar um profissional
                qualificado antes de tomar qualquer decisão de investimento.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                4. Cadastro e Conta
              </h2>
              <p>
                Para acessar determinados serviços, você deverá criar uma conta.
                Você é responsável por:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Fornecer informações verdadeiras e atualizadas</li>
                <li>Manter a confidencialidade de sua senha</li>
                <li>Todas as atividades realizadas em sua conta</li>
                <li>Notificar imediatamente qualquer uso não autorizado</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                5. Pagamentos e Assinaturas
              </h2>
              <p>
                Os planos de assinatura são cobrados de acordo com o período
                escolhido (mensal ou anual). A renovação é automática, salvo
                cancelamento prévio.
              </p>
              <p className="mt-4">
                <strong className="text-vogel-white">Garantia de 7 dias:</strong>{" "}
                Se você não estiver satisfeito, pode solicitar reembolso integral
                dentro de 7 dias após a compra.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                6. Cancelamento
              </h2>
              <p>
                Você pode cancelar sua assinatura a qualquer momento através da
                área de membros ou entrando em contato conosco. O cancelamento
                será efetivado ao final do período já pago.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                7. Propriedade Intelectual
              </h2>
              <p>
                Todo o conteúdo disponibilizado pela Vogel Research, incluindo
                textos, gráficos, logos, imagens, vídeos e análises, é protegido
                por direitos autorais. É proibida a reprodução, distribuição ou
                compartilhamento sem autorização prévia.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                8. Modificações
              </h2>
              <p>
                Reservamo-nos o direito de modificar estes termos a qualquer
                momento. As alterações entrarão em vigor imediatamente após a
                publicação. O uso continuado dos serviços após alterações
                constitui aceitação dos novos termos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                9. Contato
              </h2>
              <p>
                Para dúvidas sobre estes termos, entre em contato pelo e-mail:{" "}
                <a
                  href="mailto:contato@vogelresearch.com"
                  className="text-vogel-gold hover:underline"
                >
                  contato@vogelresearch.com
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>

      {/* Footer simples */}
      <footer className="border-t border-vogel-green-dark/20 py-8">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <p className="text-vogel-gray text-sm">
            © {new Date().getFullYear()} Vogel Research. Todos os direitos
            reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
