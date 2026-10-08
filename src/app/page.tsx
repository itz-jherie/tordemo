"use client";
import Link from "next/link";
import { useRevealRoot } from "@/components/use-reveal";
// Loader hidden for demo — to restore: `import { ShowroomLoader } from "@/components/concept-loaders";` and render `<ShowroomLoader />` at the top of the layout below.

const CURATED_CONCEPTS = [
  {
    href: "/concept-frame",
    index: "01",
    name: "FRAME",
    vibe: "Light editorial + horizontal scroll gallery",
    desc: "Warm off-white editorial layout, smooth horizontal-scroll work cards, dark accent showreel, minimal typography and high-end design agency feel.",
    tags: ["Light", "Editorial", "Horizontal", "Motion Design"],
    hero: "FRAME",
    tone: "Light · Premium",
    highlights: ["Horizontal snap gallery", "Inverted dark showreel", "Subtle micro-grid"],
  },
  {
    href: "/concept-monolith",
    index: "02",
    name: "MONOLITH",
    vibe: "Full-page stacked work cards + parallax",
    desc: "Imposing scale, massive dark project cards with giant ghosted typography, floating parallax motion, and tactile cursor interaction.",
    tags: ["Dark", "Portfolio", "Scale", "Parallax"],
    hero: "MONO",
    tone: "Dark · Immersive",
    highlights: ["Massive bleed cards", "Parallax floating titles", "Tactile hover state"],
  },
  {
    href: "/concept-tape",
    index: "03",
    name: "CHOREO",
    vibe: "Kinetic typography + split-flap engine",
    desc: "Precision easing curves, split-flap hero type, modular motion archive table, and interactive disciplines accordion.",
    tags: ["Kinetic", "Typography", "Editorial", "Archive"],
    hero: "CHOREO",
    tone: "Dark · Technical",
    highlights: ["Interactive split-flap hero", "Modular motion archive", "Disciplines accordion"],
  },
  {
    href: "/concept-kinetic",
    index: "04",
    name: "KINETIC EDITORIAL",
    vibe: "Loud kinetic type + showreel screen",
    desc: "Giant rolling letterforms, kinetic runtime ticker, marquee bars, and a sticky motion design showreel screen.",
    tags: ["Dark", "Huge type", "Motion", "Ticker"],
    hero: "KINETIC",
    tone: "Dark · High-energy",
    highlights: ["Stacked word art", "Interactive showreel unit", "Continuous marquee"],
  },
  {
    href: "/concept-playground",
    index: "05",
    name: "POSTER PLAYGROUND",
    vibe: "Light brutalist sticker wall",
    desc: "Chunky poster cards, spinning motion badges, bouncing marquee, and tactile brutalist aesthetic.",
    tags: ["Light", "Brutalist", "Tactile", "Badges"],
    hero: "POSTER",
    tone: "Light · Playful",
    highlights: ["Rotating sticker badges", "Offset poster grid", "Bouncing ticker"],
  },
  {
    href: "/concept-cinema",
    index: "06",
    name: "AFTERNOW / EXPAND",
    vibe: "Expanding center showreel + clean editorial grid",
    desc: "Inspired by Afternow: Crisp bright canvas, center motion showcase that smoothly expands on scroll, asymmetric case studies, and luxury agency typography.",
    tags: ["Expanding Video", "AfterNow", "Scroll Transform", "Editorial"],
    hero: "EXPAND",
    tone: "Light · Prestige Agency",
    highlights: ["Hero video expands on scroll", "Asymmetric case study grid", "Clean AfterNow luxury aesthetic"],
  },
];

