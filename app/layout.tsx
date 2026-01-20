import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vogel Research | Análise de Ações Americanas",
  description:
    "Clube de investimentos focado em análise de ações americanas. Acesse relatórios exclusivos, acompanhe portfolios e tome decisões mais inteligentes.",
  keywords: [
    "investimentos",
    "ações americanas",
    "análise de ações",
    "stocks",
    "mercado financeiro",
    "vogel research",
  ],
  authors: [{ name: "Vogel Research" }],
  openGraph: {
    title: "Vogel Research | Análise de Ações Americanas",
    description:
      "Clube de investimentos focado em análise de ações americanas. Acesse relatórios exclusivos, acompanhe portfolios e tome decisões mais inteligentes.",
    url: "https://vogelresearch.com",
    siteName: "Vogel Research",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vogel Research | Análise de Ações Americanas",
    description:
      "Clube de investimentos focado em análise de ações americanas.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
