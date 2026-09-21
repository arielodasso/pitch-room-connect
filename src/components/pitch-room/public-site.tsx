import { Link } from '@tanstack/react-router';
import { ArrowDown, ArrowRight, CheckCircle2, ChevronRight, Globe2, Menu, Search, X } from 'lucide-react';
import { useMemo, useState, type ReactNode } from 'react';
import heroImage from '@/assets/pitch-room-hero.jpg';
import { navPublic, opportunities } from '@/data/demo';
import { Brand } from './brand';
import { Button, DemoBadge, Field } from './ui';
import { ProjectForm } from './project-form';

export function SiteShell({ children }: { children: ReactNode }) {
  const [menu, setMenu] = useState(false);
  const [form, setForm] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/88 backdrop-blur-xl">
        <div className="mx-auto grid h-20 max-w-[1480px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 lg:grid-cols-[auto_1fr_auto] lg:px-10">
          <Brand />
          <nav className="hidden items-center justify-center gap-7 lg:flex">
            {navPublic.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className="text-[11px] font-semibold uppercase tracking-[.12em] text-muted-foreground transition hover:text-foreground"
                activeProps={{ className: 'text-accent' }}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/intelligence/dashboard" className="mr-2 text-[10px] font-bold uppercase tracking-[.12em] text-muted-foreground hover:text-accent">
              Intelligence →
            </Link>
            <Button onClick={() => setForm(true)}>Presentar proyecto</Button>
          </div>
          <button className="grid size-11 place-items-center border border-border lg:hidden" onClick={() => setMenu(!menu)} aria-label="Menú">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu && (
          <nav className="border-t border-border bg-surface p-5 lg:hidden">
            {navPublic.map(([label, to]) => (
              <Link onClick={() => setMenu(false)} key={to} to={to} className="block border-b border-border py-4 text-sm font-semibold">
                {label}
              </Link>
            ))}
            <Link to="/intelligence/dashboard" className="block py-4 text-sm text-accent">
              Pitch Room Intelligence →
            </Link>
            <Button className="mt-3 w-full" onClick={() => { setMenu(false); setForm(true); }}>
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

function SectionTitle({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-5 text-4xl font-bold leading-[1.06] sm:text-6xl">{title}</h2>
      {text && <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">{text}</p>}
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

export function HomePage() {
  const [tab, setTab] = useState<'projects' | 'capital'>('projects');
  const [form, setForm] = useState(false);
  return (
    <SiteShell>
      <section className="relative flex min-h-[92vh] items-end overflow-hidden pt-24">
        <img src={heroImage} alt="Estadio internacional de fútbol durante la noche" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover" />
        <div className="hero-shade absolute inset-0" />
        <div className="relative mx-auto w-full max-w-[1480px] px-5 pb-16 pt-28 lg:px-10 lg:pb-24">
          <p className="eyebrow">Pitch Room Football Capital</p>
          <h1 className="mt-6 max-w-5xl text-[clamp(3rem,7vw,7.6rem)] font-extrabold leading-[.9]">El puente entre el fútbol latinoamericano y el capital global.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-foreground/70">Estrategia, narrativa, funding y acceso a capital para proyectos con potencial de crecimiento.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button onClick={() => setForm(true)}>Presentar mi proyecto <ArrowRight className="size-4" /></Button>
            <Button asChild variant="outline"><Link to="/football-capital">Explorar Pitch Room</Link></Button>
          </div>
          <div className="mt-16 flex items-center justify-between border-t border-border pt-5 text-[10px] font-bold uppercase tracking-[.23em] text-muted-foreground">
            <span>Football · Capital · Strategy</span>
            <ArrowDown className="size-4" />
          </div>
        </div>
      </section>
      <section className="section-pad">
        <div className="page-wrap">
          <SectionTitle eyebrow="El desafío" title="El capital existe. El desafío es llegar a él." text="Existen proyectos con potencial, oportunidades de financiamiento y capital interesado. Pero muchas veces esos tres elementos no llegan a encontrarse." />
          <div className="mt-16 grid border-y border-border md:grid-cols-3">
            {
              (() => {
                const items = [
                  ['Projects', 'Clubes, academias, startups y organizaciones.'],
                  ['Opportunities', 'Grants, fondos, programas y capital.'],
                  ['The Gap', 'Narrativa, estructura, preparación y conocimiento.'],
                ] as const;
                return items.map((x, i) => (
                  <div key={x[0]} className="border-b border-border py-10 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
                    <span className="text-xs text-accent">0{i + 1}</span>
                    <h3 className="mt-7 text-xl font-bold uppercase">{x[0]}</h3>
                    <p className="mt-3 leading-7 text-muted-foreground">{x[1]}</p>
                  </div>
                ));
              })()
            }
          </div>
          <p className="mt-10 text-2xl font-semibold">Pitch Room trabaja sobre ese punto de conexión.</p>
        </div>
      </section>
      <section className="border-y border-border bg-surface section-pad">
        <div className="page-wrap">
          <SectionTitle eyebrow="Ecosistema" title="Una estrategia para cada lado del mercado." />
          <div className="mt-12 flex gap-8 border-b border-border">
            <button onClick={() => setTab('projects')} className={`pb-4 text-sm font-bold uppercase tracking-[.14em] ${tab === 'projects' ? 'border-b-2 border-accent text-accent' : 'text-muted-foreground'}`}>
              Proyectos
            </button>
            <button onClick={() => setTab('capital')} className={`pb-4 text-sm font-bold uppercase tracking-[.14em] ${tab === 'capital' ? 'border-b-2 border-accent text-accent' : 'text-muted-foreground'}`}>
              Capital
            </button>
          </div>
          <div className="grid gap-px bg-border lg:grid-cols-5">
            {(() => {
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
              return (tab === 'projects' ? projectsItems : capitalItems).map(([a, b]) => (
                <article key={a} className="min-h-56 bg-surface p-7">
                  <ChevronRight className="size-5 text-accent" />
                  <h3 className="mt-12 font-bold">{a}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{b}</p>
                </article>
              ));
            })()}
          </div>
          <Button className="mt-8" onClick={() => setForm(true)}>
            {tab === 'projects' ? 'Presentar proyecto' : 'Explorar oportunidades'}
          </Button>
        </div>
      </section>
      <FootballCapitalBand />
      <section className="section-pad">
        <div className="page-wrap">
          <SectionTitle eyebrow="Proyectos" title="¿Qué tipo de proyectos acompañamos?" />
          <div className="mt-14 grid gap-px bg-border sm:grid-cols-2">
            {(() => {
              const projectTypes = [
                ['Clubes', 'Profesionalización, infraestructura, desarrollo y proyectos estratégicos.'],
                ['Academias', 'Formación, expansión y modelos escalables.'],
                ['FootballTech', 'Tecnología aplicada al fútbol y SportsTech.'],
                ['Fundaciones', 'Proyectos deportivos y de impacto social.'],
              ] as const;
              return projectTypes.map(([a, b], i) => (
                <article key={a} className="group bg-background p-8 sm:p-12">
                  <span className="text-xs text-muted-foreground">0{i + 1}</span>
                  <h3 className="mt-16 text-2xl font-bold uppercase group-hover:text-accent">{a}</h3>
                  <p className="mt-4 max-w-sm leading-7 text-muted-foreground">{b}</p>
                </article>
              ));
            })()}
          </div>
          <div className="mt-9">
            <ArrowLink to="/proyectos">Ver tipos de proyectos</ArrowLink>
          </div>
        </div>
      </section>
      <FundingPreview />
      <TeamBand />
      <MethodBand />
      <section className="border-t border-border px-5 py-24 text-center lg:px-10 lg:py-36">
        <p className="eyebrow">El próximo paso</p>
        <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-bold sm:text-7xl">¿Tenés un proyecto que merece otra escala?</h2>
        <p className="mx-auto mt-6 max-w-xl text-muted-foreground">El primer paso es entender dónde estás y qué oportunidades pueden tener sentido para vos.</p>
        <Button className="mt-9" onClick={() => setForm(true)}>Presentar proyecto <ArrowRight className="size-4" /></Button>
      </section>
      <ProjectForm open={form} onClose={() => setForm(false)} />
    </SiteShell>
  );
}

export function FootballCapitalBand() {
  return (
    <section className="relative overflow-hidden border-b border-border section-pad">
      <div className="world-grid absolute inset-0 opacity-45" />
      <div className="page-wrap relative">
        <SectionTitle
          eyebrow="Football Capital"
          title="El fútbol latinoamericano tiene proyectos que pueden jugar en otra escala."
          text="Pitch Room trabaja para conectar proyectos del ecosistema futbolístico con oportunidades de crecimiento y fuentes de capital nacionales e internacionales."
        />
        <div className="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr]">
          <div>
            <span className="text-5xl font-extrabold">LATAM</span>
            <div className="mt-6 grid grid-cols-2 gap-px bg-border">
              {['Clubs', 'Academies', 'FootballTech', 'Foundations'].map((x) => (
                <span key={x} className="bg-background p-4 text-xs uppercase text-muted-foreground">→ {x}</span>
              ))}
            </div>
          </div>
          <div className="hidden h-px w-28 bg-accent lg:block relative">
            <span className="flow-dot" />
          </div>
          <div className="space-y-3 text-2xl font-bold">
            {['EUROPE', 'USA', 'MIDDLE EAST', 'GLOBAL CAPITAL'].map((x) => (
              <div key={x} className="border-b border-border pb-3">{x}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FundingPreview() {
  return (
    <section className="border-y border-border bg-surface section-pad">
      <div className="page-wrap">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle eyebrow="Funding Opportunities" title="La oportunidad correcta depende del proyecto correcto." />
          <ArrowLink to="/funding">Explorar Funding</ArrowLink>
        </div>
        <div className="mt-14 overflow-x-auto">
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
                  <td><b>{o.name}</b><DemoBadge /></td>
                  <td>{o.type}</td>
                  <td>{o.region}</td>
                  <td>{o.funding}</td>
                  <td>{o.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export function TeamBand() {
  return (
    <section className="section-pad">
      <div className="page-wrap">
        <SectionTitle eyebrow="Equipo" title="Estrategia. Comunicación. Capital." />
        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          {(() => {
            const teamMembers = [
              ['FG', 'Florencia Gomez', 'Strategy & Narrative', 'Estrategia de comunicación, posicionamiento, storytelling y preparación narrativa de proyectos y founders.'],
              ['SV', 'Santiago Vitale', 'International Funding', 'Identificación y estrategia de acceso a grants, fondos internacionales, capital no dilutivo y programas de financiamiento.'],
            ] as const;
            return teamMembers.map(([initials, name, role, desc]) => (
              <article key={name} className="grid grid-cols-[80px_1fr] gap-6 border-t border-border pt-8">
                <div className="grid size-20 place-items-center bg-secondary text-2xl font-black text-accent">{initials}</div>
                <div>
                  <h3 className="text-2xl font-bold">{name}</h3>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[.14em] text-accent">{role}</p>
                  <p className="mt-6 max-w-lg leading-7 text-muted-foreground">{desc}</p>
                </div>
              </article>
            ));
          })()}
        </div>
      </div>
    </section>
  );
}

export function MethodBand() {
  return (
    <section className="border-y border-border bg-surface section-pad">
      <div className="page-wrap">
        <SectionTitle eyebrow="Metodología" title="De proyecto a oportunidad." />
        <div className="mt-16 grid gap-px bg-border lg:grid-cols-5">
          {(() => {
            const methodSteps = [
              ['Diagnóstico', 'Entender el punto de partida, el potencial y las brechas.'],
              ['Estructura', 'Ordenar la propuesta de valor y el modelo del proyecto.'],
              ['Narrativa', 'Convertir la estrategia en una historia clara y relevante.'],
              ['Funding', 'Identificar fuentes y oportunidades compatibles.'],
              ['Matchmaking', 'Conectar, aplicar y dar seguimiento estratégico.'],
            ] as const;
            return methodSteps.map(([a, b], i) => (
              <article key={a} className="bg-surface p-7">
                <span className="text-4xl font-light text-accent">0{i + 1}</span>
                <h3 className="mt-16 font-bold uppercase">{a}</h3>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">{b}</p>
              </article>
            ));
          })()}
        </div>
      </div>
    </section>
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
                  <h2 className="text-3xl font-bold">{x[0]}</h2>
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
            <label className="flex items-center gap-3 border border-border bg-surface px-4">
              <Search className="size-4 text-muted-foreground" />
              <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar oportunidades" className="h-12 w-full bg-transparent text-sm outline-none" />
            </label>
            <select value={region} onChange={(e) => setRegion(e.target.value)} className="h-12 border border-border bg-surface px-4 text-sm">
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
                    <span className="text-[10px] uppercase tracking-[.14em] text-muted-foreground">{o.type} · {o.region}</span>
                  </div>
                  <h2 className="mt-4 text-2xl font-bold">{o.name}</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{o.description}</p>
                </div>
                <div className="lg:text-right">
                  <p className="text-sm font-bold">{o.funding}</p>
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
    <div className="border border-accent/30 bg-surface p-10">
      <CheckCircle2 className="size-10 text-accent" />
      <h2 className="mt-6 text-3xl font-bold">Proyecto recibido</h2>
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
      <Button className="sm:col-span-2">Enviar proyecto</Button>
    </form>
  );
}