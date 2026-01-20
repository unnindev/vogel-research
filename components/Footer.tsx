"use client";

import Link from "next/link";
import { Youtube, Instagram, Linkedin, Twitter, Mail } from "lucide-react";

const footerLinks = {
  produto: [
    { label: "Análises", href: "#servicos" },
    { label: "Carteiras", href: "#servicos" },
    { label: "Comunidade", href: "#servicos" },
    { label: "Planos", href: "#planos" },
  ],
  empresa: [
    { label: "Sobre", href: "#sobre" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "mailto:contato@vogelresearch.com" },
  ],
  legal: [
    { label: "Termos de Uso", href: "/termos" },
    { label: "Política de Privacidade", href: "/privacidade" },
  ],
};

const socialLinks = [
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-vogel-black border-t border-vogel-green-dark/20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <svg
                width="36"
                height="36"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M50 15 L30 35 L40 35 L40 45 L25 60 L75 60 L60 45 L60 35 L70 35 L50 15Z"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                  className="text-vogel-gold"
                />
                <circle cx="35" cy="42" r="4" className="fill-vogel-gold" />
              </svg>
              <span className="font-display text-lg font-semibold text-vogel-white tracking-wide">
                VOGEL RESEARCH
              </span>
            </Link>

            <p className="text-vogel-gray max-w-sm mb-6">
              Análises e insights para investir com inteligência no mercado
              americano.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-vogel-green-dark/30 flex items-center justify-center text-vogel-white/70 hover:bg-vogel-gold hover:text-vogel-black transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links columns */}
          <div>
            <h4 className="text-vogel-white font-semibold mb-4">Produto</h4>
            <ul className="space-y-3">
              {footerLinks.produto.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-vogel-gray hover:text-vogel-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-vogel-white font-semibold mb-4">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-vogel-gray hover:text-vogel-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-vogel-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-vogel-gray hover:text-vogel-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact email */}
            <div className="mt-6">
              <a
                href="mailto:contato@vogelresearch.com"
                className="flex items-center gap-2 text-vogel-gray hover:text-vogel-gold transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">contato@vogelresearch.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-vogel-green-dark/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-vogel-gray text-sm">
            © {new Date().getFullYear()} Vogel Research. Todos os direitos
            reservados.
          </p>

          <p className="text-vogel-gray/60 text-xs text-center md:text-right max-w-md">
            As informações contidas neste site têm caráter meramente informativo
            e educacional e não constituem recomendação de investimento.
          </p>
        </div>
      </div>
    </footer>
  );
}
