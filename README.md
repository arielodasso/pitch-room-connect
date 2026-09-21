# Pitch Room Connect

Quiero construir una demo premium y funcional para **Pitch Room**, desarrollada por Sigma Tecnologías.

La demo debe tener DOS CAPAS integradas:

1. **Sitio institucional público de Pitch Room / Pitch Room Football Capital**
2. **Pitch Room Intelligence**, una plataforma privada interna para gestionar proyectos, oportunidades de financiamiento, inversores y seguimiento.

IMPORTANTE:

* Esto es una DEMO / PROTOTIPO COMERCIAL.
* No modificar ni eliminar funcionalidades existentes si este prompt se aplica sobre un proyecto ya creado.
* Si todavía no existe estructura, crearla desde cero.
* No inventar clientes, resultados, inversiones conseguidas, partnerships, fondos disponibles ni casos de éxito.
* Los datos internos de la plataforma pueden ser ficticios, pero deben estar claramente tratados como **Demo Data**.
* No publicar información privada del dashboard en el sitio público.
* No incluir precios ni condiciones comerciales de Pitch Room.
* No mencionar el intercambio comercial entre Sigma Tecnologías y Pitch Room.
* El resultado debe parecer un producto digital real que Pitch Room podría utilizar y evolucionar, no una landing genérica.
* Todo el contenido visible debe estar en español, utilizando inglés únicamente cuando sea natural dentro del ecosistema: Football Capital, Funding, Investor Readiness, Matchmaking, Intelligence, Grants, etc.

---

# 1. CONCEPTO GENERAL

Pitch Room debe posicionarse como una plataforma estratégica que ayuda a proyectos del ecosistema del fútbol latinoamericano a:

* estructurarse;
* construir una narrativa;
* prepararse para inversión;
* identificar oportunidades de financiamiento;
* aplicar a grants y programas;
* conectar con capital;
* realizar seguimiento estratégico.

La propuesta debe comunicar dos lados del ecosistema:

### PROYECTOS

* Clubes
* Academias
* FootballTech / SportsTech
* Startups
* Fundaciones y organizaciones deportivas

### CAPITAL

* Inversores
* Fondos
* Grants
* Programas
* Aceleradoras
* Capital institucional
* Oportunidades internacionales

El concepto central:

**Pitch Room conecta proyectos del fútbol latinoamericano con oportunidades de capital global.**

---

# 2. IDENTIDAD VISUAL

Crear una identidad:

* premium;
* internacional;
* estratégica;
* sobria;
* tecnológica;
* relacionada con fútbol y capital;
* editorial;
* minimalista.

NO utilizar estética típica de SaaS genérico.

Evitar:

* demasiadas cards redondeadas;
* gradientes excesivos;
* ilustraciones infantiles;
* colores saturados;
* apariencia de template.

### Paleta

Background:
#07090C

Surface:
#101318

Surface secondary:
#151922

Text:
#F5F5F2

Muted:
#8E949E

Accent:
#D9FF00

Borders:
rgba(255,255,255,0.10)

El lima debe utilizarse como acento estratégico.

### Tipografía

Utilizar:

* Montserrat o Geist/Satoshi.
* Títulos grandes, contundentes.
* Mucho espacio negativo.
* Jerarquía editorial.

Utilizar imágenes fotográficas premium relacionadas con:

* fútbol;
* estadios;
* dirigentes;
* founders;
* reuniones;
* inversión;
* networking internacional.

Evitar fotografías de stock demasiado obvias.

---

# 3. ARQUITECTURA

Crear estas rutas:

PUBLIC:

/
/football-capital
/metodologia
/equipo
/funding
/proyectos
/contacto

PRIVATE:

/intelligence
/intelligence/dashboard
/intelligence/projects
/intelligence/projects/:id
/intelligence/opportunities
/intelligence/opportunities/:id
/intelligence/investors
/intelligence/applications
/intelligence/tasks
/intelligence/documents
/intelligence/settings

Para la demo no es necesario implementar autenticación real.

Crear un modo demo que permita entrar directamente a:

**Pitch Room Intelligence**

Agregar en el dashboard un pequeño indicador:

**DEMO ENVIRONMENT**

---

# 4. SITIO PÚBLICO

## HEADER

Header sticky.

