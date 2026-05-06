# Landing Page Refactor Plan

## Objetivo

Separar `src/pages/LandingPage.tsx` en componentes TSX por seccion y por responsabilidad, sin cambiar el resultado visual ni funcional de la pagina.

La meta no es redisenar todo desde cero. La meta es:

- mantener la pagina igual en apariencia,
- reducir el tamano y complejidad de `LandingPage.tsx`,
- aislar cada bloque para que un cambio en una parte no rompa las demas,
- dejar el proyecto listo para iterar por seccion de forma segura.

## Revision del proyecto

### Puntos de entrada actuales

- `src/main.tsx` monta `App` y carga `src/index.css`.
- `src/App.tsx` renderiza `LandingPage` y `Toaster`.
- `src/pages/LandingPage.tsx` concentra casi toda la landing.

### Implicacion

Mientras `LandingPage` siga siendo monolitico, cualquier cambio de estilo, animacion o estructura ahi dentro tiene riesgo de afectar otras secciones.

### Observacion importante de CSS

En `src/index.css` hay estilos que hoy son globales, pero en realidad pertenecen a la landing o a una etapa anterior:

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

Tambien hay reglas globales para `h1`, `h2`, `h3` que fuerzan tipografia en toda la app.

### Recomendacion para evitar roturas

- Mantener en `index.css` solo base global real: reset, tokens, body y tipografia base.
- Sacar clases especificas de landing fuera de `index.css`.
- Si una clase se usa solo en landing, moverla a:
  - un componente TSX con Tailwind inline, o
  - un archivo CSS especifico de landing importado solo por la landing.
- No tocar el sistema de UI base (`src/components/ui/*`) para resolver estilos que pertenecen solo a la landing.

## Reglas de independencia

1. Cada seccion debe poder cambiarse sin editar otra seccion.
2. Si dos bloques parecen iguales visualmente, primero se pueden duplicar para mantener fidelidad.
3. Reutilizar solo cuando ya exista estabilidad visual.
4. El CSS compartido debe ser minimo y semantico.
5. La logica de animacion no debe vivir en componentes que no la usan.
6. Los datos deben estar fuera del JSX del archivo pagina.

## Principios de refactor

1. No cambiar el comportamiento visual durante la primera migracion.
2. No mover logica compartida a lugares globales si pertenece a una sola seccion.
3. Cada seccion debe quedar en su propio archivo TSX.
4. Los datos estaticos deben vivir fuera de la pagina principal.
5. Los componentes reutilizables deben recibir `props` claras y no depender de estado externo innecesario.
6. El archivo `LandingPage.tsx` debe quedar como un compositor de secciones, no como un monolito.

## Estado actual del archivo

Hoy `src/pages/LandingPage.tsx` mezcla:

- imports de UI, iconos, graficas y animaciones,
- constantes de datos,
- funciones auxiliares,
- estado del carrusel,
- logica de `framer-motion`,
- markup del navbar,
- hero,
- hero visual con platos animados,
- carrusel,
- features,
- flow section,
- dashboard preview,
- how it works,
- testimonials,
- plans,
- early adopter,
- postulaciones,
- footer.

Eso produce estos problemas:

- cualquier cambio afecta varias partes,
- el archivo es dificil de leer y mantener,
- es facil romper JSX cuando se toca una sola seccion,
- los cambios de CSS se vuelven riesgosos porque se mezclan con el HTML y la logica.

## Arquitectura propuesta final

### Capas

#### Capa 1: datos y tipos

- `landing.data.ts`
- `landing.types.ts`

#### Capa 2: layout global de landing

- `LandingNavbar.tsx`
- `LandingHero.tsx`
- `LandingFooter.tsx`

#### Capa 3: secciones funcionales

- `HeroCarousel.tsx`
- `FeaturesSection.tsx`
- `FlowSection.tsx`
- `DashboardPreviewSection.tsx`
- `HowItWorksSection.tsx`
- `TestimonialsSection.tsx`
- `PlansSection.tsx`
- `EarlyAdopterSection.tsx`
- `PostulacionesSection.tsx`

#### Capa 4: subcomponentes repetibles

- `FeatureCard.tsx`
- `PlanCard.tsx`
- `TestimonialCard.tsx`
- `VideoCard.tsx`
- `SectionHeading.tsx`

### Beneficio de esta capa

- el cambio de un carrusel no toca planes,
- el cambio de una card no toca el hero,
- el cambio de un color no rompe el footer,
- los estados de React quedan localizados.

## Inventario de secciones y responsabilidades

### 1. Navbar

Responsabilidad:

- logo/titulo,
- links de navegacion,
- botones sociales,
- CTA principal.

