import { useEffect, useState } from "react";
import logoImg from "@/assets/logo.jpeg";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Transformations", href: "#transform" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#booking" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-6"
        }`}
      >
        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-500 ${
            scrolled ? "glass rounded-full mx-4 md:mx-auto py-3 px-6 shadow-soft-luxe" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-3">
            <img src={logoImg} alt="glambyshalinee" className="h-10 w-10 rounded-full object-cover shadow-soft-luxe" />
            <span className="font-display text-xl tracking-tight hidden sm:inline">
              glambyshalinee<span className="text-gradient-gold">.</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium tracking-wide text-foreground/80 transition hover:text-[color:var(--rose-gold)]
                  after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-[color:var(--rose-gold)] after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <a
            href="#booking"
            className="hidden rounded-full bg-gradient-luxe px-5 py-2.5 text-sm font-medium text-[color:var(--ivory)] shadow-soft-luxe transition hover:scale-105 md:inline-block"
          >
            Book Appointment
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-px w-6 bg-foreground transition ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-px w-6 bg-foreground transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-foreground transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden mx-4 mt-2 overflow-hidden rounded-3xl glass transition-all duration-500 ${
            open ? "max-h-96 py-6" : "max-h-0"
          }`}
        >
          <nav className="flex flex-col items-center gap-4 px-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-lg font-serif-luxe">
                {l.label}
              </a>
            ))}
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-luxe px-6 py-2.5 text-sm text-[color:var(--ivory)]"
            >
              Book Appointment
            </a>
          </nav>
        </div>
      </header>

      {/* Scroll progress */}
      <div className="fixed left-0 top-0 z-[60] h-0.5 w-full">
        <div
          className="h-full bg-gradient-luxe transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>
    </>
  );
}
