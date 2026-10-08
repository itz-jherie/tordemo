"use client";

import { useState, useRef, useEffect } from "react";
import BackNav from "@/components/back-nav";
import { CinemaLoader } from "@/components/concept-loaders";
import MotionVideoModal from "@/components/motion-video-modal";
import {
  PROJECTS,
  SERVICES,
  CLIENTS,
  STUDIO_VIDEOS,
  STUDIO_FOUNDER,
  TESTIMONIALS,
  type MotionVideo,
} from "@/data/studio";
import { useRevealRoot } from "@/components/use-reveal";
import { useScrollProgress } from "@/components/use-scroll-progress";

export default function CinemaAfternowPage() {
  const ref = useRevealRoot<HTMLDivElement>();
  const { scrollY } = useScrollProgress();

  const [activeVideo, setActiveVideo] = useState<MotionVideo>(STUDIO_VIDEOS[0]);
  const [modalVideo, setModalVideo] = useState<MotionVideo | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // Scroll transform calculations for Hero Video Card
  // As user scrolls from 0 to 450px:
  // scale expands from 0.82 to 1.02
  // width expands from compact container to full
  // hero headline smoothly translates down / fades
  const scrollRatio = Math.min(Math.max(scrollY / 480, 0), 1);
  const heroScale = 0.84 + scrollRatio * 0.18;
  const heroRadius = Math.max(36 - scrollRatio * 20, 16);
  const heroOpacity = 1;
  const headlineTranslate = scrollRatio * 50;
  const headlineOpacity = Math.max(1 - scrollRatio * 0.85, 0.2);

  return (
    <div
      ref={ref}
      className="relative min-h-screen bg-[#fafaf9] text-[#111113] font-sans selection:bg-[#111113] selection:text-white overflow-x-hidden antialiased"
    >
      {/* ── Top Scroll Progress Bar ── */}
      <div
        className="fixed top-0 left-0 z-50 h-[3px] bg-[#111113] transition-none"
        style={{
          width: `${
            typeof window !== "undefined" && document.documentElement.scrollHeight
              ? Math.min(
                  (scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100,
                  100
                )
              : 0
          }%`,
        }}
      />

      {/* ── Bespoke Motion Canvas Loader ── */}
      <CinemaLoader />

      {/* ── Back to Navigator ── */}
      <BackNav index="06" title="AFTERNOW / CANVAS" dark={false} />

      {/* ── Ambient Radiant Aura (Signature AfterNow ethereal glow) ── */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[800px] overflow-hidden select-none">
        <div className="absolute -top-[180px] left-1/2 -translate-x-1/2 w-[1200px] h-[650px] rounded-full bg-gradient-to-b from-[#b8d5ff]/45 via-[#d7e6ff]/25 to-transparent blur-[90px]" />
        <div className="absolute top-20 right-10 w-[500px] h-[400px] rounded-full bg-gradient-to-br from-[#ffd8c2]/30 via-transparent to-transparent blur-[100px]" />
      </div>

      {/* ── Sticky Luxury Header Bar ── */}
      <header
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrollY > 40
            ? "bg-[#fafaf9]/85 backdrop-blur-xl border-b border-black/[0.07] py-3.5 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo / Founder */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#111113]">
              <span>TORSTUDIO</span>
            </a>
            <span className="hidden sm:inline-block text-xs font-mono text-neutral-400 uppercase tracking-widest">
              / Motion & Brand Systems
            </span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em] font-medium text-neutral-600">
            <a href="#work" className="hover:text-black transition">Work</a>
            <a href="#about" className="hover:text-black transition">Disciplines</a>
            <a href="#process" className="hover:text-black transition">Process</a>
            <a href="#clients" className="hover:text-black transition">Partners</a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Audio Toggle */}
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider text-neutral-700 hover:border-black/30 hover:bg-black/[0.06] transition"
              title="Toggle reel audio"
            >
              <div className="flex items-end gap-[2px] h-2.5">
                {[1, 2, 3].map((b) => (
                  <span
                    key={b}
                    className={`w-[2px] rounded-full bg-[#111113] transition-all ${
                      soundEnabled
                        ? b === 1
                          ? "h-2.5 animate-eq1"
                          : b === 2
                          ? "h-2 animate-eq2"
                          : "h-2.5 animate-eq3"
                        : "h-1 opacity-40"
                    }`}
                  />
                ))}
              </div>
              <span className="hidden sm:inline">{soundEnabled ? "Audio On" : "Audio Off"}</span>
            </button>

            <a
              href="mailto:hello@torstudio.design"
              className="rounded-full bg-[#111113] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-neutral-800 transition shadow-sm"
            >
              Start Project
            </a>
          </div>
        </div>
      </header>

      {/* ── Main Container ── */}
      <main className="relative z-10 pt-28 md:pt-36">
        {/* ── Hero Section with Expanding Center Video (Afternow Core Signature) ── */}
        <section className="px-6 md:px-12 max-w-[1440px] mx-auto">
          {/* Top Hero Tagline */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 pb-8 border-b border-black/[0.08]">
            <div data-reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-black/[0.05] border border-black/10 px-3 py-1 text-[11px] font-mono uppercase tracking-widest text-neutral-600 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Motion Systems & Brand Design Studio
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#111113] uppercase leading-[0.92]">
                Partners in your<br />
                <span className="font-serif italic font-normal tracking-tight lowercase">
                  motion journey.
                </span>
              </h1>
            </div>

            <p data-reveal className="text-sm md:text-base text-neutral-600 max-w-md leading-relaxed font-light">
              We design living brand systems in motion for ambitious companies. Procedural 3D animation, kinetic typography, and high-conversion ad creatives that command culture.
            </p>
          </div>

          {/* ── THE EXPANDING MOTION SHOWCASE CARD ── */}
          <div className="relative mt-8 md:mt-12 flex flex-col items-center">
            {/* Reel Selector Strip */}
            <div
              data-reveal
              className="mb-4 flex flex-wrap items-center justify-center gap-2"
            >
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 mr-2 hidden sm:inline">
                Select Showcase:
              </span>
              {STUDIO_VIDEOS.map((v) => (
                <button
                  key={v.id}
                  onClick={() => setActiveVideo(v)}
                  className={`rounded-full px-3.5 py-1 text-xs font-mono transition-all ${
                    activeVideo.id === v.id
                      ? "bg-[#111113] text-white font-bold shadow-md"
                      : "bg-white border border-black/10 text-neutral-600 hover:border-black/30 hover:bg-neutral-50"
                  }`}
                >
                  {v.client}
                </button>
              ))}
            </div>

            {/* The Scaling Showcase Container */}
            <div
              className="relative w-full max-w-[1280px] overflow-hidden bg-black transition-transform duration-100 ease-out shadow-2xl"
              style={{
                transform: `scale(${heroScale})`,
                borderRadius: `${heroRadius}px`,
                transformOrigin: "center top",
              }}
            >
              {/* Aspect-Video Motion Frame */}
              <div className="relative aspect-[16/9] w-full">
                {/* Embed Vimeo Player with real audio and continuous playback */}
                <iframe
                  key={activeVideo.id + String(soundEnabled)}
                  src={`https://player.vimeo.com/video/${activeVideo.id}?autoplay=1&loop=1&autopause=0&muted=${
                    soundEnabled ? "0" : "1"
                  }&title=0&byline=0&portrait=0`}
                  className="absolute inset-0 h-full w-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={activeVideo.title}
                />

                {/* Top Overlay Badge Inside Video */}
                <div className="absolute top-4 left-4 z-20 flex max-w-[calc(100%-2rem)] items-center gap-2 overflow-hidden rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1.5 text-white text-[11px] font-mono uppercase tracking-wider border border-white/10">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="truncate">{activeVideo.client}</span>
                  <span className="hidden text-white/40 sm:inline">·</span>
                  <span className="hidden truncate text-white/80 sm:inline">{activeVideo.category}</span>
                </div>

                {/* Bottom Overlay Controls */}
                <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2">
                  <button
                    onClick={() => setModalVideo(activeVideo)}
                    className="flex items-center gap-1.5 rounded-full bg-white/90 backdrop-blur px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-black hover:bg-white hover:scale-105 transition shadow-lg"
                    title="Open Fullscreen Lightbox"
                  >
                    <span>Fullscreen</span>
                    <span>⛶</span>
                  </button>
                </div>
              </div>

              {/* Lower Showcase Info Bar */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-[#111113] px-6 py-4 text-white text-xs font-mono">
                <div>
                  <span className="text-white font-bold">{activeVideo.title}</span>
                  <span className="text-white/50 ml-3">· {activeVideo.description}</span>
                </div>
                <div className="flex items-center gap-3 text-neutral-400 text-[11px] shrink-0">
                  <span>Duration: {activeVideo.duration}</span>
                  <span>·</span>
                  <span className="text-emerald-400">TORSTUDIO</span>
                </div>
              </div>
            </div>

            {/* Scroll Hint Beneath Showcase */}
            <div
              className="mt-6 flex items-center gap-2 text-[11px] font-mono text-neutral-400 uppercase tracking-widest transition-opacity"
              style={{ opacity: Math.max(1 - scrollRatio * 2, 0) }}
            >
              <span>Scroll to expand & explore work</span>
              <span className="animate-bounce">↓</span>
            </div>
          </div>
        </section>

        {/* ── Statement Narrative Section (AfterNow Exact Structure) ── */}
        <section id="about" className="mt-32 md:mt-48 px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-t border-black/[0.08] pt-16">
            <div className="lg:col-span-4" data-reveal>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-3">
                Approach & Direction
              </span>
              <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#111113]">
                Motion is not decoration.<br />It is the brand.
              </h2>
            </div>

            <div className="lg:col-span-8 space-y-8" data-reveal data-delay="100">
              <p className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug tracking-tight text-[#111113]">
                We understand the demands of digitally focused companies navigating change. We collaborate closely with ambitious teams seeking{" "}
                <span className="font-serif italic font-normal text-black underline decoration-black/20 underline-offset-8">
                  clarity, craft, and kinetic distinction.
                </span>
              </p>
              <p className="text-base text-neutral-600 leading-relaxed max-w-2xl font-normal">
                Built on kinetic brand identity, 3D motion systems, and high-impact ad suites. Strategists, 3D artists, and motion designers operate as one disciplined team — from direction to final multi-platform delivery.
              </p>

              {/* Founder Signature Pill */}
              <div className="flex items-center gap-4 pt-4 border-t border-black/[0.06]">
                <div className="h-11 w-11 rounded-full bg-black text-white flex items-center justify-center font-bold text-xs uppercase tracking-wider">
                  TOR
                </div>
                <div>
                  <h4 className="font-bold text-sm text-[#111113]">{STUDIO_FOUNDER.name}</h4>
                  <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">{STUDIO_FOUNDER.role} · TORSTUDIO</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Asymmetric Project Showcase (AfterNow 2+1 & 3-Column Work Grid) ── */}
        <section id="work" className="mt-32 md:mt-44 px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pb-8 border-b border-black/[0.08] gap-4">
            <div data-reveal>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-2">
                Selected Works
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-[#111113]">
                Recent Case Studies
              </h2>
            </div>
            <p data-reveal className="text-xs font-mono text-neutral-500 uppercase tracking-wider max-w-xs text-left sm:text-right">
              Kinetic systems, 3D brand worlds & product motion
            </p>
          </div>

          {/* Asymmetric Minimal Work Grid */}
          <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-start">
            {/* Primary Featured Card (Left 7 Cols) */}
            {PROJECTS[0] && (
              <div
                data-reveal
                onClick={() => {
                  const v = STUDIO_VIDEOS.find((vid) => vid.id === PROJECTS[0].vimeoId);
                  if (v) setModalVideo(v);
                }}
                className="lg:col-span-7 group cursor-pointer"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl md:rounded-[32px] bg-neutral-900 border border-black/[0.06] shadow-md transition-shadow duration-500 group-hover:shadow-2xl">
                  <img
                    src={STUDIO_VIDEOS.find((v) => v.id === PROJECTS[0].vimeoId)?.thumbnail || PROJECTS[0].image}
                    alt={PROJECTS[0].title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  
                  {/* Subtle Client Tag */}
                  <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[#111113] shadow-sm">
                    {PROJECTS[0].client}
                  </span>

                  {/* Minimal Floating Hover Trigger */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-[#111113] px-4 py-2 text-xs font-mono font-bold uppercase tracking-wider text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-xl">
                    <span>▶ View Motion</span>
                    <span>↗</span>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#111113] group-hover:text-neutral-600 transition-colors">
                    {PROJECTS[0].title}
                  </h3>
                  <p className="mt-1.5 text-sm text-neutral-500 font-light leading-relaxed max-w-xl">
                    {PROJECTS[0].blurb}
                  </p>
                  <p className="mt-3 text-[11px] font-mono text-neutral-400 uppercase tracking-widest">
                    {PROJECTS[0].category} · {PROJECTS[0].meta}
                  </p>
                </div>
              </div>
            )}

            {/* Stacked Cards on Right (Right 5 Cols) */}
            <div className="lg:col-span-5 flex flex-col gap-12">
              {PROJECTS.slice(1, 3).map((p, i) => (
                <div
                  key={p.slug}
                  data-reveal
                  data-delay={String((i + 1) * 100)}
                  onClick={() => {
                    const v = STUDIO_VIDEOS.find((vid) => vid.id === p.vimeoId);
                    if (v) setModalVideo(v);
                  }}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl md:rounded-[28px] bg-neutral-900 border border-black/[0.06] shadow-md transition-shadow duration-500 group-hover:shadow-xl">
                    <img
                      src={STUDIO_VIDEOS.find((v) => v.id === p.vimeoId)?.thumbnail || p.image}
                      alt={p.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    
                    {/* Subtle Client Tag */}
                    <span className="absolute top-4 left-4 rounded-full bg-white/95 backdrop-blur px-3.5 py-1 text-[10px] font-mono uppercase tracking-wider text-[#111113] shadow-sm">
                      {p.client}
                    </span>

                    {/* Minimal Floating Hover Trigger */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full bg-[#111113] px-3.5 py-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-xl">
                      <span>▶ View</span>
                      <span>↗</span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <h3 className="text-xl font-bold tracking-tight text-[#111113] group-hover:text-neutral-600 transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm text-neutral-500 font-light leading-relaxed line-clamp-2">
                      {p.blurb}
                    </p>
                    <p className="mt-2.5 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                      {p.category} · {p.meta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Row (3 Column Minimal Grid) */}
          <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
            {PROJECTS.slice(3).map((p, i) => (
              <div
                key={p.slug}
                data-reveal
                data-delay={String(i * 80)}
                onClick={() => {
                  const v = STUDIO_VIDEOS.find((vid) => vid.id === p.vimeoId);
                  if (v) setModalVideo(v);
                }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl md:rounded-[24px] bg-neutral-900 border border-black/[0.06] shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
                  <img
                    src={STUDIO_VIDEOS.find((v) => v.id === p.vimeoId)?.thumbnail || p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  
                  {/* Subtle Client Tag */}
                  <span className="absolute top-3.5 left-3.5 rounded-full bg-white/95 backdrop-blur px-3 py-0.5 text-[9px] font-mono uppercase tracking-wider text-[#111113] shadow-sm">
                    {p.client}
                  </span>

                  {/* Minimal Floating Hover Trigger */}
                  <div className="absolute bottom-3.5 right-3.5 flex items-center gap-1 rounded-full bg-[#111113] px-3 py-1 text-[11px] font-mono font-bold uppercase text-white opacity-0 translate-y-1.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 shadow-lg">
                    <span>View ↗</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-lg font-bold tracking-tight text-[#111113] group-hover:text-neutral-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-500 font-light leading-relaxed line-clamp-2">
                    {p.blurb}
                  </p>
                  <p className="mt-2 text-[10px] font-mono text-neutral-400 uppercase tracking-widest">
                    {p.category} · {p.meta}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Studio Disciplines / Services Matrix ── */}
        <section id="services" className="mt-32 md:mt-48 px-6 md:px-12 max-w-[1440px] mx-auto">
          <div className="border-t border-black/[0.08] pt-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between pb-10 border-b border-black/[0.08] gap-4">
              <div data-reveal>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-2">
                  Capabilities
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#111113]">
                  What We Build
                </h2>
              </div>
              <p data-reveal className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
                Full-spectrum motion design & brand systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {SERVICES.map((s, idx) => (
                <div
                  key={s.name}
                  data-reveal
                  data-delay={String(idx * 100)}
                  className="rounded-[28px] border border-black/10 bg-white p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div>
                    <span className="font-mono text-xs text-neutral-400 font-bold block mb-4">
                      {s.index}
                    </span>
                    <h3 className="text-2xl font-bold uppercase tracking-tight text-[#111113] mb-2">
                      {s.name}
                    </h3>
                    <p className="font-mono text-xs text-neutral-500 uppercase tracking-wider mb-6">
                      {s.tag}
                    </p>
                    <ul className="space-y-3 font-light text-sm text-neutral-600">
                      {s.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-black/40" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 pt-6 border-t border-black/[0.06] flex items-center justify-between font-mono text-xs text-neutral-500">
                    <span>Delivered worldwide</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Client / Partner Testimonial & Marquee ── */}
        <section id="clients" className="mt-32 md:mt-44 border-y border-black/[0.08] bg-white py-16">
          <div className="max-w-[1440px] mx-auto px-6 md:px-12">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-6 text-center">
              Selected Collaborators & Global Brands
            </span>
            <div className="overflow-hidden">
              <div className="flex w-max animate-marquee gap-16 text-lg sm:text-2xl font-bold uppercase tracking-wider text-neutral-400">
                {[0, 1].map((k) => (
                  <span key={k} className="flex gap-16">
                    {CLIENTS.map((c) => (
                      <span key={c} className="hover:text-black transition-colors cursor-default">
                        {c}
                      </span>
                    ))}
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <div data-reveal className="mt-16 max-w-4xl mx-auto text-center">
              <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#111113] leading-relaxed">
                “{TESTIMONIALS[0].quote}”
              </p>
              <div className="mt-6 font-mono text-xs uppercase tracking-wider text-neutral-500">
                <span className="text-[#111113] font-bold">{TESTIMONIALS[0].author}</span>
                <span> · {TESTIMONIALS[0].role} ({TESTIMONIALS[0].location})</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer Contact ── */}
        <footer className="px-6 py-24 md:px-12 max-w-[1440px] mx-auto">
          <div className="rounded-[36px] bg-[#111113] text-white p-8 sm:p-14 md:p-20 relative overflow-hidden">
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-blue-500/20 via-transparent to-transparent blur-[80px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-400 block mb-4">
                Work With TORSTUDIO
              </span>
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight leading-[0.92]">
                Let&apos;s build what<br />
                <span className="font-serif italic font-normal text-neutral-300 lowercase">
                  moves your audience.
                </span>
              </h2>
              <p className="mt-6 text-neutral-400 text-sm md:text-base max-w-xl font-light leading-relaxed">
                Open for select brand identity motion systems, 3D CGI design, and high-conversion ad sprints for 2026.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:hello@torstudio.design"
                  className="rounded-full bg-white px-8 py-3.5 text-xs font-bold uppercase tracking-wider text-black hover:bg-neutral-200 transition shadow-xl"
                >
                  Get In Touch ↗
                </a>
                <a
                  href={STUDIO_FOUNDER.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-mono uppercase tracking-wider text-white hover:bg-white/10 transition"
                >
                  Behance Archive ↗
                </a>
              </div>
            </div>

            <div className="relative z-10 mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] text-neutral-500 uppercase">
              <span>TORSTUDIO · Lagos, Nigeria</span>
              <span>Motion Systems & Brand Design</span>
            </div>
          </div>
        </footer>
      </main>

      {/* ── Motion Video Fullscreen Modal ── */}
      <MotionVideoModal video={modalVideo} onClose={() => setModalVideo(null)} />
    </div>
  );
}
