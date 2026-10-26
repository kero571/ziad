'use client';
import {useState} from 'react';import Img from './ui/Img';import Icon from './ui/Icon';
// Click-to-play: nothing heavy loads until the visitor presses play (keeps LCP/INP clean).
export default function VideoCard({v,ratio='aspect-[3/4]',sizes}){const [on,setOn]=useState(false),[busy,setBusy]=useState(false);
return(<figure className={`reveal group relative overflow-hidden rounded-2xl border border-line bg-card ${ratio}`}>
{on?<video src={v.src} poster={v.poster} autoPlay controls playsInline preload="auto" onPlaying={()=>setBusy(false)} onWaiting={()=>setBusy(true)} onEnded={()=>setOn(false)} className="absolute inset-0 h-full w-full bg-black object-cover"/>:<>
<Img src={v.poster} alt={v.title} fill loading="lazy" sizes={sizes} className="object-cover transition duration-1000 group-hover:scale-105"/>
<div aria-hidden className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/10"/>
{v.tag&&<span className="absolute start-3 top-3 rounded-md bg-black/60 px-2 py-1 text-[10px] font-bold tracking-wider backdrop-blur" dir="ltr">{v.tag}</span>}
<button type="button" onClick={()=>{setOn(true);setBusy(true)}} aria-label={`تشغيل: ${v.title}`} className="absolute inset-0 grid place-items-center"><span className="grid h-14 w-14 place-items-center rounded-full bg-white/10 ring-1 ring-white/40 backdrop-blur transition duration-500 group-hover:scale-110 group-hover:bg-brand group-hover:ring-brand"><Icon n="play" className="ms-0.5 h-5 w-5"/></span></button>
<figcaption className="pointer-events-none absolute inset-x-3 bottom-3"><b className="block text-sm">{v.title}</b><span className="text-xs text-white/70">{v.sub}</span></figcaption></>}
{on&&busy&&<span aria-hidden className="pointer-events-none absolute inset-0 m-auto h-10 w-10 animate-spin rounded-full border-[3px] border-white/25 border-t-brand"/>}</figure>)}
