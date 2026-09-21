import { createFileRoute } from '@tanstack/react-router';
import { SettingsPage } from '@/components/pitch-room/intelligence';
export const Route=createFileRoute('/intelligence/settings')({head:()=>({meta:[{title:'Settings — Pitch Room Intelligence'},{name:'description',content:'Vista demo de Settings en Pitch Room Intelligence.'},{property:'og:title',content:'Settings — Pitch Room Intelligence'},{property:'og:description',content:'Plataforma estratégica interna de Pitch Room.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary'}]}),component:SettingsPage});
