"use client";

import React from "react";
import { weddingData } from "@/data/wedding";
import { Heart } from "lucide-react";

export function ClosingSection() {
  return (
    <footer className="py-16 sm:py-20 px-4 sm:px-6 bg-[#18281F] text-[#F8F3E8] relative overflow-hidden text-center">
      <div className="absolute inset-0 bg-dark-ornate opacity-50 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-80 bg-gradient-to-t from-[#B58B35]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[#B58B35] bg-[#243A2D] flex items-center justify-center p-2 mb-8 glow-gold">
          <span className="font-display text-[#E5C365] text-lg sm:text-xl font-bold tracking-widest">
            {weddingData.monogram}
          </span>
        </div>

        <div className="text-center text-xs font-serif text-[#9DA78B] space-y-3.5">
          <p className="flex items-center justify-center gap-1.5 flex-wrap">
            <span>Crafted with reverence &amp; barakah</span>
            <Heart className="w-3.5 h-3.5 text-[#D98CA2] fill-[#D98CA2]" />
            <span>
              for {weddingData.bride.shortName} &amp;{" "}
              {weddingData.groom.shortName}
            </span>
          </p>
          <p className="text-[#F8F3E8]/80">
            Developed by{" "}
            <span className="text-[#E5C365] font-semibold">anandhx</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
