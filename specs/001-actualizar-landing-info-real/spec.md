# Feature Specification: Actualizar landing page con información real del producto Kittypau

**Feature Branch**: `001-actualizar-landing-info-real`

**Created**: 2026-08-18

**Status**: Implemented (2026-08-18) — User Stories 1-5, FR-001 a FR-008. Build (`npm run build`)
verificado en verde tras los cambios. `dist/` no se tocó (se revirtió el output de la
verificación de build, no es parte del commit).

**Input**: User description: "revisa D:\Escritorio\Proyectos\AIoT_Kittypau\kittypau_2026_hivemq y actualiza el landingpage en este proyecto con la informacion."

**Fuente de verdad**: `Knowledge/` del proyecto `kittypau_2026_hivemq` (vault técnico/producto,
leído el 2026-08-18) — en particular `00_HOME.md`, `01_Proyecto/README_Proyecto.md`,
`01_Proyecto/ESTADO_ACTUAL.md`, `21_Roadmap/README_Estrategia_Mercado.md`,
`24_Glosario/README_Glosario.md`. Este landing (`Kittypaw_landing_page/`) es un proyecto
Vite/React separado — no comparte repo ni build con `kittypau_app/` (Next.js, la app real).

---

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Visitante evalúa el producto sin promesas infladas (Priority: P1)

Una persona llega al landing (dueño de mascota o evaluador de un fondo como CORFO) y lee
features, "cómo funciona" y planes. Todo lo que dice el landing debe poder respaldarse contra
el estado real del producto documentado en `Knowledge/` — sin nombrar hardware que no es el
que se usa, sin prometer capacidades de IA que no están en producción, y sin testimonios de
clientes que no existen.

**Why this priority**: Es la razón de ser de esta tarea — el pedido explícito fue "actualiza
con la información [real]", no un rediseño visual. Un landing que sobre-promete daña
confianza con usuarios reales y con evaluadores de postulaciones (CORFO ya postulado, ver
`21_Roadmap/README_CORFO_Semilla2026.md`).

**Independent Test**: Para cada afirmación fáctica del landing (hardware, features activas,
estado de la IA, contacto, URLs), existe una cita verificable en `Knowledge/` o en el código
de `kittypau_app/`/`iot_firmware/`. Ninguna afirmación queda "porque suena bien".

**Acceptance Scenarios**:

1. **Given** el paso "Cómo funciona" menciona el hardware que el usuario configura,
   **When** se compara con `Knowledge/08_ESP32/README_ESP32.md` y
   `01_Proyecto/README_Proyecto.md` §1, **Then** el texto no afirma "ESP32" como el chip
   genérico del flujo completo (el dispositivo de campo real es **ESP8266** NodeMCU v3;
   ESP32-CAM es una variante específica del comedero) — se usa lenguaje que no compromete un
   chip incorrecto.
2. **Given** la sección de features promete "IA preventiva" con alertas automáticas,
   **When** se compara con `ESTADO_ACTUAL.md` ("Evidence Engine... 🔴 Modelo ML en producción:
   Pendiente — motor matemático no está en la app Next.js todavía, solo en la app Streamlit de
   investigación" vs. "Push notifications 🟢 Alerta del hunger bar agendada... verificada en
   dispositivo real"), **Then** el texto distingue lo que ya está en producción (alertas del
   hunger bar, basadas en reglas) de lo que es visión de producto (motor de IA predictivo), sin
   presentarlo todo como ya disponible.
3. **Given** la sección de testimonios atribuye citas a "Carolina M." y "Ricardo P." como
   clientes reales, **When** se busca evidencia de usuarios/clientes reales en `Knowledge/`
   (dispositivos en campo, cuentas de prueba, pilotos), **Then** no se encuentra respaldo de
   que sean personas reales — son contenido de placeholder generado, no testimonios.
   **Decisión del usuario (2026-08-18): eliminar la sección de testimonios por completo**, no
   reemplazarla por otro contenido — ver FR-004 (actualizado) y Sección "Cambios adicionales
   pedidos".
4. **Given** el CTA de login/registro apunta a `https://kittypau-app.vercel.app/login`,
   **When** se compara con `Knowledge/02_Arquitectura/ARQ_Pipeline_End_to_End.md:448` y
   `19_DevOps/README_DevOps.md:307` (URL de producción real del WebView/Capacitor),
   **Then** la URL coincide — **sin cambios necesarios** en este punto.

---

### User Story 2 - Copy de producto usa el vocabulario canónico correcto (Priority: P2)

