import { createFileRoute } from '@tanstack/react-router';
import { FundingPage } from '@/components/pitch-room/public-site';
export const Route=createFileRoute('/funding')({head:()=>({meta:[{title:'Funding — Pitch Room'},{name:'description',content:'Explorá oportunidades demo de funding para proyectos del fútbol.'},{property:'og:title',content:'Funding — Pitch Room'},{property:'og:description',content:'La oportunidad correcta depende del proyecto correcto.'},{property:'og:type',content:'website'},{name:'twitter:card',content:'summary_large_image'}]}),component:FundingPage});
