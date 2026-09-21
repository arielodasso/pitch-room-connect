# Pitch Room — demo premium pública + Intelligence

## Objetivo
Construir una demo navegable en español que una la marca pública **Pitch Room Football Capital** con la plataforma privada **Pitch Room Intelligence**, usando datos ficticios marcados como **DEMO DATA** y sin autenticación ni persistencia real.

## Alcance de implementación

### 1. Sistema visual y estructura compartida
- Aplicar la identidad oscura editorial solicitada, con lima como acento estratégico, tipografía Montserrat y geometría sobria.
- Usar la imagen adjunta solo como referencia de marca; recrear un wordmark limpio y contemporáneo que respete “PITCH ROOM / FOOTBALL CAPITAL”.
- Crear datos demo centralizados y tipos reutilizables para proyectos, oportunidades, inversores, aplicaciones, tareas, documentos y notas.
- Añadir navegación adaptable, estados activos, transiciones discretas, modales, notificaciones y command palette.

### 2. Sitio público
- Construir las rutas `/`, `/football-capital`, `/proyectos`, `/funding`, `/metodologia`, `/equipo` y `/contacto`.
- La portada incluirá el hero cinematográfico con mapa/conexiones, problema, dos lados del ecosistema, Football Capital, tipos de proyectos, preview de Funding, equipo, metodología y CTA final.
- Implementar buscador/filtros de oportunidades demo y formulario funcional “Presentar proyecto” con confirmación local.
- Mantener toda la información interna fuera de las páginas públicas.

### 3. Pitch Room Intelligence
- Crear shell con sidebar colapsable, búsqueda global, notificaciones, acceso `⌘ K` y badge persistente `DEMO ENVIRONMENT`.
- Implementar dashboard con KPIs, gráficos Recharts, tabla adaptable y pipeline.
- Implementar vistas funcionales de Projects, detalle de proyecto con tabs editables y matching demo; Opportunities y detalle; Investors; Applications Kanban; Tasks con filtros; Documents; Settings.
- Modelar visualmente la relación Project → Opportunity → Application → Tasks/Documents.

### 4. Comportamiento responsive
- Adaptar navegación, sidebar, tablas, formularios, filtros y command palette para desktop, tablet y mobile.
- En pantallas pequeñas, convertir tablas extensas en listas legibles y usar paneles/modales para filtros.

### 5. Validación
- Verificar navegación completa y rutas profundas.
- Recorrer el flujo comercial solicitado desde la portada hasta dashboard, proyecto, matching, oportunidad, application, tareas y documentos.
- Revisar desktop y mobile, metadatos por ruta, consola y estado final de compilación.

## Decisiones técnicas
- Mantener TanStack Router, que ya es la base del proyecto, en lugar de React Router.
- Usar estado local y datos mock centralizados; no se activará almacenamiento ni login real.
- Recharts cubrirá donut, barras regionales y pipeline.
- Las oportunidades, porcentajes, métricas y entidades ficticias mostrarán etiquetas visibles de demo.
