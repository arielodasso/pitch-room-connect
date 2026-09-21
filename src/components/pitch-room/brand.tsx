import { Link } from '@tanstack/react-router';
export function Brand({ intelligence=false, compact=false }: { intelligence?:boolean; compact?:boolean }) {
 return <Link to={intelligence?'/intelligence/dashboard':'/'} className="inline-flex items-center gap-3" aria-label="Pitch Room">
  <span className="relative grid size-9 shrink-0 place-items-center border border-accent/50 text-accent"><span className="absolute h-px w-5 rotate-[-35deg] bg-accent"/><span className="size-2 rounded-full border border-accent"/></span>
  {!compact&&<span className="leading-none"><b className="block text-[15px] font-extrabold tracking-[.13em] text-foreground">PITCH ROOM</b><span className="mt-1 block text-[8px] font-semibold tracking-[.3em] text-accent">{intelligence?'INTELLIGENCE':'FOOTBALL CAPITAL'}</span></span>}
 </Link>
}
