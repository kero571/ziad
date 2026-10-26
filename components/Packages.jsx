import Icon from './ui/Icon';import SecHead from './ui/SecHead';import {PACKAGES as p,wa} from '@/data/site';
export default function Packages(){return(<section id="packages" aria-labelledby="packages-h" className="mx-auto max-w-6xl px-4 py-14 md:py-20 lg:px-8"><SecHead id="packages-h" label={p.label} title={p.title} sub={p.sub}/>
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{p.items.map(k=><article key={k.n} className={`reveal card relative flex flex-col p-6 transition duration-500 hover:-translate-y-1 ${k.featured?'featured !border-brand':'hover:border-brand/40'}`}>
{k.featured&&<span className="absolute -top-3 start-5 inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-[11px] font-extrabold"><Icon n="star" className="h-3 w-3"/>{p.popular}</span>}
<div className="mb-1 flex items-center justify-between"><span className="font-mono text-xs text-mute" dir="ltr">{k.n}</span></div><h3 className="text-xl font-extrabold">{k.name}</h3>
<p className="mt-2 flex items-baseline gap-1.5"><b className="text-4xl font-black" dir="ltr">{k.price.toLocaleString('en-US')}</b><span className="text-sm text-mute">{p.currency}</span></p>
<ul className="my-5 flex-1 space-y-2.5 text-sm">{k.list.map(x=><li key={x} className="flex gap-2.5"><Icon n="check" className="mt-0.5 h-4 w-4 shrink-0 text-brand"/><span className="text-white/90">{x}</span></li>)}</ul>
<a href={wa(`أهلاً زياد، عايز أحجز "${k.name}".`)} rel="noopener" className={`btn w-full ${k.featured?'btn-brand':'btn-line'}`}>{k.cta||p.cta}</a></article>)}</div></section>)}
