# Landing Page Refactor Phase 2

## Objetivo

Definir un estilo global de la landing page para que toda la pagina mantenga una identidad visual coherente, pero sin que las secciones pierdan independencia.

La idea no es volver a centralizar todo en un solo CSS gigante. La idea es crear un sistema visual comun que sirva de base, mientras cada componente conserva:

- sus propias clases Tailwind,
- su estructura interna,
- su espaciado local,
- sus estados hover/focus,
- su composicion interna,
- y sus detalles visuales propios.

## Resultado esperado

Al terminar esta fase:

- la landing se sentira visualmente unificada,
- cada bloque seguira siendo editable por separado,
- no habra dependencia accidental entre secciones,
- los componentes no necesitaran clases globales compartidas para funcionar,
- el proyecto quedara listo para que la fase 3 sea solo separar archivos TSX.

## Principio central

**Una landing coherente no significa una landing homogenea.**

Cada seccion debe sentirse parte de la misma familia visual, pero no debe verse obligada a usar el mismo molde interno.

Por ejemplo:

- el hero puede ser mas expresivo,
- el carrusel puede ser mas interactivo,
- las cards de features pueden ser mas limpias y editoriales,
- la seccion de planes puede ser mas comparativa,
- el footer puede ser mas sobrio.

## Alcance de esta fase

Esta fase define:

- sistema de colores,
- sistema de tipografia,
- radios y sombras,
- espaciados globales,
- wrappers base de seccion,
- comportamiento visual comun para cards,
- comportamiento comun para botones/CTA dentro de la landing,
- reglas para no mezclar estilos globales con estilos locales.

No define:

- la extraccion completa de todos los componentes,
- el reordenamiento de la arquitectura TSX,
- el cambio de copy,
- el cambio de contenido,
- ni una redaccion visual nueva.

## Audit de estilos actual

Hoy el proyecto tiene:

- variables CSS globales en `src/index.css`,
- una tipografia global aplicada a `h1`, `h2`, `h3`,
- clases semanticas heredadas de etapas anteriores,
- estilos de landing mezclados con estilos globales,
- clases utilitarias tipo `.navbar`, `.titulo`, `.card-data`, `.btn-primary`, etc.

Eso hace que:

- una clase global pueda afectar muchas secciones,
- el sistema visual no quede claramente separado,
- el mantenimiento sea mas dificil,
- y el refactor por componentes sea mas riesgoso.

## Decision de arquitectura visual

### Nivel 1: tokens globales

Se conservan en `src/index.css` o en el theme global de Tailwind:

- `--background`
- `--foreground`
- `--primary`
- `--primary-foreground`
- `--accent-red`
- `--accent-green`
- `--warning`
- `--error`

Tambien se conserva:

- la fuente base,
- el reset global,
- el antialiasing,
- el fondo general de `body`.

### Nivel 2: sistema visual de landing

Se define un lenguaje comun para toda la landing:

- contenedor maximo compartido,
- radios consistentes,
- sombras consistentes,
- separacion vertical de secciones,
- gradientes suaves,
- cards con borde tenue,
- CTAs coherentes.

### Nivel 3: estilos locales por seccion

Cada seccion define sus propios detalles:

- sus cards,
- su grid,
- sus spacing internos,
- su iconografia,
- su hover,
- su micro-layout,
- su tratamiento de imagenes,
- su orden de elementos.

## Propuesta de sistema global de landing

### 1. Contenedor base

Definir un wrapper comun para toda la landing:

- `max-w-5xl mx-auto px-4`
- o una variante equivalente.

Ventaja:

- mantiene alineacion consistente,
- evita que cada seccion invente su propio ancho,
- facilita una lectura uniforme de la pagina.

### 2. Espaciado entre secciones

Definir una escala simple para toda la landing:

- secciones grandes: `py-12` a `py-16`,
- secciones medianas: `py-8` a `py-12`,
- bloques internos: `mb-6`, `mb-8`, `gap-6`, `gap-8`.

Ventaja:

- se evita que una seccion quede demasiado apretada,
- se evita que otra seccion quede exageradamente abierta.

### 3. Radios comunes

Usar una familia de radios para toda la pagina:

- tarjetas principales: `rounded-[2rem]`,
- cards internas: `rounded-2xl`,
- chips/pills: `rounded-full`,
- imagenes: `rounded-[1.15rem]` o `rounded-xl`.

### 4. Sombras comunes

Definir una escala de sombras que se repita:

- sombra ligera para cards simples,
- sombra media para cards destacadas,
- sombra fuerte para overlays o ampliaciones.

### 5. Bordes y fondos

Regla general:

- cards sobre fondo blanco o blanco suave,
- bordes sutiles, casi siempre `border-white/70` o `border-gray-100`,
- fondos especiales solo en secciones puntuales.

### 6. Tipografia

Mantener una jerarquia estable:

- títulos grandes: `font-titan-one`,
- subtitulos o texto de apoyo: `font-sans` o base del sistema,
- labels/eyebrows: uppercase, tracking amplio, tamaño pequeño.

## Qué debe ser global y qué debe ser local

### Global de landing

Esto sí puede compartirse entre secciones:

- ancho de contenedor,
- escala de spacing,
- colores base,
- sombras base,
- radio base,
- estilo de botones CTA principales,
- estilo de links secundarios,
- comportamiento general de sections headings.

### Local de cada sección

Esto no debe compartirse por defecto:

- layout interno,
- número de columnas,
- orden de elementos,
- icono principal,
- background decorativo,
- tratamiento de hover,
- animation variants,
- wrappers con overflow especial,
- reglas de z-index.

