"use client";
import { useEffect, useState } from "react";
import Icon from "./ui/Icon";
import { HERO, wa } from "@/data/site";

export default function WhatsAppFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // غيّر الـ id لو الـ hero عندك id تاني
    const hero = document.getElementById("hero") || document.getElementById("top");
    if (!hero) return setShow(true);
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting), { threshold: 0.05 });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={wa(HERO.msg)}
      rel="noopener"
      aria-label="تواصل عبر واتساب"
      tabIndex={show ? 0 : -1}
      className={`fab fixed bottom-5 end-5 z-50 grid h-14 w-14 place-items-center rounded-2xl bg-brand text-white shadow-lg transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-1 hover:scale-105 ${
        show ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <Icon n="chat" className="h-6 w-6" />
    </a>
  );
}