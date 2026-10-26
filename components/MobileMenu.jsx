'use client';
import {useState,useEffect} from 'react';import Icon from './ui/Icon';
export default function MobileMenu({links}){const [o,setO]=useState(false);
useEffect(()=>{if(!o)return;const k=e=>e.key==='Escape'&&setO(false);addEventListener('keydown',k);return()=>removeEventListener('keydown',k)},[o]);
return(<div className="lg:hidden"><button type="button" aria-expanded={o} aria-controls="mnav" aria-label="القائمة" onClick={()=>setO(!o)} className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-card transition hover:border-brand/60"><Icon n={o?'close':'menu'}/></button>
<nav id="mnav" aria-label="القائمة" inert={!o} className={`absolute inset-x-0 top-full border-b border-line bg-bg p-3 shadow-2xl transition duration-300 ease-out ${o?'translate-y-0 opacity-100':'pointer-events-none -translate-y-3 opacity-0'}`}><ul className="mx-auto grid max-w-md gap-1">{links.map(([t,h])=><li key={h}><a href={h} onClick={()=>setO(false)} className="block rounded-xl px-4 py-3 font-bold transition hover:bg-white/5 hover:text-brand">{t}</a></li>)}</ul></nav></div>)}
