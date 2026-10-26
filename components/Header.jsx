import MobileMenu from './MobileMenu';import {SITE,NAV,HERO,wa} from '@/data/site';
export default function Header(){return(<div className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur"><div className="mx-auto flex h-[var(--nav)] max-w-6xl items-center justify-between gap-4 px-4 lg:px-8">
<a href="#top" className="text-lg font-black">{SITE.name}</a>
<nav aria-label="الرئيسية" className="hidden items-center gap-8 text-sm font-bold text-mute lg:flex">{NAV.map(([t,h])=><a key={h} href={h} className="transition hover:text-white">{t}</a>)}</nav>
<div className="flex items-center gap-2"><a href={wa(HERO.msg)} rel="noopener" className="btn btn-brand hidden !py-2 lg:inline-flex">{HERO.cta1}</a><MobileMenu links={NAV}/></div></div></div>)}
