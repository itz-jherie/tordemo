"use client";
import BackNav from "@/components/back-nav";
import { PROJECTS } from "@/data/studio";
import { useRevealRoot } from "@/components/use-reveal";
export default function NoirPage() {
const ref = useRevealRoot<HTMLDivElement>();
return (
<div ref={ref} className="grain min-h-screen bg-[#0c0c0d] text-neutral-100">
<BackNav index="02" title="Noir Gallery" />
<nav className="flex items-center justify-between px-5 pt-16 md:px-10">
<span className="hidden text-xs tracking-[0.3em] uppercase opacity-70 sm:block">Est. 2020 - Lagos</span>
<div className="flex items-center gap-2">
<img src="/torstudio.png" alt="TORSTUDIO" className="h-8 md:h-9 w-auto object-contain" />
</div>
<a href="#contact" className="rounded-full border border-white/30 px-5 py-2 text-[11px] uppercase tracking-[0.2em]">Enquire</a>
</nav>
<header className="mask-group px-5 pt-10 text-center md:px-10">
<p data-reveal className="text-[11px] uppercase tracking-[0.35em] text-neutral-400">A motion-first studio - Reel N°26</p>
<h1 className="mt-4 leading-[0.9]">
<span className="mask-line font-serif italic text-[15vw] md:text-[8rem]"><span>Design in</span></span>
<span className="mask-line text-[15vw] font-bold uppercase tracking-tight md:text-[8rem]"><span>motion,</span></span>
<span className="mask-line font-serif italic text-[15vw] text-neutral-400 md:text-[8rem]"><span>made to linger.</span></span>
</h1>
</header>
<section className="relative mx-auto mt-10 max-w-5xl px-5">
<div data-reveal="zoom" className="relative overflow-hidden rounded-[2rem] border border-white/15">
<div className="animate-kenburns h-[62vw] max-h-[560px] min-h-[340px] w-full bg-[radial-gradient(circle_at_50%_30%,#4a4a4d_0%,#171718_45%,#060607_100%)]" />
<div className="absolute left-1/2 top-8 h-64 w-64 -translate-x-1/2 rounded-full bg-white/25 blur-[110px]" />
<div className="absolute inset-0 flex flex-col items-center justify-center text-center">
<div className="relative flex h-28 w-28 items-center justify-center">
<div className="absolute inset-0 animate-spin-slower rounded-full border border-dashed border-white/40" />
<button className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-xl text-black transition hover:scale-110">PL</button>
</div>
<p className="mt-5 font-serif italic text-2xl">showreel — twenty twenty six</p>
<p className="mt-1 font-mono text-[11px] uppercase tracking-[0.25em] text-neutral-400">01:12 - sound on</p>
</div>
<div className="absolute bottom-4 flex w-full items-center gap-3 px-6 font-mono text-[10px] uppercase tracking-[0.2em]">
<span>Reel</span><div className="h-px flex-1 bg-white/25" /><span>04 scenes</span>
</div>
</div>
</section>
<div className="mt-8 overflow-hidden border-y border-white/10 py-4">
<div className="flex w-max animate-marquee gap-10 font-serif italic text-2xl text-neutral-300">
{[0,1].map((k) => <span key={k}>motion ident - brand world - flyer suite - kinetic type - ad sprint -&nbsp;</span>)}
</div>
</div>
<section className="px-5 pt-14 md:px-10">
<div className="flex items-end justify-between">
<h2 data-reveal className="font-serif italic text-4xl md:text-6xl">Selected <span className="font-sans font-bold not-italic uppercase">motion</span></h2>
<span data-reveal className="font-mono text-[11px] uppercase tracking-[0.2em] text-neutral-500">Drag - scroll sideways</span>
</div>
<div className="no-scrollbar -mx-5 mt-6 flex snap-x gap-4 overflow-x-auto px-5 pb-2">
{PROJECTS.map((p,i) => (
<article key={p.slug} data-reveal className="group w-[78vw] max-w-[420px] shrink-0 snap-start overflow-hidden rounded-3xl border border-white/12 bg-neutral-900">
<div className={`relative h-64 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
<span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em]">N°{i+1} - {p.year}</span>
<span className="absolute inset-0 flex items-center justify-center text-6xl font-bold uppercase opacity-80 transition duration-700 group-hover:scale-110">{p.title.split(" ")[0]}</span>
</div>
<div className="p-6">
<p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-500">{p.category} - {p.client}</p>
<h3 className="mt-2 text-2xl font-bold">{p.title}</h3>
<p className="mt-2 text-sm text-neutral-400">{p.blurb}</p>
</div>
</article>
))}
</div>
</section>
<section className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:px-10">
<div data-reveal>
<p className="font-mono text-[11px] uppercase tracking-[0.3em] text-neutral-500">The studio</p>
<p className="mt-4 font-serif text-3xl leading-snug italic md:text-4xl">We choreograph logos, type and campaigns - slowly, then all at once.</p>
</div>
<div className="space-y-px overflow-hidden rounded-3xl border border-white/12 bg-white/10">
{["Motion Design|Idents, loops, title sequences","Brand Design|Identity systems in motion","Ad Design|Flyer suites that stop thumbs"].map((r) => {
const a = r.split("|");
return <div key={a[0]} className="group flex items-center justify-between bg-[#0c0c0d] p-6 transition hover:bg-white hover:text-black">
<span className="font-serif italic text-2xl">{a[0]}</span><span className="text-xs uppercase tracking-[0.2em] opacity-60">{a[1]}</span>
</div>;})}
</div>
</section>
<footer id="contact" className="border-t border-white/10 px-5 py-16 text-center flex flex-col items-center gap-6">
<p data-reveal className="font-serif italic text-4xl md:text-6xl">Begin your <span className="font-sans font-bold not-italic uppercase">scene</span></p>
<a data-reveal href="mailto:hello@torstudio.co" className="mt-2 inline-block rounded-full bg-white px-8 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black">Book a premiere call</a>
<img src="/torstudio.png" alt="TORSTUDIO" className="h-7 w-auto object-contain opacity-75 hover:opacity-100 transition-opacity mt-4" />
<p className="font-mono text-[10px] uppercase tracking-[0.25em] text-neutral-600">TORSTUDIO — 2026 — All frames reserved</p>
</footer>
</div>
);
}
