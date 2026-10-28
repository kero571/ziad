"use client";
import { useState } from "react";
import SecHead from "./ui/SecHead";
import VideoCard from "./VideoCard";
import { WORK as w } from "@/data/site";

export default function Work() {
  const [tab, setTab] = useState(w.tabs[0].id);
  const [all, setAll] = useState(false);

  const active = w.tabs.find((t) => t.id === tab);
  const hasMore = active.videos.length > w.initial;
  const shown = all ? active.videos : active.videos.slice(0, w.initial);

  const pick = (id) => {
    setTab(id);
    setAll(false);
  };

  return (
    <section
      id="work"
      aria-labelledby="work-h"
      className="mx-auto max-w-6xl px-4 py-14 md:py-20 lg:px-8"
    >
      <SecHead id="work-h" label={w.label} title={w.title} sub={w.sub} />

      <div
        role="tablist"
        aria-label="أنواع الفيديو"
        className="mb-6 flex justify-center gap-2"
      >
        {w.tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            aria-selected={tab === t.id}
            onClick={() => pick(t.id)}
            className={`rounded-full border px-5 py-2 text-sm font-semibold transition ${
              tab === t.id
                ? "border-brand bg-brand text-white"
                : "border-line text-white/70 hover:border-white/40 hover:text-white"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4"
      >
        {shown.map((v) => (
          <VideoCard
            key={`${tab}-${v.src}`}
            v={v}
            reveal={false}
            ratio="aspect-[3/4]"
            sizes="(min-width:1024px) 25vw,50vw"
          />
        ))}
      </div>

      {hasMore && !all && (
        <div className="mt-7 flex justify-center">
          <button
            type="button"
            onClick={() => setAll(true)}
            className="btn btn-line w-full md:w-auto"
          >
            {w.more}
          </button>
        </div>
      )}
    </section>
  );
}
