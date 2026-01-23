"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Briefcase,
  BookOpen,
  Users,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: Home, label: "Feed", href: "/dashboard" },
  { icon: Briefcase, label: "Carteiras", href: "/dashboard/carteiras" },
  { icon: BookOpen, label: "Tutoriais", href: "/dashboard/tutoriais" },
  { icon: Users, label: "Comunidade", href: "/dashboard/comunidade" },
  { icon: Settings, label: "Minha Conta", href: "/dashboard/conta" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-vogel-black border-r border-vogel-green-dark/20 flex flex-col z-40">
      {/* Logo */}
      <div className="p-6 border-b border-vogel-green-dark/20">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image
            src="/logo-transparent.png"
            alt="Vogel Research"
            width={36}
            height={36}
          />
          <span className="font-display text-lg font-semibold text-vogel-white tracking-wide">
            VOGEL
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));

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

      {/* User section */}
      <div className="p-4 border-t border-vogel-green-dark/20">
        <div className="flex items-center gap-3 px-4 py-3 mb-2">
          <div className="w-10 h-10 rounded-full bg-vogel-green-dark/30 flex items-center justify-center text-vogel-gold font-semibold">
            U
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-vogel-white font-medium truncate">Usuário</p>
            <p className="text-vogel-gray text-xs truncate">usuario@email.com</p>
          </div>
        </div>
        <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-vogel-gray hover:text-red-400 hover:bg-red-400/10 transition-all duration-200">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sair</span>
        </button>
      </div>
    </aside>
  );
}
