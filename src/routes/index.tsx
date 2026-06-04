import { useEffect, useRef, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { Nav } from "@/components/site/Nav";
import { FloatingWhatsApp } from "@/components/site/Floating";
import {
  Sparkles,
  Crown,
  Heart,
  Star,
  Diamond,
  Brush,
  Scissors,
  Hand,
  Award,
  ShieldCheck,
  Clock,
  Wand2,
  UserCheck,
  Leaf,
  Users,
  MapPin,
  Instagram,
  ChevronDown,
  ArrowRight,
  Calendar,
  Phone,
  Mail,
  Quote,
} from "lucide-react";
import heroBride from "@/assets/hero-bride.webp";
import logoImg from "@/assets/logo.jpeg";
import artist from "@/assets/artist-portrait.webp";
import p1 from "@/assets/portfolio-1.webp";
import p2 from "@/assets/portfolio-2.webp";
import p3 from "@/assets/portfolio-3.webp";
import p4 from "@/assets/portfolio-4.webp";
import p5 from "@/assets/portfolio-5.webp";
import p6 from "@/assets/portfolio-6.webp";
import beforeImg from "@/assets/before.webp";
import afterImg from "@/assets/after.webp";

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden bg-gradient-soft">
      <div className="absolute inset-0">
        <img
          src={heroBride}
          alt="Luxury bridal makeup artistry portrait"
          className="h-full w-full object-cover object-[50%_30%] animate-slow-zoom"
          width={1536}
          height={1920}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--ivory)]/30 via-transparent to-[color:var(--ivory)]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--ivory)]/70 via-transparent to-transparent" />
      </div>

      {/* floating accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[28%] h-2 w-2 rounded-full bg-[color:var(--champagne)] opacity-80 animate-float" />
        <div
          className="absolute right-[12%] top-[40%] h-3 w-3 rounded-full bg-[color:var(--rose-gold)] opacity-60 animate-float"
          style={{ animationDelay: "1.2s" }}
        />
        <div
          className="absolute left-[18%] bottom-[22%] h-1.5 w-1.5 rounded-full bg-[color:var(--champagne)] animate-float"
          style={{ animationDelay: "2.4s" }}
        />
        <Sparkles
          className="absolute right-[18%] top-[18%] h-6 w-6 text-[color:var(--champagne)] opacity-70 animate-float"
          style={{ animationDelay: "0.6s" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-6 pb-24 pt-32">
        <div className="max-w-2xl">
          <div className="mb-6 flex items-center gap-3 animate-fade-in-soft">
            <div className="h-px w-12 bg-[color:var(--rose-gold)]" />
            <span className="font-sans-luxe text-xs uppercase tracking-[0.4em] text-[color:var(--rose-gold)]">
              Celebrity Bridal Artist
            </span>
          </div>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tight text-foreground md:text-7xl lg:text-[5.5rem] animate-fade-up">
            Creating <em className="font-serif-luxe italic text-gradient-gold">Timeless</em>
            <br /> Bridal Beauty
          </h1>
          <p
            className="mt-8 max-w-xl font-serif-luxe text-xl leading-relaxed text-foreground/70 md:text-2xl animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Where artistry meets emotion — a sanctuary of soft glam luxury, crafted for the most
            unforgettable moments of your life.
          </p>
          <div
            className="mt-10 flex flex-wrap gap-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#booking"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-luxe px-8 py-4 text-sm font-medium uppercase tracking-widest text-[color:var(--ivory)] shadow-luxe transition hover:scale-[1.03]"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--luxe-black)]/20 bg-[color:var(--ivory)]/40 px-8 py-4 text-sm font-medium uppercase tracking-widest backdrop-blur-md transition hover:border-[color:var(--rose-gold)] hover:text-[color:var(--rose-gold)]"
            >
              View Portfolio
            </a>
          </div>

          <div
            className="mt-16 flex flex-wrap items-center gap-8 animate-fade-up"
            style={{ animationDelay: "0.6s" }}
          >
            {[
              { v: "12+", l: "Years Crafting" },
              { v: "850+", l: "Happy Brides" },
              { v: "40+", l: "Editorials" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl text-gradient-gold">{s.v}</div>
                <div className="font-sans-luxe text-[11px] uppercase tracking-[0.25em] text-foreground/60">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-center">
        <ChevronDown className="mx-auto h-6 w-6 animate-bounce text-[color:var(--rose-gold)]" />
        <span className="mt-1 block font-sans-luxe text-[10px] uppercase tracking-[0.3em] text-foreground/60">
          Scroll
        </span>
      </div>
    </section>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28 md:py-40">
      <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-[color:var(--blush)] blur-3xl opacity-60" />
      <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-[color:var(--nude)] blur-3xl opacity-50" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24">
        <div className="scroll-reveal relative">
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-luxe opacity-20 blur-2xl" />
          <div className="image-zoom relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-luxe">
            <img
              src={artist}
              alt="Portrait of bridal makeup artist"
              className="h-full w-full object-cover"
              loading="lazy"
              width={1024}
              height={1280}
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden rounded-2xl glass p-4 shadow-soft-luxe md:block">
            <div className="flex items-center gap-3">
              <Award className="h-8 w-8 text-[color:var(--rose-gold)]" />
              <div>
                <div className="font-display text-lg">Award Winning</div>
                <div className="font-sans-luxe text-[10px] uppercase tracking-widest text-foreground/60">
                  Vogue India 2024
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-reveal flex flex-col justify-center">
          <span className="font-sans-luxe text-xs uppercase tracking-[0.4em] text-[color:var(--rose-gold)]">
            The Artist
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.1] md:text-6xl">
            A craft of <em className="font-serif-luxe italic text-gradient-gold">light, skin</em>
            <br />
            and quiet luxury.
          </h2>
          <p className="mt-8 font-serif-luxe text-xl leading-relaxed text-foreground/75">
            For over a decade, Aanya has shaped the face of modern bridal beauty — blending heritage
            techniques with the polish of international fashion houses. Her work has graced
            editorial covers, runways, and the most intimate of weddings.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/70">
            Every look begins with a conversation. Every brush stroke ends with confidence.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6">
            {[
              { v: "Pro Certified", l: "MAC · Bobbi Brown" },
              { v: "Vogue · Elle", l: "Featured Editorial" },
              { v: "Bridal Asia", l: "Master Workshops" },
              { v: "12 Cities", l: "Destination Weddings" },
            ].map((b) => (
              <div key={b.v} className="border-l border-[color:var(--rose-gold)]/40 pl-4">
                <div className="font-display text-lg">{b.v}</div>
                <div className="font-sans-luxe text-[10px] uppercase tracking-widest text-foreground/55">
                  {b.l}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 font-script text-5xl text-[color:var(--rose-gold)]">Shalinee</div>
          <div className="gold-divider mt-2 w-40" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
const services = [
  {
    icon: Crown,
    name: "Basic Bridal",
    price: "₹5,000 – ₹10,000",
    desc: "Signature heirloom bridal artistry for the most cherished day.",
  },
  {
    icon: Sparkles,
    name: "HD Makeup",
    price: "₹4,500 – ₹8,000",
    desc: "Camera-ready finish that lives flawlessly on every screen.",
  },
  {
    icon: Wand2,
    name: "Airbrush Makeup",
    price: "₹10,000 – ₹15,000",
    desc: "Weightless coverage with a luminous, second-skin glow.",
  },
  {
    icon: Heart,
    name: "Engagement / Reception",
    price: "₹5,000 – ₹8,000",
    desc: "Soft romantic glam that captures the moment forever.",
  },
  {
    icon: Star,
    name: "Party / Occasion Makeup",
    price: "₹1,500 – ₹3,500",
    desc: "Effortless polish for celebrations big and small.",
  },
  {
    icon: Scissors,
    name: "Hairstyling",
    price: "₹600 – ₹1,000",
    desc: "Sculptural updos, soft waves and contemporary chignons. Advanced styling at ₹2,000+",
  },
  {
    icon: Hand,
    name: "Draping (Saree/Dupatta)",
    price: "₹300 – ₹600",
    desc: "Couture saree & dupatta draping with architectural finesse.",
  },
  {
    icon: Leaf,
    name: "Nail Extensions",
    price: "Coming soon",
    desc: "Hand-finished nail art and luxe extensions — launching soon.",
  },
];

function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[color:var(--ivory)] py-28 md:py-40"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="scroll-reveal mx-auto max-w-2xl text-center">
          <span className="font-sans-luxe text-xs uppercase tracking-[0.4em] text-[color:var(--rose-gold)]">
            Signature Services
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Couture beauty, <em className="font-serif-luxe italic text-gradient-gold">curated</em>{" "}
            for you
          </h2>
          <p className="mt-6 font-serif-luxe text-lg text-foreground/70">
            Each experience is bespoke — a meticulous blend of skin prep, technique and
            storytelling.
          </p>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.name}
                className="scroll-reveal group relative overflow-hidden rounded-3xl border border-[color:var(--border)] bg-card p-8 hover-lift"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-transparent to-[color:var(--blush)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-luxe opacity-0 blur-2xl transition group-hover:opacity-30" />

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-luxe text-[color:var(--ivory)] shadow-soft-luxe">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/65">{s.desc}</p>
                <div className="mt-6 flex items-center justify-between border-t border-[color:var(--border)] pt-4">
                  <span className="font-serif-luxe text-base text-[color:var(--rose-gold)]">
                    {s.price}
                  </span>
                  <ArrowRight className="h-4 w-4 text-foreground/40 transition group-hover:translate-x-1 group-hover:text-[color:var(--rose-gold)]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PORTFOLIO ---------------- */
const portfolio = [
  { src: p1, cat: "Soft Glam", tall: true },
  { src: p2, cat: "Bridal" },
  { src: p3, cat: "Editorial", tall: true },
  { src: p4, cat: "Engagement" },
  { src: p5, cat: "Reception", tall: true },
  { src: p6, cat: "Party Looks" },
];

const categories = [
  "All",
  "Bridal",
  "Soft Glam",
  "Editorial",
  "Engagement",
  "Reception",
  "Party Looks",
];

function Portfolio() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<string | null>(null);
  const items = filter === "All" ? portfolio : portfolio.filter((p) => p.cat === filter);

  return (
    <section id="portfolio" className="relative bg-gradient-soft py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="scroll-reveal flex flex-col items-center text-center">
          <span className="font-sans-luxe text-xs uppercase tracking-[0.4em] text-[color:var(--rose-gold)]">
            Portfolio
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            A gallery of <em className="font-serif-luxe italic text-gradient-gold">muses</em>
          </h2>
        </div>

        <div className="scroll-reveal mt-12 flex flex-wrap items-center justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.2em] transition ${
                filter === c
                  ? "bg-gradient-luxe text-[color:var(--ivory)] shadow-soft-luxe"
                  : "border border-[color:var(--border)] text-foreground/70 hover:border-[color:var(--rose-gold)] hover:text-[color:var(--rose-gold)]"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => setLightbox(it.src)}
              className="group relative block w-full overflow-hidden rounded-3xl shadow-soft-luxe scroll-reveal"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <img
                src={it.src}
                alt={`${it.cat} look`}
                loading="lazy"
                width={1024}
                height={it.tall ? 1400 : 1024}
                className="w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                style={{ aspectRatio: it.tall ? "3/4" : "1/1" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--luxe-black)]/70 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-6 text-left text-[color:var(--ivory)] opacity-0 transition group-hover:opacity-100">
                <span className="font-sans-luxe text-[10px] uppercase tracking-[0.3em]">
                  {it.cat}
                </span>
                <div className="font-display text-2xl">View Closer</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[color:var(--luxe-black)]/90 p-6 backdrop-blur-md animate-fade-in-soft"
        >
          <img
            src={lightbox}
            alt="Look"
            className="max-h-[90vh] max-w-full rounded-2xl shadow-luxe"
          />
        </div>
      )}
    </section>
  );
}

