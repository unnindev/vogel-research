"use client";

import { X } from "lucide-react";
import Sidebar from "./Sidebar";

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 lg:hidden">
        <div className="relative">
          <Sidebar />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-vogel-gray hover:text-vogel-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
}
