"use client";

import React, { useState, useEffect } from "react";
import { weddingData } from "@/data/wedding";
import { Clock, Heart } from "lucide-react";
import { LocationBeacon } from "./LocationBeacon";

interface WeddingCountdownProps {
  variant?: "hero" | "section";
}

export function WeddingCountdown({ variant = "hero" }: WeddingCountdownProps) {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    isExpired: boolean;
  } | null>(null);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date(weddingData.targetDateTimeISO).getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
      } else {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
          isExpired: false,
        });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: mounted && timeLeft ? timeLeft.days : 0 },
    { label: "Hours", value: mounted && timeLeft ? timeLeft.hours : 0 },
    { label: "Minutes", value: mounted && timeLeft ? timeLeft.minutes : 0 },
    { label: "Seconds", value: mounted && timeLeft ? timeLeft.seconds : 0 },
  ];

  const isHero = variant === "hero";

  return (
    <div
      id="countdown"
      className={
        isHero
          ? "w-full max-w-2xl mx-auto mt-10 sm:mt-12"
          : "py-16 sm:py-20 px-4 sm:px-6 bg-[#18281F] text-[#F8F3E8] relative overflow-hidden"
      }
    >
      <div
        className={
          isHero
            ? "relative rounded-3xl bg-[#18281F] text-[#F8F3E8] border-2 border-[#B58B35]/50 shadow-2xl px-4 py-8 sm:px-8 sm:py-10 overflow-hidden"
            : "relative z-10 max-w-4xl mx-auto text-center"
        }
      >
        {isHero && (
          <>
            <div className="absolute inset-0 bg-dark-ornate opacity-50 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#B58B35]/20 rounded-full blur-3xl pointer-events-none" />
          </>
        )}

        <div className="relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B58B35]/25 border border-[#E5C365]/50 text-[#E5C365] text-xs sm:text-sm font-serif uppercase tracking-widest mb-4">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>Countdown to Our Day</span>
          </div>

          <h2
            className={`font-display font-bold tracking-tight text-[#F8F3E8] mb-2 ${
              isHero
                ? "text-2xl sm:text-4xl md:text-5xl"
                : "text-2xl sm:text-4xl"
            }`}
          >
            Counting Down to Forever
          </h2>

          <p className="font-serif italic text-sm sm:text-base text-[#E5C365]/90 max-w-lg mx-auto mb-2">
            {weddingData.dateSummary} · {weddingData.islamicDateSummary}
          </p>
          <LocationBeacon variant="dark" className="mb-6" />

          {timeLeft?.isExpired ? (
            <div className="my-4 p-5 sm:p-6 rounded-2xl bg-[#243A2D] border border-[#B58B35] max-w-lg mx-auto">
              <Heart className="w-8 h-8 text-[#E5C365] mx-auto mb-3 animate-pulse" />
              <h3 className="font-display text-xl sm:text-2xl text-[#E5C365] font-semibold mb-2">
                The Blessed Day Is Here!
              </h3>
              <p className="font-serif text-sm text-[#F8F3E8]/90">
                Alhamdulillah — may Allah shower love and barakah upon Safna
                &amp; Afras.
              </p>
            </div>
          ) : (
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-xl mx-auto ${
                isHero ? "my-2" : "my-8"
              }`}
            >
              {timeUnits.map((unit) => (
                <div
                  key={unit.label}
                  className={`relative rounded-2xl bg-[#243A2D]/90 border border-[#B58B35]/50 shadow-xl backdrop-blur-sm ${
                    isHero ? "p-4 sm:p-6" : "p-4 sm:p-6"
                  }`}
                >
                  <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-[#E5C365]/70" />
                  <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-[#E5C365]/70" />
                  <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-[#E5C365]/70" />
                  <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-[#E5C365]/70" />

                  <div
                    className={`font-display font-bold text-[#E5C365] tracking-tight min-h-[48px] flex items-center justify-center ${
                      isHero
                        ? "text-4xl sm:text-5xl md:text-6xl"
                        : "text-3xl sm:text-5xl"
                    }`}
                  >
                    {timeLeft === null ? (
                      <span className="opacity-40">--</span>
                    ) : (
                      String(unit.value).padStart(2, "0")
                    )}
                  </div>

                  <div className="font-serif text-[11px] sm:text-xs uppercase tracking-widest text-[#9DA78B] mt-2 font-semibold">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
