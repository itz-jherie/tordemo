"use client";

import { useEffect, useState } from "react";

export default function StudioLoader() {
  const [percent, setPercent] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    // Fast, elegant loader counting up to 100%
    const startTime = performance.now();
    const duration = 850; // ms

    let animId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Easing out curve
      const eased = Math.floor(progress * 100);
      setPercent(eased);

      if (progress < 1) {
        animId = requestAnimationFrame(tick);
      } else {
        setPercent(100);
        setTimeout(() => {
          setIsFinished(true); // triggers exit animation
          setTimeout(() => {
            setIsGone(true); // fully unmounts
          }, 650);
        }, 120);
      }
    };

    animId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animId);
  }, []);

  if (isGone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-between bg-[#0a0a0b] text-neutral-100 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] pointer-events-none select-none ${
        isFinished ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Top bar info */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-dot" />
          TORSTUDIO · MOTION DESIGN
        </span>
        <span className="font-mono">TORSTUDIO · 2026</span>
      </div>

      {/* Center Logo & Kinetic Counter */}
      <div className="mx-auto flex flex-col items-center justify-center px-6">
        <div className="relative mb-8 overflow-hidden">
          <img
            src="/torstudio.png"
            alt="TORSTUDIO"
            className="h-12 md:h-16 w-auto object-contain transition-transform duration-700 ease-out"
            style={{
              transform: `scale(${0.9 + (percent / 100) * 0.1})`,
            }}
          />
        </div>

        {/* Progress Bar Line */}
        <div className="h-[2px] w-48 md:w-64 overflow-hidden rounded-full bg-white/15">
          <div
            className="h-full bg-white transition-[width] duration-75 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="mt-4 flex items-baseline gap-2 font-mono">
          <span className="text-3xl font-bold tracking-tighter md:text-4xl">
            {String(percent).padStart(2, "0")}
          </span>
          <span className="text-xs text-neutral-400">%</span>
        </div>
      </div>

      {/* Bottom Bar info */}
      <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
        <span>KINETIC · BRAND · ADS</span>
        <span className="font-mono">CHOREOGRAPHY PIPELINE</span>
      </div>
    </div>
  );
}
