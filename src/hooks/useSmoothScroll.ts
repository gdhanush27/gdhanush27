import { useEffect } from "react";
import Lenis from "lenis";

const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

const NAV_OFFSET = -80;
const NAV_DURATION = 1.4;

function nativeSmoothScrollTo(targetY: number, durationMs: number) {
  const startY = window.scrollY;
  const distance = targetY - startY;
  if (Math.abs(distance) < 1) return;

  const startTime = performance.now();
  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(1, elapsed / durationMs);
    const eased = easeInOutCubic(progress);
    window.scrollTo(0, startY + distance * eased);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export default function useSmoothScroll() {
  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    let lenis: Lenis | null = null;
    let rafId = 0;

    if (!isTouch) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.5,
      });

      const raf = (time: number) => {
        lenis?.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);
    }

    const onAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;
      const el = document.querySelector(href) as HTMLElement | null;
      if (!el) return;
      e.preventDefault();

      if (lenis) {
        lenis.scrollTo(el, {
          offset: NAV_OFFSET,
          duration: NAV_DURATION,
          easing: easeInOutCubic,
        });
      } else {
        const targetY =
          el.getBoundingClientRect().top + window.scrollY + NAV_OFFSET;
        nativeSmoothScrollTo(targetY, NAV_DURATION * 1000);
      }
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      if (rafId) cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);
}