Notas:

- hoy no tiene estado propio,
- usa estilos del sistema de UI y clases Tailwind,
- puede quedar como componente puro.

### 2. Hero

Responsabilidad:

- titulo principal,
- subtitulo,
- CTAs,
- lista de beneficios,
- visual principal con platos animados.

Notas:

- la animacion del hero depende de `useScroll` y `useTransform`,
- conviene separar el hero textual del hero visual,
- el hero visual puede quedar en un componente especifico para no mezclar animacion con copy.

### 3. Carrusel de imagenes

Responsabilidad:

- autoplay continuo,
- hover visual de la tarjeta,
- ampliacion de la foto seleccionada,
- respuesta correcta para imagenes verticales y horizontales,
- no interferir con el resto de la pagina.

Notas:

- este bloque debe quedar totalmente aislado,
- no debe mover configuracion general del carousel base salvo que sea estrictamente necesario,
- si se mantiene una logica especial de hover, debe vivir en un wrapper del landing, no en el UI base reutilizable.

### 4. Caracteristicas

Responsabilidad:

- mostrar los beneficios principales,
- renderizar cards con icono, titulo y descripcion,
- animacion de entrada por card.

Notas:

- aqui conviene tener un `FeatureCard.tsx` separado,
- la seccion solo deberia mapear datos,
- los cambios de estilo de una tarjeta no deberian tocar otras secciones.

### 5. Flow section

Responsabilidad:

- explicar el paso a paso visual del sistema,
- representar el flujo plato -> bridge -> IA -> app.

Notas:

- parece un bloque independiente,
- puede quedar como componente simple y estable.

### 6. Dashboard preview

Responsabilidad:

- renderizar graficas,
- mostrar resumen de actividad y consumo,
- contener `recharts`.

Notas:

- esta seccion tiene dependencias claras de `activityData` y `consumptionData`,
- puede recibir esos datos por props para mantenerla pura.

### 7. How it works

Responsabilidad:

- mostrar los tres pasos del uso del sistema.

Notas:

- es un componente de presentacion muy simple,
- puede tener subcards internas o un componente de card reutilizable.

### 8. Testimonials

Responsabilidad:

- prueba social,
- dos testimonios,
- avatar/placeholder visual.

### 9. Plans

Responsabilidad:

- cards de plan basico y premium,
- tabla comparativa,
- CTA de conversion.

Notas:

- conviene extraer la tabla comparativa a un componente separado si se sigue creciendo.

### 10. Early Adopter

Responsabilidad:

- propuesta de valor,
- lista de beneficios,
- embed de video,
- CTA principal y secundario.

### 11. Postulaciones

Responsabilidad:

- tres cards con video,
- links a videos externos.

### 12. Footer

Responsabilidad:

- links sociales,
- email,
- privacidad/soporte,
- copyright.

## Propuesta de estructura de carpetas

### Opcion recomendada

```txt
src/
  components/
    landing/
      landing.data.ts
      landing.types.ts
      LandingNavbar.tsx
      LandingHero.tsx
      HeroVisual.tsx
      HeroCarousel.tsx
      FeaturesSection.tsx
      FeatureCard.tsx
      FlowSection.tsx
      DashboardPreviewSection.tsx
      HowItWorksSection.tsx
      TestimonialsSection.tsx
      PlansSection.tsx
      PlansComparisonTable.tsx
      EarlyAdopterSection.tsx
      PostulacionesSection.tsx
      LandingFooter.tsx
      landing.css
      index.ts
  pages/
    LandingPage.tsx
```

### Alternativa mas ligera

Si se quiere menos archivos al inicio:

```txt
src/
  components/
    landing/
      landing.data.ts
      landing.types.ts
      LandingHero.tsx
      LandingCarousel.tsx
      LandingFeatures.tsx
      LandingPlans.tsx
      LandingFooter.tsx
      landing.css
```

Luego se divide mas fino si hace falta.

## Separacion de datos

Los datos que hoy estan inline en la pagina deben salir a un archivo dedicado.

### Mover a `landing.data.ts`

- `activityData`
- `consumptionData`
- `carouselImages`
- `planFeatures`
- `featuresData`

### Ventajas

- la pagina principal deja de tener ruido,
- es mas facil revisar contenido,
- se puede reutilizar el mismo data set en componentes separados,
- los tests visuales o de contenido son mas simples.

### Datos que deben quedar aislados por seccion

- hero: textos CTA y parametros de scroll si se mantiene su propia logica,
- carousel: lista de imagenes y estado del hover si aplica,
- features: lista y meta de cada feature,
- dashboard: series de grafica,
- plans: features comparadas,
- testimonials: contenido de cada testimonio,
- videos: urls y etiquetas de cada video.

