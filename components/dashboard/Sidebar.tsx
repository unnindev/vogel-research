"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Rss,
  Briefcase,
  BookOpen,
  Users,
  Settings,
  LogOut,
  Shield,
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: Rss, label: "Feed", href: "/dashboard/feed" },
  { icon: Briefcase, label: "Carteiras", href: "/dashboard/carteiras" },
  { icon: BookOpen, label: "Tutoriais", href: "/dashboard/tutoriais" },
  { icon: Users, label: "Comunidade", href: "/dashboard/comunidade" },
  { icon: Settings, label: "Minha Conta", href: "/dashboard/conta" },
];

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const { profile, signOut, isAdmin } = useAuth();

  return (
    <aside
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={`fixed left-0 top-0 h-screen bg-white dark:bg-vogel-black border-r border-gray-200 dark:border-vogel-green-dark/20 flex flex-col z-40 transition-all duration-300 ${
        isExpanded ? "w-64" : "w-20"
      }`}
    >
      {/* Logo */}
      <div className="h-20 border-b border-gray-200 dark:border-vogel-green-dark/20 flex items-center justify-center px-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <Image
            src="/logo-transparent.png"
            alt="Vogel Research"
            width={32}
            height={32}
            className="flex-shrink-0"
          />
          <span
            className={`font-display text-lg font-semibold text-gray-900 dark:text-vogel-white tracking-wide whitespace-nowrap transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0 w-0"
            }`}
          >
            VOGEL
          </span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-3">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard" && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 relative group ${
                    isActive
                      ? "bg-vogel-gold/10 text-vogel-gold"
                      : "text-gray-600 dark:text-vogel-gray hover:text-gray-900 dark:hover:text-vogel-white hover:bg-gray-100 dark:hover:bg-vogel-green-dark/20"
                  }`}
                  title={!isExpanded ? item.label : ""}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span
                    className={`font-medium whitespace-nowrap transition-opacity duration-300 ${
                      isExpanded ? "opacity-100" : "opacity-0 w-0"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* Tooltip quando minimizado */}
                  {!isExpanded && (
                    <span className="absolute left-full ml-2 px-2 py-1 bg-white dark:bg-vogel-black border border-gray-200 dark:border-vogel-green-dark/30 rounded-lg text-sm text-gray-900 dark:text-vogel-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                      {item.label}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}

          {/* Admin link - only show for admins */}
          {isAdmin && (
            <li className="pt-4 mt-4 border-t border-gray-200 dark:border-vogel-green-dark/20">
              <Link
                href="/admin"
                className="flex items-center gap-3 px-3 py-3 rounded-lg text-vogel-gold hover:bg-vogel-gold/10 transition-all duration-200 relative group"
                title={!isExpanded ? "Painel Admin" : ""}
              >
                <Shield className="w-5 h-5 flex-shrink-0" />
                <span
                  className={`font-medium whitespace-nowrap transition-opacity duration-300 ${
                    isExpanded ? "opacity-100" : "opacity-0 w-0"
                  }`}
                >
                  Painel Admin
                </span>

                {!isExpanded && (
                  <span className="absolute left-full ml-2 px-2 py-1 bg-white dark:bg-vogel-black border border-gray-200 dark:border-vogel-green-dark/30 rounded-lg text-sm text-gray-900 dark:text-vogel-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                    Painel Admin
                  </span>
                )}
              </Link>
            </li>
          )}
        </ul>
      </nav>

      {/* User section */}
      <div className="p-3 border-t border-gray-200 dark:border-vogel-green-dark/20">
        <div
          className={`flex items-center gap-3 px-3 py-3 mb-2 ${
            !isExpanded ? "justify-center" : ""
          }`}
        >
          <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-vogel-green-dark/30 flex items-center justify-center text-vogel-gold font-semibold flex-shrink-0">
            {profile?.name?.[0]?.toUpperCase() || "U"}
          </div>
          <div
            className={`flex-1 min-w-0 transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0 w-0"
            }`}
          >
            <p className="text-gray-900 dark:text-vogel-white font-medium truncate text-sm">
              {profile?.name || "Usuário"}
            </p>
            <p className="text-gray-600 dark:text-vogel-gray text-xs truncate">
              {profile?.email || ""}
            </p>
          </div>
        </div>
        <button
          onClick={signOut}
          className={`flex items-center gap-3 px-3 py-3 w-full rounded-lg text-gray-600 dark:text-vogel-gray hover:text-red-400 hover:bg-red-400/10 transition-all duration-200 relative group ${
            !isExpanded ? "justify-center" : ""
          }`}
          title={!isExpanded ? "Sair" : ""}
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          <span
            className={`font-medium whitespace-nowrap transition-opacity duration-300 ${
              isExpanded ? "opacity-100" : "opacity-0 w-0"
            }`}
          >
            Sair
          </span>

          {!isExpanded && (
            <span className="absolute left-full ml-2 px-2 py-1 bg-white dark:bg-vogel-black border border-gray-200 dark:border-vogel-green-dark/30 rounded-lg text-sm text-gray-900 dark:text-vogel-white whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
              Sair
            </span>
          )}
        </button>
      </div>
    </aside>
  );
}
