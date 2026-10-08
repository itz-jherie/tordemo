"use client";
import BackNav from "@/components/back-nav";
import { KineticLoader } from "@/components/concept-loaders";
import MotionVideoModal from "@/components/motion-video-modal";
import { PROJECTS, SERVICES, STATS, CLIENTS, PROCESS, TESTIMONIALS, STUDIO_VIDEOS, type MotionVideo } from "@/data/studio";
import { useRevealRoot } from "@/components/use-reveal";
import { useState } from "react";
import { useScrollProgress } from "@/components/use-scroll-progress";

export default function KineticPage() {
  const ref = useRevealRoot<HTMLDivElement>();
  const { scrollY, progress } = useScrollProgress();
  const [activeVideo, setActiveVideo] = useState<MotionVideo | null>(null);
  const [inlinePlaying, setInlinePlaying] = useState(false);

  return (
    <div ref={ref} className="grain min-h-screen bg-neutral-950 text-neutral-100">
      {/* ── Scroll Progress Line ── */}
      <div
        className="fixed top-0 left-0 z-50 h-[2.5px] bg-white transition-none"
        style={{ width: `${progress * 100}%` }}
      />

      {/* ── Bespoke High-Velocity Word Strobe Kinetic Loader ── */}
      <KineticLoader />

      <BackNav index="04" title="KINETIC" />

      {/* ── Main Nav ── */}
      <nav className="flex items-center justify-between px-4 pt-14 pb-4 md:px-8 border-b border-white/10">
        <div className="flex items-center gap-3">
          <img src="/torstudio.png" alt="TORSTUDIO" className="h-8 md:h-9 w-auto object-contain" />
        </div>
        <div className="hidden gap-8 text-[11px] uppercase tracking-[0.2em] md:flex">
          <a href="#work" className="hover:text-neutral-400 transition">Work</a>
          <a href="#process" className="hover:text-neutral-400 transition">Process</a>
          <a href="#services" className="hover:text-neutral-400 transition">Services</a>
          <a href="#about" className="hover:text-neutral-400 transition">Studio</a>
        </div>
        <a href="#contact" className="rounded-full bg-white px-5 py-2.5 text-[11px] font-bold uppercase text-black transition hover:bg-neutral-200">
          Start a project
        </a>
      </nav>

      {/* ── HERO — Colossal Kinetic Type ── */}
      <header className="mask-group px-4 pt-10 md:px-8">
        <h1 className="font-bold uppercase leading-[0.85] tracking-[-0.04em]">
          <span
            className="mask-line text-[16vw] md:text-[8rem] transition-transform duration-75 ease-out"
            style={{ transform: `translateX(${-Math.min(scrollY * 0.08, 60)}px)` }}
          >
            <span>We make</span>
          </span>
          <span
            className="mask-line text-[16vw] md:text-[8rem] transition-transform duration-75 ease-out"
            style={{ transform: `translateX(${Math.min(scrollY * 0.08, 60)}px)` }}
          >
            <span className="text-stroke">brands</span>
          </span>
          <span
            className="mask-line text-[16vw] md:text-[8rem] transition-transform duration-75 ease-out"
            style={{ transform: `translateX(${-Math.min(scrollY * 0.04, 30)}px)` }}
          >
            <span>move.</span>
          </span>
        </h1>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em]">
            <span data-reveal className="rounded-full border border-white/25 px-4 py-2">Motion design</span>
            <span data-reveal className="rounded-full border border-white/25 px-4 py-2">Brand identity</span>
            <span data-reveal className="rounded-full bg-white px-4 py-2 font-bold text-black">Ad creatives</span>
          </div>
          <p data-reveal className="max-w-md text-sm text-neutral-400 leading-relaxed">
            Lagos-based motion design studio. We don&apos;t build static graphics — we choreograph dynamic visual identities and high-conversion ad motion.
          </p>
        </div>
      </header>

      {/* ── Marquee Ribbon ── */}
      <div className="mt-10 overflow-hidden border-y border-white/15 bg-white py-3 text-black">
        <div className="flex w-max animate-marquee-fast gap-8 text-sm font-bold uppercase tracking-[0.2em]">
          {[0, 1].map((k) => (
            <span key={k}>
              Motion Design — Kinetic Typography Systems — 3D CGI Loops — Brand Identity in Motion — High-Impact Ad Suites — Kinetic Systems —&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Sticky Interactive Showreel ── */}
      <section className="px-4 pt-12 md:px-8">
        <div
          data-reveal="zoom"
          className="relative overflow-hidden rounded-3xl border border-white/15 bg-neutral-900 transition-transform duration-100 ease-out"
          style={{
            transform: `scale(${Math.min(0.95 + Math.max(scrollY - 80, 0) * 0.0001, 1.02)})`,
            transformOrigin: "center top",
          }}
        >
          {inlinePlaying ? (
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://player.vimeo.com/video/${STUDIO_VIDEOS[2].id}?autoplay=1&title=0&byline=0&portrait=0`}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={STUDIO_VIDEOS[2].title}
              />
              <button
                onClick={() => setInlinePlaying(false)}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/70 px-3.5 py-1.5 font-mono text-xs text-white backdrop-blur hover:bg-black transition"
              >
                ✕ Close Player
              </button>
            </div>
          ) : (
            <div className="relative overflow-hidden">
              <img
                src={STUDIO_VIDEOS[2].thumbnail}
                alt={STUDIO_VIDEOS[2].title}
                className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 hover:scale-105"
              />
              <div className="animate-kenburns absolute inset-0 bg-gradient-to-tr from-neutral-800 via-neutral-950 to-neutral-900 opacity-70" />
              <div className="relative flex min-h-[500px] flex-col justify-between p-6 sm:min-h-[440px] md:aspect-video md:min-h-[340px] md:p-10">
                <div className="flex items-center justify-between gap-3 font-mono text-[11px] uppercase tracking-wider text-neutral-300">
                  <span className="truncate">{STUDIO_VIDEOS[2].title}</span>
                  <span className="shrink-0">{STUDIO_VIDEOS[2].duration} · MOTION DESIGN</span>
                </div>
                <div className="my-auto flex w-full flex-col items-center justify-center px-2 py-6 text-center">
                  <button
                    onClick={() => setInlinePlaying(true)}
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-2xl text-black transition-all hover:scale-110 shadow-2xl md:h-20 md:w-20"
                    aria-label="Play Motion Reel"
                  >
                    ▶
                  </button>
                  <p className="mt-4 w-full font-mono text-xs uppercase tracking-[0.25em] text-neutral-300">Play Motion Reel</p>
                  <div className="mt-3 flex w-full flex-col items-stretch justify-center gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
                    <button
                      onClick={() => setInlinePlaying(true)}
                      className="w-full rounded-full bg-white px-4 py-2.5 font-mono text-[11px] font-bold uppercase text-black hover:bg-neutral-200 transition sm:w-auto sm:py-1.5"
                    >
                      Stream Here
                    </button>
                    <button
                      onClick={() => setActiveVideo(STUDIO_VIDEOS[2])}
                      className="w-full rounded-full border border-white/30 bg-black/50 px-4 py-2.5 font-mono text-[11px] uppercase text-white backdrop-blur hover:bg-white hover:text-black transition sm:w-auto sm:py-1.5"
                    >
                      Lightbox ↗
                    </button>
                  </div>
                </div>
                <div>
                  <div className="mb-3 h-1.5 rounded-full bg-white/20 overflow-hidden">
                    <div className="h-full w-2/3 rounded-full bg-white" />
                  </div>
                  <div className="flex items-center justify-between gap-3 text-[11px] uppercase tracking-wider text-neutral-400 font-mono">
                    <span className="truncate">{STUDIO_VIDEOS[2].client} · {STUDIO_VIDEOS[2].category}</span>
                    <span className="hidden shrink-0 sm:block">Cinema 4D + After Effects</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Selected Work ── */}
      <section id="work" className="px-4 pt-20 md:px-8">
        <div className="flex items-end justify-between border-b border-white/15 pb-4">
          <h2 data-reveal className="text-4xl font-bold uppercase md:text-6xl">
            Selected<br /><span className="text-stroke">work.</span>
          </h2>
          <span data-reveal className="font-mono text-xs text-neutral-500 uppercase tracking-widest hidden sm:block">
            {PROJECTS.length} Featured Case Studies
          </span>
        </div>
        <div className="divide-y divide-white/15">
          {PROJECTS.map((p, i) => (
            <a
              key={p.slug}
              href={p.externalUrl || "#contact"}
              target={p.externalUrl ? "_blank" : undefined}
              rel={p.externalUrl ? "noopener noreferrer" : undefined}
              data-reveal
              data-delay={String(i * 40)}
              className="group grid grid-cols-12 items-center py-5 transition-all duration-300 hover:bg-white hover:text-black hover:px-4 rounded-xl"
            >
              <span className="col-span-1 font-mono text-xs opacity-60">0{i + 1}</span>
              <div className="col-span-11 md:col-span-5 flex items-center gap-4">
                {p.image && (
                  <div className="hidden sm:block h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-neutral-900 border border-white/15 group-hover:border-black/20">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                )}
                <div>
                  <span className="text-xl font-bold uppercase md:text-3xl group-hover:text-black transition-colors block">
                    {p.title}
                  </span>
                  {p.award && (
                    <span className="block text-[10px] font-mono opacity-60 uppercase mt-0.5">
                      ★ {p.award}
                    </span>
                  )}
                </div>
              </div>
              <span className="hidden md:block col-span-3 text-[11px] uppercase tracking-[0.15em] opacity-70">
                {p.category} · {p.client}
              </span>
              <span className="hidden md:block col-span-2 font-mono text-xs opacity-60">
                {p.meta}
              </span>
              <span className="col-span-12 md:col-span-1 text-right text-[11px] uppercase font-bold tracking-widest opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-end gap-2">
                {p.vimeoId && (
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      const v = STUDIO_VIDEOS.find((vid) => vid.id === p.vimeoId);
                      if (v) setActiveVideo(v);
                    }}
                    className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400 text-black hover:bg-emerald-300 transition shadow"
                    title="Watch Motion Design"
                  >
                    ▶
                  </button>
                )}
                <span>{p.externalUrl ? "↗" : "→"}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Process Roadmap ── */}
      <section id="process" className="px-4 pt-24 md:px-8">
        <div className="border-t border-white/15 pt-16">
          <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-2">Choreography Process</p>
          <h2 data-reveal className="text-4xl font-bold uppercase md:text-6xl mb-12">
            How we make it move
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {PROCESS.map((pr, i) => (
              <div key={pr.step} data-reveal data-delay={String(i * 70)} className="rounded-2xl border border-white/15 bg-neutral-900/60 p-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-neutral-500">PHASE {pr.step}</span>
                  <h3 className="mt-4 text-xl font-bold uppercase">{pr.title}</h3>
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed">{pr.desc}</p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-3 text-[10px] uppercase tracking-wider text-neutral-500 font-mono">
                  Milestone 0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section id="services" className="px-4 pt-24 md:px-8">
        <h2 data-reveal className="text-4xl font-bold uppercase md:text-6xl mb-10">
          Disciplines
        </h2>
        <div className="grid gap-px bg-white/15 md:grid-cols-3 rounded-2xl overflow-hidden border border-white/15">
          {SERVICES.map((s, i) => (
            <div key={s.index} data-reveal data-delay={String(i * 90)} className="bg-neutral-950 p-8 flex flex-col justify-between">
              <div>
                <p className="font-mono text-xs text-neutral-500">{s.index}</p>
                <h3 className="mt-3 text-3xl font-bold uppercase">{s.name}</h3>
                <p className="mt-2 text-sm text-neutral-400">{s.tag}</p>
                <ul className="mt-6 space-y-2">
                  {s.items.map((item) => (
                    <li key={item} className="text-xs text-neutral-400 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-white" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="px-4 pt-24 md:px-8">
        <p data-reveal className="text-center text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-8">Client Signals</p>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.author} data-reveal data-delay={String(i * 80)} className="rounded-2xl border border-white/15 bg-neutral-900/50 p-8 flex flex-col justify-between">
              <blockquote className="text-sm leading-relaxed text-neutral-300 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-bold text-white text-sm">{t.author}</p>
                <p className="text-[11px] text-neutral-500">{t.role} · {t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="px-4 pt-20 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {STATS.map((s, i) => (
            <div key={s.label} data-reveal data-delay={String(i * 60)} className="rounded-2xl border border-white/15 bg-neutral-900/40 p-8 text-center">
              <p className="text-4xl font-bold md:text-5xl">{s.value}<span className="text-neutral-500">{s.suffix}</span></p>
              <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-neutral-400">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Collaborators ── */}
      <section className="px-4 pt-16 md:px-8">
        <p data-reveal className="text-center text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6">Brands Collaborated With</p>
        <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto">
          {CLIENTS.map((c, i) => (
            <span key={c} data-reveal data-delay={String(i * 25)} className="rounded-full border border-white/15 bg-neutral-900 px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.1em] text-neutral-300">
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section id="about" className="px-4 py-24 md:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6">The Studio</p>
          <p data-reveal className="text-2xl font-medium md:text-4xl leading-relaxed">
            TORSTUDIO is motion-first. Brands that launch in movement — crafted into kinetic systems and ad sprints the feed cannot ignore.
          </p>
        </div>
      </section>

      {/* ── CTA / Footer ── */}
      <footer id="contact" className="border-t border-white/15 px-4 py-20 flex flex-col items-center text-center gap-8">
        <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">Ready to move?</p>
        <a href="mailto:hello@torstudio.co" data-reveal className="text-[12vw] font-bold uppercase leading-none md:text-[6.5rem] tracking-tight hover:text-neutral-300 transition-colors">
          Let&apos;s move it
        </a>
        <img src="/torstudio.png" alt="TORSTUDIO" className="h-7 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity" />
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500">hello@torstudio.co — © 2026 TORSTUDIO</p>
      </footer>

      <MotionVideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}
