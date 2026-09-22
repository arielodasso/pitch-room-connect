import { Link } from '@tanstack/react-router';
import pitchRoomLogo from '@/assets/pitchroom.jpg';
import { designSystem } from '@/lib/design-system';

export function Brand({ intelligence = false, compact = false }: { intelligence?: boolean; compact?: boolean }) {
  return (
    <Link to={intelligence ? '/intelligence/dashboard' : '/'} className="inline-flex items-center gap-3" aria-label="Pitch Room">
      <img
        src={pitchRoomLogo}
        alt={designSystem.brand.logoAlt}
        className="h-9 w-auto shrink-0"
        width={120}
        height={40}
      />
      {!compact && (
        <span className="leading-none">
          <b className="block text-[15px] font-extrabold tracking-[.13em] text-foreground">PITCH ROOM</b>
          <span className="mt-1 block text-[8px] font-semibold tracking-[.3em] text-accent">
            {intelligence ? 'INTELLIGENCE' : 'FOOTBALL CAPITAL'}
          </span>
        </span>
      )}
    </Link>
  );
}
