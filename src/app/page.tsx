"use client";

import React, { useState, useRef } from "react";
import { HeroVideoIntro } from "@/components/HeroVideoIntro";
import { SiteNavigation } from "@/components/SiteNavigation";
import { WeddingHero } from "@/components/WeddingHero";
import { WelcomeSection } from "@/components/WelcomeSection";
import { ScratchToReveal } from "@/components/ScratchToReveal";
import { ClosingSection } from "@/components/ClosingSection";
import { BackgroundMusicPlayer } from "@/components/BackgroundMusicPlayer";
import { FallingRainParticles } from "@/components/FallingRainParticles";

export default function WeddingPage() {
  const [isVideoActive, setIsVideoActive] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleStartMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio
      .play()
      .then(() => setIsMusicPlaying(true))
      .catch(() => setIsMusicPlaying(false));
  };

  const handleToggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isMusicPlaying) {
      audio.pause();
      setIsMusicPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsMusicPlaying(true))
        .catch(() => setIsMusicPlaying(false));
    }
  };

  const handleVideoComplete = () => {
    setIsVideoActive(false);
  };

  return (
    <main className="min-h-screen bg-[#F8F3E8] relative selection:bg-[#B58B35]/20 selection:text-[#243A2D]">
      <audio
        ref={audioRef}
        src="/audio/wedding-bg-music.mp3"
        loop
        preload="auto"
      />

      <HeroVideoIntro
        isActive={isVideoActive}
        onComplete={handleVideoComplete}
        onStartMusic={handleStartMusic}
        isMusicPlaying={isMusicPlaying}
        onToggleMusic={handleToggleMusic}
      />

      <FallingRainParticles />

      <SiteNavigation />

      <WeddingHero />

      <WelcomeSection />

      <ScratchToReveal />

      <ClosingSection />

      <BackgroundMusicPlayer
        isPlaying={isMusicPlaying}
        onToggleMusic={handleToggleMusic}
        showFloatingButton={!isVideoActive}
      />
    </main>
  );
}
