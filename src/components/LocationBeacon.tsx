"use client";

import React from "react";
import { MapPin } from "lucide-react";
import { weddingData } from "@/data/wedding";

interface LocationBeaconProps {
  variant?: "dark" | "light";
  showButton?: boolean;
  className?: string;
}

export function LocationBeacon({
  variant = "dark",
  showButton = false,
  className = "",
}: LocationBeaconProps) {
  const isDark = variant === "dark";

  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      {/* Animated map-dot beacon */}
      <a
        href={weddingData.locationMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex flex-col items-center focus:outline-none"
        aria-label={`Open directions to ${weddingData.locationSummary}`}
      >
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          {/* Expanding ripple rings */}
          <span
            className={`location-ripple absolute inset-0 rounded-full border ${
              isDark ? "border-[#E5C365]/50" : "border-[#B58B35]/40"
            }`}
            style={{ animationDelay: "0s" }}
          />
          <span
            className={`location-ripple absolute inset-0 rounded-full border ${
              isDark ? "border-[#E5C365]/40" : "border-[#B58B35]/30"
            }`}
            style={{ animationDelay: "0.7s" }}
          />
          <span
            className={`location-ripple absolute inset-0 rounded-full border ${
              isDark ? "border-[#E5C365]/30" : "border-[#B58B35]/25"
            }`}
            style={{ animationDelay: "1.4s" }}
          />

          {/* Soft glow core */}
          <span
            className={`absolute w-10 h-10 sm:w-12 sm:h-12 rounded-full blur-md location-glow ${
              isDark ? "bg-[#E5C365]/35" : "bg-[#B58B35]/25"
            }`}
          />

          {/* Dot constellation around pin */}
          <span className="location-orbit-dot absolute w-1.5 h-1.5 rounded-full bg-[#E5C365] top-1 left-1/2 -translate-x-1/2" />
          <span
            className="location-orbit-dot absolute w-1 h-1 rounded-full bg-[#E5C365]/80 bottom-2 left-3"
            style={{ animationDelay: "0.4s" }}
          />
          <span
            className="location-orbit-dot absolute w-1 h-1 rounded-full bg-[#E5C365]/70 bottom-3 right-3"
            style={{ animationDelay: "0.8s" }}
          />

          {/* Center pin + pulse dot */}
          <span
            className={`relative z-10 flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border shadow-lg transition-transform duration-300 group-hover:scale-110 ${
              isDark
                ? "bg-[#243A2D] border-[#E5C365]/70 text-[#E5C365]"
                : "bg-white border-[#B58B35]/50 text-[#B58B35]"
            }`}
          >
            <MapPin className="w-5 h-5 sm:w-6 sm:h-6 location-pin-bob" />
            <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#E5C365] location-core-dot" />
          </span>
        </div>

        <span
          className={`mt-1 font-serif text-xs sm:text-sm text-center max-w-xs leading-relaxed transition-colors ${
            isDark
              ? "text-[#E5C365] group-hover:text-[#F8F3E8]"
              : "text-[#243A2D] group-hover:text-[#B58B35]"
          }`}
        >
          {weddingData.locationSummary}
        </span>
        <span
          className={`text-[10px] uppercase tracking-[0.2em] font-serif ${
            isDark ? "text-[#9DA78B]" : "text-[#9DA78B]"
          }`}
        >
          Tap for directions
        </span>
      </a>

      {showButton && (
        <a
          href={weddingData.locationMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#243A2D] hover:bg-[#18281F] text-[#F8F3E8] font-serif text-xs sm:text-sm uppercase tracking-wider font-semibold shadow-md transition-all hover:scale-105"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="location-core-dot absolute inline-flex h-full w-full rounded-full bg-[#E5C365] opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#E5C365]" />
          </span>
          <span>Get Directions</span>
        </a>
      )}
    </div>
  );
}
