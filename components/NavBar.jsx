"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-5">
      <div className="max-w-7xl mx-auto transition-all duration-300">
        <div
          className={`
            flex items-center justify-between px-6 py-3
            border border-white/10 rounded-full
            transition-all duration-300

            ${
              scrolled
                ? "bg-black/60 backdrop-blur-md scale-[0.98]"
                : "bg-transparent backdrop-blur-0"
            }
          `}
        >
          {/* LOGO */}
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="PRINT STUDIO"
              className={`h-12 w-auto transition-all duration-300 ${
                scrolled ? "opacity-90 scale-95" : "opacity-100 scale-100"
              }`}
            />
          </div>

          {/* NAV */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {[
              ["Domov", "#home"],
              ["Služby", "#services"],
              ["Produkty", "#products"],
              ["O nás", "#about"],
              ["Kontakt", "#contact"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                className={`
                  transition
                  ${scrolled ? "text-white/60 hover:text-white" : "text-white/50 hover:text-white"}
                `}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition
                ${
                  scrolled
                    ? "bg-white text-black hover:scale-[1.03]"
                    : "border border-white/20 text-white hover:border-white/40"
                }
              `}
            >
              Cenová ponuka
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
