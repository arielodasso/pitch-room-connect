import type { Application, DocumentItem, Investor, Opportunity, Project, Task } from '@/types/pitch-room';

export const projects: Project[] = [
 {id:'andes-football-academy',name:'Andes Football Academy',type:'Academy',country:'Argentina',stage:'Growth',fundingNeed:'USD 250K',status:'Evaluating',nextAction:'Revisar modelo financiero',description:'Academia regional enfocada en formación integral y expansión de su modelo operativo.',website:'andes-academy.demo',team:'Equipo fundador · 8 personas',useOfFunds:'Infraestructura, tecnología y expansión regional',demo:true},
 {id:'football-vision',name:'Football Vision',type:'FootballTech',country:'Brasil',stage:'Seed',fundingNeed:'USD 500K',status:'Preparing',nextAction:'Actualizar pitch deck',description:'Plataforma de análisis de rendimiento y desarrollo de talento para organizaciones deportivas.',website:'footballvision.demo',team:'Equipo fundador · 5 personas',useOfFunds:'Producto, datos y go-to-market',demo:true},
 {id:'club-deportivo-horizonte',name:'Club Deportivo Horizonte',type:'Club',country:'Uruguay',stage:'Expansion',fundingNeed:'USD 1M',status:'Evaluating',nextAction:'Definir narrativa',description:'Proyecto institucional de profesionalización, infraestructura y desarrollo juvenil.',website:'horizonte.demo',team:'Comisión directiva y equipo ejecutivo',useOfFunds:'Infraestructura y desarrollo deportivo',demo:true},
 {id:'futuro-en-juego',name:'Futuro en Juego',type:'Foundation',country:'Colombia',stage:'Pilot',fundingNeed:'USD 120K',status:'Identified',nextAction:'Preparar aplicación',description:'Iniciativa de impacto social que utiliza el fútbol como herramienta de inclusión.',website:'futuroenjuego.demo',team:'Equipo interdisciplinario · 6 personas',useOfFunds:'Escala territorial y medición de impacto',demo:true},
];
export const opportunities: Opportunity[] = [
 {id:'international-football-development',name:'International Football Development Program',region:'Global',type:'Grant',category:'Non-dilutive',funding:'USD 100K–300K',deadline:'30 Nov 2026',status:'Demo Opportunity',eligibility:'Proyectos deportivos con impacto y capacidad operativa demostrable.',description:'Programa ficticio para demostrar el proceso de evaluación y aplicación internacional.',requirements:'Pitch deck, presupuesto, teoría de cambio y plan de implementación.',website:'program.demo',matched:3},
 {id:'sportstech-growth',name:'SportsTech Growth Initiative',region:'Europe',type:'Accelerator',category:'Program',funding:'USD 50K–150K',deadline:'15 Dic 2026',status:'Upcoming',eligibility:'Startups SportsTech en etapa Seed o Growth.',description:'Aceleradora ficticia orientada a tecnología aplicada al deporte.',requirements:'Deck, métricas, demo de producto y referencias.',website:'growth.demo',matched:2},
 {id:'latam-club-infrastructure',name:'LATAM Club Infrastructure Fund',region:'LATAM',type:'Fund',category:'Investment',funding:'USD 500K–2M',deadline:'Ongoing',status:'Demo Opportunity',eligibility:'Clubes con plan de profesionalización e infraestructura.',description:'Fondo ficticio para analizar oportunidades de infraestructura deportiva.',requirements:'Plan financiero, gobernanza y hoja de ruta.',website:'infrastructure.demo',matched:1},
 {id:'football-impact',name:'Football Impact Challenge',region:'USA',type:'Program',category:'Grant',funding:'USD 75K–200K',deadline:'20 Ene 2027',status:'Open',eligibility:'Organizaciones de impacto social a través del deporte.',description:'Convocatoria ficticia para proyectos medibles y escalables.',requirements:'Modelo de impacto, presupuesto y evaluación.',website:'impact.demo',matched:2},
];
export const investors: Investor[] = [
 {name:'Investor Alpha',organization:'Sports Fund',country:'Europe',type:'Fund',focus:'FootballTech',ticket:'USD 250K–1M',stage:'Exploring',lastContact:'12 Sep 2026',nextAction:'Enviar teaser'},
 {name:'Investor Beta',organization:'Family Office',country:'LATAM',type:'Family Office',focus:'Sports',ticket:'USD 500K–2M',stage:'Qualified',lastContact:'8 Sep 2026',nextAction:'Coordinar reunión'},
 {name:'Investor Gamma',organization:'Impact Capital',country:'USA',type:'Impact Fund',focus:'Youth & Inclusion',ticket:'USD 100K–500K',stage:'New',lastContact:'2 Sep 2026',nextAction:'Compartir overview'},
];
export const applications: Application[] = [
 {id:'a1',project:'Futuro en Juego',opportunity:'Football Impact Challenge',deadline:'20 Ene',owner:'Florencia',status:'Identified'},
 {id:'a2',project:'Club Deportivo Horizonte',opportunity:'LATAM Club Infrastructure Fund',deadline:'Ongoing',owner:'Santiago',status:'Evaluating'},
 {id:'a3',project:'Andes Football Academy',opportunity:'International Football Development',deadline:'30 Nov',owner:'Santiago',status:'Preparing'},
 {id:'a4',project:'Football Vision',opportunity:'SportsTech Growth Initiative',deadline:'15 Dic',owner:'Florencia',status:'Submitted'},
 {id:'a5',project:'Football Vision',opportunity:'International Football Development',deadline:'30 Nov',owner:'Santiago',status:'Follow-up'},
 {id:'a6',project:'Futuro en Juego',opportunity:'International Football Development',deadline:'30 Nov',owner:'Florencia',status:'Closed'},
];
export const tasks: Task[] = [
 {id:'t1',task:'Review pitch deck',project:'Football Vision',assignee:'Florencia',priority:'High',due:'Hoy',status:'In progress'},
 {id:'t2',task:'Request financial model',project:'Andes Football Academy',assignee:'Santiago',priority:'High',due:'23 Sep',status:'Pending'},
 {id:'t3',task:'Complete grant application',project:'Futuro en Juego',assignee:'Florencia',priority:'Medium',due:'26 Sep',status:'In progress'},
 {id:'t4',task:'Prepare founder interview',project:'Club Deportivo Horizonte',assignee:'Florencia',priority:'Medium',due:'29 Sep',status:'Pending'},
 {id:'t5',task:'Follow up investor',project:'Football Vision',assignee:'Santiago',priority:'High',due:'Vencida',status:'Overdue'},
 {id:'t6',task:'Update project narrative',project:'Andes Football Academy',assignee:'Florencia',priority:'Low',due:'4 Oct',status:'Pending'},
];
export const documents: DocumentItem[] = [
 {name:'Pitch Deck v3.pdf',project:'Football Vision',category:'Pitch Deck',updated:'Hoy, 10:24',size:'8.4 MB'},
 {name:'Financial Model.xlsx',project:'Andes Football Academy',category:'Financial Model',updated:'Ayer',size:'2.1 MB'},
 {name:'Application Draft.docx',project:'Futuro en Juego',category:'Grants',updated:'18 Sep',size:'1.6 MB'},
 {name:'Governance Overview.pdf',project:'Club Deportivo Horizonte',category:'Legal',updated:'15 Sep',size:'4.2 MB'},
];
