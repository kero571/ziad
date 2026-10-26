import {SITE,PACKAGES,SERVICES,wa} from '@/data/site';
export function GET(){const t=`# ${SITE.en} (${SITE.name})\n> ${SITE.description}\n\nSite: ${SITE.url}\nService area: Egypt\nInstagram: ${SITE.instagram.url}\nTikTok: ${SITE.tiktok.url}\nBooking (WhatsApp): ${wa('')}\n\n## Services\n${SERVICES.items.map(i=>`- ${i.title}: ${i.desc}`).join('\n')}\n\n## Wedding packages (EGP)\n${PACKAGES.items.map(p=>`- ${p.name}: ${p.price} EGP — ${p.list.join(', ')}`).join('\n')}\n`;
return new Response(t,{headers:{'Content-Type':'text/plain; charset=utf-8','Cache-Control':'public, max-age=3600'}})}
