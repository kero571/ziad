"use client";
import { useRef } from "react";
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

export default function Gallery() {
  const ref = useRef(null);

  const scroll = (dir) => {
    const el = ref.current;
    if (!el) return;
    const rtl = getComputedStyle(el).direction === "rtl";
    el.scrollBy({
      left: dir * (rtl ? -1 : 1) * el.clientWidth * 0.9,
      behavior: "smooth",
    });
  };

  const btn =
    "grid h-11 w-11 place-items-center rounded-full border border-line bg-card transition hover:border-brand hover:bg-brand";

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-h"
      className="mx-auto max-w-6xl px-4 py-14 md:py-20 lg:px-8"
    >
      <SecHead id="gallery-h" label={g.label} title={g.title} sub={g.sub} />

      <div
        ref={ref}
        role="region"
        aria-label="معرض الصور"
        tabIndex={0}
        className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 md:gap-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {g.photos.map((p, i) => (
          <figure
            key={p.img}
            className="relative aspect-[3/4] w-[72%] shrink-0 snap-start overflow-hidden rounded-2xl border border-line bg-card sm:w-[42%] lg:w-[24%]"
          >
            <Img
              src={p.img}
              alt={p.alt}
              fill
              loading={i < 3 ? "eager" : "lazy"}
              sizes="(min-width:1024px) 24vw,(min-width:640px) 42vw,72vw"
              className="object-cover"
            />
          </figure>
        ))}
      </div>

      <div className="mt-5 flex justify-center gap-3">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="السابق"
          className={btn}
        >
          <Arrow dir="right" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="التالي"
          className={btn}
        >
          <Arrow dir="left" />
        </button>
      </div>

      <div className="mt-7">
        <a
          href={wa(g.msg)}
          rel="noopener"
          className="btn btn-line w-full md:mx-auto md:flex md:w-fit"
        >
          <Icon n="camera" className="h-4 w-4" />
          {g.cta}
        </a>
      </div>
    </section>
  );
}