Logo:

PITCH ROOM

Debajo o al lado:

FOOTBALL CAPITAL

Navegación:

* Football Capital
* Proyectos
* Funding
* Metodología
* Equipo

CTA:

**Presentar proyecto**

Agregar discretamente:

**Intelligence →**

que lleve al dashboard demo.

---

# 5. HERO

Crear un hero cinematográfico.

Eyebrow:

**PITCH ROOM FOOTBALL CAPITAL**

Título:

**El puente entre el fútbol latinoamericano y el capital global.**

Subtítulo:

**Estrategia, narrativa, funding y acceso a capital para proyectos con potencial de crecimiento.**

CTAs:

**Presentar mi proyecto**

**Explorar Pitch Room**

Visual:

Mapa mundial oscuro con conexiones entre:

LATAM
EUROPE
USA
MIDDLE EAST

Mostrar nodos animados.

No exagerar la animación.

Agregar pequeño texto:

**FOOTBALL · CAPITAL · STRATEGY**

---

# 6. PROBLEMA

Título:

**El capital existe. El desafío es llegar a él.**

Texto:

**Existen proyectos con potencial, oportunidades de financiamiento y capital interesado. Pero muchas veces esos tres elementos no llegan a encontrarse.**

Mostrar tres bloques:

### PROJECTS

Clubes, academias, startups y organizaciones.

### OPPORTUNITIES

Grants, fondos, programas y capital.

### THE GAP

Narrativa, estructura, preparación y conocimiento de las oportunidades adecuadas.

Cierre:

**Pitch Room trabaja sobre ese punto de conexión.**

---

# 7. DOS LADOS DEL ECOSISTEMA

Título:

**Una estrategia para cada lado del mercado.**

Crear tabs:

## PROYECTOS

Mostrar:

**Strategic Positioning**

Ordenamos el proyecto y su propuesta de valor.

**Narrative**

Construimos una narrativa clara y estratégica.

**Investor Readiness**

Preparamos al founder/equipo para presentar.

**Funding Strategy**

Identificamos oportunidades compatibles.

**Matchmaking**

Trabajamos la conexión con capital.

CTA:

**Presentar proyecto**

---

## CAPITAL

Mostrar:

**Project Access**

Acceso a proyectos del ecosistema.

**Deal Flow**

Proyectos estructurados y preparados.

**Strategic Context**

Información relevante para comprender cada oportunidad.

**Connections**

Conexión con equipos y proyectos.

CTA:

**Explorar oportunidades**

---

# 8. FOOTBALL CAPITAL

Crear una sección visual de alto impacto.

Título:

**El fútbol latinoamericano tiene proyectos que pueden jugar en otra escala.**

Texto:

**Pitch Room trabaja para conectar proyectos del ecosistema futbolístico con oportunidades de crecimiento y fuentes de capital nacionales e internacionales.**

Visual:

LATAM

→ Clubs
→ Academies
→ FootballTech
→ Foundations

↓

EUROPE
USA
MIDDLE EAST
GLOBAL CAPITAL

Utilizar líneas animadas.

---

# 9. PROYECTOS

Crear una sección:

**¿Qué tipo de proyectos acompañamos?**

Cuatro grandes bloques:

### CLUBES

Profesionalización, infraestructura, desarrollo y proyectos estratégicos.

### ACADEMIAS

Formación, expansión y modelos escalables.

### FOOTBALLTECH

Tecnología aplicada al fútbol y SportsTech.

### FUNDACIONES

Proyectos deportivos y de impacto social.

No afirmar resultados concretos.

---

# 10. FUNDING OPPORTUNITIES

Esta sección debe sentirse casi como una parte pública de la plataforma.

Título:

**La oportunidad correcta depende del proyecto correcto.**

Crear buscador y filtros:

Tipo de proyecto:

* Club
* Academia
* Startup
* Fundación

Tipo:

* Grant
* Fondo
* Programa
* Aceleradora
* Capital privado

Región:

* LATAM
* Europa
* USA
* Middle East
* Global

Estado:

* Open
* Upcoming
* Ongoing

Crear varias oportunidades DEMO.

Ejemplo:

**International Football Development Program**

Category:
Grant

Region:
Global

Type:
Non-dilutive

Status:
Demo Opportunity

