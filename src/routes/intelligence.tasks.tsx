import { createFileRoute } from '@tanstack/react-router';
import { Tasks } from '@/components/pitch-room/intelligence';
export const Route=createFileRoute('/intelligence/tasks')({head:()=>({meta:[{title:'Tasks — Pitch Room Intelligence'},{name:'description',content:'Vista demo de Tasks en Pitch Room Intelligence.'},{property:'og:title',content:'Tasks — Pitch Room Intelligence'},{property:'og:description',content:'Plataforma estratégica interna de Pitch Room.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'}]}),component:Tasks});
