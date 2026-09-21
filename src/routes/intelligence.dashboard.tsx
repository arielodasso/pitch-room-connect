import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from '@/components/pitch-room/intelligence';
export const Route=createFileRoute('/intelligence/dashboard')({head:()=>({meta:[{title:'Dashboard — Pitch Room Intelligence'},{name:'description',content:'Vista demo de Dashboard en Pitch Room Intelligence.'},{property:'og:title',content:'Dashboard — Pitch Room Intelligence'},{property:'og:description',content:'Plataforma estratégica interna de Pitch Room.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'}]}),component:Dashboard});