export default function Home() {
  const ref = useRevealRoot<HTMLDivElement>();

  return (
    <div ref={ref} className="grain min-h-screen bg-neutral-950 text-neutral-100">
      {/* ── Homepage loader hidden for demo — restore with <ShowroomLoader /> here ── */}

      {/* ── Top Header ── */}
      <header className="flex items-center justify-between border-b border-white/10 px-4 py-4 md:px-10">
        <Link href="/" className="flex items-center group">
          <img
            src="/torstudio.png"
            alt="TORSTUDIO"
            className="h-8 md:h-9 w-auto object-contain transition-opacity group-hover:opacity-90"
          />
        </Link>
        <div className="hidden items-center gap-2.5 text-[11px] tracking-[0.2em] text-neutral-400 uppercase md:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Motion Design & Brand Systems</span>
        </div>
        <span className="rounded-full border border-white/20 px-4 py-1.5 text-[11px] uppercase tracking-wider">
          6 Curated Directions
        </span>
      </header>

      {/* ── Hero ── */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12 md:px-10 md:pt-24">
        <p data-reveal className="mb-4 flex items-center gap-2 text-[11px] tracking-[0.25em] text-neutral-400 uppercase">
          <span className="h-2 w-2 animate-pulse-dot rounded-full bg-white" />
          Demo · For client review
        </p>
        <h1 className="mask-group text-[13vw] leading-[0.88] font-bold tracking-[-0.04em] uppercase md:text-[6.8rem]">
          <span className="mask-line"><span>Website</span></span>
          <span className="mask-line"><span className="text-stroke">concepts.</span></span>
        </h1>
        <p data-reveal className="mt-6 max-w-2xl text-neutral-400 text-base md:text-lg leading-relaxed">
          Six homepage directions for TORSTUDIO. Open each concept and have a click around.
        </p>

        {/* Quick Filter / Jump Bar */}
        <div data-reveal className="mt-8 flex flex-wrap gap-2 text-[11px] tracking-[0.15em] uppercase text-neutral-400">
          <span className="py-1.5 pr-2 text-neutral-500">Jump to:</span>
          {CURATED_CONCEPTS.map((c) => (
            <a
              key={c.index}
              href={`#card-${c.index}`}
              className="rounded-full border border-white/10 px-3.5 py-1.5 transition hover:border-white hover:text-white"
            >
              {c.index} {c.name}
            </a>
          ))}
        </div>
      </section>

      {/* ── Concept Cards ── */}
      <main className="mx-auto max-w-6xl px-4 pb-24 md:px-10">
        <div className="grid gap-8 md:grid-cols-2">
          {CURATED_CONCEPTS.map((c, i) => (
            <div
              id={`card-${c.index}`}
              key={c.href}
              data-reveal
              data-delay={String((i % 2) * 120)}
              className="scroll-mt-24 group overflow-hidden rounded-3xl border border-white/10 bg-neutral-900/60 transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:bg-neutral-900"
            >
              <Link href={c.href} className="block">
                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-neutral-900">
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent opacity-80" />
                  <span className="text-7xl font-bold tracking-tighter uppercase opacity-80 transition-transform duration-700 ease-out group-hover:scale-110">
                    {c.hero}
                  </span>
                  <span className="absolute top-4 left-4 rounded-full bg-white px-3.5 py-1 text-[11px] font-bold text-black">
                    {c.index}
                  </span>
                  <span className="absolute top-4 right-4 rounded-full border border-white/15 bg-black/60 px-3 py-1 text-[10px] tracking-widest text-neutral-300 uppercase backdrop-blur">
                    {c.tone}
                  </span>
                  <span className="absolute right-4 bottom-4 rounded-full border border-white/40 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-black opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 translate-x-2">
                    Open Concept →
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <div className="flex items-baseline justify-between">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">{c.name}</h2>
                    <span className="font-mono text-xs text-neutral-500">DIR · {c.index}</span>
                  </div>
                  <p className="mt-1 text-[11px] tracking-[0.18em] text-neutral-400 uppercase">{c.vibe}</p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-300">{c.desc}</p>

                  {/* Highlights */}
                  <div className="mt-4 flex flex-wrap gap-2 text-[10px] text-neutral-400">
                    {c.highlights.map((h) => (
                      <span key={h} className="rounded bg-white/5 px-2.5 py-1">
                        ✓ {h}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-4">
                    {c.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/15 px-3 py-1 text-[11px] text-neutral-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-white/10 px-4 py-14 flex flex-col items-center justify-center gap-5 text-center text-xs tracking-[0.2em] text-neutral-500 uppercase">
        <Link href="/" className="opacity-70 hover:opacity-100 transition-opacity">
          <img src="/torstudio.png" alt="TORSTUDIO" className="h-7 w-auto object-contain" />
        </Link>
        <p>TORSTUDIO® — 6 Curated Directions · Open each → Select one to expand</p>
      </footer>
    </div>
  );
}
