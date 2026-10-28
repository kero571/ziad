"use client";
import { useState } from "react";
import Img from "./ui/Img";
import Icon from "./ui/Icon";

// The cover stays visible until the video is actually playing.
export default function VideoCard({
  v,
  ratio = "aspect-[3/4]",
  sizes,
  reveal = true,
}) {
  const [on, setOn] = useState(false);
  const [ready, setReady] = useState(false);
  const [busy, setBusy] = useState(false);

  const stop = () => {
    setOn(false);
    setReady(false);
    setBusy(false);
  };

  return (
    <figure
      className={`${reveal ? "reveal " : ""}group relative overflow-hidden rounded-2xl border border-line bg-card ${ratio}`}
    >
      {/* الغلاف: دايماً موجود تحت الفيديو */}
      {v.poster ? (
        <Img
          src={v.poster}
          alt=""
          fill
          loading="lazy"
          sizes={sizes}
          className="object-cover transition duration-1000 group-hover:scale-105"
        />
      ) : (
        <video
          src={`${v.src}#t=0.1`}
          preload="metadata"
          muted
          playsInline
          tabIndex={-1}
          aria-hidden
          className="absolute inset-0 h-full w-full bg-black object-cover"
        />
      )}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10"
      />

      {/* الفيديو: شفاف لحد ما يشتغل، وبعدها يظهر فوق الغلاف */}
      {on && (
        <video
          src={v.src}
          autoPlay
          controls
          controlsList="nodownload noplaybackrate"
          disablePictureInPicture
          onContextMenu={(e) => e.preventDefault()}
          playsInline
          preload="auto"
          onPlaying={() => {
            setReady(true);
            setBusy(false);
          }}
          onWaiting={() => setBusy(true)}
          onEnded={stop}
          className={`absolute inset-0 h-full w-full bg-black object-cover transition-opacity duration-300 ${ready ? "opacity-100" : "opacity-0"}`}
        />
      )}

      {!on && (
        <button
          type="button"
          onClick={() => {
            setOn(true);
            setBusy(true);
          }}
          aria-label={`تشغيل: ${v.title}`}
          className="absolute inset-0 grid place-items-center"
        >
          <span className="grid h-14 w-14 place-items-center rounded-full bg-white/10 ring-1 ring-white/40 backdrop-blur transition duration-500 group-hover:scale-110 group-hover:bg-brand group-hover:ring-brand">
            <Icon n="play" className="ms-0.5 h-5 w-5" />
          </span>
        </button>
      )}

      {on && busy && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 m-auto h-10 w-10 animate-spin rounded-full border-[3px] border-white/25 border-t-brand"
        />
      )}
    </figure>
  );
}
