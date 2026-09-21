import { createFileRoute } from '@tanstack/react-router';
import { ContactPage } from '@/components/pitch-room/public-site';
export const Route=createFileRoute('/contacto')({head:()=>({meta:[{title:'Presentar proyecto — Pitch Room'},{name:'description',content:'Compartí tu proyecto con Pitch Room.'},{property:'og:title',content:'Presentar proyecto — Pitch Room'},{property:'og:description',content:'El primer paso para identificar oportunidades compatibles.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:ContactPage});