/* ---------------- BEFORE / AFTER ---------------- */
function Transform() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <section
      id="transform"
      className="relative overflow-hidden bg-[color:var(--ivory)] py-28 md:py-40"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="scroll-reveal mx-auto max-w-2xl text-center">
          <span className="font-sans-luxe text-xs uppercase tracking-[0.4em] text-[color:var(--rose-gold)]">
            The Transformation
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Drag to reveal the <em className="font-serif-luxe italic text-gradient-gold">glow</em>
          </h2>
        </div>

        <div
          ref={ref}
          onMouseDown={(e) => {
            dragging.current = true;
            move(e.clientX);
          }}
          onMouseUp={() => (dragging.current = false)}
          onMouseLeave={() => (dragging.current = false)}
          onMouseMove={(e) => dragging.current && move(e.clientX)}
          onTouchMove={(e) => move(e.touches[0].clientX)}
          className="scroll-reveal relative mx-auto mt-16 aspect-[4/5] max-w-3xl select-none overflow-hidden rounded-[2rem] shadow-luxe md:aspect-[16/10]"
        >
          <img
            src={afterImg}
            alt="After bridal makeup"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            width={1024}
            height={1280}
          />
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
            <img
              src={beforeImg}
              alt="Before makeup"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ width: `${(100 / pos) * 100}%`, maxWidth: "none" }}
              loading="lazy"
              width={1024}
              height={1280}
            />
          </div>

          <div className="absolute left-6 top-6 rounded-full glass-dark px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[color:var(--ivory)]">
            Before
          </div>
          <div className="absolute right-6 top-6 rounded-full bg-gradient-luxe px-4 py-1.5 text-xs uppercase tracking-[0.3em] text-[color:var(--ivory)]">
            After
          </div>

          <div
            className="absolute inset-y-0 z-10 w-0.5 bg-[color:var(--ivory)] shadow-glow"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-gradient-luxe shadow-luxe">
              <ArrowRight className="h-4 w-4 text-[color:var(--ivory)]" />
              <ArrowRight className="h-4 w-4 -scale-x-100 text-[color:var(--ivory)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
