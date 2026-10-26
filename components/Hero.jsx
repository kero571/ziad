import Img from "./ui/Img";
import Icon from "./ui/Icon";
import { HERO, wa } from "@/data/site";
export default function Hero() {
  const h = HERO;
  return (
    <header
      id="top"
      className="mx-auto flex min-h-[calc(100svh-var(--nav))] w-full max-w-6xl flex-col gap-5 px-4 pb-8 pt-4 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 lg:px-8"
    >
      <figure className="rise-card relative min-h-[260px] max-h-[70svh] w-full flex-1 overflow-hidden rounded-3xl border border-line bg-card lg:h-[calc(100svh-var(--nav)-3rem)] lg:max-h-none lg:flex-none">
        <div className="rise-img absolute inset-0">
          <div className="parallax absolute inset-0">
            <Img
              src={h.img}
              alt={h.alt}
              fill
              priority
              fetchPriority="high"
              quality={75}
              sizes="(min-width:1024px) 50vw,100vw"
              className="object-cover object-[62%_30%]"
            />
          </div>
        </div>
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20"
        />
        <div className="hud absolute inset-x-3 top-3 flex justify-between text-[11px] font-bold">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/55 px-3 py-1.5 backdrop-blur">
            <i className="dot h-1.5 w-1.5 rounded-full bg-brand" />
            {h.pillLive}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-black/55 px-3 py-1.5 backdrop-blur">
            <Icon n="pin" className="h-3 w-3" />
            {h.pillPlace}
          </span>
        </div>
        <div
          className="hud absolute inset-x-3 bottom-3 flex items-end justify-between font-mono text-[10px] tracking-wider"
          dir="ltr"
        >
          <span className="inline-flex items-center gap-1.5 text-white/90">
            <span>REC</span>
            <i className="rec h-2 w-2 rounded-full bg-brand" />
            00:00:24
          </span>
          <span className="text-white/80">FPS 24 • 4K PRORES</span>
        </div>
      </figure>
      <div className="hero-in flex flex-col gap-4 lg:gap-6">
        <p className="label" dir="ltr">
          {h.label}
        </p>
        <h1 className="text-[clamp(1.9rem,6svh,3.3rem)] font-black leading-[1.2] lg:text-[clamp(2.6rem,7.5svh,4.6rem)]">
          {h.title} <span className="text-brand">{h.accent}</span>
        </h1>
        <p className="-mt-1 text-mute lg:text-lg">{h.sub}</p>
        <ul className="grid grid-cols-3 gap-2.5">
          {h.stats.map((s) => (
            <li key={s.l} className="card px-2 py-3 text-center">
              <b className="block text-2xl font-black leading-none" dir="ltr">
                {s.v}
                {s.plus && <span className="text-brand">+</span>}
              </b>
              <span className="mt-1 block text-[11px] text-mute">{s.l}</span>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          <a
            href={wa(h.msg)}
            rel="noopener"
            className="btn btn-brand flex-1 !px-3"
          >
            <Icon n="calendar" className="h-4 w-4" />
            {h.cta1}
          </a>
          <a href="#work" className="btn btn-line flex-1 !px-3">
            <Icon n="playc" className="h-4 w-4" />
            {h.cta2}
          </a>
        </div>
      </div>
    </header>
  );
}
