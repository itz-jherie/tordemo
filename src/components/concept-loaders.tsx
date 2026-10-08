"use client";

import { useEffect, useState } from "react";

/* ─────────────────────────────────────────────────────────────
   01. FRAME LOADER — Light Luxury Editorial Viewfinder
   ───────────────────────────────────────────────────────────── */
export function FrameLoader() {
  const [percent, setPercent] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 850;
    let animId: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setPercent(Math.floor(p * 100));
      if (p < 1) {
        animId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => setIsGone(true), 650);
        }, 100);
      }
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  if (isGone) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none select-none flex">
      {/* Left Curtain */}
      <div
        className={`w-1/2 h-full bg-[#f5f4f0] border-r border-black/10 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isFinished ? "-translate-x-full" : "translate-x-0"
        }`}
      />
      {/* Right Curtain */}
      <div
        className={`w-1/2 h-full bg-[#f5f4f0] border-l border-black/10 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isFinished ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Centerpiece Content */}
      <div
        className={`absolute inset-0 flex flex-col justify-between p-6 md:p-12 text-[#1a1a1a] transition-opacity duration-300 ${
          isFinished ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] text-neutral-500 border-b border-black/10 pb-3">
          <span>TORSTUDIO · ISSUE 2026</span>
          <span className="font-mono">FRAME 01 — CURATED GALLERY</span>
        </div>

        {/* Viewfinder Center Box */}
        <div className="mx-auto flex flex-col items-center justify-center max-w-sm text-center">
          <div className="relative p-8 border border-black/15 bg-white/60 shadow-sm rounded-2xl mb-6">
            <img
              src="/torstudio.png"
              alt="TORSTUDIO"
              className="h-10 md:h-12 w-auto object-contain invert mx-auto"
            />
            {/* Viewfinder crosshairs */}
            <span className="absolute -top-1.5 -left-1.5 h-3 w-3 border-t-2 border-l-2 border-black" />
            <span className="absolute -top-1.5 -right-1.5 h-3 w-3 border-t-2 border-r-2 border-black" />
            <span className="absolute -bottom-1.5 -left-1.5 h-3 w-3 border-b-2 border-l-2 border-black" />
            <span className="absolute -bottom-1.5 -right-1.5 h-3 w-3 border-b-2 border-r-2 border-black" />
          </div>

          <div className="h-[1px] w-36 bg-black/15 overflow-hidden rounded-full">
            <div className="h-full bg-[#1a1a1a] transition-all duration-75" style={{ width: `${percent}%` }} />
          </div>
          <span className="mt-3 font-serif italic text-lg text-neutral-600">
            Framing motion {String(percent).padStart(2, "0")}%
          </span>
        </div>

        <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-neutral-400 border-t border-black/10 pt-3">
          <span>HORIZONTAL ARCHIVE</span>
          <span>KINETIC CHOREOGRAPHY</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   02. MONOLITH LOADER — Monumental Tectonic Dark Split
   ───────────────────────────────────────────────────────────── */
export function MonolithLoader() {
  const [percent, setPercent] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 900;
    let animId: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setPercent(Math.floor(p * 100));
      if (p < 1) {
        animId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => setIsGone(true), 700);
        }, 120);
      }
    };
    animId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animId);
  }, []);

  if (isGone) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none select-none flex flex-col">
      {/* Top Slab */}
      <div
        className={`w-full h-1/2 bg-[#060606] border-b border-white/10 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isFinished ? "-translate-y-full" : "translate-y-0"
        }`}
      />
      {/* Bottom Slab */}
      <div
        className={`w-full h-1/2 bg-[#060606] border-t border-white/10 transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
          isFinished ? "translate-y-full" : "translate-y-0"
        }`}
      />

      {/* Floating Center Monument */}
      <div
        className={`absolute inset-0 flex flex-col justify-between p-8 text-neutral-100 transition-opacity duration-300 ${
          isFinished ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.3em] text-neutral-600">
          <span>MONOLITH · 02</span>
          <span>TECTONIC SCALE</span>
        </div>

        <div className="mx-auto flex flex-col items-center justify-center text-center">
          <div className="relative mb-6">
            <span className="absolute -inset-8 flex items-center justify-center text-8xl font-bold uppercase text-white/[0.03] select-none scale-125">
              MONO
            </span>
            <img
              src="/torstudio.png"
              alt="TORSTUDIO"
              className="relative z-10 h-12 md:h-14 w-auto object-contain opacity-95"
            />
          </div>

          <div className="flex items-center gap-1 my-3">
            {[1, 2, 3, 4, 5, 6].map((k) => (
              <span
                key={k}
                className="w-1.5 bg-white transition-all duration-150"
                style={{
                  height: `${6 + ((percent + k * 15) % 18)}px`,
                  opacity: percent > k * 15 ? 1 : 0.2,
                }}
              />
            ))}
          </div>

          <div className="font-mono text-2xl font-bold tracking-tighter text-white">
            [{String(percent).padStart(3, "0")}]
          </div>
          <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.3em] text-neutral-500">
            ANCHORING PARALLAX CORE
          </p>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-600">
          <span>FULL BLEED STACK</span>
          <span>© 2026 TORSTUDIO</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   03. CHOREO LOADER — Technical Frame Sequencer & Audio EQ
   ───────────────────────────────────────────────────────────── */
export function ChoreoLoader() {
  const [frame, setFrame] = useState(1);
  const [isFinished, setIsFinished] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    let current = 1;
    const interval = setInterval(() => {
      current += 2;
      if (current >= 60) {
        setFrame(60);
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => setIsGone(true), 650);
        }, 120);
      } else {
        setFrame(current);
      }
    }, 28);
    return () => clearInterval(interval);
  }, []);

  if (isGone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-between bg-[#0b0b0b] text-neutral-200 font-mono transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] pointer-events-none select-none border-b-2 border-white/10 ${
        isFinished ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      {/* Top Deck Line */}
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-white animate-pulse-dot" />
          <span>CHOREO ENGINE · RUNTIME</span>
        </div>
        <div>
          MOTION SYSTEM 0{frame}
        </div>
      </div>

      {/* Center Sequencer */}
      <div className="mx-auto flex flex-col items-center justify-center p-6 text-center">
        {/* Equalizer Waveform */}
        <div className="flex items-end gap-1 mb-8 h-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <span
              key={i}
              className="w-1 rounded-sm bg-white"
              style={{
                height: `${8 + Math.sin(frame * 0.4 + i) * 16 + 12}px`,
                transition: "height 0.05s ease",
              }}
            />
          ))}
        </div>

        <img
          src="/torstudio.png"
          alt="TORSTUDIO"
          className="h-10 md:h-12 w-auto object-contain mb-6"
        />

        <div className="flex items-center gap-3 border border-white/15 bg-white/5 px-4 py-2 rounded">
          <span className="text-[10px] tracking-widest text-neutral-400">INDEX SYNC:</span>
          <span className="text-xl font-bold text-white">0{frame} · READY</span>
        </div>
        <p className="mt-3 text-[10px] uppercase tracking-[0.25em] text-neutral-500">
          INITIALIZING MOTION ARCHIVE
        </p>
      </div>

      {/* Bottom Deck Line */}
      <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
        <span>SPLIT-FLAP MATRIX</span>
        <span>TORSTUDIO CHOREO 03</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   04. KINETIC LOADER — Rapid Word Strobe & High-Velocity Wipe
   ───────────────────────────────────────────────────────────── */
const STROBE_WORDS = ["WE", "MAKE", "BRANDS", "MOVE", "KINETIC", "TORSTUDIO"];

export function KineticLoader() {
  const [wordIdx, setWordIdx] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      idx += 1;
      if (idx < STROBE_WORDS.length) {
        setWordIdx(idx);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => setIsGone(true), 600);
        }, 150);
      }
    }, 130);
    return () => clearInterval(interval);
  }, []);

  if (isGone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-between bg-black text-white transition-transform duration-600 ease-[cubic-bezier(0.9,0,0.1,1)] pointer-events-none select-none ${
        isFinished ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex items-center justify-between p-6 border-b border-white/20 text-[11px] font-bold uppercase tracking-[0.2em]">
        <span>KINETIC · 04</span>
        <span className="bg-white text-black px-2 py-0.5 rounded text-[10px]">HIGH VELOCITY</span>
      </div>

      {/* Strobe Word Storm */}
      <div className="mx-auto flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-[18vw] md:text-[10rem] font-bold uppercase leading-none tracking-tighter">
          {STROBE_WORDS[wordIdx]}
        </h2>
        {wordIdx === STROBE_WORDS.length - 1 && (
          <img
            src="/torstudio.png"
            alt="TORSTUDIO"
            className="h-10 md:h-12 w-auto object-contain mt-6 animate-pulse"
          />
        )}
      </div>

      <div className="flex items-center justify-between p-6 border-t border-white/20 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
        <span>DYNAMIC TYPOGRAPHY ENGINE</span>
        <span className="font-mono">KINETIC EDITORIAL</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   05. PLAYGROUND LOADER — Tactile Brutalist Sticker Slap
   ───────────────────────────────────────────────────────────── */
export function PlaygroundLoader() {
  const [step, setStep] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 160);
    const t2 = setTimeout(() => setStep(2), 340);
    const t3 = setTimeout(() => setStep(3), 520);
    const t4 = setTimeout(() => {
      setIsFinished(true);
      setTimeout(() => setIsGone(true), 650);
    }, 950);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (isGone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-between bg-[#f2f1ed] text-neutral-950 p-6 md:p-12 transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] pointer-events-none select-none ${
        isFinished ? "-translate-y-full rotate-2" : "translate-y-0 rotate-0"
      }`}
    >
      <div className="flex items-center justify-between border-b-2 border-neutral-950 pb-3 text-xs font-bold uppercase tracking-[0.2em]">
        <span>POSTER PLAYGROUND · 05</span>
        <span className="bg-neutral-950 text-white px-2 py-0.5 rounded text-[10px]">STICKER DROP</span>
      </div>

      {/* Center Sticker Pack Slap */}
      <div className="relative mx-auto flex flex-col items-center justify-center text-center">
        {/* Sticker 1: Top badge */}
        {step >= 1 && (
          <span className="rotate-[-4deg] rounded-xl border-2 border-neutral-950 bg-white px-5 py-2 text-xs font-bold uppercase shadow-[6px_6px_0_#0a0a0b] mb-4 animate-bounce">
            ✦ FRESH DROP 2026
          </span>
        )}

        {/* Sticker 2: Main Logo Block */}
        <div className="rotate-[2deg] rounded-3xl border-3 border-neutral-950 bg-white p-8 shadow-[10px_10px_0_#0a0a0b]">
          <img
            src="/torstudio.png"
            alt="TORSTUDIO"
            className="h-10 md:h-12 w-auto object-contain invert mx-auto"
          />
        </div>

        {/* Sticker 3: Bottom action badge */}
        {step >= 2 && (
          <span className="mt-4 rotate-[-2deg] rounded-xl border-2 border-neutral-950 bg-neutral-950 text-white px-6 py-2 text-xs font-bold uppercase shadow-[6px_6px_0_#a3a3a3]">
            {step >= 3 ? "PEELING..." : "SLAPPING WALL..."}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between border-t-2 border-neutral-950 pt-3 text-[11px] font-bold uppercase tracking-[0.2em] text-neutral-700">
        <span>BRUTALIST TACTILE WALL</span>
        <span>TORSTUDIO VOL. 26</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   00. SHOWROOM LOADER — Curated Client Deck Portal
   ───────────────────────────────────────────────────────────── */
export function ShowroomLoader() {
  const [percent, setPercent] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 800;
    let animId: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setPercent(Math.floor(p * 100));
      if (p < 1) {
        animId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setIsFinished(true);
          setTimeout(() => setIsGone(true), 650);
        }, 100);
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
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
        <span className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-dot" />
          TORSTUDIO · CLIENT SHOWROOM
        </span>
        <span className="font-mono">5 DIRECTIONS</span>
      </div>

      <div className="mx-auto flex flex-col items-center justify-center px-6">
        <img
          src="/torstudio.png"
          alt="TORSTUDIO"
          className="h-12 md:h-14 w-auto object-contain mb-8 transition-transform duration-500"
          style={{ transform: `scale(${0.92 + (percent / 100) * 0.08})` }}
        />
        <div className="h-[2px] w-48 md:w-64 overflow-hidden rounded-full bg-white/15">
          <div
            className="h-full bg-white transition-[width] duration-75 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="mt-4 flex items-baseline gap-2 font-mono">
          <span className="text-3xl font-bold tracking-tighter md:text-4xl">
            {String(percent).padStart(2, "0")}
          </span>
          <span className="text-xs text-neutral-400">%</span>
        </div>
        <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-neutral-500">
          INITIALIZING PRESENTATION DECK
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
        <span>CURATED SELECTION</span>
        <span className="font-mono">2026 ARCHIVE</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   06. CINEMA LOADER — Ambient Motion Canvas
   ───────────────────────────────────────────────────────────── */
export function CinemaLoader() {
  const [percent, setPercent] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isGone, setIsGone] = useState(false);

  useEffect(() => {
    const duration = 750;
    const start = performance.now();

    const frame = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = Math.round((1 - Math.pow(1 - p, 3)) * 100);
      setPercent(eased);

      if (p < 1) {
        requestAnimationFrame(frame);
      } else {
        setIsFinished(true);
        setTimeout(() => setIsGone(true), 600);
      }
    };

    const id = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(id);
  }, []);

  if (isGone) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col justify-between bg-[#050505] text-neutral-100 transition-all duration-700 ease-[cubic-bezier(0.9,0,0.1,1)] pointer-events-none select-none ${
        isFinished ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-neutral-400">
        <span className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          CINEMA · 06
        </span>
        <span className="font-mono">IMMERSIVE BACKGROUND MOTION</span>
      </div>

      <div className="mx-auto flex flex-col items-center justify-center px-6 text-center">
        {/* Motion Canvas Ring */}
        <div className="relative mb-8 flex h-32 w-32 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-dashed border-white/20 animate-spin-slower" />
          <div className="absolute inset-2 rounded-full border border-white/10" />
          <div className="absolute inset-6 rounded-full bg-white/5 backdrop-blur-sm" />
          <img
            src="/torstudio.png"
            alt="TORSTUDIO"
            className="relative z-10 h-10 w-auto object-contain"
          />
        </div>

        <div className="h-[2px] w-52 overflow-hidden rounded-full bg-white/15">
          <div
            className="h-full bg-white transition-[width] duration-75 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>

        <div className="mt-4 flex items-baseline gap-1.5 font-mono">
          <span className="text-3xl font-bold tracking-tight">{percent}</span>
          <span className="text-xs text-neutral-400">%</span>
        </div>

        <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-neutral-500 font-mono">
          INITIALIZING MOTION DESIGN CANVAS
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-white/10 px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-neutral-500">
        <span>TOR STUDIO ARCHIVE</span>
        <span className="font-mono">DIGITAL BRAND MOTION</span>
      </div>
    </div>
  );
}

