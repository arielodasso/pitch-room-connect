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
    background: '#06142F',
    backgroundDeep: '#040D1F',
    foreground: '#F4F7FC',
    card: '#0A1D42',
    cardForeground: '#F4F7FC',
    popover: '#0A1D42',
    popoverForeground: '#F4F7FC',
    primary: '#0465BC',
    primaryForeground: '#F4F7FC',
    secondary: '#0E2652',
    secondaryForeground: '#C6D6EE',
    muted: '#0A1D42',
    mutedForeground: '#93A8CC',
    accent: '#FF7F04',
    accentForeground: '#06142F',
    destructive: '#E53E3E',
    destructiveForeground: '#FFFFFF',
    border: 'rgba(124,166,221,0.16)',
    input: 'rgba(124,166,221,0.28)',
    ring: '#0465BC',
    chart: {
      1: '#0465BC',
      2: '#FF7F04',
      3: '#3F9FF0',
      4: '#FFB64D',
      5: '#8EA9FF',
    },
    sidebar: '#0A1D42',
    sidebarForeground: '#F4F7FC',
    sidebarPrimary: '#0465BC',
    sidebarPrimaryForeground: '#F4F7FC',
    sidebarAccent: '#0E2652',
    sidebarAccentForeground: '#F4F7FC',
    sidebarBorder: 'rgba(124,166,221,0.16)',
    sidebarRing: '#0465BC',
    surface: {
      50: 'rgba(10,29,66,0.5)',
      80: 'rgba(10,29,66,0.8)',
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
    lg: '0.75rem',
    xl: '1rem',
    '2xl': '1.25rem',
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
    slideUp: 'slide-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
    zoomIn: 'zoom-in 0.7s cubic-bezier(0.16,1,0.3,1) both',
    rise: 'rise 1s cubic-bezier(0.16,1,0.3,1) both',
    pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
    spin: 'spin 1s linear infinite',
    gridMove: 'world-grid-move 30s linear infinite',
    marquee: 'marquee 30s linear infinite',
  },

  gradients: {
    hero: `
      radial-gradient(ellipse at 20% 0%, rgba(4,101,188,0.4) 0%, transparent 55%),
      radial-gradient(ellipse at 90% 20%, rgba(255,127,4,0.18) 0%, transparent 50%),
      linear-gradient(180deg, transparent 0%, rgba(6,20,47,0.55) 55%, #06142F 100%)
    `,
    worldGrid: `
      radial-gradient(circle at 20% 20%, rgba(4,101,188,0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255,127,4,0.05) 0%, transparent 50%),
      linear-gradient(rgba(124,166,221,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(124,166,221,0.06) 1px, transparent 1px)
    `,
  },

  components: {
    button: {
      primary: {
        base: 'inline-flex items-center justify-center gap-2 rounded-full border font-bold uppercase tracking-[.14em] transition-all disabled:opacity-50',
        default: 'min-h-11 px-6 text-xs',
        sm: 'min-h-9 px-4 text-[10px]',
        lg: 'min-h-12 px-8 text-sm',
        icon: 'size-10',
        variants: {
          primary: 'border-primary bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-[0_10px_30px_-10px_rgba(4,101,188,0.8)]',
          outline: 'border-border bg-transparent text-foreground hover:border-primary hover:text-primary',
          ghost: 'border-transparent text-muted-foreground hover:text-foreground',
        },
      },
    },
    input: {
      base: 'rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all',
      default: 'h-12 px-4',
      textarea: 'min-h-28 p-4 resize-none',
    },
    card: {
      base: 'border border-border bg-surface transition-all duration-300',
      elevated: 'hover:border-primary/50 hover:shadow-[0_18px_40px_-12px_rgba(4,101,188,0.4)]',
    },
    badge: {
      accent: 'inline-flex items-center rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[.16em] text-accent',
      primary: 'inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[9px] font-bold uppercase tracking-[.16em] text-primary',
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