"use client";

import { useState } from "react";
import Typography from "./Typography";

const links = [
  { label: "About", href: "#about" },
  { label: "Members", href: "#members" },
  { label: "Music", href: "#music" },
  { label: "Reunion", href: "#reunion" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#29262B]/10 bg-[#F6F1EA]/95 backdrop-blur">
      <nav className="mx-auto max-w-7xl px-6 py-5 md:px-10 lg:px-16">
        <div className="flex items-center justify-between">
          <a href="#home">
            <Typography variant="label">
              1D / SOCIETY
            </Typography>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition hover:text-[#B76E79]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#join"
              className="rounded-full bg-[#263B5A] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#B76E79]"
            >
              Join
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="rounded-full border border-[#29262B]/20 px-4 py-2 text-sm md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <div className="mt-5 flex flex-col gap-4 border-t border-[#29262B]/10 pt-5 md:hidden">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="rounded-full bg-[#263B5A] px-5 py-3 text-center text-sm font-semibold text-white"
            >
              Join the Society
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}