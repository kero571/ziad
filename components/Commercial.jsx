"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Img from "./ui/Img";
import Icon from "./ui/Icon";
import SecHead from "./ui/SecHead";
import { GALLERY as g, wa } from "@/data/site";

function Arrow({ dir }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {dir === "left" ? <path d="M15 6l-6 6 6 6" /> : <path d="M9 6l6 6-6 6" />}
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

// Fade (and optional zoom) in right after mount.
function Fade({ children, className = "", zoom = false, ...rest }) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setOn(true));
    return () => cancelAnimationFrame(id);
  }, []);
  return (
    <div
      {...rest}
      className={`transition duration-300 ${
        on ? "opacity-100 scale-100" : `opacity-0 ${zoom ? "scale-95" : ""}`
      } ${className}`}
    >
      {children}
    </div>
  );
}

const btn =
  "grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/50 text-white backdrop-blur transition hover:border-brand hover:bg-brand";

export default function Gallery() {
  const photos = g.photos;
  const total = photos.length;
  const at = (i) => photos[i % total];
  const [warm, setWarm] = useState(false); // الصور تبدأ تتحمل بدري
  const [open, setOpen] = useState(false); // album modal
  const [active, setActive] = useState(null); // enlarged photo index
  const [seen, setSeen] = useState(false); // triggers the fly-in animation

  const stage = useRef(null);
  const trigger = useRef(null);
  const touchX = useRef(null);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;

    // 1) بعد ما الصفحة تخلص تحميل والمتصفح يفضى: سخّن صور الألبوم
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1500));
    const cancelIdle = window.cancelIdleCallback || clearTimeout;
    let h;
    const start = () => {
      h = idle(() => setWarm(true));
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    if (!("IntersectionObserver" in window)) {
      setSeen(true);
      setWarm(true);
      return;
    }

    // 2) لو العميل قرّب من القسم بـ 2000px: حمّل فورًا
    const near = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setWarm(true);
          near.disconnect();
        }
      },
      { rootMargin: "2000px 0px" },
    );

    // 3) أنيميشن الصور الطايرة (زي ما هو)
    const show = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setSeen(true);
          show.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    near.observe(el);
    show.observe(el);

    return () => {
      window.removeEventListener("load", start);
      if (h) cancelIdle(h);
      near.disconnect();
      show.disconnect();
    };
  }, []);
  // Lock page scroll while the modal is open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = useCallback(() => {
    setActive(null);
    setOpen(false);
    trigger.current?.focus();
  }, []);

  const step = useCallback(
    (d) => setActive((i) => (i === null ? i : (i + d + total) % total)),
    [total],
  );

  // Keyboard: Esc closes, arrows navigate (RTL: left = next, right = previous)
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        active !== null ? setActive(null) : close();
      } else if (active !== null) {
        if (e.key === "ArrowLeft") step(1);
        if (e.key === "ArrowRight") step(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, active, close, step]);

  // The three photos that fly in (left, right, top)
  const wings = [
    {
      p: at(1),
      cls: "left-0 top-[8%] w-[62%] origin-bottom-right",
      from: "translateX(0) rotate(0deg) scale(0.85)",
      to: "translateX(-68%) rotate(-10deg) scale(1)",
      delay: 0,
    },
    {
      p: at(2),
      cls: "right-0 top-[8%] w-[62%] origin-bottom-left",
      from: "translateX(0) rotate(0deg) scale(0.85)",
      to: "translateX(68%) rotate(10deg) scale(1)",
      delay: 150,
    },
    {
      p: at(3),
      cls: "inset-x-[24%] top-0 origin-bottom",
      from: "translateY(0) scale(0.85)",
      to: "translateY(-30%) scale(1)",
      delay: 300,
    },
  ];

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-h"
      className="mx-auto max-w-6xl overflow-x-clip px-4 py-14 md:py-20 lg:px-8"
    >
      <SecHead id="gallery-h" label={g.label} title={g.title} sub={g.sub} />

      {/* ===== The album ===== */}
      <div
        ref={stage}
        className="relative mx-auto mb-2 mt-16 w-[52%] max-w-[300px] sm:w-[40%] md:w-[300px]"
      >
        {wings.map((w, i) => (
          <div
            key={i}
            aria-hidden
            style={{
              transform: seen ? w.to : w.from,
              opacity: seen ? 1 : 0,
              transitionDelay: seen ? `${w.delay}ms` : "0ms",
            }}
            className={`absolute z-0 aspect-[3/4] overflow-hidden rounded-xl border border-line bg-card shadow-2xl transition-[transform,opacity] duration-1000 ease-out motion-reduce:transition-none ${w.cls}`}
          >
            <Img
              src={w.p.img}
              alt=""
              fill
              loading={warm ? "eager" : "lazy"}
              sizes="160px"
              className="object-cover"
            />
          </div>
        ))}

        <button
          ref={trigger}
          type="button"
          onClick={() => setOpen(true)}
          aria-haspopup="dialog"
          aria-label={`${g.open ?? "افتح الألبوم"} — ${total} صورة`}
          className="group relative z-10 block aspect-[3/4] w-full overflow-hidden rounded-2xl border border-line bg-card shadow-2xl transition duration-500 hover:-translate-y-1"
        >
          <Img
            src={at(0).img}
            alt=""
            fill
            loading={warm ? "eager" : "lazy"}
            sizes="(min-width:768px) 300px,52vw"
            className="object-cover transition duration-1000 group-hover:scale-105"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
          />
          <span className="absolute inset-x-3 bottom-3 flex items-center justify-between rounded-full bg-black/60 px-3 py-2 text-xs font-semibold backdrop-blur transition group-hover:bg-brand">
            <span>{g.open ?? "افتح الألبوم"}</span>
            <span dir="ltr" className="text-white/70 group-hover:text-white">
              {total}
            </span>
          </span>
        </button>
      </div>

      <div className="mt-10">
        <a
          href={wa(g.msg)}
          rel="noopener"
          className="btn btn-line w-full md:mx-auto md:flex md:w-fit"
        >
          <Icon n="camera" className="h-4 w-4" />
          {g.cta}
        </a>
      </div>

      {/* ===== Album modal (full screen) ===== */}
      {open &&
        createPortal(
          <Fade
            role="dialog"
            aria-modal="true"
            aria-label={g.title}
            className="fixed inset-0 z-[100] flex flex-col bg-black/95 text-white backdrop-blur-md"
          >
            <header className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 md:px-8">
              <div>
                <b className="block text-sm">{g.title}</b>
                <span className="text-xs text-white/60">{total} صورة</span>
              </div>
              <button
                type="button"
                autoFocus
                onClick={close}
                aria-label="إغلاق"
                className={btn}
              >
                <CloseIcon />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto overscroll-contain px-3 py-4 md:px-8 md:py-6">
              <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
                {photos.map((p, i) => (
                  <button
                    key={p.img}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-label={`تكبير الصورة ${i + 1}`}
                    className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-line bg-card"
                  >
                    <Img
                      src={p.img}
                      alt={p.alt}
                      fill
                      loading="lazy"
                      sizes="(min-width:1024px) 25vw,(min-width:768px) 33vw,50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </button>
                ))}
              </div>
            </div>
          </Fade>,
          document.body,
        )}

      {/* ===== Enlarged photo ===== */}
      {open &&
        active !== null &&
        createPortal(
          <Fade
            zoom
            role="dialog"
            aria-modal="true"
            aria-label={`صورة ${active + 1} من ${total}`}
            className="fixed inset-0 z-[110] bg-black text-white"
          >
            <div
              className="absolute inset-0"
              onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
              onTouchEnd={(e) => {
                if (touchX.current === null) return;
                const dx = e.changedTouches[0].clientX - touchX.current;
                touchX.current = null;
                if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
              }}
            >
              <div className="absolute inset-x-2 inset-y-16 md:inset-x-20">
                <Img
                  key={active}
                  src={photos[active].img}
                  alt={photos[active].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between px-4 py-3">
              <span
                dir="ltr"
                className="rounded-full bg-black/50 px-3 py-1 text-xs backdrop-blur"
              >
                {active + 1} / {total}
              </span>
              <button
                type="button"
                autoFocus
                onClick={() => setActive(null)}
                aria-label="إغلاق الصورة"
                className={`${btn} pointer-events-auto`}
              >
                <CloseIcon />
              </button>
            </div>

            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="السابق"
              className={`${btn} absolute right-3 top-1/2 -translate-y-1/2`}
            >
              <Arrow dir="right" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="التالي"
              className={`${btn} absolute left-3 top-1/2 -translate-y-1/2`}
            >
              <Arrow dir="left" />
            </button>
          </Fade>,
          document.body,
        )}
    </section>
  );
}
