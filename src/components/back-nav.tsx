import Link from "next/link";
import StudioLogo from "@/components/studio-logo";

export default function BackNav({
  index,
  title,
  dark = true,
}: {
  index: string;
  title: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`fixed inset-x-0 top-0 z-[90] border-b backdrop-blur-md ${
        dark
          ? "border-white/10 bg-black/55 text-neutral-200"
          : "border-black/10 bg-white/70 text-neutral-900"
      }`}
    >
      <div className="mx-auto flex h-11 max-w-[1440px] items-center justify-between px-4 text-[11px] font-semibold tracking-[0.18em] uppercase md:px-8">
        <Link href="/" className="group flex items-center gap-2">
          <span className="inline-block transition-transform group-hover:-translate-x-1">←</span>
          Showroom
        </Link>
        <span className="hidden sm:block opacity-70">
          Concept {index} — {title}
        </span>
        <Link href="/" className="flex items-center opacity-85 hover:opacity-100 transition-opacity" title="TORSTUDIO">
          <StudioLogo className="h-4.5" color={dark ? "white" : "black"} />
        </Link>
      </div>
    </div>
  );
}
