import { createFileRoute } from '@tanstack/react-router';
import { Documents } from '@/components/pitch-room/intelligence';
export const Route=createFileRoute('/intelligence/documents')({head:()=>({meta:[{title:'Documents — Pitch Room Intelligence'},{name:'description',content:'Vista demo de Documents en Pitch Room Intelligence.'},{property:'og:title',content:'Documents — Pitch Room Intelligence'},{property:'og:description',content:'Plataforma estratégica interna de Pitch Room.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'}]}),component:Documents});
