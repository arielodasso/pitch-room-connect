import { Navigate, Outlet, createFileRoute, useLocation } from '@tanstack/react-router';

export const Route = createFileRoute('/intelligence')({
  head: () => ({
    meta: [
      { title: 'Pitch Room Intelligence' },
      { name: 'description', content: 'Plataforma interna demo para gestión estratégica.' },
      { property: 'og:title', content: 'Pitch Room Intelligence' },
      { property: 'og:description', content: 'Strategic intelligence para proyectos y capital.' },
      { property: 'og:type', content: 'website' },
      { name: 'twitter:card', content: 'summary' },
    ],
  }),
  component: IntelligenceLayout,
});

function IntelligenceLayout() {
  const { pathname } = useLocation();
  if (!pathname.startsWith('/intelligence/')) {
    return <Navigate to="/intelligence/dashboard" />;
  }
  return <Outlet />;
}