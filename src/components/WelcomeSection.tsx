import React from "react";
import { weddingData } from "@/data/wedding";
import { OrnamentalDivider } from "./OrnamentalDivider";

export function WelcomeSection() {
  return (
    <section
      id="invitation"
      className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F8F3E8] relative overflow-hidden"
    >
      {/* Delicate background ornament */}
      <div className="max-w-4xl mx-auto">
        {/* Main Printed Invitation Card Representation */}
        <div className="relative rounded-3xl bg-[#FCF9F2] border-2 border-[#B58B35]/30 p-8 sm:p-14 md:p-16 shadow-xl text-center">
          {/* Ornate Corner Accents */}
          <div className="absolute top-4 left-4 w-10 h-10 border-t-2 border-l-2 border-[#B58B35] rounded-tl-lg pointer-events-none" />
          <div className="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-[#B58B35] rounded-tr-lg pointer-events-none" />
          <div className="absolute bottom-4 left-4 w-10 h-10 border-b-2 border-l-2 border-[#B58B35] rounded-bl-lg pointer-events-none" />
          <div className="absolute bottom-4 right-4 w-10 h-10 border-b-2 border-r-2 border-[#B58B35] rounded-br-lg pointer-events-none" />

          {/* Bismillah Calligraphy */}
          <div className="mb-6">
            <p
              className="font-arabic text-[#243A2D] text-3xl sm:text-4xl md:text-5xl leading-relaxed tracking-wider"
              dir="rtl"
            >
              {weddingData.bismillahArabic}
            </p>
            <p className="font-serif italic text-xs sm:text-sm text-[#9DA78B] mt-2">
              {weddingData.bismillahEnglish}
            </p>
          </div>

          {/* Qur'an verse matching the "two souls" invitation theme */}
          <div className="mb-6 max-w-2xl mx-auto">
            <p
              className="font-arabic text-[#243A2D] text-lg sm:text-xl md:text-2xl leading-relaxed"
              dir="rtl"
            >
              {weddingData.quranVerseArabic}
            </p>
            <p className="font-serif italic text-xs sm:text-sm text-[#9DA78B] mt-2">
              {weddingData.quranVerseEnglish}
            </p>
          </div>

          <OrnamentalDivider variant="gold" symbol="diamond" className="my-6" />

          {/* Royal Heading */}
          <div className="inline-block px-6 py-1.5 rounded-full bg-[#B58B35]/10 border border-[#B58B35]/30 mb-4">
            <span className="font-serif uppercase tracking-[0.25em] text-[#B58B35] text-xs sm:text-sm font-semibold">
              {weddingData.mainInvitationMessage.heading}
            </span>
          </div>
          <p
            className="font-arabic text-[#B58B35] text-2xl sm:text-3xl mb-8"
            dir="rtl"
          >
            {weddingData.mainInvitationMessage.headingArabic}
          </p>

          {/* Invitation — English + Arabic for Safna & Afras */}
          <div className="max-w-2xl mx-auto space-y-4">
            <h3 className="font-display text-2xl sm:text-3xl text-[#243A2D] font-bold tracking-tight">
              {weddingData.mainInvitationMessage.invitationBy}
            </h3>

            <p className="font-serif text-base sm:text-lg text-[#5E5A4F] leading-relaxed">
              {weddingData.mainInvitationMessage.body}
            </p>

            <p
              className="font-arabic text-[#243A2D] text-lg sm:text-xl leading-relaxed"
              dir="rtl"
            >
              {weddingData.invitationArabic}
            </p>
          </div>

          {/* Couple Spotlight Presentation */}
          <div className="my-10 py-6 px-4 sm:px-8 rounded-2xl bg-white/70 border border-[#B58B35]/20 max-w-xl mx-auto shadow-xs">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#9DA78B] font-serif">
                The Bride
              </span>
              <p className="font-display text-2xl sm:text-3xl font-bold text-[#243A2D]">
                {weddingData.bride.fullName}
              </p>
              <p className="font-arabic text-[#B58B35] text-xl" dir="rtl">
                {weddingData.bride.arabicName}
              </p>
              {weddingData.bride.qualifications ? (
                <p className="font-serif text-xs sm:text-sm text-[#B58B35] font-semibold">
                  {weddingData.bride.qualifications}
                </p>
              ) : null}
            </div>

            <div className="my-3 flex items-center justify-center gap-3">
              <div className="h-[1px] w-12 bg-[#B58B35]/40" />
              <span className="font-script text-2xl sm:text-3xl text-[#B58B35]">
                with
              </span>
              <div className="h-[1px] w-12 bg-[#B58B35]/40" />
            </div>

            <div className="space-y-1">
              <span className="text-xs uppercase tracking-widest text-[#9DA78B] font-serif">
                The Groom
              </span>
              <p className="font-display text-2xl sm:text-3xl font-bold text-[#243A2D]">
                {weddingData.groom.fullName}
              </p>
              <p className="font-arabic text-[#B58B35] text-xl" dir="rtl">
                {weddingData.groom.arabicName}
              </p>
              {weddingData.groom.qualifications ? (
                <p className="font-serif text-xs sm:text-sm text-[#B58B35] font-semibold">
                  {weddingData.groom.qualifications}
                </p>
              ) : null}
            </div>
          </div>

          {/* Invitation Call to Events */}
          <p className="font-serif text-base sm:text-lg text-[#243A2D] font-medium max-w-2xl mx-auto leading-relaxed">
            {weddingData.mainInvitationMessage.eventInvite}
          </p>
          <p
            className="font-arabic text-[#5E5A4F] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mt-3"
            dir="rtl"
          >
            {weddingData.mainInvitationMessage.eventInviteArabic}
          </p>

          <OrnamentalDivider variant="gold" symbol="floral" className="my-8" />

          {/* Compliments badge */}
          <p className="font-serif italic text-xs sm:text-sm text-[#9DA78B] uppercase tracking-wider">
            Inshallaha
          </p>
        </div>
      </div>
    </section>
  );
}
