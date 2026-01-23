import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function PrivacidadePage() {
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
            Política de Privacidade
          </h1>

          <p className="text-vogel-gray text-sm mb-8">
            Última atualização: Janeiro de 2025
          </p>

          <div className="space-y-8 text-vogel-gray">
            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                1. Introdução
              </h2>
              <p>
                A Vogel Research está comprometida em proteger sua privacidade.
                Esta política descreve como coletamos, usamos, armazenamos e
                protegemos suas informações pessoais.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                2. Informações que Coletamos
              </h2>
              <p>Podemos coletar as seguintes informações:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>
                  <strong className="text-vogel-white">Dados de cadastro:</strong>{" "}
                  nome, e-mail, telefone
                </li>
                <li>
                  <strong className="text-vogel-white">Dados de pagamento:</strong>{" "}
                  processados de forma segura por nossos parceiros de pagamento
                </li>
                <li>
                  <strong className="text-vogel-white">Dados de uso:</strong>{" "}
                  páginas visitadas, tempo de acesso, interações com o conteúdo
                </li>
                <li>
                  <strong className="text-vogel-white">Dados técnicos:</strong>{" "}
                  endereço IP, tipo de navegador, dispositivo
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                3. Como Usamos suas Informações
              </h2>
              <p>Utilizamos suas informações para:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Fornecer e melhorar nossos serviços</li>
                <li>Processar pagamentos e gerenciar assinaturas</li>
                <li>Enviar comunicações sobre o serviço e novidades</li>
                <li>Personalizar sua experiência</li>
                <li>Cumprir obrigações legais</li>
                <li>Prevenir fraudes e garantir segurança</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                4. Compartilhamento de Dados
              </h2>
              <p>
                Não vendemos suas informações pessoais. Podemos compartilhar dados
                apenas com:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Processadores de pagamento (para cobranças)</li>
                <li>Serviços de e-mail (para comunicações)</li>
                <li>Ferramentas de análise (dados anônimos)</li>
                <li>Autoridades (quando exigido por lei)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                5. Segurança dos Dados
              </h2>
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para
                proteger suas informações, incluindo:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Criptografia SSL/TLS em todas as transmissões</li>
                <li>Armazenamento seguro em servidores protegidos</li>
                <li>Acesso restrito a dados pessoais</li>
                <li>Monitoramento contínuo de segurança</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                6. Cookies
              </h2>
              <p>
                Utilizamos cookies e tecnologias similares para melhorar sua
                experiência, lembrar preferências e analisar o uso do site. Você
                pode configurar seu navegador para recusar cookies, mas isso pode
                afetar algumas funcionalidades.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                7. Seus Direitos
              </h2>
              <p>
                De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem
                direito a:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir dados incompletos ou incorretos</li>
                <li>Solicitar exclusão de dados</li>
                <li>Revogar consentimento</li>
                <li>Solicitar portabilidade dos dados</li>
                <li>Obter informações sobre compartilhamento</li>
              </ul>
              <p className="mt-4">
                Para exercer esses direitos, entre em contato conosco pelo e-mail
                abaixo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                8. Retenção de Dados
              </h2>
              <p>
                Mantemos seus dados pessoais enquanto sua conta estiver ativa ou
                conforme necessário para fornecer serviços. Após o encerramento,
                mantemos dados apenas pelo período exigido por lei ou para fins
                legítimos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                9. Alterações nesta Política
              </h2>
              <p>
                Podemos atualizar esta política periodicamente. Notificaremos sobre
                mudanças significativas por e-mail ou através do site. Recomendamos
                revisar esta página regularmente.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-vogel-white mb-4">
                10. Contato
              </h2>
              <p>
                Para questões sobre privacidade ou para exercer seus direitos,
                entre em contato:
              </p>
              <p className="mt-4">
                <strong className="text-vogel-white">E-mail:</strong>{" "}
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
