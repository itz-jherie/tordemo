"use client";

import { useState, useEffect, type RefObject } from "react";

/**
 * Global window scroll tracker with requestAnimationFrame throttling.
 * Returns scrollY (in px) and progress (0 to 1).
 */
export function useScrollProgress() {
  const [scrollState, setScrollState] = useState({
    scrollY: 0,
    progress: 0,
    isScrolled: false,
  });

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const prog = docHeight > 0 ? Math.min(Math.max(y / docHeight, 0), 1) : 0;

      setScrollState({
        scrollY: y,
        progress: prog,
        isScrolled: y > 40,
      });
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollState;
}

/**
 * Tracks an element's visibility progress through the viewport (0 when top enters, 1 when bottom leaves).
 */
export function useElementScroll<T extends HTMLElement>(ref: RefObject<T | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // 0 when rect.top == windowHeight (just entering from bottom)
      // 1 when rect.bottom == 0 (just leaving at top)
      const totalDistance = windowHeight + rect.height;
      const currentPos = windowHeight - rect.top;
      const p = Math.min(Math.max(currentPos / totalDistance, 0), 1);

      setProgress(p);
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    update();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ref]);

  return progress;
}
