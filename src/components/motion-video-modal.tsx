"use client";
import { useEffect } from "react";
import type { MotionVideo } from "@/data/studio";

type Props = {
  video: MotionVideo | null;
  onClose: () => void;
};

export default function MotionVideoModal({ video, onClose }: Props) {
  useEffect(() => {
    if (!video) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [video, onClose]);

  if (!video) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-xl border border-white/10 bg-black"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Minimal header */}
        <div className="flex items-center justify-between px-5 py-3">
          <p className="min-w-0 flex-1 truncate text-sm text-neutral-300">
            <span className="font-semibold text-white">{video.title}</span>
            <span className="text-neutral-500"> — {video.client} · {video.duration}</span>
          </p>
          <button
            onClick={onClose}
            className="ml-4 shrink-0 rounded-full px-3 py-1 text-xs uppercase tracking-wider text-neutral-400 transition hover:bg-white/10 hover:text-white"
            aria-label="Close video"
          >
            Close ✕
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://player.vimeo.com/video/${video.id}?autoplay=1&title=0&byline=0&portrait=0&badge=0&autopause=0`}
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            title={video.title}
          />
        </div>

        {/* Minimal footer */}
        <div className="flex items-center justify-between gap-4 px-5 py-3">
          <p className="min-w-0 flex-1 truncate text-xs text-neutral-500">{video.description}</p>
          <a
            href={video.vimeoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs text-neutral-400 underline-offset-4 transition hover:text-white hover:underline"
          >
            Vimeo ↗
          </a>
        </div>
      </div>
    </div>
  );
}
