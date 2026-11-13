import React from "react";
import Image from "next/image";
import { weddingData } from "@/data/wedding";
import { OrnamentalDivider } from "./OrnamentalDivider";
import { WeddingCountdown } from "./WeddingCountdown";
import { ChevronDown } from "lucide-react";

interface WeddingHeroProps {
  onOpenVideo?: () => void;
}

export function WeddingHero({ onOpenVideo }: WeddingHeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 sm:px-6 bg-arabesque-pattern overflow-hidden text-center"
    >
      {/* Soft warm light bloom and decorative background aura */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] max-w-full rounded-full bg-gradient-to-b from-[#B58B35]/10 via-[#9DA78B]/10 to-transparent blur-3xl pointer-events-none" />

      {/* Decorative Ornate Corner Accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[#B58B35]/40 rounded-tl-xl pointer-events-none hidden sm:block" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[#B58B35]/40 rounded-tr-xl pointer-events-none hidden sm:block" />

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Monogram Crest */}
        <div className="mb-4 inline-flex items-center justify-center">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#B58B35] bg-[#F8F3E8] shadow-md flex items-center justify-center p-1.5 glow-gold">
            <div className="w-full h-full rounded-full border border-[#B58B35]/40 flex flex-col items-center justify-center">
              <span className="font-display text-[#B58B35] text-base sm:text-lg font-bold tracking-widest">
                {weddingData.monogram}
              </span>
            </div>
          </div>
        </div>

        {/* Traditional Bismillah in Arabic Calligraphy */}
        <p
          className="font-arabic text-[#243A2D] text-2xl sm:text-3xl leading-relaxed tracking-wider mb-2"
          dir="rtl"
        >
          {weddingData.bismillahArabic}
        </p>

        {/* Arabic Save Our Date + invitation matching Safna's card */}
        <p
          className="font-arabic text-[#B58B35] text-xl sm:text-2xl leading-relaxed mb-1"
          dir="rtl"
        >
          {weddingData.mainInvitationMessage.headingArabic}
        </p>
        <p className="font-serif italic text-sm sm:text-base text-[#5E5A4F] max-w-lg mx-auto mb-3">
          {weddingData.mainInvitationMessage.body}
        </p>

        <OrnamentalDivider variant="gold" symbol="floral" className="my-1" />

        {/* Couple Names — Editorial Luxury Presentation */}
        <div className="my-4 space-y-1 sm:space-y-2">
          <h1 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#243A2D] font-bold tracking-tight">
            {weddingData.bride.fullName}
          </h1>
          <p className="font-arabic text-[#B58B35] text-xl sm:text-2xl" dir="rtl">
            {weddingData.bride.arabicName}
          </p>

          <div className="flex items-center justify-center gap-3">
            <div className="h-[1px] w-12 sm:w-16 bg-[#B58B35]/50" />
            <span className="font-script text-3xl sm:text-4xl text-[#B58B35] px-2">
              weds
            </span>
            <div className="h-[1px] w-12 sm:w-16 bg-[#B58B35]/50" />
          </div>

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl text-[#243A2D] font-bold tracking-tight">
            {weddingData.groom.fullName}
          </h2>
          <p className="font-arabic text-[#B58B35] text-xl sm:text-2xl" dir="rtl">
            {weddingData.groom.arabicName}
          </p>
        </div>

        {/* Wedding Artwork Presentation Card */}
        <div className="my-6 relative group max-w-sm sm:max-w-md w-full">
          <div className="relative rounded-3xl p-2 sm:p-3 bg-gradient-to-b from-[#E5C365]/30 via-[#B58B35]/20 to-[#243A2D]/10 shadow-2xl">
            <div className="relative rounded-2xl overflow-hidden border border-[#B58B35]/50 bg-white aspect-[3/4] max-h-[420px] mx-auto shadow-inner">
              <Image
                src="/images/invitation-card.jpg"
                alt="Safna S & Afras Ahammed MS Save Our Date invitation card"
                fill
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 500px, 600px"
                className="object-contain object-center transform group-hover:scale-102 transition-transform duration-700"
              />
            </div>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#243A2D] text-[#E5C365] border border-[#B58B35] shadow-md text-[11px] font-serif uppercase tracking-widest whitespace-nowrap">
              Save Our Date · Safna &amp; Afras
            </div>
          </div>
        </div>

        {/* Main highlight: countdown under the card */}
        <WeddingCountdown variant="hero" />

        <div className="mt-10 flex flex-col items-center animate-bounce opacity-70">
          <span className="text-[10px] font-serif uppercase tracking-widest text-[#B58B35]">
            Scroll to Invitation
          </span>
          <ChevronDown className="w-4 h-4 text-[#B58B35] mt-1" />
        </div>
      </div>
    </section>
  );
}
