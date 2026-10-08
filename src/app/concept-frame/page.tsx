"use client";
import BackNav from "@/components/back-nav";
import { FrameLoader } from "@/components/concept-loaders";
import MotionVideoModal from "@/components/motion-video-modal";
import {
  PROJECTS,
  SERVICES,
  PROCESS,
  STUDIO_VIDEOS,
  STUDIO_FOUNDER,
  type MotionVideo,
} from "@/data/studio";
import { useRevealRoot } from "@/components/use-reveal";
import { useState } from "react";
import { useScrollProgress } from "@/components/use-scroll-progress";

// Curated selection — motion-led work first, kept to four for a calm grid.
const FEATURED = [PROJECTS[0], PROJECTS[3], PROJECTS[1], PROJECTS[2]];
const CLIENT_NAMES = ["RollPay", "Lacruise", "Monica.cash", "Koyn", "ThinkGrowth", "Fluur"];

export default function FramePage() {
  const ref = useRevealRoot<HTMLDivElement>();
  const { progress } = useScrollProgress();
  const [activeVideo, setActiveVideo] = useState<MotionVideo | null>(null);
  const [inlinePlaying, setInlinePlaying] = useState(false);
  const reel = STUDIO_VIDEOS[0];

  return (
    <div ref={ref} className="grain min-h-screen bg-[#f5f4f0] text-[#1a1a1a]">
      <div
        className="fixed top-0 left-0 z-50 h-[2px] bg-[#1a1a1a]"
        style={{ width: `${progress * 100}%` }}
      />

      <FrameLoader />
      <BackNav index="01" title="FRAME" dark={false} />

      {/* ── Nav ── */}
      <nav className="flex items-center justify-between px-5 pt-14 pb-5 md:px-10">
        <img src="/torstudio.png" alt="TORSTUDIO" className="h-8 w-auto object-contain invert" />
        <div className="hidden gap-8 text-[11px] uppercase tracking-[0.18em] text-neutral-500 md:flex">
          <a href="#work" className="transition hover:text-black">Work</a>
          <a href="#services" className="transition hover:text-black">Services</a>
          <a href="#process" className="transition hover:text-black">Process</a>
          <a href="#studio" className="transition hover:text-black">Studio</a>
        </div>
        <a
          href="#contact"
          className="rounded-full bg-[#1a1a1a] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-neutral-700"
        >
          Let&apos;s talk
        </a>
      </nav>

      {/* ── Hero ── */}
      <header className="px-5 pt-14 pb-16 md:px-10 md:pt-20 md:pb-24">
        <p data-reveal className="text-[11px] uppercase tracking-[0.22em] text-neutral-500">
          Motion design studio — Akure / Worldwide
        </p>
        <h1 className="mask-group mt-5 max-w-4xl font-bold uppercase leading-[0.92] tracking-[-0.03em]">
          <span className="mask-line block text-[13vw] md:text-[5.5rem]"><span>Brands in</span></span>
          <span className="mask-line block text-[13vw] md:text-[5.5rem]">
            <span className="font-serif font-normal normal-case italic tracking-normal">motion.</span>
          </span>
        </h1>
        <p data-reveal className="mt-6 max-w-xl text-[15px] leading-relaxed text-neutral-600 md:text-base">
          {STUDIO_FOUNDER.name} is a motion-first studio crafting brand identities,
          kinetic typography, and ad creatives for startups and established teams.
        </p>
        <div data-reveal className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#work"
            className="rounded-full bg-[#1a1a1a] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-neutral-700"
          >
            View selected work
          </a>
          <button
            onClick={() => setInlinePlaying(true)}
            className="rounded-full border border-black/15 px-6 py-3 text-[11px] uppercase tracking-[0.12em] transition hover:border-black/40"
          >
            Watch showreel · {reel.duration}
          </button>
        </div>
        <div data-reveal className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-black/10 pt-5 text-[11px] uppercase tracking-[0.18em] text-neutral-500">
          <span>Motion / Brand / Ads</span>
          <span>Based in {STUDIO_FOUNDER.location}</span>
          <span>Available for commissions</span>
        </div>
      </header>

      {/* ── Showreel ── */}
      <section className="px-5 md:px-10">
        <div data-reveal="zoom" className="overflow-hidden rounded-2xl border border-black/10 bg-[#111111]">
          {inlinePlaying ? (
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://player.vimeo.com/video/${reel.id}?autoplay=1&title=0&byline=0&portrait=0`}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={reel.title}
              />
              <button
                onClick={() => setInlinePlaying(false)}
                className="absolute top-4 right-4 rounded-full bg-black/70 px-3.5 py-1.5 font-mono text-xs text-white backdrop-blur transition hover:bg-black"
              >
                ✕ Close
              </button>
            </div>
          ) : (
            <button
              onClick={() => setInlinePlaying(true)}
              className="group relative block w-full text-left"
              aria-label="Play showreel"
            >
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="absolute inset-0 h-full w-full object-cover opacity-40"
              />
              <div className="relative flex aspect-video min-h-[300px] w-full flex-col items-center justify-center p-6 text-center text-white">
                <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-base text-black transition group-hover:scale-105">
                  ▶
                </span>
                <p className="mt-5 w-full text-balance text-[13px] font-semibold uppercase tracking-[0.1em] md:text-sm md:tracking-[0.14em]">{reel.title}</p>
                <p className="mt-1 w-full font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
                  Showreel · {reel.duration}
                </p>
              </div>
            </button>
          )}
        </div>
      </section>

      {/* ── Clients ── */}
      <section className="px-5 pt-14 md:px-10">
        <p data-reveal className="text-[10px] uppercase tracking-[0.28em] text-neutral-400">
          Selected clients
        </p>
        <p data-reveal className="mt-3 text-sm tracking-wide text-neutral-600 md:text-[15px]">
          {CLIENT_NAMES.join("  ·  ")}
        </p>
      </section>

      {/* ── Work ── */}
      <section id="work" className="px-5 pt-20 md:px-10">
        <div className="flex items-end justify-between border-t border-black/10 pt-10">
          <div>
            <p data-reveal className="text-[10px] uppercase tracking-[0.28em] text-neutral-400">
              01 — Featured work
            </p>
            <h2 data-reveal className="mt-2 text-3xl font-bold uppercase tracking-tight md:text-5xl">
              Selected work
            </h2>
          </div>
          <a
            data-reveal
            href={STUDIO_FOUNDER.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-[11px] uppercase tracking-[0.18em] text-neutral-500 underline-offset-4 hover:text-black hover:underline sm:block"
          >
            All work on Behance ↗
          </a>
        </div>

        <div className="mt-10 grid gap-x-6 gap-y-12 md:grid-cols-2">
          {FEATURED.map((p, i) => (
            <article key={p.slug} data-reveal data-delay={String((i % 2) * 90)} className="group">
              <div className="overflow-hidden rounded-xl border border-black/10 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
                  {p.image && (
                    <img
                      src={p.image}
                      alt={p.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  )}
                  <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-black">
                    {p.category}
                  </span>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
                    {p.client} · {p.year}
                  </p>
                  <h3 className="mt-1.5 text-xl font-bold tracking-tight md:text-2xl">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">{p.meta}</p>
                  <div className="mt-4 flex items-center gap-4 border-t border-black/5 pt-4 text-[11px] uppercase tracking-[0.14em]">
                    {p.externalUrl && (
                      <a
                        href={p.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-neutral-900 underline-offset-4 hover:underline"
                      >
                        Case study ↗
                      </a>
                    )}
                    {p.vimeoId && (
                      <button
                        onClick={() => {
                          const v = STUDIO_VIDEOS.find((vid) => vid.id === p.vimeoId);
                          if (v) setActiveVideo(v);
                        }}
                        className="text-neutral-500 transition hover:text-black"
                      >
                        Watch motion →
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="px-5 pt-24 md:px-10">
        <p data-reveal className="text-[10px] uppercase tracking-[0.28em] text-neutral-400">
          02 — Services
        </p>
        <h2 data-reveal className="mt-2 text-3xl font-bold uppercase tracking-tight md:text-5xl">
          What we do
        </h2>
        <div className="mt-10 grid gap-px overflow-hidden rounded-xl border border-black/10 bg-black/10 md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <div key={s.index} data-reveal data-delay={String(i * 80)} className="bg-[#f5f4f0] p-7 md:p-8">
              <span className="font-mono text-xs text-neutral-400">{s.index}</span>
              <h3 className="mt-3 text-xl font-bold uppercase tracking-tight">{s.name}</h3>
              <p className="mt-1 text-[13px] text-neutral-500">{s.tag}</p>
              <ul className="mt-6 space-y-2.5 border-t border-black/10 pt-5">
                {s.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-neutral-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ── */}
      <section id="process" className="px-5 pt-24 md:px-10">
        <p data-reveal className="text-[10px] uppercase tracking-[0.28em] text-neutral-400">
          03 — Process
        </p>
        <h2 data-reveal className="mt-2 text-3xl font-bold uppercase tracking-tight md:text-5xl">
          How we work
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {PROCESS.map((pr, i) => (
            <div key={pr.step} data-reveal data-delay={String(i * 70)} className="border-t border-black/15 pt-5">
              <span className="font-mono text-xs text-neutral-400">{pr.step}</span>
              <h3 className="mt-2 text-base font-bold uppercase tracking-tight">{pr.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">{pr.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Studio ── */}
      <section id="studio" className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-2xl rounded-2xl border border-black/10 bg-white p-10 text-center md:p-14">
          <p data-reveal className="text-[10px] uppercase tracking-[0.28em] text-neutral-400">
            The studio
          </p>
          <p data-reveal className="mt-5 text-xl leading-relaxed text-neutral-800 md:text-2xl">
            TORSTUDIO is led by <span className="font-semibold text-black">{STUDIO_FOUNDER.alias}</span>,{" "}
            {STUDIO_FOUNDER.role.toLowerCase()} based in {STUDIO_FOUNDER.location} and
            working with clients worldwide.
          </p>
          <div data-reveal className="mt-7 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.14em]">
            <a
              href={STUDIO_FOUNDER.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/15 px-5 py-2.5 transition hover:border-black/40"
            >
              Behance ↗
            </a>
            <a
              href={STUDIO_FOUNDER.vimeo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-black/15 px-5 py-2.5 transition hover:border-black/40"
            >
              Vimeo ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="contact" className="border-t border-black/10 px-5 py-16 text-center md:px-10 md:py-20">
        <p data-reveal className="text-[10px] uppercase tracking-[0.28em] text-neutral-400">
          Commission a project
        </p>
        <a href="mailto:hello@torstudio.co" data-reveal className="mask-group mt-4 inline-block">
          <span className="mask-line block text-[13vw] font-bold uppercase leading-none tracking-[-0.03em] md:text-[5rem]">
            <span>
              Say <span className="font-serif font-normal normal-case italic">hello.</span>
            </span>
          </span>
        </a>
        <div data-reveal className="mt-8 flex flex-col items-center gap-4">
          <a
            href="mailto:hello@torstudio.co"
            className="rounded-full bg-[#1a1a1a] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-neutral-700"
          >
            hello@torstudio.co
          </a>
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-400">
            © 2026 TORSTUDIO · Motion, Brand & Ads
          </p>
        </div>
      </footer>

      <MotionVideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}