El contenido del landing (títulos, subtítulos, features) usa la misma categoría de producto y
vocabulario que la documentación oficial, para que quien lea la landing y luego el material de
postulación/pitch (CORFO, deck) no encuentre inconsistencias.

**Why this priority**: Consistencia de marca/narrativa entre el material público (landing) y el
material de postulación ya usado (`21_Roadmap/README_CORFO_Semilla2026.md`,
`README_Estrategia_Mercado.md`), sin ser bloqueante como la P1.

**Independent Test**: Comparar el texto de `heroData`/`featuresData` contra la "Definición
oficial de producto" (`README_Estrategia_Mercado.md` §3: *"Kittypau is an AIoT platform that
monitors pet feeding and hydration cycles to generate health insights and preventive alerts"*)
y confirmar que el hero/features cubren esos 4 pilares (alimentación, hidratación, insights de
salud, alertas preventivas) — hoy además cubren un quinto pilar real (entorno:
temperatura/humedad) que sí está en el motor de features pero no en la frase-definición corta;
mantenerlo, no es un error, es información adicional real.

**Acceptance Scenarios**:

1. **Given** las 4 `featuresData` actuales (Entorno seguro, Nutrición precisa, Conexión total,
   IA preventiva), **When** se comparan con las tablas activas de Supabase
   (`readings`, `devices`, `bridge_heartbeats`) y el motor de features (F00–F14),
   **Then** las primeras 3 features están respaldadas 1:1 por telemetría real (temperatura/
   humedad, peso de comida/agua, batería/WiFi) — no requieren cambio de fondo, solo revisión de
   wording si aplica el ajuste de la User Story 1 (feature #4, IA preventiva).

---

---

### User Story 3 - Eliminar testimonios ficticios (Priority: P1)

`TestimonialsSection` y `testimonialsData` desaparecen del landing. No se reemplazan por otro
contenido en esta pasada.

**Why this priority**: Decisión explícita del usuario (2026-08-18), cierra el OQ-001 de la
versión anterior de este spec — dejar de mostrar citas atribuidas a personas que no están
respaldadas como clientes/usuarios reales en `Knowledge/`.

**Independent Test**: `TestimonialsSection` no se renderiza en `LandingPage.tsx`;
`testimonialsData`, `TestimonialCard.tsx` y el import de la sección se eliminan sin dejar
código muerto ni referencias rotas.

**Acceptance Scenarios**:

1. **Given** el usuario visita el landing, **When** recorre las secciones entre "Cómo
   funciona" y "Planes", **Then** no existe ninguna sección de testimonios.

---

### User Story 4 - Curvas reales de alimentación, servido y ruido (Priority: P1)

El landing muestra una explicación de cómo el motor matemático distingue los 3 patrones de
señal que anota el sistema (`alimentacion` 🍽️, `servido` 🫙, `ruido` ⚡ — ver
`Knowledge/24_Glosario/README_Glosario.md`), acompañada de una curva representativa de cada
patrón.

**Hallazgo clave (2026-08-18):** en `kittypau_2026_hivemq` **no existen imágenes/fotos
estáticas** de estas curvas — el modelamiento vive en scripts Python
(`Investigacion/Ciclo_Alpha_v2/fase_0_ruido/shape_features_v2.py`,
`0C_modelo_ruido/0C_01_caracteriza.py`/`0C_02_ajusta_modelo.py`) y se visualiza en vivo dentro
de una app Streamlit de anotación (`Knowledge/23_Decisiones/ADR_004_StreamlitAnnotation.md`),
no como archivos `.png`/`.jpg` exportados. Búsqueda exhaustiva de imágenes en el repo
(`*.png`, `*.jpg`, `*.jpeg`) confirmada sin resultados para "curva/ruido/alimentacion/servido".
Lo que sí existe y es real:

- `Investigacion/Ciclo_Alpha_v2/fase_0_ruido/data/anotaciones_av2.csv` — 527 anotaciones con
  `t_inicio`/`t_fin`/`categoria` (`alimentacion`/`servido`/`ruido`) por segmento real,
  dispositivo `KPCL0034`.
- `11_Data/2026/readings.csv` / `readings_rows.csv` — lecturas crudas de peso (timestamp +
  weight_g) que, cruzadas con las ventanas de `anotaciones_av2.csv`, permiten reconstruir la
  forma real de un segmento de cada categoría.

**Resolución adoptada**: en vez de "fotos" (que no existen), se extraen 1 segmento real
representativo por categoría desde esos dos CSV (join por `device_code`+ventana de tiempo),
se resamplean/normalizan igual que hace el motor (`resampleo 30s`, ver Glosario), y se
renderizan como mini-gráficos SVG con el mismo patrón ya usado en
`DashboardPreviewSection.tsx` (`MiniAreaChart`/`buildAreaPath`) — no una librería nueva, no
una imagen embebida. El texto explicativo de cada curva se basa en la definición canónica del
Glosario, no se inventa.

**Why this priority**: Es el pedido explícito del usuario; al no existir el activo original
pedido ("fotos"), la alternativa fiel a los datos reales es preferible a omitir el punto o a
usar datos sintéticos (que es justamente lo que ya hace `DashboardPreviewSection` hoy con
`activityData`/`consumptionData` ficticios — ver Assumptions).

**Independent Test**: Cada una de las 3 curvas mostradas corresponde a un segmento real
identificable por `id_candidato` en `anotaciones_av2.csv` (trazable), y el texto que la
acompaña no contradice la definición del Glosario para esa categoría.

**Acceptance Scenarios**:

1. **Given** la curva etiquetada "alimentación", **When** se compara su forma con la
   definición del Glosario ("el peso baja porque el gato consume alimento"), **Then** la curva
   mostrada tiene pendiente neta negativa (peso bajando) en el segmento elegido.
2. **Given** la curva etiquetada "servido", **When** se compara con la definición ("el peso
   sube porque el operador agrega alimento"), **Then** la curva mostrada tiene pendiente neta
   positiva.
3. **Given** la curva etiquetada "ruido", **When** se compara con la definición ("variación sin
   causa real: vibración, interferencia"), **Then** la curva mostrada es de baja amplitud/alta
   variabilidad sin tendencia neta clara, distinta visualmente de las otras dos.

---

### User Story 5 - Video "Semilla 2026" en la sección de postulaciones + widget flotante autoplay (Priority: P2)

**Resuelto por el usuario (2026-08-18):** el video sí existe y tiene URL pública —
`https://www.youtube.com/watch?v=5BM2d6lbOYA`. (Corrige el hallazgo original de este spec, que
databa la fuente `05_VIDEO_PITCH.md`/`04_FORMULARIO_WEB_RESPUESTAS.md` como
`[CRÍTICO — PENDIENTE]`; el usuario confirma directamente que ya se grabó/subió después de esa
documentación — no se re-verificó contra `Knowledge/`, se toma la palabra del usuario como
fuente para este dato puntual.)

**Alcance ampliado, pedido directo del usuario:**

1. El ítem "Demo 2 min." de `postulationVideos` se actualiza a
   `https://www.youtube.com/watch?v=5BM2d6lbOYA`, subtítulo "Semilla Inicia Corfo 2026" (ya no
   2025).
2. **Nuevo:** un widget de video flotante, anclado a un costado derecho de la pantalla, tamaño
   pequeño, que se reproduce automáticamente al abrir el landing (autoplay). Reproduce el mismo
   video (`5BM2d6lbOYA`).

**Why this priority**: P2 — depende de contenido externo (el video), pero ya no está
bloqueado; es una mejora de descubribilidad del pitch, no un error de exactitud como las demás
User Stories.

**Independent Test**: Al cargar `/`, dentro de los primeros segundos aparece un reproductor
pequeño en el costado derecho reproduciendo `5BM2d6lbOYA` sin acción del usuario, y puede
cerrarse.

**Acceptance Scenarios**:

1. **Given** un visitante abre el landing por primera vez, **When** la página termina de
   cargar, **Then** un widget de video pequeño en el costado derecho comienza a reproducirse
   automáticamente.
2. **Given** el widget está reproduciéndose, **When** el visitante lo cierra (botón X), **Then**
   desaparece y no vuelve a aparecer en esa misma sesión de navegación.
3. **Given** las políticas de autoplay de los navegadores (Chrome/Safari/Firefox) exigen
   `muted` para permitir reproducción automática sin interacción previa del usuario,
   **When** se implementa el embed, **Then** arranca en mute (con opción visible de
   activar sonido) — autoplay con audio sin interacción del usuario no es técnicamente
   confiable cross-browser, así que no se promete audio automático.

### Edge Cases

- ¿Qué pasa si `Knowledge/` tiene información desactualizada respecto al código real de
  `kittypau_app/`? → Este spec confía en `Knowledge/00_HOME.md` como fuente de verdad
  declarada ("Si un documento entra en conflicto con este, este gana"); no se audita el código
  de `kittypau_app/` directamente salvo para los 2 puntos donde `Knowledge/` cita líneas de
  código concretas (URL de producción, variables MQTT).
- ¿Qué pasa con datos de mercado/negocio (precios, planes Free/Premium) que no tienen respaldo
  documental exacto (sin tabla de precios en CLP en `Knowledge/`)? → Se dejan como están
  (modelo Free/Premium ya es consistente con el modelo de negocio HaaS + suscripción descrito
  en `README_Estrategia_Mercado.md` §4), no se inventan cifras nuevas.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: El paso 1 de "Cómo funciona" (`howItWorksData[0]`) DEBE describir la
  configuración del dispositivo sin nombrar "ESP32" como el chip genérico del flujo (dato
  incorrecto para el hardware de campo real, que es ESP8266).
- **FR-002**: La feature "IA preventiva" (`featuresData`) DEBE describir lo que el sistema hace
  hoy (alertas basadas en el hunger bar) sin afirmar que un motor de IA predictivo ya está
  activo en producción, dado que `ESTADO_ACTUAL.md` marca el modelo ML como 🔴 pendiente de
  integrar a la app.
- **FR-003**: El resto de `landing.data.ts` (hero, features 1–3, cómo funciona pasos 2–3,
  redes sociales, `loginUrl`) NO requiere cambios de fondo — ya está respaldado por
  `Knowledge/`; solo se corrige redacción menor si aparece un error de tipeo evidente
  encontrado de paso (ej. "Nutricion precisa" sin tilde), sin tocar estructura ni componentes.
- **FR-004**: `TestimonialsSection.tsx`, su import en `LandingPage.tsx`, `testimonialsData` y
  `TestimonialCard.tsx` (si no lo usa nada más) se eliminan por completo — decisión confirmada
  por el usuario 2026-08-18.
- **FR-005**: Los cambios de copy factual (FR-001 a FR-002) quedan contenidos a
  `src/components/landing/landing.data.ts` — no se toca estructura, estilos ni componentes
  visuales existentes salvo lo que exige FR-004, FR-006 y FR-007.
- **FR-006**: Se agrega una sección (o se extiende una existente) que muestre 3 curvas reales
  — alimentación, servido, ruido — extraídas de datos reales de
  `kittypau_2026_hivemq` (`anotaciones_av2.csv` + `readings.csv`/`readings_rows.csv`, ver User
  Story 4), renderizadas con el mismo patrón SVG que ya usa `DashboardPreviewSection.tsx`
  (`MiniAreaChart`/`buildAreaPath`), con explicación de cada curva basada en
  `Knowledge/24_Glosario/README_Glosario.md`. No se usan imágenes/fotos porque no existen en
  la fuente (ver hallazgo en User Story 4).
- **FR-007**: `postulationVideos` (`landing.data.ts`) actualiza el ítem "Demo 2 min." a
  `href: "https://www.youtube.com/watch?v=5BM2d6lbOYA"`, subtítulo "Semilla Inicia Corfo 2026".
- **FR-008**: Nuevo componente (ej. `FloatingVideoWidget.tsx`) montado una vez en
  `LandingPage.tsx`, fuera del flujo normal de `<main>` (`position: fixed`, costado derecho,
  tamaño pequeño tipo PiP), que embebe `5BM2d6lbOYA` vía YouTube iframe API con
  `autoplay=1&mute=1` (autoplay con sonido no es confiable cross-browser sin gesto del
  usuario — ver Acceptance Scenario 3 de User Story 5) y un botón de cerrar que lo desmonta.

### Key Entities

- **`heroData`** (`landing.data.ts`): título/descripción/CTAs del hero — sin cambios.
- **`featuresData`** (`landing.data.ts`): 4 tarjetas de features — 1 ítem (IA preventiva)
  ajusta wording; 3 sin cambios.
- **`howItWorksData`** (`landing.data.ts`): 3 pasos — 1 ítem (paso "Conecta") ajusta wording;
  2 sin cambios.
- **`testimonialsData`** (`landing.data.ts`): 2 citas atribuidas — se elimina por completo
  (FR-004).
- **`curveExamplesData`** (nueva, `landing.data.ts`): 3 curvas reales (alimentación, servido,
  ruido) con sus puntos de señal y texto explicativo — extraída de
  `anotaciones_av2.csv` + `readings.csv`/`readings_rows.csv` de `kittypau_2026_hivemq`
  (FR-006).
- **`postulationVideos`** (`landing.data.ts`): entradas de video de postulación — ítem "Demo 2
  min." se actualiza a `5BM2d6lbOYA` / "Semilla Inicia Corfo 2026" (FR-007); los otros 2 ítems
  (Pitch 40 seg y Pitch 90 seg) son videos 2025 reales con URL verificada, no cambian.
- **`FloatingVideoWidget`** (nuevo componente): widget de video flotante autoplay/mute,
  costado derecho, mismo video `5BM2d6lbOYA` (FR-008).

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Cero menciones de "ESP32" como hardware genérico del flujo de onboarding en el
  landing (la mención correcta de ESP32-CAM, si se usa, queda acotada a contexto de
  investigación/hardware, no al flujo de usuario del paso 1).
- **SC-002**: La feature de IA distingue explícitamente "alertas hoy" (regla/hunger bar) de
  "motor de IA" (roadmap), verificable por lectura directa del texto sin necesitar contexto
  externo.
- **SC-003**: 100% de las afirmaciones fácticas nuevas o modificadas citan un documento de
  `Knowledge/` en este spec (ya cumplido arriba, en Acceptance Scenarios).
- **SC-004**: `npm run build` (o el comando de build configurado en `package.json`) sigue
  pasando sin errores tras los cambios.
- **SC-005**: Cero referencias a `TestimonialsSection`/`testimonialsData`/`TestimonialCard` en
  el árbol de componentes tras el cambio.
- **SC-006**: Las 3 curvas nuevas son trazables a un `id_candidato` real de
  `anotaciones_av2.csv` (documentado en el commit/PR, no solo en memoria de la sesión).
- **SC-007**: Ningún video en `postulationVideos` queda mal etiquetado (año que no corresponde
  a la URL real).
- **SC-008**: El widget flotante inicia reproducción sin requerir click, en muted (requisito
  técnico de autoplay cross-browser), es cerrable, y no bloquea contenido ni CTAs del hero en
  viewport de escritorio ni mobile (se oculta o se reduce más en mobile si su tamaño por
  defecto tapa contenido — juicio de implementación, no bloqueante).

## Assumptions

- El usuario no pidió rediseño visual ni cambios de estructura — el alcance es contenido/copy
  factual, apoyado en `Knowledge/`.
- `Knowledge/00_HOME.md` y los documentos que enlaza son la fuente de verdad vigente al
  2026-08-18 (fecha de esta lectura); si `kittypau_2026_hivemq` cambia después, este spec no
  se actualiza automáticamente.
- Los planes Free/Premium (`planFeatures`, `PlansSection.tsx`) y el modelo de precios no tienen
  una tabla de precios exacta documentada en `Knowledge/` — se asume que no es parte de esta
  actualización (no hay "información real" nueva que aplicar ahí más allá de lo ya alineado
  con el modelo HaaS + suscripción).
- El nombre legal "IOT Chile SpA" en el footer no tiene respaldo encontrado en `Knowledge/`
  (no se encontró grep de razón social) — se asume correcto por no tener evidencia en contra,
  no se toca.
- Las curvas de `DashboardPreviewSection` (`activityData`/`consumptionData`) son y siguen
  siendo sintéticas — fuera de alcance de este spec (el usuario pidió específicamente curvas de
  alimentación/servido/ruido del modelamiento, no las de esa sección). No se tocan salvo que el
  usuario lo pida aparte.
- Extraer el segmento real de cada categoría (User Story 4) requiere correr un script/consulta
  puntual sobre los CSV de `kittypau_2026_hivemq` (fuera del repo de este landing) para obtener
  los puntos de la curva; el resultado (arrays de puntos ya procesados) se hardcodea en
  `landing.data.ts` como dato estático — igual que ya hace hoy con `activityData`/
  `consumptionData` — no se monta una dependencia nueva ni un fetch en runtime a datos de otro
  proyecto.

## Open Questions

- ~~OQ-002~~ — Resuelta 2026-08-18: el usuario confirmó la URL real del video 2026
  (`5BM2d6lbOYA`), ver User Story 5.
- **OQ-003** (afina User Story 4, no bloquea): ¿algún criterio para elegir *cuál* segmento real
  de cada categoría usar (ej. el más "limpio"/representativo, o el primero cronológicamente), o
  se delega el criterio de selección a quien implemente (duración típica + forma sin outliers
  evidentes, según columnas `duracion_min`/`delta_w_total` de `anotaciones_av2.csv`)? Sin
  respuesta del usuario → se procede con el criterio delegado.
