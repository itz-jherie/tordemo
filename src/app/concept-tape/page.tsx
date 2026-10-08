"use client";
import BackNav from "@/components/back-nav";
import { ChoreoLoader } from "@/components/concept-loaders";
import MotionVideoModal from "@/components/motion-video-modal";
import { PROJECTS, SERVICES, STATS, CLIENTS, PROCESS, TESTIMONIALS, STUDIO_VIDEOS, type MotionVideo } from "@/data/studio";
import { useRevealRoot } from "@/components/use-reveal";
import { useEffect, useRef, useState } from "react";
import { useScrollProgress } from "@/components/use-scroll-progress";

function useSplitFlap(text: string, speed = 40) {
  const [displayed, setDisplayed] = useState("");
  const indexRef = useRef(0);
  useEffect(() => {
    indexRef.current = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      indexRef.current += 1;
      setDisplayed(text.slice(0, indexRef.current));
      if (indexRef.current >= text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return displayed;
}

export default function TapePage() {
  const ref = useRevealRoot<HTMLDivElement>();
  const { scrollY, progress } = useScrollProgress();
  const [activeService, setActiveService] = useState(0);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [activeVideo, setActiveVideo] = useState<MotionVideo | null>(null);
  const [inlinePlaying, setInlinePlaying] = useState(false);
  const heroText = useSplitFlap("WE MAKE BRANDS MOVE.", 55);

  return (
    <div ref={ref} className="grain min-h-screen bg-[#0d0d0d] text-neutral-100 font-sans">
      {/* ── Scroll Progress Line ── */}
      <div
        className="fixed top-0 left-0 z-50 h-[2.5px] bg-white transition-none"
        style={{ width: `${progress * 100}%` }}
      />

      {/* ── Bespoke Technical Frame Sequencer Choreo Loader ── */}
      <ChoreoLoader />

      <BackNav index="03" title="CHOREO" />

      {/* ── Nav ── */}
      <nav className="flex items-center justify-between px-5 pt-14 pb-5 md:px-10">
        <img src="/torstudio.png" alt="TORSTUDIO" className="h-8 w-auto object-contain" />
        <a
          href="#contact"
          className="rounded-full bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-neutral-200"
        >
          Start a project
        </a>
      </nav>

      {/* ── HERO — Split-flap Typewriter ── */}
      <header className="relative min-h-[75vh] flex flex-col justify-center px-5 md:px-10">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.03),transparent_60%)]" />
          {/* Subtle Scan lines */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
          }} />
        </div>

        <div className="relative z-10 max-w-6xl">
          <p data-reveal className="mb-6 text-[10px] uppercase tracking-[0.3em] text-neutral-500">
            Choreography & Motion Design Studio · Est. 2020
          </p>
          <h1 className="font-bold uppercase leading-[0.85] tracking-[-0.04em] text-[13vw] md:text-[7.5rem]">
            {heroText}
            <span className="inline-block w-[3px] h-[0.85em] bg-white ml-1 animate-blink" />
          </h1>
          <div data-reveal className="mt-10 flex flex-col gap-5 md:flex-row md:items-center md:gap-10">
            <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-black transition hover:bg-neutral-200">
              <span className="h-2 w-2 rounded-full bg-black animate-pulse-dot" />
              Motion Archive
            </a>
            <p className="max-w-md text-sm text-neutral-400 leading-relaxed">
              Kinetic identity systems, procedural 3D motion, and high-impact ad suites choreographed for forward-thinking brands.
            </p>
          </div>
        </div>
      </header>

      {/* ── Modern Motion Studio Divider ── */}
      <div className="flex items-center gap-4 px-5 py-6 md:px-10">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      {/* ── Motion Design Showreel ── */}
      <section className="px-5 md:px-10">
        <div
          data-reveal="zoom"
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition-transform duration-100 ease-out"
          style={{
            transform: `scale(${Math.min(0.95 + Math.max(scrollY - 80, 0) * 0.0001, 1.02)})`,
            transformOrigin: "center top",
          }}
        >
          {inlinePlaying ? (
            <div className="relative aspect-[21/9] min-h-[360px] w-full bg-black">
              <iframe
                src={`https://player.vimeo.com/video/${STUDIO_VIDEOS[1].id}?autoplay=1&title=0&byline=0&portrait=0`}
                className="absolute inset-0 h-full w-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title={STUDIO_VIDEOS[1].title}
              />
              <button
                onClick={() => setInlinePlaying(false)}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/70 px-3.5 py-1.5 font-mono text-xs text-white backdrop-blur hover:bg-black transition"
              >
                ✕ Close Player
              </button>
            </div>
          ) : (
            <div className="relative flex min-h-[460px] items-center justify-center overflow-hidden py-10 sm:min-h-[400px] md:aspect-[21/9] md:min-h-[320px] md:py-6">
              <img
                src={STUDIO_VIDEOS[1].thumbnail}
                alt={STUDIO_VIDEOS[1].title}
                className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="animate-kenburns absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,#1a1a1a_0deg,#2a2a2a_180deg,#111_360deg)] opacity-70" />

              <div className="relative z-20 flex w-full max-w-lg flex-col items-center gap-3 px-6 text-center">
                <button
                  onClick={() => setInlinePlaying(true)}
                  className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/30 bg-black/60 backdrop-blur text-white transition-all hover:scale-110 hover:bg-white hover:text-black shadow-2xl md:h-20 md:w-20"
                  aria-label="Play Motion Showreel"
                >
                  <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor"><polygon points="0,0 20,12 0,24" /></svg>
                </button>
                <div className="w-full">
                  <span className="block w-full text-balance text-[11px] font-bold uppercase tracking-[0.18em] text-white md:tracking-[0.3em]">
                    {STUDIO_VIDEOS[1].title} — Motion Design
                  </span>
                  <p className="mt-1 w-full font-mono text-[10px] uppercase tracking-widest text-neutral-400">
                    TOR Studio · {STUDIO_VIDEOS[1].category} · {STUDIO_VIDEOS[1].duration}
                  </p>
                </div>
                <div className="mt-2 flex w-full flex-col items-stretch justify-center gap-2.5 sm:w-auto sm:flex-row sm:items-center sm:gap-3">
                  <button
                    onClick={() => setInlinePlaying(true)}
                    className="w-full rounded-full bg-white px-4 py-2.5 font-mono text-[11px] font-bold uppercase text-black hover:bg-neutral-200 transition sm:w-auto sm:py-1.5"
                  >
                    Play Reel Here
                  </button>
                  <button
                    onClick={() => setActiveVideo(STUDIO_VIDEOS[1])}
                    className="w-full rounded-full border border-white/30 bg-black/50 px-4 py-2.5 font-mono text-[11px] uppercase text-white backdrop-blur hover:bg-white hover:text-black transition sm:w-auto sm:py-1.5"
                  >
                    Cinema Lightbox ↗
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Work List — Tabular Archive with Detailed Drawer ── */}
      <section id="work" className="px-5 pt-24 md:px-10">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-2">Technical Registry</p>
            <h2 data-reveal className="text-4xl font-bold uppercase md:text-7xl">
              Archive<span className="font-mono text-neutral-500 text-2xl align-super ml-2">[{PROJECTS.length}]</span>
            </h2>
          </div>
          <span data-reveal className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 hidden md:block">Click row for case breakdown</span>
        </div>

        {/* Column headers */}
        <div className="hidden md:grid grid-cols-12 gap-4 py-3 border-b border-white/15 text-[9px] uppercase tracking-[0.2em] text-neutral-500">
          <span className="col-span-1">No.</span>
          <span className="col-span-4">Project & Focus</span>
          <span className="col-span-2">Category</span>
          <span className="col-span-2">Client</span>
          <span className="col-span-2">Tools & Spec</span>
          <span className="col-span-1 text-right">Year</span>
        </div>

        <div className="divide-y divide-white/8">
          {PROJECTS.map((p, i) => (
            <div key={p.slug} data-reveal data-delay={String(i * 40)}>
              <button
                onClick={() => setSelectedProject(selectedProject === i ? null : i)}
                className="w-full text-left group grid grid-cols-12 items-center gap-4 py-5 transition-all duration-300 hover:bg-white/5 rounded-lg px-2"
              >
                <span className="col-span-1 font-mono text-xs text-neutral-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-11 md:col-span-4">
                  <span className="text-xl font-bold uppercase md:text-2xl group-hover:text-white transition-colors">
                    {p.title}
                  </span>
                  {p.award && (
                    <span className="block text-[10px] text-neutral-400 font-mono mt-0.5">
                      ★ {p.award}
                    </span>
                  )}
                </div>
                <span className="hidden md:block col-span-2 text-[11px] uppercase tracking-[0.1em] text-neutral-400">
                  {p.category}
                </span>
                <span className="hidden md:block col-span-2 text-[11px] text-neutral-400">
                  {p.client}
                </span>
                <span className="hidden md:block col-span-2 font-mono text-[10px] text-neutral-500">
                  {p.meta}
                </span>
                <span className="hidden md:block col-span-1 text-right font-mono text-xs text-neutral-400">
                  {selectedProject === i ? "▲" : "▼"}
                </span>
              </button>

              {/* Expandable Case Drawer */}
              {selectedProject === i && (
                <div className="bg-white/[0.03] border-l-2 border-white p-6 my-2 rounded-r-xl transition-all">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    {p.image && (
                      <div className="relative h-48 md:h-52 w-full md:w-72 shrink-0 overflow-hidden rounded-xl border border-white/15 bg-black">
                        <img
                          src={p.image}
                          alt={p.title}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <span className="absolute bottom-3 left-3 rounded bg-white/20 px-2 py-0.5 text-[10px] font-mono text-white backdrop-blur">
                          {p.category}
                        </span>
                      </div>
                    )}
                    <div className="flex-1">
                      <p className="text-sm text-neutral-300 leading-relaxed">{p.blurb}</p>
                      <div className="mt-4 flex flex-wrap gap-2 text-[10px]">
                        <span className="font-mono text-neutral-500 uppercase mr-2 py-0.5">Deliverables:</span>
                        {p.deliverables.map((d) => (
                          <span key={d} className="rounded bg-white/10 px-2.5 py-1 text-white">
                            {d}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-400 pt-3 border-t border-white/10">
                        <span>Engine: {p.tools}</span>
                        <span className="text-white font-semibold">Impact: {p.metrics}</span>
                        <div className="flex items-center gap-2">
                          {p.vimeoId && (
                            <button
                              onClick={() => {
                                const v = STUDIO_VIDEOS.find((vid) => vid.id === p.vimeoId);
                                if (v) setActiveVideo(v);
                              }}
                              className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400 px-3 py-1 text-[11px] font-sans font-bold text-black hover:bg-emerald-300 transition shadow-lg"
                            >
                              ▶ View Motion Design
                            </button>
                          )}
                          {p.externalUrl && (
                            <a
                              href={p.externalUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-[11px] font-sans font-bold text-black hover:bg-neutral-200 transition"
                            >
                              Open on Behance ↗
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Process / Choreography Protocol ── */}
      <section className="px-5 pt-28 md:px-10">
        <div className="border-t border-white/10 pt-16">
          <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-2">Workflow Pipeline</p>
          <h2 data-reveal className="text-4xl font-bold uppercase md:text-7xl mb-12">
            Choreography Protocol
          </h2>
          <div className="grid gap-6 md:grid-cols-4">
            {PROCESS.map((pr, i) => (
              <div key={pr.step} data-reveal data-delay={String(i * 80)} className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs text-neutral-500">PHASE {pr.step}</span>
                  <h3 className="mt-4 text-xl font-bold uppercase">{pr.title}</h3>
                  <p className="mt-3 text-sm text-neutral-400 leading-relaxed">{pr.desc}</p>
                </div>
                <div className="mt-6 border-t border-white/10 pt-3 font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                  Motion Milestone 0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services — Accordion style ── */}
      <section id="services" className="px-5 pt-28 md:px-10">
        <h2 data-reveal className="text-4xl font-bold uppercase md:text-7xl mb-10">
          Disciplines
        </h2>

        <div className="space-y-0 divide-y divide-white/10 border-y border-white/10">
          {SERVICES.map((s, i) => (
            <button
              key={s.index}
              data-reveal
              onClick={() => setActiveService(activeService === i ? -1 : i)}
              className="w-full text-left py-8 group transition hover:bg-white/[0.02] px-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <span className="font-mono text-xs text-neutral-600">{s.index}</span>
                  <h3 className="text-2xl font-bold uppercase md:text-3xl">{s.name}</h3>
                </div>
                <span className={`text-2xl transition-transform duration-300 text-neutral-500 ${activeService === i ? "rotate-45" : ""}`}>+</span>
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${activeService === i ? "max-h-60 mt-4 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <p className="text-sm text-neutral-400 mb-4 pl-12 max-w-xl">{s.tag}</p>
                <div className="flex flex-wrap gap-2 pl-12">
                  {s.items.map((item) => (
                    <span key={item} className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-wider text-neutral-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="px-5 pt-28 md:px-10">
        <p data-reveal className="text-center text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-8">Client Signals</p>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.author} data-reveal data-delay={String(i * 80)} className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 flex flex-col justify-between">
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

      {/* ── Stats strip ── */}
      <section className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/8">
        {STATS.map((s, i) => (
          <div key={s.label} data-reveal data-delay={String(i * 80)} className="bg-[#0d0d0d] p-8 text-center md:p-12">
            <p className="text-4xl font-bold md:text-5xl">{s.value}<span className="text-neutral-600">{s.suffix}</span></p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-neutral-500">{s.label}</p>
          </div>
        ))}
      </section>

      {/* ── Clients marquee ── */}
      <section className="py-10 overflow-hidden border-y border-white/8 mt-16">
        <div className="flex w-max animate-marquee-rev gap-12 text-[11px] uppercase tracking-[0.2em] text-neutral-500">
          {[0, 1].map((k) => (
            <span key={k} className="flex gap-12">
              {CLIENTS.map((c) => (
                <span key={`${k}-${c}`} className="whitespace-nowrap">{c}</span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* ── About ── */}
      <section className="px-5 py-24 md:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p data-reveal className="text-[10px] uppercase tracking-[0.3em] text-neutral-500 mb-6">Manifesto</p>
          <p data-reveal className="text-2xl font-medium leading-relaxed md:text-4xl">
            We don&apos;t do static. Every pixel, every glyph, every frame — choreographed. 
            TORSTUDIO is a Lagos-based motion design studio turning brands into kinetic experiences.
          </p>
        </div>
      </section>

      {/* ── CTA / Footer ── */}
      <footer id="contact" className="border-t border-white/8 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-5xl flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse-dot" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-neutral-400">Available for motion commissions</span>
          </div>
          <a href="mailto:hello@torstudio.co" data-reveal className="mask-group inline-block">
            <h2 className="font-bold uppercase leading-[0.85] tracking-[-0.04em]">
              <span className="mask-line block text-[11vw] md:text-[6.5rem]"><span>Make it</span></span>
              <span className="mask-line block text-[11vw] md:text-[6.5rem]"><span className="text-stroke">move.</span></span>
            </h2>
          </a>
          <div data-reveal className="mt-12 flex flex-col items-center gap-5">
            <img src="/torstudio.png" alt="TORSTUDIO" className="h-7 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
            <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
              <span>hello@torstudio.co</span>
              <span className="h-3 w-px bg-white/10" />
              <span>Instagram @torstudio</span>
              <span className="h-3 w-px bg-white/10" />
              <span>Twitter / X</span>
              <span className="h-3 w-px bg-white/10" />
              <span>© 2026 TORSTUDIO</span>
            </div>
          </div>
        </div>
      </footer>

      <MotionVideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}
