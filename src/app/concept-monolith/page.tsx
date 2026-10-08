"use client";
import BackNav from "@/components/back-nav";
import { MonolithLoader } from "@/components/concept-loaders";
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
import { useEffect, useState, useRef } from "react";
import { useScrollProgress } from "@/components/use-scroll-progress";

function useParallax(speed = 0.3) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const handler = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const offset = (rect.top - window.innerHeight / 2) * speed;
      ref.current.style.transform = `translateY(${offset}px)`;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [speed]);
  return ref;
}

const CLIENT_NAMES = ["RollPay", "Lacruise", "Monica.cash", "Koyn", "ThinkGrowth", "Fluur"];

const FIELD_NOTES = [
  {
    date: "Oct 2026",
    read: "4 min",
    title: "How we choreograph a brand ident in 12 beats",
    excerpt: "Placeholder essay — timing curves, easing ladders, and the edit points we use to keep idents tight.",
  },
  {
    date: "Sep 2026",
    read: "6 min",
    title: "From styleframe to loop: our 3D lookdev checklist",
    excerpt: "Placeholder essay — lighting, texture passes, and render settings before anything hits the timeline.",
  },
  {
    date: "Aug 2026",
    read: "3 min",
    title: "Ad sprints: 30 motion flyers in 7 days",
    excerpt: "Placeholder essay — how we batch hooks, variants, and ratios without losing craft.",
  },
];

