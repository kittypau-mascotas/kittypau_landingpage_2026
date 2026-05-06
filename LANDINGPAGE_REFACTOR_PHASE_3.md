# Landing Page Refactor Phase 3

## Objetivo

Definir el arbol exacto de archivos TSX para separar la landing por componente, con responsabilidad clara por archivo, sin perder el comportamiento actual ni la apariencia visual.

Esta fase ya no define solo "que hay que separar". Esta fase define:

- que archivo se crea,
- que componente vive ahi,
- que responsabilidad tiene,
- que props recibe,
- que datos consume,
- que otros componentes usa,
- y en que orden se debe implementar.

## Regla general

Cada archivo debe tener una sola responsabilidad principal.

Si un archivo empieza a hacer demasiadas cosas, se divide.

Si un componente necesita saber demasiado del estado de otra seccion, se reubica.

## Meta de esta fase

Al terminar esta fase deberiamos poder:

- abrir cada seccion en su propio archivo,
- editar un bloque sin tocar los demas,
- mantener estilos y logica encapsulados,
- dejar `LandingPage.tsx` como un compositor simple,
- y evitar que los cambios de una seccion impacten otra.

## Arbol final propuesto

```txt
src/
  components/
    landing/
      landing.data.ts
      landing.types.ts
      index.ts
      landing.css                (solo si hace falta)
      SectionShell.tsx
      SectionHeading.tsx
      LandingNavbar.tsx
      LandingHero.tsx
      HeroVisual.tsx
      HeroCarousel.tsx
      FeaturesSection.tsx
      FeatureCard.tsx
      FlowSection.tsx
      DashboardPreviewSection.tsx
      ChartCard.tsx
      HowItWorksSection.tsx
      StepCard.tsx
      TestimonialsSection.tsx
      TestimonialCard.tsx
      PlansSection.tsx
      PlanCard.tsx
      PlansComparisonTable.tsx
      EarlyAdopterSection.tsx
      VideoEmbedCard.tsx
      PostulacionesSection.tsx
      LandingFooter.tsx
  pages/
    LandingPage.tsx
```

## Descripcion archivo por archivo

### `landing.data.ts`

Responsabilidad:

- centralizar los datos estaticos de la landing.

Debe contener:

- `activityData`
- `consumptionData`
- `carouselImages`
- `planFeatures`
- `featuresData`
- contenido de testimonios
- contenido de videos
- textos de sections si se quieren mantener fuera del JSX

No debe contener:

- JSX,
- hooks,
- componentes,
- logica de animacion.

### `landing.types.ts`

Responsabilidad:

- definir los tipos comunes de la landing.

Tipos sugeridos:

- `LandingFeature`
- `PlanFeature`
- `CarouselImageItem`
- `TestimonialItem`
- `VideoCardItem`
- `SectionHeadingProps`
- `HeroVisualProps`

### `index.ts`

Responsabilidad:

- reexportar componentes de landing si se desea una importacion mas limpia.

No es obligatorio, pero ayuda si el numero de archivos crece.

### `landing.css`

Responsabilidad:

- solo si hace falta, definir estilos de sistema de landing que sean repetidos y no convenga escribir con Tailwind en cada componente.

Uso ideal:

- wrappers de seccion,
- fondo global de la landing,
- helpers de sombra,
- helpers de layout repetitivos,
- reglas muy especificas que serian muy verbosas en TSX.

Si no aporta claridad, no se crea.

### `SectionShell.tsx`

Responsabilidad:

- wrapper comun de seccion.

Debe encargarse de:

- ancho maximo,
- padding horizontal,
- padding vertical,
- espacio entre secciones,
- opcionalmente fondo o variantes.

Props sugeridas:

- `children`
- `className?`
- `id?`
- `fullBleed?`

Ventaja:

- todas las secciones comparten una base visual consistente.

### `SectionHeading.tsx`

Responsabilidad:

- titulo y subtitulo consistentes para secciones.

Debe manejar:

- eyebrow,
- titulo,
- descripcion,
- alineacion,
- variantes de densidad.

Props sugeridas:

- `eyebrow?`
- `title`
- `description?`
- `centered?`
- `className?`

### `LandingNavbar.tsx`

Responsabilidad:

- barra superior,
- links de navegacion,
- botones sociales,
- CTA principal.

Props sugeridas:

- `loginUrl`
- `navItems`
- `socialLinks`

Dependencias:

- `Button`
- iconos sociales

Notas:

- debe seguir siendo sticky,
- debe conservar blur/borde y CTA actual,
- no debe mezclar logica de otras secciones.

### `LandingHero.tsx`

Responsabilidad:

- hero textual,
- botones,
- lista de beneficios,
- layout principal del bloque hero.

Props sugeridas:

- `primaryCtaHref`
- `secondaryCtaHref`
- `benefits`

Dependencias:

- `Button`
- `CheckCircle`
- `HeroVisual`

### `HeroVisual.tsx`

Responsabilidad:

- renderizar y animar los platos del hero.

Props sugeridas:

- `scrollY`

Dependencias:

- `motion`
- `useTransform`
- imagenes de platos

Notas:

- aqui vive la animacion del movimiento,
- no debe conocer el resto de la landing.

### `HeroCarousel.tsx`

Responsabilidad:

- carrusel de imagenes de la landing,
- autoplay,
- hover,
- ampliacion de imagen,
- comportamiento visual de overflow.

Props sugeridas:

- `images`
- `onImageHover?` si hiciera falta

Dependencias:

- `Carousel`
- `CarouselContent`
- `CarouselItem`
- `AutoScroll`
- `motion`

Notas:

- este componente debe contener la complejidad del carrusel,
- no debe tocar otros bloques,
- no debe depender del hero ni de plans.

### `FeaturesSection.tsx`

Responsabilidad:

- presentar la seccion de características,
- renderizar el heading,
- mapear las cards.

Props sugeridas:

- `features`

Dependencias:

- `SectionShell`
- `SectionHeading`
- `FeatureCard`

### `FeatureCard.tsx`

Responsabilidad:

- una sola card de feature.

Props sugeridas:

- `title`
- `description`
- `icon`
- `i`

Dependencias:

- `motion`
- `getFeatureVariants` o helper local

Notas:

- esta card no debe saber nada del resto de cards,
- no debe mezclar datos, layout y animacion global.

### `FlowSection.tsx`

Responsabilidad:

- mostrar el flujo del sistema paso a paso.

Props sugeridas:

- ninguna al inicio,
- o datos de steps si se quiere hacer configurable.

Dependencias:

- iconos del flujo
- cards simples

### `DashboardPreviewSection.tsx`

Responsabilidad:

- panel de graficas de actividad y consumo.

Props sugeridas:

- `activityData`
- `consumptionData`

Dependencias:

- `Card`
- `ResponsiveContainer`
- `AreaChart`
- `LineChart`

### `ChartCard.tsx`

Responsabilidad:

- card reutilizable para graficas o paneles de preview.

Ventaja:

- reduce duplicacion entre la card de actividad y la de consumo.

### `HowItWorksSection.tsx`

Responsabilidad:

- mostrar los tres pasos principales de uso.

Props sugeridas:

- ninguna al inicio,
- o `steps` si se desea hacerlo data-driven.

### `StepCard.tsx`

Responsabilidad:

- tarjeta individual de paso.

### `TestimonialsSection.tsx`

Responsabilidad:

- mostrar testimonios,
- renderizar cards de social proof.

Props sugeridas:

- `testimonials`

### `TestimonialCard.tsx`

Responsabilidad:

- una tarjeta de testimonio individual.

### `PlansSection.tsx`

Responsabilidad:

- cards de plan,
- tabla comparativa,
- CTA del bloque de precios/planes.

Props sugeridas:

- `planFeatures`

Dependencias:

- `PlanCard`
- `PlansComparisonTable`

### `PlanCard.tsx`

Responsabilidad:

- una sola tarjeta de plan.

### `PlansComparisonTable.tsx`

Responsabilidad:

- tabla comparativa de features entre planes.

Ventaja:

- la tabla queda aislada y no contamina el layout de las cards.

### `EarlyAdopterSection.tsx`

Responsabilidad:

- copy de early adopter,
- lista de beneficios,
- embed de video,
- CTA principal y secundario.

Props sugeridas:

- `videoUrl`
- `formUrl`
- `compromiseUrl`

### `VideoEmbedCard.tsx`

Responsabilidad:

- encapsular un iframe o embed visual.

Ventaja:

- si cambian los videos, no se toca el layout completo.

### `PostulacionesSection.tsx`

Responsabilidad:

- cards de videos de postulaciones,
- CTA de cada card.

### `LandingFooter.tsx`

Responsabilidad:

- redes,
- email,
- links de soporte,
- copyright.

## Mapa de dependencias

### Componentes base

- `SectionShell.tsx`
- `SectionHeading.tsx`

### Componentes de contenido

- `LandingNavbar.tsx`
- `LandingHero.tsx`
- `HeroVisual.tsx`
- `HeroCarousel.tsx`
- `FeaturesSection.tsx`
- `FeatureCard.tsx`
- `FlowSection.tsx`
- `DashboardPreviewSection.tsx`
- `ChartCard.tsx`
- `HowItWorksSection.tsx`
- `StepCard.tsx`
- `TestimonialsSection.tsx`
- `TestimonialCard.tsx`
- `PlansSection.tsx`
- `PlanCard.tsx`
- `PlansComparisonTable.tsx`
- `EarlyAdopterSection.tsx`
- `VideoEmbedCard.tsx`
- `PostulacionesSection.tsx`
- `LandingFooter.tsx`

