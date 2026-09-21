import { createFileRoute } from '@tanstack/react-router';
import { Investors } from '@/components/pitch-room/intelligence';
export const Route=createFileRoute('/intelligence/investors')({head:()=>({meta:[{title:'Investors — Pitch Room Intelligence'},{name:'description',content:'Vista demo de Investors en Pitch Room Intelligence.'},{property:'og:title',content:'Investors — Pitch Room Intelligence'},{property:'og:description',content:'Plataforma estratégica interna de Pitch Room.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'}]}),component:Investors});
