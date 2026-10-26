import {SITE,PACKAGES} from '@/data/site';
export const metadata={metadataBase:new URL(SITE.url),title:SITE.title,description:SITE.description,keywords:SITE.keywords,applicationName:SITE.en,authors:[{name:SITE.en}],alternates:{canonical:'/'},
openGraph:{type:'website',url:'/',siteName:SITE.en,locale:'ar_EG',title:SITE.title,description:SITE.description,images:[{url:'/og.jpg',width:1200,height:630,alt:SITE.en}]},
twitter:{card:'summary_large_image',title:SITE.title,description:SITE.description,images:['/og.jpg']},
robots:{index:true,follow:true,googleBot:{index:true,follow:true,'max-image-preview':'large','max-snippet':-1,'max-video-preview':-1}}};
export const viewport={themeColor:'#0a0a0a',width:'device-width',initialScale:1};
const u=SITE.url,same=[SITE.instagram.url,SITE.tiktok.url,SITE.facebook.url].filter(Boolean);
export const jsonLd={'@context':'https://schema.org','@graph':[
{'@type':'Person','@id':u+'/#person',name:SITE.en,alternateName:SITE.name,jobTitle:'Wedding Photographer & Cinematic Director',url:u,image:u+'/og.jpg',sameAs:same,knowsAbout:['Wedding photography','Cinematic wedding films','Wedding reels','Commercial video production']},
{'@type':['ProfessionalService','LocalBusiness'],'@id':u+'/#business',name:SITE.en+' — Wedding Photography & Cinematic',alternateName:SITE.name,url:u,image:u+'/og.jpg',description:SITE.description,founder:{'@id':u+'/#person'},areaServed:{'@type':'Country',name:'Egypt'},address:{'@type':'PostalAddress',addressCountry:'EG'},priceRange:'3,500 – 8,000 EGP',knowsLanguage:['ar'],sameAs:same,
 hasOfferCatalog:{'@type':'OfferCatalog',name:PACKAGES.title,itemListElement:PACKAGES.items.map(p=>({'@type':'Offer',name:p.name,price:p.price,priceCurrency:'EGP',description:p.list.join(' • '),seller:{'@id':u+'/#business'}}))}},
{'@type':'WebSite','@id':u+'/#site',url:u,name:SITE.en,inLanguage:'ar',publisher:{'@id':u+'/#person'}}]};
