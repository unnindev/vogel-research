"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  FileText,
  MessageSquare,
  LogOut,
  ArrowLeft,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/admin" },
  { icon: Users, label: "Usuários", href: "/admin/usuarios" },
  { icon: FileText, label: "Conteúdos", href: "/admin/conteudos" },
  { icon: MessageSquare, label: "Comunidade", href: "/admin/comunidade" },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-vogel-black border-r border-vogel-green-dark/20 flex flex-col z-40">
      {/* Logo */}
      <div className="p-6 border-b border-vogel-green-dark/20">
        <Link href="/admin" className="flex items-center gap-2">
          <Image
            src="/logo-transparent.png"
            alt="Vogel Research"
            width={36}
            height={36}
          />
          <div>
            <span className="font-display text-lg font-semibold text-vogel-white tracking-wide block">
              VOGEL
            </span>
            <span className="text-xs text-vogel-gold font-medium">ADMIN</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-vogel-gold/10 text-vogel-gold"
                      : "text-vogel-gray hover:text-vogel-white hover:bg-vogel-green-dark/20"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-vogel-green-dark/20 space-y-1">
        <Link
          href="/dashboard"
          className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-vogel-gray hover:text-vogel-white hover:bg-vogel-green-dark/20 transition-all duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Voltar ao site</span>
        </Link>
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-vogel-gray hover:text-red-400 hover:bg-red-400/10 transition-all duration-200">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sair</span>
        </button>
      </div>
    </aside>
  );
}