## Separacion de tipos

Crear `landing.types.ts` para evitar `any` y props ambiguas.

Ejemplos de tipos utiles:

- `LandingFeature`
- `PlanFeature`
- `CarouselImageItem`
- `TestimonialItem`
- `VideoCardItem`

### Regla para props

Cada componente debe recibir solo lo que necesita. Si una seccion recibe demasiadas props, es una señal de que todavia no esta bien separada.

Beneficios:

- mejores autocompletados,
- menos errores por props faltantes,
- componentes mas faciles de entender.

## CSS: estrategia recomendada

La landing usa principalmente Tailwind CSS, asi que conviene respetar ese enfoque.

### Que dejar en cada componente

- clases de layout especificas del bloque,
- espaciado local,
- colores de ese componente,
- sombras, bordes y radius de esa seccion,
- estados hover propios.

### Qué mover fuera de `index.css`

- titulos globales que solo aplican a la landing,
- tarjetas con clases semanticas muy especificas,
- botones CTA de una sola pagina,
- estilos de contenido como `content-prototipo`, `content-data`, `content-contacto`.

### Qué mantener en `index.css`

- variables de color globales,
- fuentes base globales,
- body/base reset,
- utilidades compartidas por toda la app.

### Que no dejar mezclado en `LandingPage.tsx`

- estilos internos de cada tarjeta,
- clases de cada imagen,
- variantes de animacion especificas,
- ajustes de hover o z-index de una sola seccion.

### Reglas CSS sugeridas

1. Las secciones grandes deben tener un wrapper propio.
2. Los componentes de card deben tener su propia clase base.
3. Si una seccion necesita `overflow-visible`, debe quedar solo en ese bloque.
4. Si una animacion requiere `z-index` alto, debe vivir en el componente responsable.
5. No mover reglas globales al componente si el alcance es local.

### Tema visual

Conviene mantener:

- la paleta actual,
- el estilo de botones actual,
- el lenguaje de sombras y bordes ya usado,
- la tipografia existente.

No conviene, en esta primera etapa:

- introducir otro sistema visual,
- cambiar el tono general de toda la pagina,
- migrar a CSS modules o styled-components sin necesidad.

## HTML: estrategia de estructura

### LandingPage como compositor

`LandingPage.tsx` deberia quedar parecido a esto:

```tsx
export default function LandingPage() {
  return (
    <div>
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
  );
}
```

### Ventajas HTML

- el orden visual es obvio,
- cada bloque se puede editar sin tocar todo el archivo,
- la jerarquia semantica queda mas clara,
- se reducen riesgos de romper etiquetas abiertas/cerradas.

### Estructura semantica sugerida

- `header` para navbar.
- `main` para el contenido principal.
- `section` para cada bloque.
- `footer` para el pie.
- `article` para cards que tengan sentido individual.

### Semantica recomendada

- `header` para navbar si aplica,
- `main` para el contenido principal,
- `section` para cada bloque tematico,
- `footer` para el pie,
- `article` para cards que representen contenido independiente, si corresponde.

## JavaScript / TypeScript: estrategia de logica

### Logica que debe quedar en el componente correcto

#### Hero

- `useScroll`
- `useTransform`
- movimiento de platos

#### Carrusel

- estado de hover de imagen seleccionada si se sigue usando,
- configuracion de autoplay,
- ampliacion de imagen,
- control de pausas.

#### CSS relacionado al carrusel

- no mover estilos del carrusel a `index.css`,
- si necesita una variante visual propia, crear wrapper landing-specific,
- mantener el componente UI base genérico.

#### Features

- variantes de animacion por card,
- datos de cada feature,
- eventualmente `IntersectionObserver` implícito via `whileInView`.

#### Dashboard

- solo datos de graficas,
- ninguna logica compartida con el hero o carrusel.

### Reglas TS recomendadas

1. Evitar `any` en componentes nuevos.
2. Tipar props de cada seccion.
3. Extraer helpers puros a archivos separados si crecen.
4. No mezclar estado de una seccion con otra.
5. No crear hooks globales si solo pertenecen a un bloque visual.

### Estado local recomendado

Cada seccion con interaccion debe ser dueña de su propio estado:

- hero: estado ninguno o solo animacion derivada,
- carousel: hover/active si hace falta,
- features: sin estado si solo mapea datos,
- plans/testimonials: sin estado,
- dashboard: sin estado interactivo al inicio.

## Componente por componente: propuesta concreta

### `LandingNavbar.tsx`

Props sugeridas:

- `loginUrl`
- `navItems`
- `socialLinks`

Responsabilidad:

