import pitchRoomLogo from '@/assets/pitchroom.jpg';
import florenciaGomez from '@/assets/florencia-gomez.jpg';
import santiagoVitale from '@/assets/santiago-vitale.jpg';
import heroImage from '@/assets/pitch-room-hero.jpg';

export const designSystem = {
  brand: {
    name: 'Pitch Room',
    tagline: 'Football Capital',
    logo: pitchRoomLogo,
    logoAlt: 'Pitch Room Logo',
    favicon: pitchRoomLogo,
  },

  team: {
    florencia: {
      name: 'Florencia Gomez',
      role: 'Strategy & Narrative',
      initials: 'FG',
      photo: florenciaGomez,
      photoAlt: 'Florencia Gomez',
      description: 'Estrategia de comunicación, posicionamiento, storytelling y preparación narrativa de proyectos y founders.',
    },
    santiago: {
      name: 'Santiago Vitale',
      role: 'International Funding',
      initials: 'SV',
      photo: santiagoVitale,
      photoAlt: 'Santiago Vitale',
      description: 'Identificación y estrategia de acceso a grants, fondos internacionales, capital no dilutivo y programas de financiamiento.',
    },
  },

  hero: {
    image: heroImage,
    alt: 'Estadio internacional de fútbol durante la noche',
  },

  colors: {
    background: '#07090C',
    foreground: '#F5F5F2',
    card: '#101318',
    cardForeground: '#F5F5F2',
    popover: '#101318',
    popoverForeground: '#F5F5F2',
    primary: '#D9FF00',
    primaryForeground: '#07090C',
    secondary: '#151922',
    secondaryForeground: '#F5F5F2',
    muted: '#151922',
    mutedForeground: '#8E949E',
    accent: '#D9FF00',
    accentForeground: '#07090C',
    destructive: '#E53E3E',
    destructiveForeground: '#F5F5F2',
    border: 'rgba(255,255,255,0.10)',
    input: 'rgba(255,255,255,0.10)',
    ring: '#D9FF00',
    chart: {
      1: '#D9FF00',
      2: '#3B82F6',
      3: '#F59E0B',
      4: '#10B981',
      5: '#8B5CF6',
    },
    sidebar: '#101318',
    sidebarForeground: '#F5F5F2',
    sidebarPrimary: '#D9FF00',
    sidebarPrimaryForeground: '#07090C',
    sidebarAccent: '#151922',
    sidebarAccentForeground: '#F5F5F2',
    sidebarBorder: 'rgba(255,255,255,0.10)',
    sidebarRing: '#D9FF00',
    surface: {
      50: 'rgba(16,19,24,0.5)',
      80: 'rgba(16,19,24,0.8)',
    },
  },

  typography: {
    fontFamily: {
      primary: "'Montserrat', 'Geist', 'Satoshi', system-ui, sans-serif",
      mono: "'JetBrains Mono', 'Fira Code', monospace",
    },
    fontSize: {
      xs: '0.625rem',
      sm: '0.75rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeight: {
      tight: 1.06,
      normal: 1.5,
      relaxed: 1.75,
    },
    letterSpacing: {
      tight: '-0.02em',
      normal: '0',
      wide: '0.02em',
      wider: '0.12em',
      widest: '0.23em',
    },
  },

  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    7: '1.75rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    14: '3.5rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    28: '7rem',
    32: '8rem',
    36: '9rem',
    40: '10rem',
    44: '11rem',
    48: '12rem',
    52: '13rem',
    56: '14rem',
    60: '15rem',
    64: '16rem',
  },

  radius: {
    none: '0',
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    elevated: '0 8px 32px rgba(0, 0, 0, 0.4)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
  },

  transitions: {
    fast: '150ms ease',
    normal: '200ms ease',
    slow: '300ms ease',
    slower: '500ms ease',
  },

  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  zIndex: {
    hide: -1,
    base: 0,
    dropdown: 100,
    sticky: 200,
    fixed: 300,
    modalBackdrop: 400,
    modal: 500,
    popover: 600,
    tooltip: 700,
    toast: 800,
  },

  container: {
    maxWidth: '1480px',
    padding: {
      sm: '1.25rem',
      lg: '2.5rem',
    },
  },

  animations: {
    fadeIn: 'fade-in 0.4s ease-out forwards',
    slideUp: 'slide-up 0.5s ease-out forwards',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    spin: 'spin 1s linear infinite',
    gridMove: 'world-grid-move 30s linear infinite',
  },

  gradients: {
    hero: 'linear-gradient(180deg, transparent 0%, rgba(7,9,12,0.6) 60%, #07090C 100%)',
    worldGrid: `
      radial-gradient(circle at 20% 20%, rgba(217,255,0,0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(59,130,246,0.03) 0%, transparent 50%),
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
    `,
  },

  components: {
    button: {
      primary: {
        base: 'inline-flex items-center justify-center gap-2 border font-bold uppercase tracking-[.12em] transition-all disabled:opacity-50',
        default: 'min-h-11 px-5 text-xs',
        sm: 'min-h-9 px-4 text-[10px]',
        lg: 'min-h-12 px-6 text-sm',
        icon: 'size-10',
        variants: {
          primary: 'border-accent bg-accent text-accent-foreground hover:bg-accent/85',
          outline: 'border-border bg-transparent text-foreground hover:border-accent hover:text-accent',
          ghost: 'border-transparent text-muted-foreground hover:text-foreground',
        },
      },
    },
    input: {
      base: 'border border-border bg-background text-sm text-foreground outline-none focus:border-accent transition-colors',
      default: 'h-12 px-3',
      textarea: 'min-h-28 p-3 resize-none',
    },
    card: {
      base: 'border border-border bg-surface transition-all duration-300',
      elevated: 'hover:border-accent/50 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
    },
    badge: {
      accent: 'inline-flex items-center border border-accent/30 bg-accent/5 px-2 py-1 text-[9px] font-bold uppercase tracking-[.16em] text-accent',
    },
    table: {
      container: 'overflow-x-auto',
      base: 'w-full text-sm',
      header: 'text-left text-[10px] font-bold uppercase tracking-[.12em] text-muted-foreground pb-4',
      cell: 'py-4 border-b border-border',
      rowHover: 'hover:bg-surface-50',
    },
  },

  layout: {
    header: {
      height: '5rem',
      background: 'bg-background/88 backdrop-blur-xl',
      border: 'border-b border-border',
    },
    footer: {
      padding: '2.5rem',
      border: 'border-t border-border',
    },
    section: {
      padding: '5rem 1.25rem',
      lg: '7rem 2.5rem',
    },
    hero: {
      padding: '4rem 1.25rem',
      lg: '6rem 2.5rem',
      background: 'var(--surface-50)',
      border: 'border-b border-border',
    },
  },
} as const;

export type DesignSystem = typeof designSystem;

export function getDesignToken(path: string): unknown {
  const keys = path.split('.');
  let value: unknown = designSystem;
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = (value as Record<string, unknown>)[key];
    } else {
      return undefined;
    }
  }
  return value;
}