## Estructura visual propuesta por seccion

### Navbar

Debe seguir siendo:

- transparente o semitransparente,
- sticky,
- con blur,
- con borde inferior suave.

Debe tener:

- logo,
- navegación,
- CTA,
- sociales.

No debe compartir clases internas con el resto de cards.

### Hero

Debe tener dos zonas:

- bloque textual,
- bloque visual.

El hero visual puede usar movimiento y scale, pero eso debe quedar encapsulado.

### Carrusel

Debe usar:

- wrapper propio,
- comportamiento propio de hover,
- ampliación propia,
- tratamiento propio de overflow,
- sin depender de clases globales de cards.

### Características

Debe tener:

- título de sección compartido,
- cards independientes,
- icono, titulo, descripcion,
- animacion por card.

### Flow

Debe ser visualmente simple:

- tarjetas pequeñas,
- flechas o separadores,
- texto corto.

### Dashboard

Debe sentirse como una mini vista de producto:

- fondo de panel,
- cards de charts,
- bordes suaves,
- texto explicativo.

### How it works

Debe ser una grilla de pasos claramente separada.

### Testimonials

Debe ser sobria, más editorial que funcional.

### Plans

Debe ser la sección más comparativa:

- cards de plan,
- tabla comparativa,
- CTA fuerte.

### Early adopter

Debe sentirse más narrativa y de conversión.

### Postulaciones

Debe ser una sección de cards de video con jerarquia visual clara.

### Footer

Debe ser el bloque más sobrio de la landing.

## CSS: estrategia de implementación

### Opcion recomendada

Usar una combinacion de:

- Tailwind en los componentes,
- tokens globales en `index.css`,
- y, solo si hace falta, un archivo `landing.css` para reglas de sistema de landing.

### Qué debe ir a `landing.css` si existe

Solo estilos de sistema que realmente se repiten:

- wrappers de seccion,
- contenedores comunes,
- sombreado base de cards,
- reglas de gradientes de fondo comunes,
- helpers de landing que no son de una sola card.

### Qué no debe ir a `landing.css`

- estilos de una sola tarjeta,
- estilos de una sola imagen,
- un hover de un solo componente,
- un layout único de una sola sección.

### Qué debe salir de `src/index.css`

Clases landing-only como:

- `.navbar`
- `.titulo`
- `.nav-item`
- `.card-data`
- `.card-device`
- `.card-info`
- `.btn-primary`
- `.btn-secondary`
- `.status-active`
- `.status-warning`
- `.status-error`
- `.content-prototipo`
- `.content-data`
- `.content-contacto`

## HTML: estrategia de implementación

### Estructura de pagina

`LandingPage.tsx` debe quedarse como composición de secciones, no como lugar de detalle visual.

La pagina debe leer algo parecido a esto:

```tsx
<div className="landing-page">
  <LandingNavbar />
  <main>
    <LandingHero />
    <HeroCarousel />
    <FeaturesSection />
    <FlowSection />
    <DashboardPreviewSection />
    <HowItWorksSection />
    <TestimonialsSection />
    <PlansSection />
    <EarlyAdopterSection />
    <PostulacionesSection />
  </main>
  <LandingFooter />
</div>
```

### Semantica

- `header` o `nav` para la cabecera,
- `main` para el contenido,
- `section` para cada bloque,
- `footer` para el pie.

## JS/TS: estrategia de implementación

### Estado local por componente

Cada componente con interaccion debe ser dueño de su propio estado.

Ejemplos:

- hero: puede derivar animacion desde scroll, sin compartirla,
- carousel: hover/active/expand,
- features: sin estado si solo renderiza,
- plans: sin estado,
- dashboard: sin estado al inicio.

### Tipado

Cada seccion debe tener sus props tipadas.

No usar `any` en los nuevos componentes.

### Datos

Los datasets deben vivir en `landing.data.ts`, no dentro del JSX.

## Orden de implementacion de esta fase

### Paso 1

Definir tokens visuales de landing:

- contenedor,
- spacing,
- sombras,
- radios,
- headers,
- cards base.

### Paso 2

Limpiar `src/index.css`:

- dejar solo lo global real,
- mover estilos landing-only fuera.

### Paso 3

Definir wrappers base de landing:

- seccion,
- heading,
- card,
- CTA.

### Paso 4

Aplicar wrappers a:

- hero,
- features,
- dashboard,
- plans.

### Paso 5

Revisar casos especiales:

- carrusel,
- hero visual,
- cards de video,
- overlays.

### Paso 6

Validar que la pagina siga viendose igual antes de extraer todos los componentes.

## Riesgos

1. Crear un sistema global demasiado rigido y perder personalidad en cada seccion.
2. Llevar demasiadas clases a `index.css` y volver al problema original.
3. Reutilizar cards demasiado pronto y cambiar la estetica sin querer.
4. Mezclar wrapper visual global con comportamiento particular de una card.
5. Romper el hero o el carrusel al mover el CSS de overflow.

## Criterios de exito

Esta fase esta bien resuelta si:

- la landing se ve coherente de arriba a abajo,
- cada seccion conserva su personalidad,
- `index.css` deja de tener clases de landing dispersas,
- no se rompe el render,
- no se pierde ninguna animacion ni CTA,
- la siguiente fase de extraccion por TSX es segura.

## Decisiones antes de implementar

Antes de pasar al codigo conviene decidir:

1. Si el sistema global de landing va en `landing.css` o solo en Tailwind.
2. Si queremos un wrapper de card comun o varios wrappers por tipo de seccion.
3. Si el hero y el carrusel van a compartir tokens visuales pero nunca componentes internos.