export default function MonolithPage() {
  const ref = useRevealRoot<HTMLDivElement>();
  const { progress } = useScrollProgress();
  const [activeVideo, setActiveVideo] = useState<MotionVideo | null>(null);
  const reel = STUDIO_VIDEOS[0];
  const [muted, setMuted] = useState(true);
  const showreelRef = useRef<HTMLIFrameElement | null>(null);

  // Toggle sound in place via the Vimeo player API — no reload, no restart.
  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    const win = showreelRef.current?.contentWindow;
    if (win) {
      try {
        win.postMessage(JSON.stringify({ method: "setMuted", value: next }), "*");
        win.postMessage(JSON.stringify({ method: "setVolume", value: next ? 0 : 1 }), "*");
      } catch {
        /* noop — UI state still updates */
      }
    }
  };
  const chapters = STUDIO_VIDEOS.slice(1, 4);
  const parallaxRef1 = useParallax(0.15);
  const parallaxRef2 = useParallax(-0.1);

  // ── Vertical-scroll → horizontal-scroll work gallery ──
  const hWrapRef = useRef<HTMLDivElement | null>(null);
  const hTrackRef = useRef<HTMLDivElement | null>(null);
  const [hProgress, setHProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const wrap = hWrapRef.current;
      const track = hTrackRef.current;
      if (!wrap || !track) return;
      const total = wrap.offsetHeight - window.innerHeight;
      const top = wrap.getBoundingClientRect().top;
      const scrolled = Math.min(Math.max(-top, 0), Math.max(total, 1));
      const p = total > 0 ? scrolled / total : 0;
      setHProgress(p);
      const maxX = Math.max(track.scrollWidth - window.innerWidth + 48, 1);
      track.style.transform = `translate3d(${-p * maxX}px, 0, 0)`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={ref} className="grain min-h-screen bg-[#080808] text-neutral-100">
      <div
        className="fixed top-0 left-0 z-50 h-[2px] bg-white"
        style={{ width: `${progress * 100}%` }}
      />

      <MonolithLoader />
      <BackNav index="02" title="MONOLITH" />

      {/* ── Nav ── */}
      <nav className="flex items-center justify-between px-5 pt-14 pb-5 md:px-10">
        <div className="flex items-center gap-3">
          <img src="/torstudio.png" alt="TORSTUDIO" className="h-8 w-auto object-contain" />
          <span className="hidden border-l border-white/10 pl-3 text-[10px] uppercase tracking-[0.2em] text-neutral-500 sm:block">
            Motion · Brand · Ads
          </span>
        </div>
        <div className="hidden gap-8 text-[11px] uppercase tracking-[0.18em] text-neutral-400 md:flex">
          <a href="#work" className="transition hover:text-white">Work</a>
          <a href="#archive" className="transition hover:text-white">Archive</a>
          <a href="#services" className="transition hover:text-white">Services</a>
          <a href="#studio" className="transition hover:text-white">Studio</a>
        </div>
        <a
          href="#contact"
          className="rounded-full bg-white px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-neutral-200"
        >
          Start a project
        </a>
      </nav>

      {/* ── HERO — Full screen with layered text ── */}
      <header className="relative flex min-h-[90vh] flex-col justify-end px-5 pb-16 md:px-10 md:pb-24">
        {/* Background layers */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div ref={parallaxRef1} className="absolute top-[10%] right-[8%] text-[30vw] font-bold uppercase leading-none text-white/[0.015] select-none">
            TOR
          </div>
          <div ref={parallaxRef2} className="absolute bottom-[15%] left-[5%] text-[20vw] font-bold uppercase leading-none text-white/[0.02] select-none">
            ®
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080808]" />
        </div>

        <div className="relative z-10">
          <div className="mask-group">
            <h1 className="font-bold uppercase leading-[0.82] tracking-[-0.05em]">
              <span className="mask-line block text-[15vw] md:text-[10rem]"><span>Brands</span></span>
              <span className="mask-line block text-[15vw] md:text-[10rem]"><span>don&apos;t</span></span>
              <span className="mask-line block text-[15vw] md:text-[10rem]">
                <span>
                  <span className="text-stroke">sit</span>
                  <span className="text-neutral-400"> still.</span>
                </span>
              </span>
            </h1>
          </div>

          <div data-reveal className="mt-12 grid gap-8 md:grid-cols-3">
            <p className="text-sm leading-relaxed text-neutral-400 md:col-span-1">
              Motion-first design studio based in Lagos. We architect procedural 3D systems, kinetic typography, and scroll-stopping ad motion for global brands.
            </p>
            <div className="md:col-span-1" />
            <div className="flex items-end gap-3 md:col-span-1 md:justify-end">
              <a href="#work" className="rounded-full bg-white px-6 py-3 text-[11px] font-bold uppercase tracking-[0.15em] text-black transition hover:bg-neutral-200">
                Explore work
              </a>
              <a href="#contact" className="rounded-full border border-white/20 px-6 py-3 text-[11px] uppercase tracking-[0.15em] transition hover:border-white/50">
                Commission
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── Showreel — plain autoplay, mute toggle only ── */}
      <section className="px-5 md:px-10">
        <div data-reveal="zoom" className="relative overflow-hidden rounded-2xl border border-white/10 bg-black">
          <div className="relative aspect-video w-full overflow-hidden">
            <iframe
              ref={showreelRef}
              src={`https://player.vimeo.com/video/${reel.id}?autoplay=1&muted=1&loop=1&title=0&byline=0&portrait=0&badge=0&autopause=0&controls=0&api=1`}
              className="absolute inset-0 h-full w-full border-0"
              allow="autoplay; fullscreen; picture-in-picture"
              title={reel.title}
            />
          </div>

          {/* Sole control: mute / unmute */}
          <button
            onClick={toggleMute}
            aria-pressed={!muted}
            aria-label={muted ? "Unmute showreel" : "Mute showreel"}
            title={muted ? "Unmute" : "Mute"}
            className="absolute right-4 bottom-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur transition hover:scale-105 hover:border-white/50"
          >
            {muted ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M11 5 6 9H3v6h3l5 4V5z" fill="currentColor" stroke="none" opacity="0.9" />
                <line x1="16" x2="22" y1="9" y2="15" />
                <line x1="22" x2="16" y1="9" y2="15" />
              </svg>
            ) : (
              <span className="flex h-4 items-end gap-[3px]" aria-hidden="true">
                <span className="h-full w-[3px] origin-bottom animate-eq1 rounded-full bg-white" />
                <span className="h-full w-[3px] origin-bottom animate-eq2 rounded-full bg-white" />
                <span className="h-full w-[3px] origin-bottom animate-eq3 rounded-full bg-white" />
                <span className="h-full w-[3px] origin-bottom animate-eq4 rounded-full bg-white" />
              </span>
            )}
          </button>
        </div>
        <div className="mt-3 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-sm text-neutral-400">
            <span className="font-semibold text-white">{reel.title}</span>
            <span className="text-neutral-500"> — {reel.client} · {reel.category}</span>
          </p>
          <p className="shrink-0 font-mono text-[11px] text-neutral-600">{reel.duration} · loop</p>
        </div>
      </section>

      {/* ── Clients ── */}
      <section className="px-5 pt-12 md:px-10">
        <p data-reveal className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">
          Selected clients
        </p>
        <p data-reveal className="mt-3 text-sm tracking-wide text-neutral-400 md:text-[15px]">
          {CLIENT_NAMES.join("  ·  ")}
        </p>
      </section>

      {/* ── Work — vertical scroll drives horizontal track ── */}
      <section id="work" ref={hWrapRef} className="relative h-[340vh]">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="flex items-end justify-between px-5 md:px-10">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">
                01 — Featured work · keep scrolling ↓
              </p>
              <h2 className="mt-2 text-3xl font-bold uppercase tracking-tight md:text-5xl">
                Selected work
              </h2>
            </div>
            <a
              href={STUDIO_FOUNDER.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-[11px] uppercase tracking-[0.18em] text-neutral-400 underline-offset-4 hover:text-white hover:underline sm:block"
            >
              All work on Behance ↗
            </a>
          </div>

          {/* Progress rail */}
          <div className="mx-5 mt-6 h-px bg-white/10 md:mx-10">
            <div className="h-px bg-white transition-none" style={{ width: `${hProgress * 100}%` }} />
          </div>

          <div
            ref={hTrackRef}
            className="mt-8 flex gap-5 px-5 will-change-transform md:gap-7 md:px-10"
          >
            {PROJECTS.map((p, i) => {
              const videoMatch = STUDIO_VIDEOS.find((v) => v.id === p.vimeoId);
              return (
                <article
                  key={p.slug}
                  className="group relative w-[82vw] shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] sm:w-[60vw] md:w-[38vw]"
                >
                  <div className="relative h-[42vh] overflow-hidden bg-neutral-900 md:h-[46vh]">
                    {p.image && (
                      <img
                        src={p.image}
                        alt={p.title}
                        className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-black">
                      {p.category}
                    </span>
                    <span className="absolute top-4 right-4 font-mono text-[11px] tracking-[0.2em] text-white/70">
                      {String(i + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
                    </span>
                    <span className="pointer-events-none absolute -bottom-3 left-4 text-[22vw] font-bold uppercase leading-none text-white/[0.06] select-none md:text-[7rem]">
                      {p.client.slice(0, 4)}
                    </span>
                  </div>
                  <div className="p-5 md:p-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                      {p.client} · {p.year}
                    </p>
                    <h3 className="mt-1.5 text-xl font-bold tracking-tight text-white md:text-2xl">{p.title}</h3>
                    <p className="mt-1 text-sm text-neutral-400">{p.meta}</p>
                    <div className="mt-4 flex items-center gap-4 border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.14em]">
                      {p.externalUrl && (
                        <a
                          href={p.externalUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-semibold text-white underline-offset-4 hover:underline"
                        >
                          Case study ↗
                        </a>
                      )}
                      {videoMatch && (
                        <button
                          onClick={() => setActiveVideo(videoMatch)}
                          className="text-neutral-400 transition hover:text-white"
                        >
                          Watch motion →
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              );
            })}

            {/* End card */}
            <a
              href={STUDIO_FOUNDER.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-[70vw] shrink-0 flex-col items-start justify-center rounded-2xl border border-dashed border-white/20 p-8 sm:w-[40vw] md:w-[26vw]"
            >
              <p className="font-serif text-3xl italic text-neutral-200">More on Behance →</p>
              <p className="mt-2 text-sm text-neutral-400">Full case studies, boards & breakdowns.</p>
            </a>
          </div>

          <p className="mt-6 px-5 font-mono text-[10px] uppercase tracking-[0.22em] text-neutral-600 md:px-10">
            Scroll down — the archive moves sideways
          </p>
        </div>
      </section>

      {/* ── Elegant marquee divider ── */}
      <div className="overflow-hidden border-y border-white/10 py-4">
        <div className="flex w-max animate-marquee gap-10 text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
          {[0, 1].map((k) => (
            <span key={k}>
              Motion identities · Kinetic typography · 3D loops · Brand systems · Ad creatives ·&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Motion archive chapters (placeholder-friendly) ── */}
      <section id="archive" className="px-5 pt-20 md:px-10">
        <p data-reveal className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">
          02 — Motion archive
        </p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <h2 data-reveal className="text-3xl font-bold uppercase tracking-tight md:text-5xl">
            Reel chapters
          </h2>
          <p data-reveal className="max-w-sm text-sm leading-relaxed text-neutral-500">
            Short cuts from the showreel. Swap these thumbnails any time — layout stays intact.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {chapters.map((v, i) => (
            <button
              key={v.id}
              data-reveal
              data-delay={String(i * 80)}
              onClick={() => setActiveVideo(v)}
              className="group overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] text-left transition hover:border-white/25"
            >
              <div className="relative aspect-video overflow-hidden bg-neutral-900">
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-xs text-black transition group-hover:scale-105">
                    ▶
                  </span>
                </span>
                <span className="absolute top-3 right-3 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[10px] text-white backdrop-blur">
                  {v.duration}
                </span>
              </div>
              <div className="p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  Chapter {String(i + 1).padStart(2, "0")} · {v.client}
                </p>
                <h3 className="mt-1 text-lg font-bold tracking-tight text-white">{v.title}</h3>
                <p className="mt-1 line-clamp-2 text-sm text-neutral-400">{v.description}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="px-5 pt-24 md:px-10">
        <p data-reveal className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">
          03 — Services
        </p>
        <h2 data-reveal className="mt-2 text-3xl font-bold uppercase tracking-tight md:text-5xl">
          Capabilities
        </h2>
        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {SERVICES.map((s, i) => (
            <div key={s.index} data-reveal data-delay={String(i * 70)} className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline">
              <span className="font-mono text-xs text-neutral-500 md:col-span-1">{s.index}</span>
              <h3 className="text-xl font-bold uppercase tracking-tight md:col-span-4 md:text-2xl">{s.name}</h3>
              <p className="text-sm text-neutral-400 md:col-span-3">{s.tag}</p>
              <ul className="space-y-1.5 md:col-span-4">
                {s.items.slice(0, 4).map((item) => (
                  <li key={item} className="text-sm text-neutral-400">
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
        <p data-reveal className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">
          04 — Process
        </p>
        <h2 data-reveal className="mt-2 text-3xl font-bold uppercase tracking-tight md:text-5xl">
          How we work
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-4">
          {PROCESS.map((pr, i) => (
            <div key={pr.step} data-reveal data-delay={String(i * 70)} className="border-t border-white/15 pt-5">
              <span className="font-mono text-xs text-neutral-500">{pr.step}</span>
              <h3 className="mt-2 text-base font-bold uppercase tracking-tight">{pr.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">{pr.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Field notes — placeholder content ── */}
      <section className="px-5 pt-24 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p data-reveal className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">
              05 — Field notes · placeholder
            </p>
            <h2 data-reveal className="mt-2 text-3xl font-bold uppercase tracking-tight md:text-5xl">
              Studio journal
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-sm leading-relaxed text-neutral-500">
            Drop in real posts when ready — these cards hold the grid, type, and rhythm.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {FIELD_NOTES.map((n, i) => (
            <article
              key={n.title}
              data-reveal
              data-delay={String(i * 80)}
              className="flex flex-col justify-between rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-transparent p-7"
            >
              <div>
                <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">
                  <span>{n.date}</span>
                  <span>{n.read}</span>
                </div>
                <h3 className="mt-4 font-serif text-2xl italic leading-snug text-neutral-100">{n.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{n.excerpt}</p>
              </div>
              <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-[11px] uppercase tracking-[0.16em]">
                <span className="rounded-full border border-white/15 px-3 py-1 text-neutral-400">Coming soon</span>
                <span className="text-neutral-500">Read →</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Studio ── */}
      <section id="studio" className="px-5 py-24 md:px-10">
        <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-10 text-center md:p-14">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[120%] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.09),transparent_65%)]" />
          <p data-reveal className="relative text-[10px] uppercase tracking-[0.28em] text-neutral-500">
            The studio
          </p>
          <p data-reveal className="relative mt-5 text-xl leading-relaxed text-neutral-200 md:text-2xl">
            TORSTUDIO is led by <span className="font-semibold text-white">{STUDIO_FOUNDER.alias}</span>,{" "}
            {STUDIO_FOUNDER.role.toLowerCase()} based in {STUDIO_FOUNDER.location} and
            working with clients worldwide.
          </p>
          <div data-reveal className="relative mt-7 flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.14em]">
            <a
              href={STUDIO_FOUNDER.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-5 py-2.5 transition hover:border-white/50 hover:text-white"
            >
              Behance ↗
            </a>
            <a
              href={STUDIO_FOUNDER.vimeo}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-5 py-2.5 transition hover:border-white/50 hover:text-white"
            >
              Vimeo ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="contact" className="border-t border-white/10 px-5 py-16 text-center md:px-10 md:py-20">
        <p data-reveal className="text-[10px] uppercase tracking-[0.28em] text-neutral-500">
          Commission a project
        </p>
        <a href="mailto:hello@torstudio.co" data-reveal className="mask-group mt-4 inline-block">
          <span className="mask-line block text-[13vw] font-bold uppercase leading-none tracking-[-0.03em] md:text-[5rem]">
            <span>
              Let&apos;s <span className="font-serif font-normal normal-case italic text-neutral-300">talk.</span>
            </span>
          </span>
        </a>
        <div data-reveal className="mt-8 flex flex-col items-center gap-4">
          <a
            href="mailto:hello@torstudio.co"
            className="rounded-full bg-white px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-black transition hover:bg-neutral-200"
          >
            hello@torstudio.co
          </a>
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-500">
            © 2026 TORSTUDIO · Motion, Brand & Ads
          </p>
        </div>
      </footer>

      <MotionVideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}