### Relacion recomendada

- `LandingPage.tsx` solo compone secciones.
- Cada seccion usa `SectionShell` y `SectionHeading` cuando corresponda.
- Las cards viven separadas cuando se repiten o cuando tengan logica propia.

## Orden de implementacion exacto

### Paso 1

Crear:

- `landing.types.ts`
- `landing.data.ts`
- `SectionShell.tsx`
- `SectionHeading.tsx`

### Paso 2

Extraer primero los bloques mas simples y estables:

- `LandingFooter.tsx`
- `TestimonialsSection.tsx`
- `TestimonialCard.tsx`
- `PostulacionesSection.tsx`
- `VideoEmbedCard.tsx`

Nota importante:

- en esta fase, cada componente extraido debe conservar pequeños movimientos con `framer-motion` cuando ya existan en la version actual,
- los micro-efectos deben ser suaves y locales al componente,
- no deben convertirse en animaciones globales compartidas,
- si una card ya tenia entrada con `whileInView`, `initial`, `transition` o `whileHover`, esa sensacion debe mantenerse al moverla a su archivo propio.

### Paso 3

Extraer bloques medianos:

- `HowItWorksSection.tsx`
- `StepCard.tsx`
- `FlowSection.tsx`
- `PlansSection.tsx`
- `PlanCard.tsx`
- `PlansComparisonTable.tsx`

### Paso 4

Extraer dashboard:

- `DashboardPreviewSection.tsx`
- `ChartCard.tsx`

### Paso 5

Extraer features:

- `FeaturesSection.tsx`
- `FeatureCard.tsx`

### Paso 6

Extraer hero:

- `LandingHero.tsx`
- `HeroVisual.tsx`

### Paso 7

Extraer carrusel:

- `HeroCarousel.tsx`

### Paso 8

Extraer navbar:

- `LandingNavbar.tsx`

### Paso 9

Limpiar `LandingPage.tsx` para que quede solo compositor.

## Reglas de implementacion

### Regla 1: no mover demasiadas cosas a la vez

Solo una extraccion por bloque o por grupo pequeño de bloques.

### Regla 2: compilar despues de cada paso

No avanzar a la siguiente seccion sin confirmar que la build sigue correcta.

### Regla 3: preservar la apariencia

El objetivo en esta fase no es mejorar el diseño, sino conservarlo mientras se separa.

### Regla 4: no tocar el sistema UI compartido sin necesidad

Si algo pertenece solo a la landing, se resuelve en landing.

### Regla 5: no crear componentes demasiado pequenos sin valor

Si un componente no se va a reutilizar ni tiene complejidad propia, no se divide de mas.

## Riesgos principales

1. Partir demasiado pronto el hero y romper animaciones.
2. Sacar el carrusel antes de encapsular bien su comportamiento visual.
3. Reutilizar cards antes de fijar el estilo final.
4. Introducir dependencias circulares entre secciones.
5. Mover estilos globales donde no corresponden.

## Criterios de exito

La fase 3 esta bien hecha si:

- `LandingPage.tsx` queda muy corto,
- cada seccion tiene su archivo,
- los datos estan aislados,
- los estilos globales no contaminan componentes locales,
- la landing se ve igual,
- y cambiar una seccion no obliga a editar otra.

## Los 3 pasos que dan sentido a la implementacion

Para que la migracion no se sienta como una simple division de archivos, la fase 3 se ejecuta como una secuencia de tres pasos con proposito claro:

### 1. Aislar la base comun

Primero se extraen los cimientos que todas las secciones necesitan:

- tipos,
- datos,
- wrapper de seccion,
- heading comun.

Esto da orden sin cambiar la UI visible.

### 2. Separar cada bloque con su propia identidad

Luego se extraen las secciones una por una, manteniendo sus micro-animaciones con Framer Motion y su estructura visual local.

Aqui cada bloque conserva:

- su layout,
- su hover,
- su entrada,
- su estilo propio.

### 3. Reintegrar y limpiar el compositor

Por ultimo, `LandingPage.tsx` se convierte en una pagina simple que solo organiza las secciones.

En este punto se elimina:

- logica duplicada,
- imports sobrantes,
- clases globales innecesarias,
- y dependencias cruzadas entre secciones.

Este orden evita romper la pagina mientras la dividimos.

## Nota final

Este arbol es la base para empezar a codificar.

Antes de implementar, conviene decidir si quieres:

1. crear primero el sistema base (`SectionShell`, `SectionHeading`, datos y tipos),
2. o extraer primero los bloques funcionales simples para reducir el monolito rapido.
