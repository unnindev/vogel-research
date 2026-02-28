"use client";

import { useState } from "react";
import { Bell, Search, Menu, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

interface DashboardHeaderProps {
  title: string;
  onMenuClick?: () => void;
}

export default function DashboardHeader({ title, onMenuClick }: DashboardHeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-vogel-black/95 backdrop-blur-md border-b border-gray-200 dark:border-vogel-green-dark/20 transition-colors">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 text-gray-600 dark:text-vogel-gray hover:text-gray-900 dark:hover:text-vogel-white"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-display font-semibold text-gray-900 dark:text-vogel-white">
            {title}
          </h1>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-vogel-green-dark/20 rounded-lg px-4 py-2">
            <Search className="w-4 h-4 text-gray-600 dark:text-vogel-gray" />
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-transparent border-none outline-none text-gray-900 dark:text-vogel-white placeholder-gray-500 dark:placeholder-vogel-gray text-sm w-48"
            />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-gray-600 dark:text-vogel-gray hover:text-vogel-gold transition-colors"
            title={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Notifications */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="relative p-2 text-gray-600 dark:text-vogel-gray hover:text-gray-900 dark:hover:text-vogel-white transition-colors"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-vogel-gold rounded-full"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-vogel-black border border-gray-200 dark:border-vogel-green-dark/30 rounded-xl shadow-xl overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-vogel-green-dark/20">
                  <h3 className="font-semibold text-gray-900 dark:text-vogel-white">Notificações</h3>
                </div>
                <div className="max-h-96 overflow-y-auto">
                  <div className="p-4 hover:bg-gray-50 dark:hover:bg-vogel-green-dark/10 border-b border-gray-100 dark:border-vogel-green-dark/10">
                    <p className="text-gray-900 dark:text-vogel-white text-sm">Nova análise disponível: AAPL</p>
                    <p className="text-gray-600 dark:text-vogel-gray text-xs mt-1">Há 2 horas</p>
                  </div>
                  <div className="p-4 hover:bg-gray-50 dark:hover:bg-vogel-green-dark/10 border-b border-gray-100 dark:border-vogel-green-dark/10">
                    <p className="text-gray-900 dark:text-vogel-white text-sm">Atualização na carteira Growth</p>
                    <p className="text-gray-600 dark:text-vogel-gray text-xs mt-1">Há 5 horas</p>
                  </div>
                  <div className="p-4 hover:bg-gray-50 dark:hover:bg-vogel-green-dark/10">
                    <p className="text-gray-900 dark:text-vogel-white text-sm">Bem-vindo à Vogel Research!</p>
                    <p className="text-gray-600 dark:text-vogel-gray text-xs mt-1">Há 1 dia</p>
                  </div>
                </div>
                <div className="p-3 border-t border-gray-200 dark:border-vogel-green-dark/20 text-center">
                  <button className="text-vogel-gold text-sm hover:underline">
                    Ver todas
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
