import Icon from './ui/Icon';import SecHead from './ui/SecHead';import VideoCard from './VideoCard';import {COMMERCIAL as c,wa} from '@/data/site';
export default function Commercial(){return(<section id="commercial" aria-labelledby="commercial-h" className="mx-auto max-w-6xl px-4 py-14 md:py-20 lg:px-8"><SecHead id="commercial-h" label={c.label} title={c.title} sub={c.sub}/>
<div className="grid gap-4 md:grid-cols-2">{c.videos.map(v=><VideoCard key={v.src} v={v} ratio="aspect-video" sizes="(min-width:768px) 50vw,100vw"/>)}</div>
<div className="mt-7"><a href={wa(c.msg)} rel="noopener" className="btn btn-line w-full md:mx-auto md:flex md:w-fit"><Icon n="megaphone" className="h-4 w-4"/>{c.cta}</a></div></section>)}