const reviews = [
  {
    name: "Ishita & Rohan",
    role: "Bride · Udaipur Wedding",
    text: "Aanya didn't just do my makeup — she translated my entire wedding vision into a feeling. My grandmother cried.",
    rating: 5,
  },
  {
    name: "Priya Kapoor",
    role: "Vogue Cover",
    text: "An unmatched eye for light and skin. Working with her is like collaborating with a master painter.",
    rating: 5,
  },
  {
    name: "Meera Shah",
    role: "Reception · Mumbai",
    text: "Everyone asked who did my face. Twelve hours of dancing and the glow stayed exactly the same.",
    rating: 5,
  },
  {
    name: "Tanvi & Family",
    role: "Destination Bride · Goa",
    text: "Calm, kind, and a complete artist. She made the most stressful morning feel like a spa.",
    rating: 5,
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section
      id="reviews"
      className="relative bg-gradient-dark py-28 text-[color:var(--ivory)] md:py-40"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-[color:var(--rose-gold)] blur-3xl" />
        <div className="absolute right-1/4 bottom-10 h-72 w-72 rounded-full bg-[color:var(--champagne)] blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="font-sans-luxe text-xs uppercase tracking-[0.4em] text-[color:var(--champagne)]">
          Words From Our Brides
        </span>
        <h2 className="mt-4 font-display text-4xl md:text-6xl">
          <em className="font-serif-luxe italic text-gradient-gold">Love</em>, in their words
        </h2>

        <div className="relative mt-16 min-h-[260px]">
          {reviews.map((r, idx) => (
            <div
              key={r.name}
              className={`absolute inset-0 transition-all duration-700 ${
                i === idx
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6 pointer-events-none"
              }`}
            >
              <Quote className="mx-auto h-10 w-10 text-[color:var(--champagne)]" />
              <p className="mt-6 font-serif-luxe text-2xl leading-relaxed md:text-3xl">
                "{r.text}"
              </p>
              <div className="mt-8 flex items-center justify-center gap-1 text-[color:var(--champagne)]">
                {Array.from({ length: r.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <div className="mt-4 font-display text-xl">{r.name}</div>
              <div className="font-sans-luxe text-[10px] uppercase tracking-[0.3em] text-[color:var(--ivory)]/60">
                {r.role}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-10 bg-[color:var(--champagne)]" : "w-2 bg-[color:var(--ivory)]/30"
              }`}
              aria-label={`Review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- INSTAGRAM ---------------- */
const igPosts = [p1, p2, p3, p4, p5, p6];

function InstagramFeed() {
  return (
    <section className="bg-[color:var(--ivory)] py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="scroll-reveal flex flex-col items-center text-center">
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Follow our <em className="font-serif-luxe italic text-gradient-gold">beauty journey</em>
          </h2>
          <a
            href="https://www.instagram.com/softglam"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-luxe px-6 py-3 text-xs uppercase tracking-[0.3em] text-[color:var(--ivory)] shadow-soft-luxe transition hover:scale-105"
          >
            <Instagram className="h-4 w-4" /> Follow
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {igPosts.map((src, i) => (
            <a
              key={i}
              href="https://www.instagram.com/softglam"
              target="_blank"
              rel="noopener noreferrer"
              className="scroll-reveal group relative aspect-square overflow-hidden rounded-2xl"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <img
                src={src}
                alt="Instagram reel"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                loading="lazy"
                width={600}
                height={600}
              />
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-luxe/60 opacity-0 transition group-hover:opacity-100">
                <Instagram className="h-8 w-8 text-[color:var(--ivory)]" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
const whys = [
  { icon: Diamond, t: "Luxury Products", d: "Only the finest pro-grade brands." },
  { icon: ShieldCheck, t: "Hygienic Process", d: "Single-use applicators, sanitised tools." },
  { icon: Clock, t: "Long-lasting", d: "Designed to glow from morning to last dance." },
  { icon: Star, t: "Celebrity Techniques", d: "Trained at international fashion houses." },
  { icon: UserCheck, t: "Personalised Looks", d: "A signature created uniquely for you." },
  { icon: Leaf, t: "Skin-friendly", d: "Sensitive skin & vegan-conscious formulas." },
  { icon: Users, t: "Professional Team", d: "Every artist is hand-trained by Aanya." },
  { icon: MapPin, t: "On-location", d: "Worldwide destination weddings welcomed." },
];

function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-gradient-soft py-28 md:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="scroll-reveal mx-auto max-w-2xl text-center">
          <span className="font-sans-luxe text-xs uppercase tracking-[0.4em] text-[color:var(--rose-gold)]">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            The mark of <em className="font-serif-luxe italic text-gradient-gold">true luxury</em>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whys.map((w, i) => {
            const Icon = w.icon;
            return (
              <div
                key={w.t}
                className="scroll-reveal group rounded-3xl glass p-8 hover-lift"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-luxe text-[color:var(--ivory)] shadow-soft-luxe transition group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl">{w.t}</h3>
                <p className="mt-2 text-sm text-foreground/65">{w.d}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- BOOKING ---------------- */
function Booking() {
  return (
    <section
      id="booking"
      className="relative overflow-hidden bg-[color:var(--ivory)] py-28 md:py-40"
    >
      <div className="absolute inset-0 -z-0">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-luxe opacity-10" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2">
        <div className="scroll-reveal">
          <span className="font-sans-luxe text-xs uppercase tracking-[0.4em] text-[color:var(--rose-gold)]">
            Reserve Your Date
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Reserve your <em className="font-serif-luxe italic text-gradient-gold">glam date</em>
          </h2>
          <p className="mt-6 font-serif-luxe text-lg text-foreground/70">
            We accept a limited number of bookings per season to honour every client with our full
            attention. Tell us about your event and we'll respond within 24 hours.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href="tel:+919340590475"
              className="flex items-center gap-4 text-foreground/80 hover:text-[color:var(--rose-gold)] transition"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-luxe text-[color:var(--ivory)]">
                <Phone className="h-4 w-4" />
              </span>
              <span className="font-serif-luxe text-lg">+91 93405 90475</span>
            </a>
            <a
              href="mailto:glambyshalinee@gmail.com"
              className="flex items-center gap-4 text-foreground/80 hover:text-[color:var(--rose-gold)] transition"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-luxe text-[color:var(--ivory)]">
                <Mail className="h-4 w-4" />
              </span>
              <span className="font-serif-luxe text-lg">glambyshalinee@gmail.com</span>
            </a>
            <div className="flex items-center gap-4 text-foreground/80">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-luxe text-[color:var(--ivory)]">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="font-serif-luxe text-lg">Mumbai · Delhi · Worldwide</span>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");
    const fd = new FormData(e.currentTarget);
    const payload = {
      full_name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      service: String(fd.get("service") || "").trim(),
      preferred_date: String(fd.get("event_date") || "").trim(),
      vision: String(fd.get("message") || "").trim(),
    };
    if (!payload.full_name || !payload.email) {
      setStatus("error");
      setErrorMsg("Please fill in your name and email.");
      return;
    }
    try {
      const res = await fetch("https://glambyshalinee.pythonanywhere.com/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
        return;
      }
      const body = await res.json().catch(() => null);
      if (body?.errors) {
        setErrorMsg(Object.values(body.errors).join(" "));
      } else if (body?.error) {
        setErrorMsg(body.error);
      } else {
        setErrorMsg("Something went wrong. Please try again or WhatsApp us.");
      }
      setStatus("error");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or WhatsApp us.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-[2rem] glass p-12 text-center shadow-soft-luxe md:p-16 in-view">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-luxe text-[color:var(--ivory)]">
          <Heart className="h-9 w-9" />
        </div>
        <h3 className="font-display text-3xl">Thank you</h3>
        <p className="mt-4 max-w-sm font-serif-luxe text-foreground/70">
          Your enquiry has been received. Shalinee will personally respond within 24 hours.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 rounded-full border border-[color:var(--rose-gold)] px-8 py-3 text-xs uppercase tracking-[0.3em] text-[color:var(--rose-gold)] transition hover:bg-[color:var(--rose-gold)] hover:text-[color:var(--ivory)]"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] glass p-8 shadow-soft-luxe md:p-10 in-view"
    >
      <div className="space-y-5">
        <Field name="name" label="Full Name" type="text" placeholder="Your name" required />
        <Field name="phone" label="Phone / WhatsApp" type="tel" placeholder="+91 93405 90475" />
        <Field name="email" label="Email" type="email" placeholder="you@email.com" required />
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="mb-2 block font-sans-luxe text-[10px] uppercase tracking-[0.3em] text-foreground/60">
              Preferred Date
            </label>
            <div className="relative">
              <Calendar className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-[color:var(--rose-gold)]" />
              <input
                type="date"
                name="event_date"
                onClick={(e) => {
                  const el = e.currentTarget as HTMLInputElement & { showPicker?: () => void };
                  el.showPicker?.();
                }}
                onFocus={(e) => {
                  const el = e.currentTarget as HTMLInputElement & { showPicker?: () => void };
                  el.showPicker?.();
                }}
                className="w-full cursor-pointer rounded-full border border-[color:var(--border)] bg-[color:var(--ivory)]/60 px-5 py-3.5 pr-12 text-sm outline-none transition focus:border-[color:var(--rose-gold)] [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:inset-0 [&::-webkit-calendar-picker-indicator]:h-full [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-0"
              />
            </div>
          </div>
          <div>
            <label className="mb-2 block font-sans-luxe text-[10px] uppercase tracking-[0.3em] text-foreground/60">
              Service
            </label>
            <div className="relative">
              <ChevronDown className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 h-4 w-4 text-[color:var(--rose-gold)]" />
              <select
                name="service"
                defaultValue="Bridal"
                className="w-full cursor-pointer appearance-none rounded-full border border-[color:var(--border)] bg-[color:var(--ivory)]/60 px-5 py-3.5 pr-12 text-sm outline-none transition focus:border-[color:var(--rose-gold)]"
              >
                <option>Bridal</option>
                <option>HD Makeup</option>
                <option>Airbrush Makeup</option>
                <option>Engagement / Reception</option>
                <option>Party / Occasion</option>
                <option>Hairstyling</option>
                <option>Draping</option>
                <option>Editorial</option>
              </select>
            </div>
          </div>
        </div>
        <div>
          <label className="mb-2 block font-sans-luxe text-[10px] uppercase tracking-[0.3em] text-foreground/60">
            Tell us your vision
          </label>
          <textarea
            name="message"
            rows={3}
            placeholder="Share details, colour palette, inspirations..."
            className="w-full resize-none rounded-3xl border border-[color:var(--border)] bg-[color:var(--ivory)]/60 px-5 py-3.5 text-sm outline-none transition focus:border-[color:var(--rose-gold)]"
          />
        </div>
        {errorMsg && <p className="text-center text-xs text-red-600">{errorMsg}</p>}
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full rounded-full bg-gradient-luxe py-4 text-xs font-medium uppercase tracking-[0.3em] text-[color:var(--ivory)] shadow-luxe transition hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
        >
          {status === "submitting" ? "Sending..." : "Reserve Your Glam Date"}
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  icon,
  ...rest
}: React.InputHTMLAttributes<HTMLInputElement> & { label: string; icon?: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block font-sans-luxe text-[10px] uppercase tracking-[0.3em] text-foreground/60">
        {label}
      </label>
      <div className="relative">
        {icon && (
          <span className="absolute right-5 top-1/2 -translate-y-1/2 text-[color:var(--rose-gold)]">
            {icon}
          </span>
        )}
        <input
          {...rest}
          className="w-full rounded-full border border-[color:var(--border)] bg-[color:var(--ivory)]/60 px-5 py-3.5 text-sm outline-none transition focus:border-[color:var(--rose-gold)]"
        />
      </div>
    </div>
  );
}

/* ---------------- FAQ ---------------- */
const faqs = [
  {
    q: "How far in advance should I book my bridal trial?",
    a: "We recommend booking 3–6 months in advance for peak wedding season. A trial is scheduled 2–4 weeks before the event.",
  },
  {
    q: "Do you travel for destination weddings?",
    a: "Absolutely. We've travelled to 12+ countries. Travel and accommodation are billed at actuals.",
  },
  {
    q: "Are products skin-friendly and hygienic?",
    a: "Yes — we use pro-grade hypoallergenic products, single-use applicators, and follow strict sanitisation between every client.",
  },
  {
    q: "Do you offer packages for the entire bridal party?",
    a: "Yes, custom family packages can be tailored to include mother, sisters, and bridesmaids.",
  },
  {
    q: "How long does a bridal session take?",
    a: "A complete bridal look (makeup + hair + draping) typically takes 2.5 to 3 hours of unhurried artistry.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-gradient-soft py-28 md:py-40">
      <div className="mx-auto max-w-3xl px-6">
        <div className="scroll-reveal text-center">
          <span className="font-sans-luxe text-xs uppercase tracking-[0.4em] text-[color:var(--rose-gold)]">
            Frequently Asked
          </span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">
            Your questions, <em className="font-serif-luxe italic text-gradient-gold">answered</em>
          </h2>
        </div>

        <div className="mt-16 space-y-3">
          {faqs.map((f, i) => (
            <div
              key={i}
              className="scroll-reveal overflow-hidden rounded-2xl border border-[color:var(--border)] bg-card"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
              >
                <span className="font-display text-lg md:text-xl">{f.q}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[color:var(--rose-gold)] transition ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-foreground/70">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-dark py-20 text-[color:var(--ivory)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <img
            src={logoImg}
            alt="glambyshalinee logo"
            className="h-20 w-20 rounded-full object-cover shadow-soft-luxe"
          />
          <p className="mt-6 max-w-md font-serif-luxe text-lg text-[color:var(--ivory)]/70">
            A celebrated bridal & fashion makeup atelier — where every face is a canvas, and every
            occasion an editorial.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: "https://www.instagram.com/softglam", external: true },
              { Icon: MessageCircleIcon, href: "https://wa.me/919340590475", external: true },
              { Icon: Phone, href: "tel:+919340590475", external: false },
              { Icon: Mail, href: "mailto:glambyshalinee@gmail.com", external: false },
            ].map(({ Icon, href, external }, i) => (
              <a
                key={i}
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--ivory)]/15 transition hover:border-[color:var(--champagne)] hover:text-[color:var(--champagne)]"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-sans-luxe text-[10px] uppercase tracking-[0.3em] text-[color:var(--champagne)]">
            Explore
          </div>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--ivory)]/70">
            {["About", "Services", "Portfolio", "Reviews", "Booking"].map((l) => (
              <li key={l}>
                <a href={`#${l.toLowerCase()}`} className="hover:text-[color:var(--champagne)]">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="font-sans-luxe text-[10px] uppercase tracking-[0.3em] text-[color:var(--champagne)]">
            Studio
          </div>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--ivory)]/70">
            <li>Bandra West, Mumbai</li>
            <li>+91 93405 90475</li>
            <li>glambyshalinee@gmail.com</li>
            <li>Mon–Sat · By appointment</li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-7xl border-t border-[color:var(--ivory)]/10 px-6 pt-8 text-center text-xs text-[color:var(--ivory)]/50">
        © {new Date().getFullYear()} glambyshalinee · Crafted with devotion.
        <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <span className="font-serif-luxe italic text-[color:var(--ivory)]/60">
            Website designed and developed by{" "}
            <span className="text-[color:var(--champagne)]">DIVY SONI</span>
          </span>
          <a
            href="https://divyaiportfolio.pythonanywhere.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--champagne)]/40 px-4 py-1.5 text-[10px] uppercase tracking-[0.25em] text-[color:var(--champagne)] transition hover:bg-[color:var(--champagne)] hover:text-[color:var(--charcoal)]"
          >
            Visit Website <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </footer>
  );
}

// alias to avoid conflict
import { MessageCircle as MessageCircleIcon } from "lucide-react";

/* ---------------- PAGE ---------------- */
function HomePage() {
  useReveal();
  return (
    <main className="relative overflow-hidden">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Transform />
      <Testimonials />
      <InstagramFeed />
      <WhyUs />
      <Booking />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "glambyshalinee — Luxury Bridal & Fashion Makeup Artist" },
      {
        name: "description",
        content:
          "Glam by Shalinee — award-winning bridal and fashion makeup artist creating timeless soft glam luxury for brides and editorials worldwide.",
      },
      { property: "og:title", content: "glambyshalinee — Luxury Bridal & Fashion Makeup Artist" },
      {
        property: "og:description",
        content: "Soft glam luxury meets modern bridal elegance. Book a couture beauty experience.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: HomePage,
});
