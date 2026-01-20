"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Para quem é a Vogel Research?",
    answer:
      "A Vogel Research é para qualquer pessoa interessada em investir no mercado americano, desde iniciantes até investidores mais experientes. Nosso conteúdo é didático e acessível, mas também oferece profundidade para quem já tem conhecimento.",
  },
  {
    question: "Preciso ter conta em corretora americana?",
    answer:
      "Sim, para investir diretamente em ações americanas você precisa de uma conta em corretora que permita acesso ao mercado dos EUA. Temos materiais que explicam como abrir conta e começar a investir.",
  },
  {
    question: "Vocês fazem recomendação de compra?",
    answer:
      "Oferecemos análises e carteiras recomendadas com teses de investimento detalhadas. Porém, a decisão final é sempre sua. Não somos uma casa de análise registrada na CVM, nosso foco é educacional e informativo.",
  },
  {
    question: "Com que frequência é publicado conteúdo novo?",
    answer:
      "Publicamos novas análises semanalmente, além de atualizações de mercado e comentários sobre resultados de empresas quando relevante. Você também recebe alertas quando há movimentações importantes.",
  },
  {
    question: "Posso cancelar a qualquer momento?",
    answer:
      "Sim, você pode cancelar sua assinatura a qualquer momento. No plano mensal, o acesso continua até o fim do período pago. No plano anual, oferecemos garantia de 7 dias para reembolso total.",
  },
  {
    question: "Como funciona a comunidade?",
    answer:
      "A comunidade é um espaço exclusivo para membros discutirem ideias, tirarem dúvidas e compartilharem experiências. O Bruno também participa respondendo perguntas e trazendo insights adicionais.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-vogel-black/50 relative">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-vogel-gold text-sm font-semibold tracking-widest uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="section-title text-vogel-white mb-6">
            Perguntas{" "}
            <span className="text-gradient">frequentes</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Tire suas dúvidas sobre a Vogel Research
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-vogel-gold/50 bg-vogel-green-dark/10"
                  : "border-vogel-green-dark/30 bg-vogel-black/30"
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span
                  className={`font-medium text-lg transition-colors duration-300 ${
                    openIndex === index ? "text-vogel-gold" : "text-vogel-white"
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-vogel-gold transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-5 text-vogel-gray leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-vogel-gray">
            Ainda tem dúvidas?{" "}
            <a
              href="mailto:contato@vogelresearch.com"
              className="text-vogel-gold hover:underline"
            >
              Entre em contato
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
