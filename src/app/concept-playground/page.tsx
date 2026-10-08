"use client";
import BackNav from "@/components/back-nav";
import { PlaygroundLoader } from "@/components/concept-loaders";
import MotionVideoModal from "@/components/motion-video-modal";
import { PROJECTS, SERVICES, PROCESS, TESTIMONIALS, CLIENTS, STATS, STUDIO_VIDEOS, type MotionVideo } from "@/data/studio";
import { useRevealRoot } from "@/components/use-reveal";
import { useState } from "react";

export default function PlaygroundPage() {
  const ref = useRevealRoot<HTMLDivElement>();
  const [filter, setFilter] = useState<"All" | "Motion" | "Brand" | "Ads">("All");
  const [activeVideo, setActiveVideo] = useState<MotionVideo | null>(null);

  const filteredProjects = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div ref={ref} className="min-h-screen bg-[#f2f1ed] text-neutral-950 font-sans">
      {/* ── Bespoke Brutalist Sticker Slap Playground Loader ── */}
      <PlaygroundLoader />

      <BackNav index="05" title="PLAYGROUND" dark={false} />

      {/* ── Nav ── */}
      <nav className="flex items-center justify-between border-b-2 border-neutral-950 bg-[#f2f1ed] px-4 pt-14 pb-4 md:px-8">
        <div className="flex items-center gap-3">
          <img src="/torstudio.png" alt="TORSTUDIO" className="h-8 md:h-9 w-auto object-contain invert" />
        </div>
        <a href="#contact" className="rounded-full bg-neutral-950 px-5 py-2.5 text-[11px] font-bold uppercase text-white transition hover:bg-neutral-800 md:hidden">Stick with us</a>
        <div className="hidden gap-3 text-[11px] font-bold uppercase md:flex">
          <a href="#wall" className="rounded-full border-2 border-neutral-950 px-4 py-2 hover:bg-neutral-950 hover:text-white transition">Wall</a>
          <a href="#process" className="rounded-full border-2 border-neutral-950 px-4 py-2 hover:bg-neutral-950 hover:text-white transition">Process</a>
          <a href="#services" className="rounded-full border-2 border-neutral-950 px-4 py-2 hover:bg-neutral-950 hover:text-white transition">Services</a>
          <a href="#contact" className="rounded-full bg-neutral-950 px-5 py-2 text-white hover:bg-neutral-800 transition">Stick with us</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header className="mask-group px-4 pt-10 md:px-8">
        <h1 className="font-bold uppercase leading-[0.85] tracking-[-0.03em]">
          <span className="mask-line text-[17vw] md:text-[8rem]"><span>Posters</span></span>
          <span className="mask-line text-[17vw] md:text-[8rem]"><span className="text-stroke-dark">that pop,</span></span>
          <span className="mask-line text-[17vw] md:text-[8rem]"><span>brands that move.</span></span>
        </h1>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.15em]">
          <span data-reveal className="rotate-[-2deg] rounded-xl border-2 border-neutral-950 bg-white px-4 py-2 shadow-[4px_4px_0_#0a0a0b]">
            Motion Design
          </span>
          <span data-reveal className="rotate-[1.5deg] rounded-xl border-2 border-neutral-950 bg-neutral-950 px-4 py-2 text-white shadow-[4px_4px_0_#a3a3a3]">
            Brand Identity
          </span>
          <span data-reveal className="rotate-[-1deg] rounded-xl border-2 border-neutral-950 bg-white px-4 py-2 shadow-[4px_4px_0_#0a0a0b]">
            Ad Suites & Flyers
          </span>
          <span data-reveal className="ml-auto hidden rounded-full bg-neutral-950 px-4 py-2 text-white md:block">
            140+ Projects Shipped · 65M Views
          </span>
        </div>
      </header>

      {/* ── Marquee ── */}
      <div className="mt-10 -rotate-1 overflow-hidden border-y-2 border-neutral-950 bg-white py-3.5">
        <div className="flex w-max animate-marquee-fast gap-8 text-base font-bold uppercase tracking-wider">
          {[0, 1].map((k) => (
            <span key={k}>
              NEW MOTION DROP EVERY FRIDAY ✦ KINETIC STICKERS IN STOCK ✦ BRAND SYSTEMS THAT POP ✦ HIGH-IMPACT AD SPRINTS ✦&nbsp;
            </span>
          ))}
        </div>
      </div>

      {/* ── Poster Wall ── */}
      <section id="wall" className="px-4 pt-14 md:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
          <div>
            <p data-reveal className="text-[10px] uppercase font-bold tracking-[0.3em] text-neutral-500 mb-1">Interactive Wall</p>
            <h2 data-reveal className="text-4xl font-bold uppercase md:text-6xl">Fresh off<br />the wall</h2>
          </div>
          <div data-reveal className="flex flex-wrap gap-2 text-[11px] font-bold uppercase">
            {(["All", "Motion", "Brand", "Ads"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 transition-all ${
                  filter === cat
                    ? "bg-neutral-950 text-white"
                    : "border-2 border-neutral-950 bg-white hover:bg-neutral-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p, i) => (
            <article
              key={p.slug}
              data-reveal
              data-delay={String((i % 3) * 80)}
              className={`group rounded-3xl border-2 border-neutral-950 p-4 shadow-[6px_6px_0_#0a0a0b] transition-all duration-300 hover:-translate-y-2 hover:rotate-0 hover:shadow-[10px_10px_0_#0a0a0b] ${
                i % 3 === 0
                  ? "rotate-[-1deg] bg-white"
                  : i % 3 === 1
                  ? "rotate-[1deg] bg-neutral-950 text-white"
                  : "rotate-[-0.5deg] bg-white"
              }`}
            >
              <div className={`relative h-64 overflow-hidden rounded-2xl bg-gradient-to-br ${p.gradient}`}>
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase text-black shadow-sm">
                  {p.category}
                </span>
                {p.award && (
                  <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[9px] font-bold uppercase text-white backdrop-blur">
                    ★ {p.award.split(" ")[0]}
                  </span>
                )}
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  {p.vimeoId && (
                    <button
                      onClick={() => {
                        const v = STUDIO_VIDEOS.find((vid) => vid.id === p.vimeoId);
                        if (v) setActiveVideo(v);
                      }}
                      className="flex h-11 items-center gap-1.5 rounded-full bg-emerald-400 px-3 text-xs font-bold text-black opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-105 shadow-md"
                      title="Watch Motion Design"
                    >
                      ▶ Reel
                    </button>
                  )}
                  {p.externalUrl ? (
                    <a
                      href={p.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sm font-bold text-black opacity-0 transition-all duration-300 group-hover:opacity-100 hover:scale-110 shadow-md"
                      title="View project on Behance"
                    >
                      ↗
                    </a>
                  ) : (
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xs font-bold text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-md">
                      OPEN
                    </span>
                  )}
                </div>
              </div>
              <div className="px-2 pt-4 pb-2">
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold leading-tight">{p.title}</p>
                  <span className="font-mono text-xs opacity-60">0{i + 1}</span>
                </div>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] opacity-60">{p.client} — {p.year}</p>
                <p className="mt-2 text-xs leading-relaxed opacity-80 line-clamp-2">{p.blurb}</p>

                <div className="mt-3 flex flex-wrap gap-1 pt-3 border-t border-current border-opacity-10 text-[9px]">
                  {p.deliverables.slice(0, 2).map((d) => (
                    <span key={d} className="rounded bg-black/10 px-2 py-0.5 font-bold">
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── Spinning Showreel Card ── */}
      <section className="mx-4 mt-16 overflow-hidden rounded-3xl border-2 border-neutral-950 bg-neutral-950 text-white md:mx-8 shadow-[8px_8px_0_#0a0a0b]">
        <div className="flex flex-col items-center justify-between gap-6 p-8 md:flex-row md:p-14">
          <div data-reveal className="text-center md:text-left">
            <p className="text-[11px] uppercase tracking-[0.3em] text-neutral-400">TOR Studio Motion Reel</p>
            <p className="mt-2 text-4xl font-bold uppercase md:text-6xl leading-tight">Press play,<br />feel the pop</p>
            <p className="mt-2 text-xs font-mono text-neutral-400">RollPay · Lacruise · Monica · Motion Graphics</p>
          </div>
          <button
            data-reveal
            onClick={() => setActiveVideo(STUDIO_VIDEOS[0])}
            className="flex h-24 w-24 animate-float items-center justify-center rounded-full bg-white text-base font-bold text-black shadow-xl hover:scale-110 transition-transform"
            aria-label="Play TOR Studio Showreel"
          >
            PLAY ▶
          </button>
          <div data-reveal className="flex items-end gap-1.5">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((b) => (
              <span key={b} className={`w-2 rounded-full bg-white ${
                b % 4 === 0 ? "h-10 animate-eq1" : b % 4 === 1 ? "h-14 animate-eq2" : b % 4 === 2 ? "h-8 animate-eq3" : "h-12 animate-eq4"
              }`} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Process Sticker Cards ── */}
      <section id="process" className="px-4 pt-20 md:px-8">
        <h2 data-reveal className="text-4xl font-bold uppercase md:text-6xl mb-8">
          The Sprints
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          {PROCESS.map((pr, i) => (
            <div key={pr.step} data-reveal data-delay={String(i * 70)} className="rounded-3xl border-2 border-neutral-950 bg-white p-7 shadow-[6px_6px_0_#0a0a0b] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold bg-neutral-950 text-white px-2 py-0.5 rounded">
                  SPRINT 0{i + 1}
                </span>
                <h3 className="mt-4 text-xl font-bold uppercase">{pr.title}</h3>
                <p className="mt-3 text-xs opacity-75 leading-relaxed">{pr.desc}</p>
              </div>
              <div className="mt-6 border-t-2 border-neutral-950 pt-3 text-[10px] font-bold uppercase tracking-wider opacity-60">
                Phase {pr.step}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Services Stickers ── */}
      <section id="services" className="grid gap-6 px-4 py-16 md:grid-cols-3 md:px-8">
        {SERVICES.map((s, i) => (
          <div key={s.index} data-reveal data-delay={String(i * 90)} className="rounded-3xl border-2 border-neutral-950 bg-white p-8 shadow-[6px_6px_0_#0a0a0b] flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs font-bold opacity-60">SERVICE 0{i + 1}</p>
              <h3 className="mt-2 text-3xl font-bold uppercase">{s.name}</h3>
              <p className="mt-2 text-sm opacity-70 leading-relaxed">{s.tag}</p>
              <ul className="mt-6 space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="text-xs font-semibold flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-neutral-950" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <a href="#contact" className="mt-8 inline-block rounded-full bg-neutral-950 px-6 py-2.5 text-[11px] font-bold uppercase text-white text-center hover:bg-neutral-800 transition">
              Peel & Commission
            </a>
          </div>
        ))}
      </section>

      {/* ── Testimonials ── */}
      <section className="px-4 pb-16 md:px-8">
        <p data-reveal className="text-center text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 mb-6">Client Love</p>
        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.author} data-reveal data-delay={String(i * 80)} className="rounded-3xl border-2 border-neutral-950 bg-white p-7 shadow-[6px_6px_0_#0a0a0b] flex flex-col justify-between">
              <blockquote className="text-sm font-medium leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t-2 border-neutral-950 pt-4">
                <p className="font-bold text-sm">{t.author}</p>
                <p className="text-[11px] opacity-60">{t.role} · {t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer id="contact" className="mx-4 mb-8 rounded-3xl border-2 border-neutral-950 bg-white p-8 md:p-14 text-center flex flex-col items-center justify-center gap-6 shadow-[8px_8px_0_#0a0a0b] md:mx-8">
        <img src="/torstudio.png" alt="TORSTUDIO" className="h-8 w-auto object-contain invert" />
        <p data-reveal className="text-[11px] font-bold uppercase tracking-[0.3em]">Got a drop, brand or launch?</p>
        <p data-reveal className="text-4xl font-bold uppercase md:text-6xl">Let&apos;s make it pop</p>
        <a data-reveal href="mailto:hello@torstudio.co" className="inline-block rounded-full border-2 border-neutral-950 bg-neutral-950 px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-white hover:bg-neutral-800 transition">
          Start a project
        </a>
        <p className="text-xs uppercase tracking-[0.2em] opacity-60 mt-4">
          hello@torstudio.co — © 2026 TORSTUDIO
        </p>
      </footer>

      <MotionVideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
    </div>
  );
}