- renderizar logo, links y CTA.

### `LandingHero.tsx`

Props sugeridas:

- `ctaPrimaryUrl`
- `ctaSecondaryHref`
- `benefits`

Responsabilidad:

- texto hero,
- botones,
- lista de beneficios.

### `HeroVisual.tsx`

Props sugeridas:

- `scrollY`

Responsabilidad:

- animar platos,
- mantener la visual actual.

### `HeroCarousel.tsx`

Props sugeridas:

- `images`

Responsabilidad:

- autoplay,
- cards de imagen,
- hover y ampliacion,
- comportamiento de overflow.

### `FeaturesSection.tsx`

Props sugeridas:

- `features`

Responsabilidad:

- titulo de la seccion,
- grid o stack de cards,
- map de `FeatureCard`.

### `FeatureCard.tsx`

Props sugeridas:

- `title`
- `description`
- `icon`
- `i`

Responsabilidad:

- una sola card,
- animacion de entrada,
- UI local.

### `DashboardPreviewSection.tsx`

Props sugeridas:

- `activityData`
- `consumptionData`

Responsabilidad:

- graficas y cards del panel.

### `PlansSection.tsx`

Props sugeridas:

- `planFeatures`

Responsabilidad:

- cards de planes,
- tabla comparativa,
- CTA.

## Orden de migracion recomendado

### Fase 1: preparacion

- crear carpeta `src/components/landing/`,
- crear `landing.data.ts`,
- crear `landing.types.ts`,
- mover constantes.
- auditar `src/index.css` y separar clases landing-only.

### Fase 2: components de bajo riesgo

- `LandingFooter.tsx`
- `HowItWorksSection.tsx`
- `TestimonialsSection.tsx`
- `PostulacionesSection.tsx`

### Fase 2.5: limpieza de estilos globales

- mover clases landing-only fuera de `src/index.css`,
- reducir reglas globales de `h1`, `h2`, `h3` si afectan otras paginas,
- preservar tokens y base global.

### Fase 3: secciones medianas

- `FlowSection.tsx`
- `DashboardPreviewSection.tsx`
- `PlansSection.tsx`

### Fase 4: secciones delicadas

- `FeatureCard.tsx`
- `FeaturesSection.tsx`
- `HeroVisual.tsx`
- `HeroCarousel.tsx`

### Fase 4.5: aislar comportamientos delicados

- carrusel con su propio wrapper,
- hero con su visual independiente,
- evitar que una animacion use CSS global compartido.

### Fase 5: pagina contenedora

- limpiar `LandingPage.tsx`,
- dejar solo el orden de secciones,
- eliminar imports y estados que ya no correspondan.

## Checklist de validacion por etapa

### Visual

- la pagina debe verse igual,
- no deben desaparecer elementos,
- no debe cambiar el orden de las secciones,
- no deben cambiar los textos.

### Funcional

- el hero debe seguir animando los platos,
- el carrusel debe seguir moviendose,
- los botones deben seguir apuntando a las mismas URLs,
- los embeds deben seguir funcionando.

### Tecnico

- `npm run build` debe pasar,
- no deben quedar imports sin usar,
- no deben quedar `any` nuevos sin justificacion,
- no debe haber duplicacion de datos.

## Riesgos a vigilar

1. Romper el hero al separar `useScroll`.
2. Que el carrusel pierda su comportamiento infinito al mover la logica.
3. Repetir cards con props inconsistentes.
4. Cambiar el layout de la landing por error de wrappers.
5. Crear componentes demasiado pequeños antes de tiempo.
6. Mover estilos globales donde no deben ir.

## Recomendacion de implementacion

La forma mas segura de hacerlo es:

1. crear los archivos nuevos,
2. mover primero solo constantes y cards simples,
3. dejar la pagina compilando en cada paso,
4. validar visualmente despues de cada extraccion,
5. solo al final limpiar `LandingPage.tsx`.

## Resultado esperado

Al terminar, deberiamos tener:

- una landing visualmente igual,
- un `LandingPage.tsx` corto y legible,
- componentes reutilizables por seccion,
- mejor mantenimiento,
- cambios mas seguros y localizados,
- menos riesgo de romper el hero, el carrusel o las cards al editar otra seccion.

## Decisiones pendientes antes de implementar

Antes de tocar codigo conviene confirmar:

1. Si prefieres un archivo CSS landing-specific o todo con Tailwind en TSX.
2. Si quieres duplicar alguna tarjeta para mantener fidelidad visual exacta o ya consolidarla en un componente reutilizable.
3. Si la landing debe seguir siendo la unica pagina del proyecto o si hay que prepararla desde ya para mas rutas.
