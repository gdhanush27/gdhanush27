import { useEffect, useState } from "react";

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Disable on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      setEnabled(false);
      return;
    }
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHovering(!!t.closest("a, button, [data-hover]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed z-[100] hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hovering ? 2.2 : 1})`,
          transition: "transform 0.15s ease, opacity 0.2s",
        }}
      >
        <div className="h-3 w-3 rounded-full bg-accent-cyan mix-blend-difference" />
      </div>
      <div
        className="pointer-events-none fixed z-[99] hidden md:block"
        style={{
          left: pos.x,
          top: pos.y,
          transform: `translate(-50%, -50%) scale(${hovering ? 1.4 : 1})`,
          transition: "transform 0.4s ease, left 0.15s linear, top 0.15s linear",
        }}
      >
        <div className="h-9 w-9 rounded-full border border-white/30" />
      </div>
    </>
  );
}
