"use client";
import { useState } from "react";
import BackNav from "@/components/back-nav";
import { PROJECTS } from "@/data/studio";
import { useRevealRoot } from "@/components/use-reveal";
const SYSTEMS = ["SYS-01 KINETIC TYPE", "SYS-02 3D MOTION", "SYS-03 BRAND IN MOTION", "SYS-04 AD CREATIVES"];
export default function SignalPage() {
const ref = useRevealRoot<HTMLDivElement>();
const [ch, setCh] = useState(0);
const [hovered, setHovered] = useState<number | null>(null);
return (
<div ref={ref} className="grain min-h-screen bg-neutral-950 font-mono text-neutral-200">
<BackNav index="04" title="Signal / Motion OS" />
<nav className="flex items-center justify-between border-b border-white/10 px-4 pt-14 pb-3 md:px-8">
<div className="flex items-center gap-3 font-sans">
<img src="/torstudio.png" alt="TORSTUDIO" className="h-7 md:h-8 w-auto object-contain" />
<span className="rounded border border-white/25 px-2 py-0.5 font-mono text-[10px]">OS v2.6</span>
</div>
<a href="#contact" className="bg-white px-4 py-1.5 font-mono text-[11px] font-bold uppercase text-black md:hidden">Start project</a>
<div className="hidden gap-5 font-mono text-[11px] uppercase md:flex">
<a href="#screen">Screen</a><a href="#index">Index</a><a href="#system">System</a>
<a href="#contact" className="bg-white px-4 py-1.5 font-bold text-black">Start project</a>
</div>
</nav>
<section id="screen" className="grid gap-4 px-4 pt-6 md:grid-cols-12 md:px-8">
<div className="md:col-span-9">
<div className="flex flex-wrap gap-2">
{SYSTEMS.map((c,i) => (
<button key={c} onClick={() => setCh(i)} className={"rounded border px-4 py-2 text-[11px] uppercase tracking-[0.15em] transition " + (ch===i?"border-white bg-white font-bold text-black":"border-white/25 text-neutral-300 hover:border-white")}>{c.split(" ")[0]}</button>
))}
</div>
<h1 className="mask-group mt-4 font-sans font-bold uppercase leading-[0.85] tracking-tight">
<span className="mask-line text-[13vw] md:text-[6.5rem]"><span>{SYSTEMS[ch].replace(/SYS-0\d /, "")}</span></span>
<span className="mask-line text-[13vw] md:text-[6.5rem]" key={ch}><span className="text-stroke">in motion</span></span>
</h1>
<div data-reveal="zoom" className="relative mt-5 overflow-hidden rounded-2xl border border-white/15 bg-black">
<div className="animate-kenburns absolute inset-0 bg-gradient-to-br from-neutral-600 via-neutral-900 to-black" />
<div className="absolute inset-x-0 top-0 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent p-4 font-mono text-[10px] uppercase tracking-[0.2em]">
<span>{SYSTEMS[ch]}</span><span className="flex items-center gap-1.5"><span className="h-1.5 w-1.5 animate-pulse-dot rounded-full bg-white" /> KINETIC</span>
</div>
<div className="relative flex aspect-video items-center justify-center">
<button className="flex h-20 w-20 items-center justify-center rounded-full border border-white/40 bg-white/10 text-2xl backdrop-blur transition hover:scale-110 hover:bg-white hover:text-black">PL</button>
</div>
<div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
<div className="h-1 rounded bg-white/20"><div className="h-full rounded bg-white" style={{width: 25 + ch*18 + "%"}} /></div>
<div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-[0.2em]"><span>Play - Pause - Loop</span><span>Keyframe · Ease-out</span></div>
</div>
</div>
</div>
<aside className="space-y-4 md:col-span-3">
<div data-reveal className="rounded-2xl border border-white/15 p-5">
<p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">Active system</p>
<p className="mt-2 font-sans text-2xl font-bold uppercase">{SYSTEMS[ch]}</p>
<p className="mt-2 text-xs leading-relaxed text-neutral-400">Motion design studio: kinetic typography, 3D motion systems, and high-impact ad motion.</p>
</div>
<div data-reveal className="rounded-2xl border border-white/15 p-5">
<p className="text-[10px] uppercase tracking-[0.25em] text-neutral-500">Studio stats</p>
<div className="mt-3 space-y-3">
{["Projects 120+","Views 40M","Brands 18","Uptime 99.9%"].map((s) => (
<div key={s}><div className="flex justify-between text-[11px] uppercase"><span>{s.split(" ")[0]}</span><span>{s.split(" ")[1]}</span></div>
<div className="shimmer-line mt-1 h-px w-full" /></div>
))}
</div>
</div>
<div data-reveal className="rounded-2xl bg-white p-5 text-black">
<p className="text-[10px] font-bold uppercase tracking-[0.25em]">Motion sprint</p>
<p className="mt-2 font-sans text-xl font-bold uppercase">Your brand, in motion by Friday?</p>
<a href="#contact" className="mt-3 inline-block rounded bg-black px-5 py-2 text-[11px] font-bold uppercase text-white">Book a slot</a>
</div>
</aside>
</section>
<section id="index" className="px-4 pt-12 md:px-8">
<div className="flex items-end justify-between border-b border-white/15 pb-3">
<h2 data-reveal className="font-sans text-3xl font-bold uppercase md:text-5xl">Motion index</h2>
<span data-reveal className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">Hover a row - preview appears</span>
</div>
<div>
{PROJECTS.map((p,i) => (
<div key={p.slug} data-reveal onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} className="group grid grid-cols-12 items-center gap-2 border-b border-white/10 py-4 transition hover:bg-white/5">
<span className="col-span-2 font-mono text-xs text-neutral-500 md:col-span-1">{String(i+1).padStart(3,"0")}</span>
<span className="col-span-10 font-sans text-2xl font-bold uppercase tracking-tight md:col-span-5 md:text-4xl">{p.title}</span>
<span className="col-span-6 px-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500 md:col-span-3">{p.category} / {p.year}</span>
<span className={"col-span-6 text-right md:col-span-3 " + (hovered===i?"opacity-100":"opacity-40")}>
<span className={"inline-block rounded bg-gradient-to-br px-6 py-2 text-[11px] font-bold uppercase text-white transition " + p.gradient + (hovered===i?" scale-110":"")}>Preview</span>
</span>
</div>
))}
</div>
</section>
<section id="system" className="grid gap-4 px-4 py-12 md:grid-cols-3 md:px-8">
{["SYS.01 Motion|Idents, loops, kinetic type systems.","SYS.02 Brand|Identities engineered for movement.","SYS.03 Ads|Flyer engines + weekly sprints."].map((r) => {
const a = r.split("|");
return <div key={a[0]} data-reveal className="rounded-2xl border border-white/15 p-6">
<p className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">{a[0]}</p>
<p className="mt-3 text-sm text-neutral-300">{a[1]}</p>
<div className="ticks-x mt-6 h-2 w-full text-white/30" />
</div>;})}
</section>
<footer id="contact" className="border-t border-white/15 px-4 py-16 md:px-8">
<div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
<div>
<p data-reveal className="text-[11px] uppercase tracking-[0.25em] text-neutral-500">Motion design partnership</p>
<p data-reveal className="mt-2 font-sans text-5xl font-bold uppercase md:text-7xl">Make it move</p>
</div>
<a data-reveal href="mailto:hello@torstudio.co" className="inline-block rounded bg-white px-8 py-4 font-sans text-xs font-bold uppercase tracking-[0.25em] text-black">hello@torstudio.co</a>
</div>
<div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
<img src="/torstudio.png" alt="TORSTUDIO" className="h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity" />
<p className="text-[10px] uppercase tracking-[0.25em] text-neutral-600">TORSTUDIO MOTION OS - 2026 - All systems operational</p>
</div>
</footer>
</div>
);
}
