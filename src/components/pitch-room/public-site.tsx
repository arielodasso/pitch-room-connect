import { Link } from '@tanstack/react-router';
import { ArrowDown, ArrowRight, ArrowUpRight, Building2, CheckCircle2, ChevronRight, Compass, Menu, Search, Sparkles, Target, Users, X } from 'lucide-react';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import heroImage from '@/assets/pitch-room-hero.jpg';
import florenciaGomez from '@/assets/florencia-gomez.jpg';
import santiagoVitale from '@/assets/santiago-vitale.jpg';
import { navPublic, opportunities } from '@/data/demo';
import { Brand } from './brand';
import { Button, DemoBadge, Field } from './ui';
import { ProjectForm } from './project-form';
import { Reveal } from './reveal';

const HOME_ANCHORS = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Ecosistema', href: '#ecosistema' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Funding', href: '#funding' },
  { label: 'Equipo', href: '#equipo' },
] as const;

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState('');
  const key = ids.join(',');
  useEffect(() => {
    if (!ids.length) return;
    const sections = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => Boolean(el));
    if (!sections.length) return;
    if (typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [key]);
  return active;
}

export function SiteShell({ children, anchors }: { children: ReactNode; anchors?: readonly { label: string; href: string }[] }) {
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState(false);
  const spyIds = useMemo(() => anchors?.map((a) => a.href.slice(1)) ?? [], [anchors]);
  const active = useScrollSpy(spyIds);

  const navItems = anchors ?? navPublic.map(([label, to]) => ({ label, href: to }));

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur-xl">
        <div className="mx-auto grid h-20 max-w-[1480px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:grid-cols-[auto_1fr_auto] lg:px-10">
          <Brand />
          <nav className="hidden items-center justify-center gap-8 lg:flex">
            {navItems.map((item) =>
              anchors ? (
                <a
                  key={item.href}
                  href={item.href}
                  className={`text-[11px] font-semibold uppercase tracking-[.15em] transition ${
                    active === item.href ? 'text-accent' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-[11px] font-semibold uppercase tracking-[.15em] text-muted-foreground transition hover:text-foreground"
                  activeProps={{ className: 'text-accent' }}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/intelligence/dashboard" className="mr-2 text-[10px] font-bold uppercase tracking-[.15em] text-muted-foreground hover:text-accent">
              Intelligence →
            </Link>
            <Button variant="accent" onClick={() => setForm(true)}>
              Presentar proyecto
            </Button>
          </div>
          <button className="grid size-11 place-items-center rounded-lg border border-border lg:hidden" onClick={() => setMenu(!menu)} aria-label="Menú">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu && (
          <nav className="border-t border-border bg-surface p-5 lg:hidden">
            {navItems.map((item) =>
              anchors ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenu(false)}
                  className="block border-b border-border py-4 text-sm font-semibold"
                >
                  {item.label}
                </a>
              ) : (
                <Link onClick={() => setMenu(false)} key={item.href} to={item.href} className="block border-b border-border py-4 text-sm font-semibold">
                  {item.label}
                </Link>
              )
            )}
            <Link to="/intelligence/dashboard" className="block py-4 text-sm text-accent">
              Pitch Room Intelligence →
            </Link>
            <Button className="mt-3 w-full" variant="accent" onClick={() => { setMenu(false); setForm(true); }}>
              Presentar proyecto
            </Button>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <footer className="border-t border-border px-5 py-10 lg:px-10">
        <div className="mx-auto flex max-w-[1480px] flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <Brand />
          <div className="text-xs text-muted-foreground">
            <p>Football · Capital · Strategy</p>
            <p className="mt-2">© 2026 Pitch Room. Demo comercial.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ eyebrow, title, text, center = false }: { eyebrow: string; title: string; text?: string; center?: boolean }) {
  return (
    <div className={`section-title ${center ? 'mx-auto text-center' : ''}`}>
      <p className={`section-title-eyebrow ${center ? 'justify-center' : ''}`}>{eyebrow}</p>
      <h2 className="section-title-main text-balance">{title}</h2>
      {text && <p className={`section-title-text ${center ? 'mx-auto' : ''}`}>{text}</p>}
    </div>
  );
}

function ArrowLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Button asChild variant="outline">
      <Link to={to}>
        <span>{children}</span>
        <ArrowRight className="size-4" />
      </Link>
    </Button>
  );
}

function HomeHero({ onForm }: { onForm: () => void }) {
  return (
    <section className="relative flex min-h-[94vh] items-end overflow-hidden pt-24">
      <img src={heroImage} alt="Estadio internacional de fútbol durante la noche" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
      <div className="hero-shade absolute inset-0" />
      <div className="hero-orb left-[8%] top-[12%] size-[420px] bg-primary/40" />
      <div className="hero-orb right-[5%] top-[30%] size-[320px] bg-accent/30" />
      <div className="relative mx-auto w-full max-w-[1480px] px-5 pb-16 pt-28 lg:px-10 lg:pb-24">
        <p className="eyebrow animate-rise">Pitch Room Digital HQ</p>
        <h1 className="mt-7 max-w-6xl animate-rise text-[clamp(2.8rem,7vw,7.2rem)] font-extrabold leading-[.92] tracking-tight text-balance stagger-1">
          El puente entre el fútbol latinoamericano y el capital global.
        </h1>
        <p className="mt-8 max-w-2xl animate-rise text-lg leading-8 text-foreground/75 stagger-2">
          Estrategia, narrativa, funding y acceso a capital para proyectos con potencial de crecimiento.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3 animate-rise stagger-3">
          <Button variant="accent" size="lg" onClick={onForm}>Presentar mi proyecto <ArrowRight className="size-4" /></Button>
          <Button asChild variant="outline" size="lg"><Link to="/football-capital">Explorar Pitch Room</Link></Button>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-5 animate-rise stagger-4">
          <div className="flex flex-wrap gap-2">
            {['Football', 'Capital', 'Strategy'].map((x) => (
              <span key={x} className="stat-chip">{x}</span>
            ))}
          </div>
          <a href="#nosotros" className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.3em] text-muted-foreground transition hover:text-accent">
            Scroll <ArrowDown className="size-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  const stats = [
    ['USD 250K+', 'Funding identificado'],
    ['4', 'Proyectos activos'],
    ['2', 'Perspectivas estratégicas'],
    ['5', 'Etapas del método'],
  ] as const;
  const cities = ['LATAM', 'EUROPE', 'USA', 'MIDDLE EAST', 'GLOBAL CAPITAL'];
  return (
    <>
      <section className="border-y border-border bg-card/40">
        <div className="page-wrap grid gap-px border-b border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(([num, label]) => (
            <div key={label} className="bg-background p-8 lg:p-12">
              <p className="stats-num text-primary">{num}</p>
              <p className="mt-3 text-[11px] font-bold uppercase tracking-[.2em] text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </section>
      <div className="relative overflow-hidden border-b border-border bg-primary/5 py-5">
        <div className="flex w-max animate-marquee items-center gap-16">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0 items-center gap-16 pr-16" aria-hidden={k === 1}>
              {cities.map((c) => (
                <span key={c} className="flex items-center gap-3 whitespace-nowrap text-sm font-extrabold uppercase tracking-[.3em] text-foreground/60">
                  <span className="size-1.5 rounded-full bg-accent" />
                  {c}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function ChallengeSection() {
  const items = [
    ['Projects', 'Clubes, academias, startups y organizaciones.'],
    ['Opportunities', 'Grants, fondos, programas y capital.'],
    ['The Gap', 'Narrativa, estructura, preparación y conocimiento.'],
  ] as const;
  return (
    <section id="nosotros" className="section-pad">
      <div className="page-wrap">
        <Reveal>
          <SectionTitle eyebrow="Nosotros" title="El capital existe. El desafío es llegar a él." text="Existen proyectos con potencial, oportunidades de financiamiento y capital interesado. Pero muchas veces esos tres elementos no llegan a encontrarse." />
        </Reveal>
        <div className="mt-16 grid gap-px border-y border-border bg-border md:grid-cols-3">
          {items.map(([a, b], i) => (
            <div key={a} className="group border-b border-border bg-background py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
              <span className="text-xs font-bold text-accent">0{i + 1}</span>
              <h3 className="mt-7 flex items-center gap-2 text-xl font-extrabold uppercase transition-colors group-hover:text-primary">
                <Sparkles className="size-4 text-accent" /> {a}
              </h3>
              <p className="mt-3 leading-7 text-muted-foreground">{b}</p>
            </div>
          ))}
        </div>
        <Reveal delay={100}>
          <p className="mt-10 max-w-2xl text-2xl font-semibold">Pitch Room trabaja sobre ese punto de conexión.</p>
        </Reveal>
      </div>
    </section>
  );
}

function EcosystemSection() {
  const [tab, setTab] = useState<'projects' | 'capital'>('projects');
  const projectsItems = [
    ['Strategic Positioning', 'Ordenamos el proyecto y su propuesta de valor.'],
    ['Narrative', 'Construimos una narrativa clara y estratégica.'],
    ['Investor Readiness', 'Preparamos al founder y al equipo para presentar.'],
    ['Funding Strategy', 'Identificamos oportunidades compatibles.'],
    ['Matchmaking', 'Trabajamos la conexión con capital.'],
  ] as const;
  const capitalItems = [
    ['Project Access', 'Acceso a proyectos del ecosistema.'],
    ['Deal Flow', 'Proyectos estructurados y preparados.'],
    ['Strategic Context', 'Información relevante para cada oportunidad.'],
    ['Connections', 'Conexión con equipos y proyectos.'],
    ['Follow-up', 'Seguimiento estratégico de cada relación.'],
  ] as const;
  return (
    <section id="ecosistema" className="section-pad border-y border-border bg-card/40">
      <div className="page-wrap">
        <Reveal>
          <SectionTitle eyebrow="Ecosistema" title="Una estrategia para cada lado del mercado." text="Dos lados, un mismo objetivo: que el capital y los proyectos se encuentren." />
        </Reveal>
        <div className="mt-12 flex gap-8 border-b border-border">
          <button onClick={() => setTab('projects')} className={`pb-4 text-sm font-bold uppercase tracking-[.16em] transition ${tab === 'projects' ? 'border-b-2 border-accent text-accent' : 'border-b-2 border-transparent text-muted-foreground hover:text-foreground'}`}>
            Proyectos
          </button>
          <button onClick={() => setTab('capital')} className={`pb-4 text-sm font-bold uppercase tracking-[.16em] transition ${tab === 'capital' ? 'border-b-2 border-accent text-accent' : 'border-b-2 border-transparent text-muted-foreground hover:text-foreground'}`}>
            Capital
          </button>
        </div>
        <div className="grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {(tab === 'projects' ? projectsItems : capitalItems).map(([a, b], i) => (
            <article key={a} className="group min-h-56 bg-background p-7 transition-colors hover:bg-card/60">
              <div className="flex items-center justify-between">
                <ChevronRight className="size-5 text-accent transition-transform group-hover:translate-x-1" />
                <span className="text-xs font-bold text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-12 font-extrabold">{a}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{b}</p>
            </article>
          ))}
        </div>
        <Reveal delay={120}>
          <Button className="mt-8" variant="accent" onClick={() => setTab(tab === 'projects' ? 'capital' : 'projects')}>
            {tab === 'projects' ? 'Explorar oportunidades' : 'Presentar proyecto'}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export function FootballCapitalBand() {
  return (
    <section id="soluciones" className="relative overflow-hidden border-b border-border section-pad">
      <div className="world-grid absolute inset-0 opacity-50" />
      <div className="page-wrap relative">
        <Reveal>
          <SectionTitle
            eyebrow="Soluciones"
            title="El fútbol latinoamericano tiene proyectos que pueden jugar en otra escala."
            text="Pitch Room trabaja para conectar proyectos del ecosistema futbolístico con oportunidades de crecimiento y fuentes de capital nacionales e internacionales."
          />
        </Reveal>
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          <Reveal delay={80}>
            <div>
              <span className="flex items-center gap-3 text-5xl font-extrabold tracking-tight">
                <Building2 className="size-9 text-primary" /> LATAM
              </span>
              <div className="mt-6 grid grid-cols-2 gap-px bg-border">
                {['Clubs', 'Academies', 'FootballTech', 'Foundations'].map((x) => (
                  <span key={x} className="flex items-center gap-2 bg-background p-4 text-xs font-bold uppercase tracking-[.15em] text-muted-foreground transition-colors hover:text-accent">
                    <ArrowUpRight className="size-3.5 text-accent" /> {x}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <div className="relative hidden h-px w-28 bg-primary lg:block">
            <span className="flow-dot" />
          </div>
          <Reveal delay={160}>
            <div className="space-y-3 text-2xl font-extrabold">
              {['EUROPE', 'USA', 'MIDDLE EAST', 'GLOBAL CAPITAL'].map((x) => (
                <div key={x} className="flex items-center justify-between border-b border-border pb-3 transition-colors hover:text-primary">
                  {x} <ArrowRight className="size-5 text-accent" />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ProjectsBand() {
  const projectTypes = [
    ['Clubes', 'Profesionalización, infraestructura, desarrollo y proyectos estratégicos.'],
    ['Academias', 'Formación, expansión y modelos escalables.'],
    ['FootballTech', 'Tecnología aplicada al fútbol y SportsTech.'],
    ['Fundaciones', 'Proyectos deportivos y de impacto social.'],
  ] as const;
  return (
    <section id="proyectos" className="section-pad">
      <div className="page-wrap">
        <Reveal>
          <SectionTitle eyebrow="Proyectos" title="¿Qué tipo de proyectos acompañamos?" />
        </Reveal>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2">
          {projectTypes.map(([a, b], i) => (
            <article key={a} className="group bg-background p-8 transition-colors hover:bg-card/60 sm:p-12">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-muted-foreground">0{i + 1}</span>
                <Target className="size-5 text-accent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <h3 className="mt-16 text-2xl font-extrabold uppercase transition-colors group-hover:text-primary">{a}</h3>
              <p className="mt-4 max-w-sm leading-7 text-muted-foreground">{b}</p>
            </article>
          ))}
        </div>
        <Reveal delay={100}>
          <div className="mt-9">
            <ArrowLink to="/proyectos">Ver tipos de proyectos</ArrowLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FundingPreview() {
  return (
    <section id="funding" className="section-pad border-y border-border bg-card/40">
      <div className="page-wrap">
        <Reveal>
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle eyebrow="Funding Opportunities" title="La oportunidad correcta depende del proyecto correcto." />
            <ArrowLink to="/funding">Explorar Funding</ArrowLink>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-14 overflow-x-auto rounded-xl border border-border bg-background">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Opportunity</th>
                  <th>Type</th>
                  <th>Region</th>
                  <th>Funding</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {opportunities.slice(0, 3).map((o) => (
                  <tr key={o.id}>
                    <td><b>{o.name}</b> <DemoBadge /></td>
                    <td>{o.type}</td>
                    <td>{o.region}</td>
                    <td className="font-semibold text-primary">{o.funding}</td>
                    <td><span className="badge-primary">{o.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TeamBand() {
  const members = [
    { photo: florenciaGomez, name: 'Florencia Gomez', role: 'Strategy & Narrative', desc: 'Estrategia de comunicación, posicionamiento, storytelling y preparación narrativa de proyectos y founders.' },
    { photo: santiagoVitale, name: 'Santiago Vitale', role: 'International Funding', desc: 'Identificación y estrategia de acceso a grants, fondos internacionales, capital no dilutivo y programas de financiamiento.' },
  ] as const;
  return (
    <section id="equipo" className="section-pad">
      <div className="page-wrap">
        <Reveal>
          <SectionTitle eyebrow="Equipo" title="Estrategia. Comunicación. Capital." text="Dos perspectivas complementarias para preparar proyectos y acercarlos a oportunidades compatibles." />
        </Reveal>
        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          {members.map((m, i) => (
            <Reveal key={m.name} delay={i * 120}>
              <article className="group grid grid-cols-[110px_1fr] gap-6 border-t border-border pt-8">
                <div className="relative">
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="size-24 rounded-full object-cover border-2 border-primary/30 transition-all duration-300 group-hover:scale-105 group-hover:border-accent"
                    width={96}
                    height={96}
                  />
                  <span className="absolute -bottom-1 -right-1 grid size-7 place-items-center rounded-full border border-border bg-card text-accent">
                    <Users className="size-3.5" />
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-extrabold">{m.name}</h3>
                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[.18em] text-accent">{m.role}</p>
                  <p className="mt-6 max-w-lg leading-7 text-muted-foreground">{m.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MethodBand() {
  const methodSteps = [
    ['Diagnóstico', 'Entender el punto de partida, el potencial y las brechas.'],
    ['Estructura', 'Ordenar la propuesta de valor y el modelo del proyecto.'],
    ['Narrativa', 'Convertir la estrategia en una historia clara y relevante.'],
    ['Funding', 'Identificar fuentes y oportunidades compatibles.'],
    ['Matchmaking', 'Conectar, aplicar y dar seguimiento estratégico.'],
  ] as const;
  return (
    <section className="section-pad border-y border-border bg-card/40">
      <div className="page-wrap">
        <Reveal>
          <SectionTitle eyebrow="Metodología" title="De proyecto a oportunidad." />
        </Reveal>
        <div className="mt-16 grid gap-px bg-border lg:grid-cols-5">
          {methodSteps.map(([a, b], i) => (
            <article key={a} className="group bg-background p-7 transition-colors hover:bg-card/60">
              <span className="text-5xl font-black text-primary/40 transition-colors group-hover:text-accent">0{i + 1}</span>
              <h3 className="mt-14 flex items-center gap-2 font-extrabold uppercase">
                <Compass className="size-4 text-accent" /> {a}
              </h3>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">{b}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ onForm }: { onForm: () => void }) {
  return (
    <section className="border-t border-border px-5 py-24 text-center lg:px-10 lg:py-36">
      <div className="page-wrap">
        <Reveal>
          <p className="section-title-eyebrow justify-center">El próximo paso</p>
          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-7xl text-balance">¿Tenés un proyecto que merece otra escala?</h2>
          <p className="mx-auto mt-6 max-w-xl text-muted-foreground">El primer paso es entender dónde estás y qué oportunidades pueden tener sentido para vos.</p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button variant="accent" size="lg" onClick={onForm}>Presentar proyecto <ArrowRight className="size-4" /></Button>
            <Button asChild variant="outline" size="lg"><Link to="/contacto">Agendar consulta</Link></Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function HomePage() {
  const [form, setForm] = useState(false);
  return (
    <SiteShell anchors={HOME_ANCHORS}>
      <HomeHero onForm={() => setForm(true)} />
      <StatsBand />
      <ChallengeSection />
      <EcosystemSection />
      <FootballCapitalBand />
      <ProjectsBand />
      <FundingPreview />
      <TeamBand />
      <MethodBand />
      <CTASection onForm={() => setForm(true)} />
      <ProjectForm open={form} onClose={() => setForm(false)} />
    </SiteShell>
  );
}

export function PublicIntroPage({ kind }: { kind: 'football' | 'projects' | 'method' | 'team' }) {
  const map = {
    football: { eyebrow: 'Football Capital', title: 'Capital global. Proyectos latinoamericanos.', text: 'Una plataforma estratégica para estructurar, posicionar y conectar proyectos del fútbol con nuevas posibilidades de crecimiento.' },
    projects: { eyebrow: 'Proyectos', title: 'Potencial que merece estructura.', text: 'Acompañamos clubes, academias, FootballTech y organizaciones de impacto a preparar su próxima etapa.' },
    method: { eyebrow: 'Metodología', title: 'De proyecto a oportunidad.', text: 'Un proceso estratégico que conecta diagnóstico, narrativa, funding y seguimiento.' },
    team: { eyebrow: 'Equipo', title: 'Estrategia. Comunicación. Capital.', text: 'Dos perspectivas complementarias para preparar proyectos y acercarlos a oportunidades compatibles.' },
  }[kind];
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="page-wrap"><SectionTitle {...map} /></div>
      </section>
      {kind === 'football' ? <FootballCapitalBand /> : kind === 'projects' ? (
        <section className="section-pad">
          <div className="page-wrap grid gap-px bg-border sm:grid-cols-2">
            {(() => {
              const projectTypes = [
                ['Clubes', 'Profesionalización e infraestructura.'],
                ['Academias', 'Formación y expansión.'],
                ['FootballTech', 'Tecnología aplicada al fútbol.'],
                ['Fundaciones', 'Deporte e impacto social.'],
              ] as const;
              return projectTypes.map((x) => (
                <article key={x[0]} className="bg-background p-10">
                  <h2 className="text-3xl font-extrabold">{x[0]}</h2>
                  <p className="mt-4 text-muted-foreground">{x[1]}</p>
                </article>
              ));
            })()}
          </div>
        </section>
      ) : kind === 'method' ? <MethodBand /> : <TeamBand />}
    </SiteShell>
  );
}

export function FundingPage() {
  const [q, setQ] = useState('');
  const [region, setRegion] = useState('Todos');
  const filtered = useMemo(() => opportunities.filter((o) => (region === 'Todos' || o.region === region) && o.name.toLowerCase().includes(q.toLowerCase())), [q, region]);
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="page-wrap">
          <SectionTitle eyebrow="Funding" title="Oportunidades alineadas con cada proyecto." text="Una vista pública de ejemplo. Todas las oportunidades mostradas son datos ficticios para esta demo." />
          <DemoBadge />
        </div>
      </section>
      <section className="pb-28">
        <div className="page-wrap">
          <div className="grid gap-3 border-y border-border py-5 sm:grid-cols-[1fr_auto]">
            <label className="flex items-center gap-3 rounded-lg border border-border bg-surface px-4">
              <Search className="size-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar oportunidades" className="h-12 w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none" />
            </label>
            <select value={region} onChange={(e) => setRegion(e.target.value)} className="h-12 rounded-lg border border-border bg-surface px-4 text-sm">
              <option>Todos</option>
              {['LATAM', 'Europe', 'USA', 'Middle East', 'Global'].map((x) => <option key={x}>{x}</option>)}
            </select>
          </div>
          <div className="divide-y divide-border">
            {filtered.map((o) => (
              <article key={o.id} className="grid gap-6 py-9 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <div className="flex flex-wrap gap-2">
                    <DemoBadge />
                    <span className="text-[10px] uppercase tracking-[.16em] text-muted-foreground">{o.type} · {o.region}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-extrabold">{o.name}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{o.description}</p>
                </div>
                <div className="lg:text-right">
                  <p className="text-sm font-bold text-primary">{o.funding}</p>
                  <p className="mt-2 text-xs text-muted-foreground">{o.status}</p>
                  <Button asChild variant="outline" className="mt-4">
                    <Link to="/intelligence/opportunities/$id" params={{ id: o.id }}>Ver oportunidad</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

export function ContactPage() {
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="page-wrap grid gap-14 lg:grid-cols-2">
          <SectionTitle eyebrow="Presentar proyecto" title="Empecemos por entender tu proyecto." text="Compartí la información esencial. Pitch Room podrá analizar su etapa, necesidades y posibles próximos pasos." />
          <EmbeddedForm />
        </div>
      </section>
    </SiteShell>
  );
}

function EmbeddedForm() {
  const [done, setDone] = useState(false);
  if (done) return (
    <div className="rounded-xl border border-accent/30 bg-surface p-10">
      <CheckCircle2 className="size-10 text-accent" />
      <h2 className="mt-6 text-3xl font-extrabold">Proyecto recibido</h2>
      <p className="mt-4 text-muted-foreground">Pitch Room analizará la información para identificar próximos pasos y oportunidades compatibles.</p>
    </div>
  );
  return (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="grid gap-4 sm:grid-cols-2 border-t border-border pt-8">
      <Field label="Nombre" required />
      <Field label="Email" type="email" required />
      <Field label="País" />
      <Field label="Organización" />
      <Field label="Tipo de proyecto" />
      <Field label="Website" />
      <Field label="Etapa" />
      <Field label="¿Qué estás buscando?" />
      <Field label="Monto aproximado" />
      <div className="sm:col-span-2">
        <Field label="Descripción" area />
      </div>
      <Button variant="accent" className="sm:col-span-2">Enviar proyecto</Button>
    </form>
  );
}