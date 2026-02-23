"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#planos", label: "Planos" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-vogel-black/85 backdrop-blur-md border-b border-vogel-green-dark/20 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo-transparent.png"
              alt="Vogel Research"
              width={56}
              height={56}
              className="transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-display text-2xl font-semibold text-vogel-white tracking-wide">
              VOGEL RESEARCH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-vogel-white/70 hover:text-vogel-gold transition-colors duration-300 text-sm font-medium tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/login"
              className="text-vogel-white/70 hover:text-vogel-gold transition-colors duration-300 text-sm font-medium"
            >
              Entrar
            </Link>
            <Link
              href="/assinar"
              className="btn-primary text-sm py-3 px-6"
            >
              Começar Agora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-vogel-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-vogel-black/98 backdrop-blur-md border-b border-vogel-green-dark/20 py-6 px-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-vogel-white/70 hover:text-vogel-gold transition-colors duration-300 text-lg font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-vogel-green-dark/30 my-2" />
              <Link
                href="/login"
                className="text-vogel-white/70 hover:text-vogel-gold transition-colors duration-300 text-lg font-medium py-2"
              >
                Entrar
              </Link>
              <Link
                href="/assinar"
                className="btn-primary text-center mt-2"
              >
                Começar Agora
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
