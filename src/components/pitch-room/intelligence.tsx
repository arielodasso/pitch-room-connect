import { Link, useNavigate, useRouterState } from '@tanstack/react-router';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Bell, BriefcaseBusiness, Building2, CheckSquare2, ChevronRight, Command, ExternalLink, FileText, FolderKanban, LayoutDashboard, Menu, Plus, Search, Settings, Users, X } from 'lucide-react';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { applications, documents, investors, opportunities, projects, tasks } from '@/data/demo';
import { Brand } from './brand';
import { Button, DemoBadge, Modal } from './ui';
import { cn } from '@/lib/utils';

const links = [
  ['Dashboard', '/intelligence/dashboard', LayoutDashboard],
  ['Projects', '/intelligence/projects', FolderKanban],
  ['Opportunities', '/intelligence/opportunities', BriefcaseBusiness],
  ['Investors', '/intelligence/investors', Users],
  ['Applications', '/intelligence/applications', Building2],
  ['Tasks', '/intelligence/tasks', CheckSquare2],
  ['Documents', '/intelligence/documents', FileText],
  ['Settings', '/intelligence/settings', Settings],
] as const;
const chartColors = ['var(--accent)', 'var(--chart-2)', 'var(--chart-3)', 'var(--chart-4)', 'var(--muted-foreground)'];

function AppShell({
  children,
  title,
  subtitle = 'Strategic overview',
  action,
}: {
  children: ReactNode;
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [side, setSide] = useState(false);
  const [search, setSearch] = useState(false);
  const [notice, setNotice] = useState(false);
  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearch(true);
      }
    };
    addEventListener('keydown', fn);
    return () => removeEventListener('keydown', fn);
  }, []);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-border bg-sidebar p-5 transition-transform lg:translate-x-0 ${
          side ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <Brand intelligence />
          <button className="lg:hidden" onClick={() => setSide(false)}>
            <X />
          </button>
        </div>
        <nav className="mt-12 space-y-1">
          {links.map(([label, to, Icon]) => (
            <Link
              key={to}
              to={to}
              onClick={() => setSide(false)}
              className="flex items-center gap-3 border-l-2 border-transparent px-4 py-3 text-sm text-muted-foreground transition hover:bg-sidebar-accent hover:text-foreground"
              activeProps={{ className: 'border-accent bg-sidebar-accent text-foreground' }}
              activeOptions={{ exact: to === '/intelligence/dashboard' }}
            >
              <Icon className="size-4 shrink-0" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <div className="mt-auto border border-accent/25 bg-accent/5 p-4">
          <p className="text-[9px] font-bold uppercase tracking-[.16em] text-accent">Demo Environment</p>
          <p className="mt-2 text-xs leading-5 text-muted-foreground">Datos ficticios para demostración.</p>
        </div>
      </aside>
      {side && (
        <button className="fixed inset-0 z-40 bg-background/80 lg:hidden" onClick={() => setSide(false)} aria-label="Cerrar navegación" />
      )}
      <div className="lg:pl-64">
        <header className="sticky top-0 z-30 grid h-16 grid-cols-[auto_minmax(0,1fr)_auto] items-center border-b border-border bg-background/90 px-4 backdrop-blur-xl sm:px-6">
          <div className="flex items-center gap-4 lg:hidden">
            <button onClick={() => setSide(true)} className="size-10 grid place-items-center">
              <Menu className="size-5" />
            </button>
            <span className="font-bold text-lg">Intelligence</span>
          </div>
          <div className="hidden lg:block lg:col-start-2">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          </div>
          <div className="flex items-center gap-3">
            {action && action}
            <Button variant="ghost" size="icon" asChild aria-label="Ir al sitio público">
              <Link to="/"><ExternalLink className="size-5" /></Link>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setSearch(true)} aria-label="Command Center">
              <Command className="size-5" />
              <span className="hidden lg:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-[.12em] text-muted-foreground">
                <kbd className="px-1.5 py-0.5 border border-border rounded">⌘K</kbd>
              </span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setNotice(true)} aria-label="Notificaciones">
              <Bell className="size-5" />
            </Button>
          </div>
        </header>
        <main className="p-5 lg:p-8">{children}</main>
      </div>
      {search && <CommandPalette open={search} close={() => setSearch(false)} />}
      {notice && <Notifications open={notice} close={() => setNotice(false)} />}
    </div>
  );
}