CTA:

**Ver oportunidad**

IMPORTANTE:

Todos los datos que no hayan sido verificados deben llevar:

**DEMO DATA**

No presentar oportunidades ficticias como convocatorias reales.

---

# 11. EQUIPO

Título:

**Estrategia. Comunicación. Capital.**

Crear dos perfiles editoriales.

## Florencia Gomez

**Strategy & Narrative**

Descripción:

**Estrategia de comunicación, posicionamiento, storytelling y preparación narrativa de proyectos y founders.**

## Santiago Vitale

**International Funding**

Descripción:

**Identificación y estrategia de acceso a grants, fondos internacionales, capital no dilutivo y programas de financiamiento.**

No inventar títulos adicionales ni credenciales.

Diseño editorial premium, no cards SaaS.

---

# 12. METODOLOGÍA

Título:

**De proyecto a oportunidad.**

Crear cinco etapas:

01
**DIAGNÓSTICO**

02
**ESTRUCTURA**

03
**NARRATIVA**

04
**FUNDING**

05
**MATCHMAKING**

Cada etapa debe tener una descripción breve.

Animar el timeline al hacer scroll.

---

# 13. CTA FINAL

Título:

**¿Tenés un proyecto que merece otra escala?**

Subtítulo:

**El primer paso es entender dónde estás y qué oportunidades pueden tener sentido para vos.**

CTA:

**Presentar proyecto**

---

# 14. FORMULARIO DE PROYECTO

Crear modal/página:

**Presentar proyecto**

Campos:

* Nombre
* Email
* País
* Organización
* Tipo de proyecto
* Website
* Etapa
* ¿Qué estás buscando?
* Monto aproximado
* Descripción

CTA:

**Enviar proyecto**

Después de enviar:

**Proyecto recibido**

**Pitch Room analizará la información para identificar próximos pasos y oportunidades compatibles.**

Utilizar mock/local state.

---

# 15. PITCH ROOM INTELLIGENCE

Esta es la parte diferencial de la demo.

Crear una aplicación interna con sidebar.

Sidebar:

**PITCH ROOM**
**INTELLIGENCE**

Dashboard
Projects
Opportunities
Investors
Applications
Tasks
Documents
Settings

Bottom:

**Demo Environment**

---

# 16. INTELLIGENCE DASHBOARD

Crear dashboard premium.

Header:

**Good morning, Pitch Room**

Subtítulo:

**Strategic overview**

KPIs:

**Projects**
24

**Active Opportunities**
18

**Applications**
9

**Investors**
12

**Pending Actions**
7

Todos los números deben ser DEMO DATA.

---

## GRÁFICO 1

**Projects by Type**

Pie/donut:

Club
Academy
FootballTech
Foundation

---

## GRÁFICO 2

**Funding Opportunities by Region**

LATAM
Europe
USA
Middle East
Global

---

## GRÁFICO 3

**Application Pipeline**

Identified
Evaluating
Preparing
Submitted
Follow-up
Closed

Utilizar Recharts.

---

# 17. RECENT PROJECTS

Tabla:

Project
Type
Country
Stage
Funding Need
Status
Next Action

Ejemplos ficticios:

**Andes Football Academy**
Academy
Argentina
Growth
USD 250K
Evaluating

**Football Vision**
FootballTech
Brazil
Seed
USD 500K
Preparing

**Club Deportivo Horizonte**
Club
Uruguay
Expansion
USD 1M
Evaluating

IMPORTANTE:

Agregar pequeño indicador:

**DEMO PROJECT**

No utilizar clubes reales salvo que exista autorización.

---

# 18. PROJECT DETAIL

Al entrar en un proyecto mostrar una ficha completa.

Header:

Nombre
Tipo
País
Status

Tabs:

**Overview**
**Strategy**
**Funding**
**Applications**
**Documents**
**Notes**
**Tasks**

---

## OVERVIEW

Información:

Project description
Website
Stage
Team
Funding target
Use of funds
Current status

---

## STRATEGY

Mostrar:

**Value Proposition**

**Positioning**

**Target Investor**

**Narrative**

**Key Messages**

**Investor Readiness**

Crear campos editables.

---

## FUNDING

Mostrar oportunidades asociadas.

Ejemplo:

Opportunity
Fit
Funding Type
Amount
Deadline
Status

Agregar botón:

**+ Match Opportunity**

---

# 19. OPPORTUNITIES

Crear una pantalla tipo CRM.

Header:

**Funding Opportunities**

Botón:

**+ Add Opportunity**

Filtros:

* Region
* Type
* Category
* Status
* Deadline

Tabla:

Opportunity
Region
Type
Funding
Deadline
Projects Matched
Status

---

# 20. OPPORTUNITY DETAIL

Al abrir una oportunidad:

Título

Tipo:
Grant / Fund / Accelerator / Investment

Region

Funding range

Deadline

Eligibility

Description

Requirements

Website

Status

---

## MATCHED PROJECTS

Mostrar:

Project
Fit
Status

Ejemplo:

**Andes Football Academy**
85% match

**Football Vision**
72% match

IMPORTANTE:

El "match %" es DEMO DATA y debe estar indicado como tal.

Agregar:

**+ Add Project**

---

# 21. INVESTORS

Crear CRM simple.

Campos:

Name
Organization
Country
Type
Focus
Ticket
Stage
Last Contact
Next Action

Ejemplos ficticios:

Investor Alpha
Sports Fund
Europe
FootballTech
USD 250K–1M

Investor Beta
Family Office
LATAM
Sports
USD 500K–2M

Todo marcado como DEMO DATA.

---

# 22. APPLICATIONS

Crear pipeline visual Kanban.

Columnas:

**Identified**
**Evaluating**
**Preparing**
**Submitted**
**Follow-up**
**Closed**

Cada card:

Project
Opportunity
Deadline
Owner
Status

Permitir drag & drop si resulta sencillo.

---

# 23. TASKS

Crear sistema interno de seguimiento.

Ejemplos:

* Review pitch deck
* Request financial model
* Complete grant application
* Prepare founder interview
* Follow up investor
* Update project narrative

Campos:

Task
Project
Assignee
Priority
Due date
Status

Filtros funcionales.

---

# 24. DOCUMENTS

Crear repositorio documental por proyecto.

Categorías:

* Pitch Deck
* Financial Model
* Legal
* Grants
* Investor Material
* Other

No implementar almacenamiento real si no es necesario.

Usar archivos ficticios.

---

# 25. NOTES

Sistema de notas asociado a cada proyecto.

Cada nota:

Author
Date
Content
Tags

Ejemplos:

**Investor feedback**

**Strategic recommendation**

**Funding opportunity**

**Next meeting**

---

# 26. MATCHING ENGINE — DEMO

Crear una funcionalidad visual llamada:

**Opportunity Matching**

Dentro de un proyecto permitir:

**Find compatible opportunities**

Al hacer click mostrar una lista calculada a partir de datos mock.

Ejemplo:

Opportunity A
**92% compatibility**

Opportunity B
**81% compatibility**

Opportunity C
**74% compatibility**

Mostrar criterios:

* Project type
* Region
* Stage
* Funding need
* Sector
* Eligibility

IMPORTANTE:

No implementar inteligencia artificial real todavía.

Debe quedar explícitamente indicado:

**Demo Matching Model**

**Indicative compatibility based on demo criteria.**

Esto permite mostrar hacia dónde podría evolucionar el producto sin afirmar que ya existe un motor de IA real.

---

# 27. PROJECT → OPPORTUNITY → APPLICATION

Esta relación debe ser central.

Un proyecto puede tener:

multiple opportunities

Una opportunity puede tener:

multiple projects

Una application conecta:

Project + Opportunity

Y tiene:

Status
Deadline
Documents
Tasks
Notes
Owner

Visualmente mostrar esta relación.

Ejemplo:

PROJECT

Football Vision

↓

OPPORTUNITY

International SportsTech Grant

↓

APPLICATION

Preparing

↓

TASKS

Financial model
Pitch deck
Application form

---

# 28. GLOBAL SEARCH

Agregar buscador global en Intelligence.

Buscar:

* Projects
* Opportunities
* Investors
* Applications
* Documents
* Tasks

Mostrar resultados agrupados.

---

# 29. NOTIFICATIONS

Crear panel de notificaciones.

Ejemplos:

**Deadline approaching**

International Grant — 5 days

**Task overdue**

