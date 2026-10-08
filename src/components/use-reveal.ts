"use client";

import { useEffect, useRef } from "react";

/** Attaches an IntersectionObserver + passive scroll listener that adds `.is-in` to elements as they scroll into view. */
export function useRevealRoot<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const root = ref.current ?? document.body;
    const els = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal], .mask-group, .mask-line"));
    const pending = new Set<HTMLElement>(els);

    const revealEl = (el: HTMLElement) => {
      if (!el.classList.contains("is-in")) {
        const delay = el.getAttribute("data-delay");
        if (delay) el.style.transitionDelay = `${delay}ms`;
        el.classList.add("is-in");
        pending.delete(el);
      }
    };

    // 1. Reveal ONLY elements that are visible in the initial viewport upon mount
    const checkInitialViewport = () => {
      const windowHeight = window.innerHeight;
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        // If element is already in the viewport on initial page load, reveal it
        if (rect.top < windowHeight * 0.9) {
          revealEl(el);
        }
      });
    };

    checkInitialViewport();

    // 2. IntersectionObserver for elements as the user scrolls
    let io: IntersectionObserver | null = null;
    if (typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const el = entry.target as HTMLElement;
              revealEl(el);
              io?.unobserve(el);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
      );

      els.forEach((el) => {
        if (!el.classList.contains("is-in")) {
          io?.observe(el);
        }
      });
    }

    // 3. Passive scroll handler as a rock-solid backup across mobile and desktop
    const onScroll = () => {
      if (pending.size === 0) return;
      const triggerY = window.innerHeight * 0.92;
      pending.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY) {
          revealEl(el);
          if (io) io.unobserve(el);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  return ref;
}
