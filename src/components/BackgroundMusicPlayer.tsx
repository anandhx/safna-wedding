"use client";

import React from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

interface BackgroundMusicPlayerProps {
  isPlaying: boolean;
  onToggleMusic: () => void;
  showFloatingButton?: boolean;
}

export function BackgroundMusicPlayer({
  isPlaying,
  onToggleMusic,
  showFloatingButton = true,
}: BackgroundMusicPlayerProps) {
  if (!showFloatingButton) return null;

  return (
    <div className="fixed bottom-5 right-5 z-40">
      <button
        type="button"
        onClick={onToggleMusic}
        aria-label={isPlaying ? "Mute background music" : "Play background music"}
        title={isPlaying ? "Pause background music" : "Play background music"}
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#18281F]/95 hover:bg-[#243A2D] text-[#F8F3E8] border border-[#B58B35]/50 shadow-xl backdrop-blur-md transition-all hover:scale-105 active:scale-95"
      >
        {isPlaying ? (
          <>
            <Volume2 className="w-4 h-4 text-[#E5C365]" />
            <span className="font-serif text-xs uppercase tracking-wider">
              Music On
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-[#9DA78B]" />
            <Music className="w-3.5 h-3.5 text-[#9DA78B]" />
            <span className="font-serif text-xs uppercase tracking-wider text-[#9DA78B]">
              Music Off
            </span>
          </>
        )}
      </button>
    </div>
  );
}