function CommandPalette({ open, close }: { open: boolean; close: () => void }) {
  const nav = useNavigate();
  const [q, setQ] = useState('');
  const items = [
    ...projects.map((x) => ({ label: x.name, to: '/intelligence/projects/$id' as const, params: { id: x.id }, group: 'Projects' })),
    ...opportunities.map((x) => ({ label: x.name, to: '/intelligence/opportunities/$id' as const, params: { id: x.id }, group: 'Opportunities' })),
    ...investors.map((x) => ({ label: x.name, to: '/intelligence/investors' as const, params: {}, group: 'Investors' })),
    ...applications.map((x) => ({ label: `${x.project} → ${x.opportunity}`, to: '/intelligence/applications' as const, params: {}, group: 'Applications' })),
  ];
  const filtered = items.filter((x) => x.label.toLowerCase().includes(q.toLowerCase()));
  return (
    <Modal open={open} onClose={close} title="Command Center">
      <div className="flex items-center gap-3 border border-border bg-background px-4">
        <Search className="size-4" />
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="h-12 w-full bg-transparent text-sm outline-none"
          placeholder="Buscar en Intelligence..."
        />
      </div>
      <div className="mt-4 max-h-72 overflow-auto">
        {filtered.map((x, i) => (
          <button
            key={x.label}
            onClick={() => {
              nav({ to: x.to, params: x.params });
              close();
            }}
            className="flex w-full items-center justify-between border-b border-border px-3 py-4 text-left hover:bg-secondary"
          >
            <span>
              <small className="block text-[9px] uppercase text-accent">{x.group}</small>
              {x.label}
            </span>
            <ChevronRight className="size-4" />
          </button>
        ))}
        {!q &&
          links.slice(0, 7).map(([label, to, Icon]) => (
            <button
              key={to}
              onClick={() => {
                nav({ to });
                close();
              }}
              className="flex w-full items-center gap-3 border-b border-border px-3 py-3 text-left text-sm hover:bg-secondary"
            >
              <Icon className="size-4 text-accent" />
              Ir a {label}
            </button>
          ))}
      </div>
    </Modal>
  );
}

function Notifications({ open, close }: { open: boolean; close: () => void }) {
  const notifications = [
    ['Deadline approaching', 'International Grant — 5 días'],
    ['Task overdue', 'Review Football Vision pitch'],
    ['New opportunity', 'SportsTech Program added'],
    ['Follow-up', 'Investor Alpha — vence hoy'],
  ] as const;
  return (
    <Modal open={open} onClose={close} title="Notificaciones">
      <div className="divide-y divide-border">
        {notifications.map((x) => (
          <div className="py-5" key={x[0]}>
            <div className="flex items-center gap-3">
              <span className="size-2 rounded-full bg-accent" />
              <b>{x[0]}</b>
              <DemoBadge className="ml-2" />
            </div>
            <p className="mt-2 pl-5 text-sm text-muted-foreground">{x[1]}</p>
          </div>
        ))}
      </div>
    </Modal>
  );
}

function Panel({ title, children, className = '' }: { title: string; children: ReactNode; className?: string }) {
  return (
    <section className={`border border-border bg-surface ${className}`}>
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <h2 className="text-sm font-bold">{title}</h2>
        <DemoBadge className="ml-2" />
      </div>
      <div className="p-5">{children}</div>
    </section>
  );
}

const Badge = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex border border-border bg-secondary px-2 py-1 text-[10px] text-muted-foreground">{children}</span>
);

function MobileRow({ children }: { children: ReactNode }) {
  return <div className="border-b border-border p-4 last:border-0">{children}</div>;
}

