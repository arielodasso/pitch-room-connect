import { createFileRoute } from '@tanstack/react-router';
import { Projects } from '@/components/pitch-room/intelligence';
export const Route=createFileRoute('/intelligence/projects')({head:()=>({meta:[{title:'Projects — Pitch Room Intelligence'},{name:'description',content:'Vista demo de Projects en Pitch Room Intelligence.'},{property:'og:title',content:'Projects — Pitch Room Intelligence'},{property:'og:description',content:'Plataforma estratégica interna de Pitch Room.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'}]}),component:Projects});
