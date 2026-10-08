"use client";
import BackNav from "@/components/back-nav";
import { PROJECTS, SERVICES, STATS } from "@/data/studio";
import { useRevealRoot } from "@/components/use-reveal";
import { useEffect, useState, useRef } from "react";

function useMouseGlow() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);
  return ref;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handler = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? window.scrollY / h : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return progress;
}

export default function VoidPage() {
  const ref = useRevealRoot<HTMLDivElement>();
  const glowRef = useMouseGlow();
  const scrollProgress = useScrollProgress();

  return (
    <div
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (glowRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      className="grain min-h-screen bg-[#060606] text-neutral-100"
      style={{
        // cursor glow
        background: `radial-gradient(800px circle at var(--mx, 50%) var(--my, 50%), rgba(255,255,255,0.02), transparent 40%), #060606`,
      }}
    >
      <BackNav index="05" title="VOID" />

      {/* ── Scroll progress bar ── */}
      <div className="fixed top-0 left-0 z-50 h-[2px] bg-white/90 transition-none" style={{ width: `${scrollProgress * 100}%` }} />

      {/* ── Nav ── */}
      <nav className="flex items-center justify-between px-5 pt-14 pb-4 md:px-10">
        <img src="/torstudio.png" alt="TORSTUDIO" className="h-7 w-auto object-contain" />
        <a
          href="#contact"
          className="rounded-full bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-neutral-200"
        >
          Get in touch
        </a>
      </nav>

      {/* ── HERO — Vertically stacked word art ── */}
      <header className="relative overflow-hidden px-5 pt-16 pb-24 md:px-10 md:pt-24 md:pb-40">
        {/* Background noise circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-white/[0.015] blur-[120px]" />

        <div className="mask-group relative z-10">
          <h1 className="font-bold uppercase leading-[0.82] tracking-[-0.05em]">
            <span className="mask-line block text-[18vw] md:text-[12rem]">
              <span>We</span>
            </span>
            <span className="mask-line block text-[18vw] md:text-[12rem]">
              <span className="text-stroke">design</span>
            </span>
            <span className="mask-line block text-[18vw] md:text-[12rem]">
              <span>in</span>
            </span>
            <span className="mask-line block text-[18vw] md:text-[12rem]">
              <span className="text-stroke-faint">motion.</span>
            </span>
          </h1>
        </div>

        <div data-reveal className="mt-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-md text-sm leading-relaxed text-neutral-400">
            TORSTUDIO is a motion-first creative studio. We craft brand identities that move, ad campaigns that stop thumbs, and kinetic experiences people remember.
          </p>
          <div className="flex gap-3">
            <a href="#work" className="rounded-full bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-black transition hover:bg-neutral-200">
              See work
            </a>
            <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 text-[11px] uppercase tracking-[0.15em] transition hover:border-white/50">
              Get in touch
            </a>
          </div>
        </div>
      </header>

      {/* ── Infinite marquee ── */}
      <div className="overflow-hidden border-y border-white/8 py-4">
        <div className="flex w-max animate-marquee gap-12 text-[11px] font-medium uppercase tracking-[0.3em] text-neutral-500">
          {[0, 1].map((k) => (
            <span key={k}>
              Motion design&nbsp;·&nbsp;Brand identity&nbsp;·&nbsp;Ad design&nbsp;·&nbsp;Flyer suites&nbsp;·&nbsp;Kinetic type&nbsp;·&nbsp;Logo animation&nbsp;·&nbsp;Title sequences&nbsp;·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Showreel ── */}
      <section className="px-5 pt-16 md:px-10">
        <div data-reveal="zoom" className="group relative overflow-hidden rounded-[2rem] border border-white/10">
          <div className="animate-kenburns absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,_#2a2a2a_0%,_#0a0a0a_70%)]" />
          <div className="relative flex aspect-[21/9] min-h-[280px] flex-col justify-between p-6 md:p-10">
            <div className="flex justify-between text-[10px] uppercase tracking-[0.2em] text-neutral-400">
              <span>SHOWREEL — 2026</span>
              <span className="font-mono">01:12</span>
            </div>
            <div className="flex w-full flex-col items-center gap-4 text-center">
              <button className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/40 text-sm font-bold uppercase transition-all duration-500 hover:scale-110 hover:bg-white hover:text-black">
                ▶
              </button>
              <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Sound on · Full screen</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-[2px] flex-1 rounded bg-white/15">
                <div className="h-full w-0 rounded bg-white transition-all duration-1000 group-hover:w-1/3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats row ── */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/8 mt-16">
        {STATS.map((s, i) => (
          <div key={s.label} data-reveal data-delay={String(i * 100)} className="bg-[#060606] p-8 text-center md:p-12">
            <p className="text-4xl font-bold md:text-5xl">
              {s.value}<span className="text-neutral-500">{s.suffix}</span>
            </p>
            <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500">{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── Work — Offset grid ── */}
      <section id="work" className="px-5 pt-20 md:px-10">
        <div className="flex items-end justify-between">
          <h2 data-reveal className="text-5xl font-bold uppercase md:text-7xl">
            Work<span className="text-stroke-faint">.</span>
          </h2>
          <span data-reveal className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            Selected projects
          </span>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <a
              key={p.slug}
              href="#contact"
              data-reveal
              data-delay={String(i * 80)}
              className={`group relative overflow-hidden rounded-2xl border border-white/8 bg-neutral-900/40 transition-all duration-500 hover:border-white/20 ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <div className={`relative overflow-hidden bg-gradient-to-br ${p.gradient} ${i === 0 ? "h-72 md:h-96" : "h-56 md:h-72"}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`font-bold uppercase opacity-[0.08] ${i === 0 ? "text-[10rem] md:text-[16rem]" : "text-[8rem] md:text-[12rem]"} tracking-tighter transition-transform duration-700 group-hover:scale-110`}>
                    {p.title.split(" ")[0]}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#060606] via-transparent to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">{p.category} · {p.year}</p>
                  <h3 className="mt-2 text-2xl font-bold md:text-3xl">{p.title}</h3>
                  <p className="mt-2 max-w-md text-sm text-neutral-400">{p.blurb}</p>
                </div>
                <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-sm opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
                  →
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="px-5 pt-24 md:px-10">
        <h2 data-reveal className="text-5xl font-bold uppercase md:text-7xl">
          What we<br /><span className="text-stroke">do.</span>
        </h2>
        <div className="mt-10 space-y-0 divide-y divide-white/8">
          {SERVICES.map((s) => (
            <div key={s.index} data-reveal className="group grid gap-4 py-8 md:grid-cols-12 md:items-center md:py-12">
              <span className="font-mono text-xs text-neutral-600 md:col-span-1">{s.index}</span>
              <h3 className="text-3xl font-bold uppercase md:col-span-4 md:text-4xl">{s.name}</h3>
              <p className="text-sm text-neutral-400 md:col-span-4">{s.tag}</p>
              <div className="flex flex-wrap gap-2 md:col-span-3">
                {s.items.map((item) => (
                  <span key={item} className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-neutral-400">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-4xl">
          <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6">
            About the studio
          </p>
          <p data-reveal className="text-2xl font-medium leading-relaxed md:text-4xl">
            TORSTUDIO is where brands learn to breathe. We build identities that don&apos;t just sit on a page — they pulse, they transition, they <span className="text-stroke-faint">move</span>. Based in Lagos, working globally.
          </p>
        </div>
      </section>

      {/* ── Footer / CTA ── */}
      <footer id="contact" className="border-t border-white/8 px-5 py-20 text-center flex flex-col items-center justify-center md:px-10">
        <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6">Ready?</p>
        <a
          href="mailto:hello@torstudio.co"
          data-reveal
          className="mask-group inline-block"
        >
          <h2 className="font-bold uppercase leading-[0.85] tracking-[-0.04em]">
            <span className="mask-line block text-[12vw] md:text-[6rem]"><span>Let&apos;s</span></span>
            <span className="mask-line block text-[12vw] md:text-[6rem]"><span className="text-stroke">talk.</span></span>
          </h2>
        </a>
        <div data-reveal className="mt-12 flex flex-col items-center gap-5">
          <img src="/torstudio.png" alt="TORSTUDIO" className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
          <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            <span>hello@torstudio.co</span>
            <span className="h-3 w-px bg-white/15" />
            <span>Instagram</span>
            <span className="h-3 w-px bg-white/15" />
            <span>Twitter / X</span>
            <span className="h-3 w-px bg-white/15" />
            <span>© 2026 TORSTUDIO</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
