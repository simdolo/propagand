// components/ScrollFadeSections.jsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function ScrollFadeSections({
  firstSection,
  secondSection,
}) {
  const containerRef = useRef(null);

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewport = window.innerHeight;

      /*
        STRUCTURE

        0% - 20%    = tolerance zone
        20% - 50%   = fade out first section
        50% - 80%   = fade in second section
        80% - 100%  = fully visible section 2
      */

      const totalScroll = viewport * 1.4;

      const passed = Math.min(
        Math.max(-rect.top, 0),
        totalScroll
      );

      const rawProgress = passed / totalScroll;

      setProgress(rawProgress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---- OPACITY LOGIC ----

  let firstOpacity = 1;
  let secondOpacity = 0;

  // tolerance
  if (progress < 0.2) {
    firstOpacity = 1;
    secondOpacity = 0;
  }

  // fade out first
  else if (progress >= 0.2 && progress < 0.5) {
    const local = (progress - 0.2) / 0.3;

    firstOpacity = 1 - local;
    secondOpacity = 0;
  }

  // fade in second
  else if (progress >= 0.5 && progress < 0.8) {
    const local = (progress - 0.5) / 0.3;

    firstOpacity = 0;
    secondOpacity = local;
  }

  // finished
  else {
    firstOpacity = 0;
    secondOpacity = 1;
  }

  return (
    <div ref={containerRef} className="relative h-[240vh]">

      {/* sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">

        {/* SECTION 1 */}
        <div
          className="absolute inset-0 will-change-opacity"
          style={{
            opacity: firstOpacity,
          }}
        >
          {firstSection}
        </div>

        {/* SECTION 2 */}
        <div
          className="absolute inset-0 will-change-opacity"
          style={{
            opacity: secondOpacity,
          }}
        >
          {secondSection}
        </div>

      </div>
    </div>
  );
}