# AC Motors Automotriz Landing Page

_Started 2026-09-17 22:59 UTC_

---

## User

Diseña una landing page para "AC Motors Automotriz", lote de venta de autos seminuevos en Chihuahua. Inspírate en el estilo de automotrizsanfelipe.mx: un enfoque profesional, confiable y orientado a mostrar inventario y facilitar el contacto/financiamiento — moderno y limpio, sin ser corporativo-frío.  Estilo visual (actualizado):

Paleta: blanco y negro como colores principales — negro para fondos/headers y texto de impacto, blanco para espacios limpios y tarjetas de autos, transmitiendo elegancia y seriedad sin distracciones de color.
Acento mínimo: usar solo un gris medio o plata para elementos secundarios (líneas, iconos); si se necesita un color de CTA para que resalte (botones de "Cotizar"/WhatsApp), usar un rojo o dorado muy puntual, solo en ese elemento — el resto del sitio se mantiene estrictamente blanco/negro/grises.
Fotografía de autos en alto contraste, que luzca bien sobre fondo blanco o negro (fondos neutros, buena iluminación).
Tarjetas de inventario: fondo blanco con bordes finos negros o sombra sutil, tipografía negra sobre blanco para máxima legibilidad.
Tipografía: sans-serif bold en negro sobre blanco para títulos (Poppins, Montserrat o Inter), manteniendo el look "blanco y negro" limpio y premium. Estructura de secciones:

Hero — imagen destacada de un auto o del lote, titular fuerte tipo "Autos seminuevos de calidad, al mejor precio en Chihuahua", CTA principal ("Ver inventario" / "Cotizar por WhatsApp") y barra de confianza (4.5★, 39 reseñas, años de experiencia).
Por qué elegirnos — 3-4 puntos clave: variedad de inventario, planes de financiamiento flexibles, atención personalizada, garantía/revisión de autos.
Inventario destacado — grid de tarjetas de autos (usar placeholders: foto, marca/modelo, año, precio, botón "Ver más" o "Cotizar").
Financiamiento — sección breve explicando facilidades de crédito/planes, con CTA a WhatsApp o formulario de contacto.
Reseñas de clientes — destacar 4.5★/39 reseñas y 2-3 testimonios reales (abajo).
Ubicación y contacto — dirección, horario, teléfono, mapa embebido, botón de WhatsApp flotante.
Footer — datos de contacto, redes sociales, copyright.

Testimonios reales a incluir:

"El encargado muy amable contestó todas mis preguntas, gran variedad de autos y buenos planes de financiamiento." — Juan Baez
"Excelente servicio al cliente y buenos vehículos." — Sandra Loya Sánchez
"Servicio, precio y bastante de dónde seleccionar carros seminuevos." — David RP

Datos del negocio:

Nombre: AC Motors Automotriz
Dirección: Rep. de Perú 213, Panamericana, 31210 Chihuahua, Chih.
Horario: Cierra a las 6 p.m.
Teléfono: 614 413 7178
Calificación: 4.5★ (39 reseñas)

Tono del copy: directo, confiable, cercano — que transmita buen trato y buenos precios sin sonar a "vendedor agresivo".

## Assistant

_[tool: dc_write]_

_[tool: ready_for_verification]_

Landing lista: blanco/negro con rojo solo en los CTAs (WhatsApp/cotizar), hero negro con barra de confianza, beneficios, grid de inventario, financiamiento, reseñas reales, mapa en escala de grises y botón flotante de WhatsApp.

Dos notas: las fotos son placeholders rayados (mándame las reales y las coloco), y los autos/precios del inventario y "+10 años de experiencia" son datos de ejemplo — dime los verdaderos para reemplazarlos. En Tweaks puedes cambiar el color de acento o dejar los CTAs 100% monocromáticos.

## User

agrega ESTA FOTO en auto destacado

## Assistant

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Foto del Audi Q8 puesta en el hero como auto destacado.

## User

agrega ESTA imagen de Fondo de la seccion de inicio

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

Foto del lote como fondo del hero, en blanco y negro con degradado oscuro encima para que el titular y los CTAs sigan legibles.

## User

Quiero que "inventario" sea su propia página, no una sección del inicio.
Sácala del scroll de la página principal y créala como una ruta separada
(/inventario). El link del menú debe llevar directo a esa página nueva.

## Assistant

_[tool: dc_write]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Inventario ahora vive en `Inventario.dc.html` (página propia con su hero, filtros por tipo de carrocería, 9 unidades y CTA final). En el inicio quité la sección y tanto el link del menú como el botón "Ver inventario" del hero llevan a esa página.