export function Dashboard() {
  const projectTypes = [
    { name: 'Club', value: 7 },
    { name: 'Academy', value: 6 },
    { name: 'FootballTech', value: 7 },
    { name: 'Foundation', value: 4 },
  ];
  const regions = [
    { name: 'LATAM', value: 6 },
    { name: 'Europe', value: 4 },
    { name: 'USA', value: 3 },
    { name: 'Middle East', value: 2 },
    { name: 'Global', value: 3 },
  ];
  const pipeline = ['Identified', 'Evaluating', 'Preparing', 'Submitted', 'Follow-up', 'Closed'].map((name, i) => ({
    name,
    value: [4, 3, 2, 2, 1, 1][i],
  }));
  const kpiItems = [
    ['Projects', '24'],
    ['Active Opportunities', '18'],
    ['Applications', '9'],
    ['Investors', '12'],
    ['Pending Actions', '7'],
  ] as const;
  return (
    <AppShell title="Good morning, Pitch Room">
      <div className="grid gap-px bg-border sm:grid-cols-2 xl:grid-cols-5">
        {kpiItems.map(([a, b]) => (
          <div className="bg-surface p-6" key={a}>
            <div className="flex justify-between">
              <span className="text-[10px] uppercase tracking-[.12em] text-muted-foreground">{a}</span>
              <DemoBadge className="ml-2" />
            </div>
            <strong className="mt-8 block text-4xl">{b}</strong>
          </div>
        ))}
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-3">
        <Panel title="Projects by Type">
          <div className="h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={projectTypes} dataKey="value" innerRadius={58} outerRadius={88} stroke="none">
                  {projectTypes.map((_, i) => <Cell key={i} fill={chartColors[i]} />)}
                </Pie>
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {projectTypes.map((x, i) => (
              <span key={x.name} className="text-xs text-muted-foreground">
                <i className="mr-2 inline-block size-2 rounded" style={{ background: chartColors[i] }} />
                {x.name} · {x.value}
              </span>
            ))}
          </div>
        </Panel>
        <Panel title="Funding by Region">
          <div className="h-72">
            <ResponsiveContainer>
              <BarChart data={regions} layout="vertical">
                <CartesianGrid horizontal={false} stroke="var(--border)" />
                <XAxis type="number" hide />
                <YAxis
                  dataKey="name"
                  type="category"
                  width={80}
                  tick={{ fill: 'var(--muted-foreground)', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Bar dataKey="value" fill="var(--accent)" barSize={10} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>
        <Panel title="Application Pipeline">
          <div className="h-72">
            <ResponsiveContainer>
              <AreaChart data={pipeline}>
                <defs>
                  <linearGradient id="pipeline-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="var(--accent)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid horizontal={true} vertical={false} stroke="var(--border)" />
                <XAxis dataKey="name" tick={{ fill: 'var(--muted-foreground)', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)' }} />
                <Area type="monotone" dataKey="value" stroke="var(--accent)" fill="url(#pipeline-gradient)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>
      <div className="mt-6">
        <Panel title="Recent Projects" className="xl:col-span-3">
          <ProjectTable compact />
        </Panel>
      </div>
    </AppShell>
  );
}

function ProjectTable({ compact = false }: { compact?: boolean }) {
  const rows = compact ? projects.slice(0, 3) : projects;
  return (
    <>
      <div className="hidden overflow-x-auto md:block">
        <table className="data-table">
          <thead>
            <tr>
              <th>Project</th>
              <th>Type</th>
              <th>Country</th>
              <th>Stage</th>
              <th>Funding Need</th>
              <th>Status</th>
              <th>Next Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => (
              <tr key={p.id}>
                <td>
                  <Link to="/intelligence/projects/$id" params={{ id: p.id }} className="font-bold hover:text-accent">
                    {p.name}
                  </Link>
                  <DemoBadge className="ml-2">Demo Project</DemoBadge>
                </td>
                <td>{p.type}</td>
                <td>{p.country}</td>
                <td>{p.stage}</td>
                <td>{p.fundingNeed}</td>
                <td><Badge>{p.status}</Badge></td>
                <td>{p.nextAction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="md:hidden">
        {rows.map((p) => (
          <MobileRow key={p.id}>
            <DemoBadge className="ml-2">Demo Project</DemoBadge>
            <Link to="/intelligence/projects/$id" params={{ id: p.id }} className="mt-3 block text-lg font-bold">
              {p.name}
            </Link>
            <div className="mt-3 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
              <span>{p.type} · {p.country}</span>
              <span>{p.fundingNeed}</span>
              <span>{p.status}</span>
              <span>{p.nextAction}</span>
            </div>
          </MobileRow>
        ))}
      </div>
    </>
  );
}

export function Projects() {
  return (
    <AppShell title="Projects" subtitle="Strategic project portfolio" action={<Button><Plus className="size-4" /> Add Project</Button>}>
      <Panel title="Project Portfolio">
        <ProjectTable />
      </Panel>
    </AppShell>
  );
}

export function ProjectDetail({ id }: { id: string }) {
  const p = projects.find((x) => x.id === id) ?? projects[0];
  const [tab, setTab] = useState('Overview');
  const [matching, setMatching] = useState(false);
  const tabs = ['Overview', 'Strategy', 'Funding', 'Applications', 'Documents', 'Notes', 'Tasks'];
  if (!p) {
    return (
      <AppShell title="Proyecto no encontrado" subtitle={`El id "${id}" no existe en el dataset demo`}>
        <Panel title="Error">
          <p className="text-sm text-muted-foreground">{id}</p>
        </Panel>
      </AppShell>
    );
  }
  return (
    <AppShell title={p.name} subtitle={`${p.type} · ${p.country} · ${p.status}`}>
      <div className="mb-6 flex gap-2">
        <DemoBadge className="ml-2">Demo Project</DemoBadge>
        <Badge>{p.stage}</Badge>
      </div>
      <div className="overflow-x-auto border-b border-border">
        <div className="flex min-w-max gap-7">
          {tabs.map((x) => (
            <button
              onClick={() => setTab(x)}
              key={x}
              className={`pb-4 text-xs font-bold ${tab === x ? 'border-b-2 border-accent text-accent' : 'text-muted-foreground'}`}
            >
              {x}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6">
        {tab === 'Overview' && (
          <div className="grid gap-6 lg:grid-cols-3">
            <Panel title="Project Overview" className="lg:col-span-2">
              <p className="leading-7 text-muted-foreground">{p.description}</p>
              <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                {(() => {
                  const projectDetails = [
                    ['Website', p.website],
                    ['Stage', p.stage],
                    ['Team', p.team],
                    ['Funding target', p.fundingNeed],
                    ['Use of funds', p.useOfFunds],
                    ['Current status', p.status],
                  ] as const;
                  return projectDetails.map((x) => (
                    <div key={x[0]}>
                      <dt className="text-[10px] uppercase tracking-[.12em] text-muted-foreground">{x[0]}</dt>
                      <dd className="mt-2 text-sm font-semibold">{x[1]}</dd>
                    </div>
                  ));
                })()}
              </dl>
            </Panel>
            <Panel title="Process Map">
              <Flow />
            </Panel>
          </div>
        )}
        {tab === 'Strategy' && <StrategyFields />}
        {tab === 'Funding' && (
          <div className="space-y-6">
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setMatching(true)}>Find compatible opportunities</Button>
              <Button><Plus className="size-4" /> Match Opportunity</Button>
            </div>
            <OpportunityMatches />
          </div>
        )}
        {tab === 'Applications' && <ApplicationTable project={p.name} />}
        {tab === 'Documents' && <DocumentList project={p.name} />}
        {tab === 'Notes' && <Notes />}
        {tab === 'Tasks' && <TaskList project={p.name} />}
      </div>
      <Matching open={matching} close={() => setMatching(false)} />
    </AppShell>
  );
}

function StrategyFields() {
  const strategyFields = [
    'Value Proposition',
    'Positioning',
    'Target Investor',
    'Narrative',
    'Key Messages',
    'Investor Readiness',
  ] as const;
  return (
    <div className="grid gap-px bg-border lg:grid-cols-2">
      {strategyFields.map((x, i) => (
        <label className="bg-surface p-6" key={x}>
          <span className="text-xs font-bold text-accent">{x}</span>
          <textarea
            defaultValue={
              [
                'Una propuesta especializada con foco regional y potencial de escala.',
                'Posicionamiento premium dentro del ecosistema futbolístico.',
                'Capital estratégico con conocimiento de deporte y crecimiento.',
                'Un proyecto latinoamericano preparado para una nueva etapa.',
                'Impacto, estructura, equipo y oportunidad de mercado.',
                'Documentación inicial preparada; modelo financiero en revisión.',
              ][i]
            }
            className="mt-4 min-h-28 w-full resize-none border border-border bg-background p-3 text-sm leading-6 outline-none focus:border-accent"
          />
        </label>
      ))}
    </div>
  );
}

function OpportunityMatches() {
  return (
    <Panel title="Matched Opportunities">
      <div className="divide-y divide-border">
        {opportunities.slice(0, 3).map((o, i) => (
          <div className="grid gap-4 py-5 sm:grid-cols-[1fr_auto] sm:items-center" key={o.id}>
            <div>
              <Link to="/intelligence/opportunities/$id" params={{ id: o.id }} className="font-bold hover:text-accent">
                {o.name}
              </Link>
              <p className="mt-2 text-xs text-muted-foreground">{o.type} · {o.region} · {o.funding}</p>
            </div>
            <div className="text-right">
              <b className="text-xl text-accent">{[92, 81, 74][i]}%</b>
              <p className="text-[9px] uppercase text-muted-foreground">Demo Data</p>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function Matching({ open, close }: { open: boolean; close: () => void }) {
  return (
    <Modal open={open} onClose={close} title="Opportunity Matching">
      <DemoBadge className="ml-2">Demo Matching Model</DemoBadge>
      <p className="mt-4 text-sm text-muted-foreground">Compatibilidad indicativa basada en criterios demo. No utiliza inteligencia artificial real.</p>
      <div className="mt-7">
        <OpportunityMatches />
      </div>
      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {(() => {
          const matchingCriteria = ['Project type', 'Region', 'Stage', 'Funding need', 'Sector', 'Eligibility'] as const;
          return matchingCriteria.map((x) => <Badge key={x}>{x}</Badge>);
        })()}
      </div>
    </Modal>
  );
}

function Flow() {
  const flowSteps = [
    ['Project', 'Football Vision'],
    ['Opportunity', 'International SportsTech Grant'],
    ['Application', 'Preparing'],
    ['Tasks', 'Financial model · Pitch deck'],
  ] as const;
  return (
    <div className="space-y-3">
      {flowSteps.map((x, i) => (
        <div key={x[0]}>
          <div className="border border-border p-3">
            <small className="text-[9px] uppercase text-accent">{x[0]}</small>
            <p className="mt-1 text-xs font-semibold">{x[1]}</p>
          </div>
          {i < 3 && <div className="ml-5 h-4 border-l border-accent" />}
        </div>
      ))}
    </div>
  );
}

export function Opportunities() {
  return (
    <AppShell title="Funding Opportunities" subtitle="Opportunity intelligence and matching" action={<Button><Plus className="size-4" /> Add Opportunity</Button>}>
      <div className="mb-5 grid gap-3 sm:grid-cols-5">
        {['Region', 'Type', 'Category', 'Status', 'Deadline'].map((x) => (
          <select key={x} className="h-11 border border-border bg-surface px-3 text-xs text-muted-foreground">
            <option>{x}</option>
          </select>
        ))}
      </div>
      <Panel title="Opportunity Database">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                <th>Opportunity</th>
                <th>Region</th>
                <th>Type</th>
                <th>Funding</th>
                <th>Deadline</th>
                <th>Projects Matched</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {opportunities.map((o) => (
                <tr key={o.id}>
                  <td>
                    <Link to="/intelligence/opportunities/$id" params={{ id: o.id }} className="font-bold hover:text-accent">
                      {o.name}
                    </Link>
                    <DemoBadge />
                  </td>
                  <td>{o.region}</td>
                  <td>{o.type}</td>
                  <td>{o.funding}</td>
                  <td>{o.deadline}</td>
                  <td>{o.matched}</td>
                  <td><Badge>{o.status}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </AppShell>
  );
}

export function OpportunityDetail({ id }: { id: string }) {
  const o = opportunities.find((x) => x.id === id) ?? opportunities[0];
  if (!o) {
    return (
      <AppShell title="Oportunidad no encontrada" subtitle={`El id "${id}" no existe en el dataset demo`}>
        <Panel title="Error">
          <p className="text-sm text-muted-foreground">{id}</p>
        </Panel>
      </AppShell>
    );
  }
  return (
    <AppShell title={o.name} subtitle={`${o.type} · ${o.region}`} action={<Button><Plus className="size-4" /> Add Project</Button>}>
      <div className="mb-6">
        <DemoBadge />
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <Panel title="Opportunity Detail" className="lg:col-span-2">
          <dl className="grid gap-7 sm:grid-cols-2">
            {(() => {
              const opportunityDetails = [
                ['Type', o.type],
                ['Region', o.region],
                ['Funding range', o.funding],
                ['Deadline', o.deadline],
                ['Eligibility', o.eligibility],
                ['Status', o.status],
                ['Requirements', o.requirements],
                ['Website', o.website],
              ] as const;
              return opportunityDetails.map((x) => (
                <div key={x[0]}>
                  <dt className="text-[10px] uppercase tracking-[.12em] text-muted-foreground">{x[0]}</dt>
                  <dd className="mt-2 text-sm leading-6">{x[1]}</dd>
                </div>
              ));
            })()}
          </dl>
          <p className="mt-8 border-t border-border pt-6 text-sm leading-7 text-muted-foreground">{o.description}</p>
        </Panel>
        <Panel title="Matched Projects">
          {projects.slice(0, 2).map((p, i) => (
            <div className="border-b border-border py-4" key={p.id}>
              <Link to="/intelligence/projects/$id" params={{ id: p.id }} className="font-bold hover:text-accent">
                {p.name}
              </Link>
              <p className="mt-2 text-xl font-bold text-accent">{[85, 72][i]}% match</p>
              <DemoBadge />
            </div>
          ))}
        </Panel>
      </div>
    </AppShell>
  );
}

export function Investors() {
  return (
    <AppShell title="Investors" subtitle="Relationship and capital network" action={<Button><Plus className="size-4" /> Add Investor</Button>}>
      <Panel title="Investor CRM">
        <div className="overflow-x-auto">
          <table className="data-table">
            <thead>
              <tr>
                {['Name', 'Organization', 'Country', 'Type', 'Focus', 'Ticket', 'Stage', 'Last Contact', 'Next Action'].map((x) => <th key={x}>{x}</th>)}
              </tr>
            </thead>
            <tbody>
              {investors.map((i) => (
                <tr key={i.name}>
                  <td><b>{i.name}</b><DemoBadge className="ml-2" /></td>
                  <td>{i.organization}</td>
                  <td>{i.country}</td>
                  <td>{i.type}</td>
                  <td>{i.focus}</td>
                  <td>{i.ticket}</td>
                  <td>{i.stage}</td>
                  <td>{i.lastContact}</td>
                  <td>{i.nextAction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Panel>
    </AppShell>
  );
}

export function Applications() {
  const cols = ['Identified', 'Evaluating', 'Preparing', 'Submitted', 'Follow-up', 'Closed'];
  return (
    <AppShell title="Applications" subtitle="Project × Opportunity pipeline">
      <div className="grid gap-4 overflow-x-auto pb-4 lg:grid-cols-3 2xl:grid-cols-6">
        {cols.map((c) => (
          <section key={c} className="min-w-64 border-t-2 border-accent bg-surface flex flex-col">
            <div className="flex justify-between border-b border-border p-4">
              <b className="text-xs">{c}</b>
              <span className="text-xs text-muted-foreground">{applications.filter((a) => a.status === c).length}</span>
            </div>
            <div className="flex-1 space-y-3 p-3 overflow-y-auto">
              {applications.filter((a) => a.status === c).map((a) => (
                <article draggable key={a.id} className="flex flex-col cursor-grab border border-border bg-background p-4 h-full">
                  <DemoBadge className="ml-2" />
                  <h3 className="mt-3 text-sm font-bold">{a.project}</h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground flex-1">{a.opportunity}</p>
                  <div className="mt-5 flex justify-between text-[10px] text-muted-foreground">
                    <span>{a.owner}</span>
                    <span>{a.deadline}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </AppShell>
  );
}

function TaskList({ project, filter = 'All' }: { project?: string; filter?: 'All' | 'High' | 'Overdue' }) {
  const rows = tasks.filter((t) => {
    if (project && t.project !== project) return false;
    if (filter === 'High' && t.priority !== 'High') return false;
    if (filter === 'Overdue' && t.status !== 'Overdue') return false;
    return true;
  });
  return (
    <Panel title="Tasks">
      <div className="divide-y divide-border">
        {rows.map((t) => (
          <div key={t.id} className="grid gap-3 py-4 sm:grid-cols-[1fr_auto_auto] sm:items-center">
            <div>
              <b className="text-sm">{t.task}</b>
              <p className="mt-1 text-xs text-muted-foreground">{t.project} · {t.assignee}</p>
            </div>
            <Badge>{t.priority}</Badge>
            <span className={t.status === 'Overdue' ? 'text-xs text-destructive' : 'text-xs text-muted-foreground'}>
              {t.due} · {t.status}
            </span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function Tasks() {
  const [filter, setFilter] = useState<'All' | 'High' | 'Overdue'>('All');
  return (
    <AppShell title="Tasks" subtitle="Strategic execution and follow-up" action={<Button><Plus className="size-4" /> Create Task</Button>}>
      <div className="mb-5 flex gap-2">
        {(['All', 'High', 'Overdue'] as const).map((x) => (
          <button
            onClick={() => setFilter(x)}
            key={x}
            className={`border px-4 py-2 text-xs ${filter === x ? 'border-accent text-accent' : 'border-border text-muted-foreground'}`}
          >
            {x}
          </button>
        ))}
      </div>
      <TaskList filter={filter} />
    </AppShell>
  );
}

function DocumentList({ project }: { project?: string }) {
  const rows = project ? documents.filter((d) => d.project === project) : documents;
  return (
    <Panel title="Documents">
      <div className="divide-y divide-border">
        {rows.map((d) => (
          <div className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 py-4" key={d.name}>
            <span className="grid size-10 place-items-center border border-border">
              <FileText className="size-4 text-accent" />
            </span>
            <div className="min-w-0">
              <b className="block truncate text-sm">{d.name}</b>
              <span className="text-xs text-muted-foreground">{d.project} · {d.category}</span>
            </div>
            <span className="hidden text-right text-xs text-muted-foreground sm:block">
              {d.updated}<br />{d.size}
            </span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

export function Documents() {
  return (
    <AppShell title="Documents" subtitle="Project knowledge repository" action={<Button><Plus className="size-4" /> Upload File</Button>}>
      <div className="mb-5 flex flex-wrap gap-2">
        {['Pitch Deck', 'Financial Model', 'Legal', 'Grants', 'Investor Material', 'Other'].map((x) => <Badge key={x}>{x}</Badge>)}
      </div>
      <DocumentList />
    </AppShell>
  );
}

function ApplicationTable({ project }: { project: string }) {
  return (
    <Panel title="Applications">
      <div className="divide-y divide-border">
        {applications.filter((a) => a.project === project).map((a) => (
          <div key={a.id} className="grid gap-2 py-4 sm:grid-cols-[1fr_auto]">
            <div>
              <b>{a.opportunity}</b>
              <p className="mt-1 text-xs text-muted-foreground">Owner: {a.owner} · Deadline: {a.deadline}</p>
            </div>
            <Badge>{a.status}</Badge>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function Notes() {
  return (
    <Panel title="Notes">
      <div className="space-y-5">
        {(() => {
          const notesData = [
            ['Florencia', 'Hoy, 09:45', 'Investor feedback', 'Reforzar el modelo de escalabilidad y la evidencia de adopción.'],
            ['Santiago', '18 Sep, 16:20', 'Funding opportunity', 'Validar elegibilidad antes de avanzar con la documentación.'],
            ['Florencia', '15 Sep, 11:30', 'Strategic recommendation', 'Simplificar el mensaje central del pitch.'],
          ] as const;
          return notesData.map((x) => (
            <article className="border-l-2 border-accent pl-5" key={x[2]}>
              <div className="flex flex-wrap items-center gap-2">
                <b className="text-sm">{x[0]}</b>
                <span className="text-xs text-muted-foreground">{x[1]}</span>
                <Badge>{x[2]}</Badge>
              </div>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{x[3]}</p>
            </article>
          ));
        })()}
      </div>
    </Panel>
  );
}

export function SettingsPage() {
  return (
    <AppShell title="Settings" subtitle="Demo workspace preferences">
      <div className="grid gap-6 lg:grid-cols-2">
        <Panel title="Workspace">
          <label className="block text-xs text-muted-foreground">
            Workspace name
            <input defaultValue="Pitch Room Intelligence" className="mt-2 h-11 w-full border border-border bg-background px-3 text-foreground" />
          </label>
          <label className="mt-5 block text-xs text-muted-foreground">
            Default region
            <select className="mt-2 h-11 w-full border border-border bg-background px-3 text-foreground">
              <option>LATAM</option>
              <option>Global</option>
            </select>
          </label>
          <Button className="mt-6">Save changes</Button>
        </Panel>
        <Panel title="Demo Mode">
          <div className="flex items-center justify-between">
            <div>
              <b className="text-sm">Demo Environment</b>
              <p className="mt-2 text-xs text-muted-foreground">Mantiene visibles las etiquetas de datos ficticios.</p>
            </div>
            <span className="h-6 w-11 bg-accent p-1"><i className="ml-auto block size-4 bg-accent-foreground" /></span>
          </div>
        </Panel>
      </div>
    </AppShell>
  );
}