Review Football Vision pitch

**New opportunity**

SportsTech Program added

**Follow-up**

Investor Alpha — due today

Todos DEMO DATA.

---

# 30. COMMAND CENTER

Agregar un pequeño botón de acceso rápido:

**⌘ K**

Abrir command palette.

Opciones:

* Search projects
* Add project
* Add opportunity
* Add investor
* Create task
* Open applications
* Go to dashboard

Esto debe reforzar la sensación de producto real.

---

# 31. PUBLIC ↔ PRIVATE

Crear una conexión conceptual clara.

En el sitio público:

**Pitch Room Football Capital**

En el área privada:

**Pitch Room Intelligence**

El Intelligence debe parecer la infraestructura interna que permite gestionar lo que Pitch Room comunica públicamente.

No mostrar datos internos en páginas públicas.

---

# 32. DEMO MODE

Toda información ficticia debe estar marcada como:

**DEMO DATA**

Crear un pequeño badge persistente en Intelligence:

**DEMO ENVIRONMENT**

No hacerlo molesto.

---

# 33. RESPONSIVE

Todo debe funcionar perfectamente en:

Desktop
Tablet
Mobile

En mobile:

* Sidebar collapsible
* Tablas transformadas en cards
* Dashboard adaptado
* Formularios touch-friendly
* Filtros en bottom sheet/modal
* Command palette responsive

---

# 34. MICROINTERACCIONES

Implementar:

* smooth scrolling
* fade/slide reveal
* hover states
* animated counters
* subtle card elevation
* active navigation states
* modal transitions
* loading states
* toast notifications
* skeletons donde corresponda

No exagerar.

La sensación debe ser:

**premium technology / strategic intelligence**

---

# 35. TECH STACK

Utilizar:

* React
* TypeScript
* Tailwind
* shadcn/ui
* Lucide icons
* Recharts
* React Router si corresponde

Crear arquitectura modular.

Separar:

/components
/pages
/sections
/data
/types
/hooks

Centralizar mock data.

Crear tipos para:

Project
Opportunity
Investor
Application
Task
Document
Note

Mantener el código preparado para reemplazar posteriormente mock data por Supabase/backend real.

---

# 36. UX PRINCIPLE

No llenar todas las pantallas de información.

Priorizar:

Jerarquía
Espacio
Claridad
Legibilidad
Consistencia

La interfaz debe parecer diseñada para profesionales que trabajan con proyectos, capital y estrategia.

---

# 37. DEMO FLOW

Preparar la navegación para que durante una presentación pueda demostrarse este flujo:

1. Entrar al sitio.
2. Mostrar el posicionamiento de Pitch Room Football Capital.
3. Mostrar proyectos y oportunidades.
4. Mostrar metodología.
5. Hacer click en **Presentar proyecto**.
6. Volver al menú.
7. Entrar a **Pitch Room Intelligence**.
8. Mostrar Dashboard.
9. Abrir un Project.
10. Mostrar su estrategia.
11. Mostrar oportunidades compatibles.
12. Abrir una Opportunity.
13. Mostrar proyectos asociados.
14. Mostrar Application.
15. Mostrar Tasks y Documents.
16. Volver al Dashboard.
17. Mostrar gráficos y pipeline.

La demo debe permitir hacer este recorrido sin pantallas vacías, links rotos ni funcionalidades visualmente incompletas.

---

# 38. OBJETIVO FINAL

La experiencia completa debe comunicar:

**Pitch Room no es simplemente una consultora que prepara pitches.**

Es un ecosistema estratégico que puede ayudar a:

**IDENTIFICAR**
↓
**ESTRUCTURAR**
↓
**POSICIONAR**
↓
**ENCONTRAR FUNDING**
↓
**APLICAR**
↓
**CONECTAR**
↓
**SEGUIR OPORTUNIDADES**

Y **Pitch Room Intelligence** representa la posible infraestructura digital para gestionar ese proceso.

El resultado final debe sentirse como:

**una marca internacional de Football Capital + una plataforma privada de Strategic Intelligence.**

La demo debe ser suficientemente pulida como para presentársela directamente a Florencia y Santiago como una propuesta tecnológica concreta de Sigma Tecnologías.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d065642d-be5d-483c-a05c-9f858480db6b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
