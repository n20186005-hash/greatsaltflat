export type Language = "es" | "en";
export type LegalDocument = "privacy" | "terms" | "cookies";

export const imageUrls = {
  logo: "/media/salinas-grandes-mark.png",
  hero: "/media/salinas-grandes-horizon-ccby-sa3.jpg",
  crystallization: "/media/salinas-crystallization-photoreal.jpg",
  route: "/media/ruta-52-cuesta-lipan-ccby-sa3.jpg",
  documentedPools: "/media/salinas-grandes-pools-ccby2.jpg",
} as const;

// SEO site name follows the "attraction name + city + travel guide" pattern.
export const SITE_NAME = {
  es: "Salinas Grandes, Jujuy — Guía Turística",
  en: "Salinas Grandes, Jujuy — Travel Guide",
} as const;

const location = { latitude: -23.608535, longitude: -65.867148, map: "https://maps.app.goo.gl/VENAP9GkKEWXUcsY6" };
const es = {
  locale: "es_AR", title: "Salinas Grandes, Jujuy — Guía Turística", description: "Guía independiente para conocer Salinas Grandes, Jujuy: acceso por RN 52, orientación práctica, naturaleza, cultura y planificación responsable.",
  nav: [["El salar", "#salar"], ["Comparar salares", "#compare"], ["Planificá", "#planifica"], ["Cómo llegar", "#llegar"], ["Servicios", "#servicios"], ["Preguntas", "#preguntas"]], languageLabel: "EN", languageHref: "/en/",
  eyebrow: "Puna jujeña · RN 52 · Departamento de Cochinoca", heroTitle: "Un horizonte de sal, a la altura de la Puna.", heroIntro: "Salinas Grandes es una planicie salina de escala extraordinaria sobre la Ruta Nacional 52. Esta guía independiente reúne contexto y orientación para recorrerla con preparación y respeto.", primaryCta: "Prepará tu visita", secondaryCta: "Abrir en el mapa",
  facts: [["3.450 m", "altitud media indicada"], ["66 km", "desde Purmamarca"], ["RN 52", "corredor de acceso"]],
  quickTitle: "Antes de avanzar", quickText: "La altitud, la radiación y el clima de la Puna cambian la experiencia. Llevá agua, abrigo, lentes con filtro UV, protector solar y consultá el estado de la ruta antes de salir.",
  learnKicker: "Contexto", learnTitle: "La sal no es un decorado: es territorio, trabajo y memoria.", learnBody: "La información turística nacional describe a Salinas Grandes como un antiguo ambiente lagunar cuyo proceso de evaporación formó el salar. En tiempos prehispánicos, la sal circulaba en llamas y burros; hoy, las piletas y los caminos interiores recuerdan que se trata también de un paisaje productivo.",
  locationTitle: "Una escala que orienta", locationBody: "El punto de visita de esta guía se ubica sobre la RN 52, en el Departamento de Cochinoca, Jujuy. El salar se prolonga entre las provincias de Jujuy y Salta, dentro del ambiente altoandino de la Puna.",
  routeKicker: "Recorrido", routeTitle: "Llegar es parte del paisaje.", routeBody: "Desde Purmamarca, la RN 52 asciende por la Cuesta de Lipán, cuyo punto más alto alcanza 4.170 metros según la información provincial. La vía es asfaltada, pero su estado y las condiciones de montaña deben verificarse antes de iniciar el viaje.",
  accessTitle: "Entrada y acompañamiento local", accessBody: "El acceso al interior se realiza acompañando a guías locales y por huellas conocidas. El recorrido suele incluir piletas de cristalización y los ojos del salar. No ingreses por trazas no autorizadas: la superficie, las tareas de extracción y la orientación requieren cuidado.",
  priceLabel: "Referencia de ingreso", priceValue: "ARS 24.000 por vehículo", priceNote: "La página de Jujuy Turismo indica este valor para el acompañamiento de guía. Las tarifas y condiciones pueden cambiar: confirmalas directamente antes de viajar.", bestTitle: "Mejor franja y duración", bestText: "La atención de guías comienza desde las 8:30 y puede finalizar entre las 17 y 18 horas, según la temporada. Mañana y tarde suelen ofrecer una luz más amable que el mediodía; reservá alrededor de 1,5 horas para el recorrido guiado y más tiempo para el traslado de altura.",
  planKicker: "Planificá con margen", planTitle: "Servicios: usalos como apoyo, no como garantía.", planIntro: "El parador junto a la ruta se describe como punto de visita con estacionamiento, recuerdos y acceso al recorrido. Por la altitud y la distancia, organizá las necesidades esenciales antes de dejar las localidades de base.",
  planning: [["Estacionamiento", "Hay un área de estacionamiento junto al parador, según la guía local. Seguí las indicaciones de quienes trabajan en el lugar y no circules fuera de las trazas."], ["Baños y agua", "Consultá en el parador qué servicios están disponibles ese día. Llevá agua suficiente; no dependas de encontrar reposición dentro del salar."], ["Comidas", "Planificá alimento y bebida desde Purmamarca u otra localidad de base. En el entorno puede haber propuestas sencillas, pero la disponibilidad no está garantizada."], ["Combustible y carga", "No supongas disponibilidad de combustibles, carga eléctrica ni señal constante. Salí con autonomía suficiente y un plan de regreso."]],
  gettingKicker: "Transporte", gettingTitle: "Cómo llegar sin perder de vista la altura.",
  transport: [["Desde el aeropuerto", "El aeropuerto más cercano es el Aeropuerto Internacional Gobernador Horacio Guzmán (JUJ), en la zona de San Salvador de Jujuy. Desde allí no hay transporte público directo: alquilá un auto, contratá un traslado o sumate a una excursión con antelación. El trayecto hasta el salar lleva unas 3 horas por la Ruta 9 y la RN 52, pasando por la Quebrada de Humahuaca y la Cuesta de Lipán."], ["En vehículo propio", "La ruta habitual sale de Purmamarca por la RN 52 y asciende por la Cuesta de Lipán hasta cerca de los 4.170 m. Son unos 66 km de Purmamarca al parador; desde San Salvador de Jujuy calculá unas 3 horas y desde Salta entre 4 y 5 horas por la RN 9 y la RN 52. La calzada es asfaltada, pero verificá el estado de la vía y cargá combustible antes de ascender."], ["Transporte público", "No existe bus público directo al salar, según Jujuy Turismo. Podés llegar en ómnibus a Purmamarca, Tilcara o Humahuaca (líneas desde San Salvador de Jujuy) y desde esas localidades contratar una excursión o un traslado hasta el salar. Compará horarios, qué incluye cada salida y el horario de regreso."], ["Remís o taxi", "En Purmamarca y otros pueblos de la Quebrada podés coordinar un remís o taxi. Acordá por anticipado el tiempo de espera, el regreso y qué ocurre si el clima impide el acceso. Pedí que el conductor conozca la RN 52 y la altura."], ["Excursiones de día", "Desde San Salvador de Jujuy, Tilcara, Humahuaca o Purmamarca se ofrecen salidas de día que suelen incluir guía, el acompañamiento en el salar y paradas en miradores. Confirmá qué está incluido (guía, ingreso, comida) y la hora límite de regreso antes de reservar."]],
  foodKicker: "Alrededores", foodTitle: "Comer, dormir y seguir la ruta.", foodBody: "Purmamarca funciona como la base más próxima para encontrar tipos de servicios como alojamientos, restaurantes, pequeños mercados, cajeros y proveedores de transporte. Para una visita de día, comprá agua y comida antes de subir. Si tu itinerario continúa hacia la Puna, elegí una parada de descanso conforme a la ruta, la meteorología y tu propia aclimatación.",
  nearbyTitle: "Lugares cercanos para entender la región", nearby: [["Purmamarca", "Punto de salida hacia la RN 52 y referencia de servicios para preparar el ascenso."], ["Cuesta de Lipán", "Tramo de montaña de la RN 52 donde el paisaje y la altitud cambian de forma marcada."], ["Quebrada de Humahuaca", "Paisaje cultural andino de gran escala, con localidades que pueden servir de base según el itinerario."], ["Paso de Jama", "Continuidad internacional de la RN 52; su uso requiere planificar controles, clima y documentación de frontera por separado."]],
  mapKicker: "Ubicación", mapTitle: "Salinas Grandes · RN 52", mapText: "Usá el mapa como orientación inicial y verificá en fuentes oficiales las condiciones de circulación antes de partir.",
  faqKicker: "Preguntas frecuentes", faqTitle: "Respuestas para una visita responsable.", faq: [["¿Dónde están las Salinas Grandes de esta guía?", "El punto de visita se encuentra sobre la Ruta Nacional 52, en el Departamento de Cochinoca, provincia de Jujuy. El salar se extiende entre Jujuy y Salta."], ["¿Hay bus público directo?", "No. Jujuy Turismo informa que no existe transporte público directo al salar. Es posible organizar vehículo, excursión, traslado contratado o transporte desde localidades cercanas."], ["¿Puedo entrar por mi cuenta al interior del salar?", "La recomendación local es ingresar con guía y seguir las huellas conocidas. El recorrido interior pasa por áreas de trabajo y caminos que no se aconseja transitar sin conocimiento del terreno."], ["¿Qué equipo debo llevar?", "Ropa de abrigo, calzado apropiado, agua, lentes de sol, sombrero o gorro y protector solar. La altitud y el reflejo sobre la sal requieren especial atención."], ["¿Cuándo conviene visitar?", "Las horas de mañana y el atardecer suelen ser más confortables que el mediodía. En época de lluvias, entre diciembre y marzo, revisá el estado de la ruta."]],
  sourceTitle: "Fuentes para seguir verificando", sourceText: "Esta guía relaciona el nombre del sitio, su ubicación, la RN 52 y el Departamento de Cochinoca con fuentes públicas. No reemplaza los avisos de autoridades, guías locales ni condiciones vigentes en el camino.", nonOfficial: "Guía turística independiente y sin fines de lucro. No representa a Salinas Grandes, a organismos públicos ni a prestadores turísticos.", footerSource: "Contenido contrastado con fuentes públicas del Ministerio de Cultura y Turismo de Jujuy y del Instituto Nacional de Promoción Turística (Visit Argentina); no contiene recomendaciones comerciales.", copyright: "© 2026 Guía Salinas Grandes. Todos los derechos reservados.", legal: [["Privacidad", "/privacy"], ["Términos", "/terms"], ["Cookies", "/cookies"]], photoCredit: "Fotografía documental de piletas: Guerretto, CC BY 2.0, vía Wikimedia Commons.",
} as const;

const en = {
  ...es, locale: "en_US", title: "Salinas Grandes, Jujuy: Great Salt Flat Argentina — RN 52 Travel Guide", description: "Independent guide to Salinas Grandes, Jujuy: access via RN 52, practical orientation, natural context, local culture and responsible trip planning.", nav: [["The salt flat", "#salar"], ["Plan ahead", "#planifica"], ["Getting there", "#llegar"], ["Compare salt flats", "#compare"], ["Services", "#servicios"], ["FAQ", "#preguntas"]], languageLabel: "ES", languageHref: "/",
  eyebrow: "Jujuy Puna · RN 52 · Cochinoca Department", heroTitle: "A salt horizon at Puna altitude.", heroIntro: "Salinas Grandes is an extraordinary salt plain on National Route 52. This independent guide brings together context and practical orientation for a prepared, respectful visit.", primaryCta: "Plan your visit", secondaryCta: "Open map", facts: [["3,450 m", "reported average altitude"], ["66 km", "from Purmamarca"], ["RN 52", "access corridor"]],
  quickTitle: "Before you go farther", quickText: "Puna altitude, radiation and weather shape the experience. Carry water, warm layers, UV-filtering sunglasses and sunscreen, and check the road status before leaving.", learnKicker: "Context", learnTitle: "Salt is not a backdrop: it is land, work and memory.", learnBody: "National tourism information describes Salinas Grandes as a former lake environment whose evaporation formed the salt flat. In pre-Hispanic times, salt was transported by llamas and donkeys; today, its pools and interior tracks still show that this is also a working landscape.", locationTitle: "A scale that helps you orient yourself", locationBody: "This guide’s visit point is on RN 52 in Cochinoca Department, Jujuy. The salt flat extends between the provinces of Jujuy and Salta in the high-Andean Puna environment.",
  routeKicker: "The route", routeTitle: "Getting there is part of the landscape.", routeBody: "From Purmamarca, RN 52 climbs through Cuesta de Lipán, whose highest point reaches 4,170 metres according to provincial information. The road is paved, yet mountain conditions and current road status must be checked before travel.", accessTitle: "Admission and local accompaniment", accessBody: "Entry to the interior is done with local guides and on established tracks. The route commonly includes crystallisation pools and the salt flat’s water eyes. Do not enter by unauthorised tracks: surface conditions, extraction work and navigation all require care.", priceLabel: "Admission reference", priceValue: "ARS 24,000 per vehicle", priceNote: "The Jujuy Turismo page lists this amount for guided accompaniment. Fees and conditions can change; confirm directly before travelling.", bestTitle: "Best time and length of stay", bestText: "Guide service starts from 8:30 and may finish between 17:00 and 18:00 depending on season. Morning and late afternoon are usually gentler than noon; allow roughly 1.5 hours for the guided route, plus ample time for high-altitude travel.",
  planKicker: "Leave room in your plan", planTitle: "Facilities: use them as support, not as a guarantee.", planIntro: "The roadside parador is described as a visitor point with parking, souvenirs and access to the route. Given the altitude and distances, arrange essential needs before leaving your base town.", planning: [["Parking", "A parking area is reported beside the parador. Follow the direction of people working on site, and do not drive outside marked tracks."], ["Toilets and water", "Ask the parador what is available that day. Bring sufficient drinking water; do not depend on restocking within the salt flat."], ["Food", "Plan food and drinks from Purmamarca or another base town. Simple options may be present in the area, but availability is not guaranteed."], ["Fuel and charging", "Do not assume fuel, EV charging or continuous signal near the salt flat. Start with enough range and a return plan."]],
  gettingKicker: "Transport", gettingTitle: "Getting there while respecting altitude.", transport: [["From the airport", "The nearest airport is Governor Horacio Guzmán International (JUJ), near San Salvador de Jujuy. There is no direct public transport from there: rent a car, book a transfer or join an excursion in advance. The drive to the salt flat takes about 3 hours via Route 9 and RN 52, through the Quebrada de Humahuaca and over Cuesta de Lipán."], ["By car", "The usual route leaves Purmamarca on RN 52 and climbs Cuesta de Lipán to nearly 4,170 m. It is about 66 km from Purmamarca to the parador; allow roughly 3 hours from San Salvador de Jujuy and 4–5 hours from Salta via RN 9 and RN 52. The road is paved, but check conditions and fuel up before the climb."], ["Public transport", "There is no direct public bus to the salt flat according to Jujuy Turismo. You can reach Purmamarca, Tilcara or Humahuaca by bus (lines from San Salvador de Jujuy) and from those towns hire an excursion or transfer to the salar. Compare schedules, what each trip includes and the return time."], ["Hired taxi or remís", "In Purmamarca and other Quebrada towns you can arrange a remís or taxi. Agree in advance on waiting time, the return trip and the plan if weather blocks access. Ask for a driver familiar with RN 52 and altitude."], ["Day excursions", "From San Salvador de Jujuy, Tilcara, Humahuaca or Purmamarca, day trips usually include a guide, the accompanied visit on the salt flat and viewpoint stops. Confirm what is included (guide, entry, food) and the latest return time before booking."]],
  foodKicker: "In the surrounding area", foodTitle: "Eat, sleep and continue the route.", foodBody: "Purmamarca is the nearest base for lodging, restaurants, small food shops, cash access and transport providers. For a day visit, purchase water and food before the ascent. If you continue into the Puna, choose a rest stop based on the route, weather and your own acclimatisation.", nearbyTitle: "Nearby places that add regional context", nearby: [["Purmamarca", "The departure point for RN 52 and a service reference for preparing the ascent."], ["Cuesta de Lipán", "The mountain section of RN 52, where scenery and altitude change sharply."], ["Quebrada de Humahuaca", "A large Andean cultural landscape, with towns that can serve as itinerary bases."], ["Paso de Jama", "The international continuation of RN 52; use requires separate planning for border documentation and weather."]],
  mapKicker: "Location", mapTitle: "Salinas Grandes · RN 52", mapText: "Use the map as a starting point, then confirm current driving conditions through official sources before departure.", faqKicker: "Frequently asked questions", faqTitle: "Answers for a responsible visit.", faq: [["Where are the Salinas Grandes covered by this guide?", "The visit point is on National Route 52, in Cochinoca Department, Jujuy Province. The salt flat extends between Jujuy and Salta."], ["Is there a direct public bus?", "No. Jujuy Turismo states that there is no direct public transport to the salt flat. A vehicle, tour, booked transfer or transport from nearby towns can be arranged."], ["Can I enter the salt flat interior by myself?", "The local recommendation is to enter with a guide and use known tracks. The interior route goes through working areas and roads that are not advised without local knowledge."], ["What should I bring?", "Warm layers, suitable footwear, water, sunglasses, a hat or cap and sunscreen. The altitude and reflection from the salt surface need particular attention."], ["When is a good time to visit?", "Morning and late afternoon are generally more comfortable than noon. During the rainy season, between December and March, check RN 52 road status."]],
  sourceTitle: "Sources for continued checking", sourceText: "This guide connects the place name, location, RN 52 and Cochinoca Department to public sources. It does not replace notices issued by authorities, local guides or current road conditions.", nonOfficial: "An independent, non-profit visitor guide. It does not represent Salinas Grandes, public authorities or tourism providers.", footerSource: "Content is cross-checked against public sources from the Ministry of Culture and Tourism of Jujuy and the National Institute for Tourism Promotion (Visit Argentina); no commercial recommendations are included.", copyright: "© 2026 Salinas Grandes Guide. All rights reserved.", legal: [["Privacy", "/en/privacy"], ["Terms", "/en/terms"], ["Cookies", "/en/cookies"]], photoCredit: "Documentary pool photograph: Guerretto, CC BY 2.0, via Wikimedia Commons.",
} as const;
export const copy = { es, en } as const;

const legalSections = {
  es: {
    privacy: [["Información que recopilamos", "Solo recopilamos el mínimo de datos necesario para prestar el servicio. Esto puede incluir datos de navegación como dirección IP, tipo de navegador y páginas visitadas; cookies y tecnologías similares; y la información que usted entregue voluntariamente por un canal de contacto."], ["Cómo usamos la información", "Usamos esta información para mejorar el contenido y la experiencia de uso, analizar patrones agregados de tráfico, responder solicitudes y cumplir obligaciones legales. No vendemos datos personales ni incluimos recomendaciones comerciales pagadas."], ["Servicios de terceros", "El sitio puede incorporar Google Maps para mostrar la ubicación y Google Analytics, solo si usted habilita las cookies analíticas. El módulo meteorológico consulta desde su navegador la API pública de Open-Meteo con las coordenadas fijas de Salinas Grandes, sin crear una cuenta de usuario en este sitio. Cada servicio cuenta con su propia política de privacidad."], ["Sus derechos", "Según el RGPD y la normativa aplicable, puede solicitar acceso, rectificación o supresión de datos personales; oponerse a determinados tratamientos; y presentar una reclamación ante la autoridad competente."]],
    terms: [["Uso del contenido", "Todo el contenido se ofrece con fines informativos. Somos un proyecto independiente de información turística y no estamos afiliados a ningún atractivo, organismo gubernamental u operador comercial."], ["Exactitud de la información", "Buscamos ofrecer información clara y contrastada, pero no garantizamos que sea completa o esté actualizada en todo momento. Itinerarios, condiciones, servicios, tarifas y accesos pueden cambiar sin aviso. Verifique siempre la información importante mediante fuentes oficiales antes de viajar."], ["Propiedad intelectual", "El diseño y los contenidos originales están protegidos. Las fotografías de terceros mantienen los derechos de sus autores y se muestran con la atribución o licencia correspondiente."], ["Limitación de responsabilidad", "El sitio se proporciona tal como está, sin garantía de ningún tipo. No asumimos responsabilidad por pérdidas relacionadas con el uso de esta información, incluso las vinculadas con decisiones de viaje."]],
    cookies: [["Cookies necesarias", "Son esenciales para el funcionamiento técnico del sitio y no se pueden desactivar desde esta página."], ["Cookies analíticas", "Al habilitarlas, permite la carga de Google Analytics para recopilar información agregada y anónima sobre el uso del sitio. Puede cambiar esta elección en cualquier momento."], ["Cookies de preferencias", "Guardan ajustes como el idioma elegido y la preferencia de cookies en su navegador. No se usan cookies de publicidad personalizada."], ["Gestión del consentimiento", "Puede guardar sus preferencias o rechazar todas las cookies no esenciales. Deshabilitar determinadas cookies puede limitar funciones que dependen de recordar ajustes."]],
  },
  en: {
    privacy: [["Information we collect", "We collect only the minimum information needed to provide the service. This may include browsing data such as IP address, browser type and visited pages; cookies and similar technologies; and information that you voluntarily provide through a contact channel."], ["How we use information", "We use information to improve content and the user experience, analyse aggregated traffic patterns, respond to requests and comply with legal obligations. We do not sell personal data or publish paid commercial recommendations."], ["Third-party services", "The site may embed Google Maps for location display and Google Analytics only if you enable analytical cookies. The weather module requests Open-Meteo’s public API from your browser using fixed Salinas Grandes coordinates and does not create an account for you on this site. Each service has its own privacy policy."], ["Your rights", "Under the GDPR and applicable law, you may request access to, correction or deletion of personal data; object to certain processing; and lodge a complaint with the competent authority."]],
    terms: [["Content use", "All content is provided for information only. We are an independent travel-information project and are not affiliated with any attraction, government institution or commercial operator."], ["Information accuracy", "We aim to provide clear, cross-checked information but cannot guarantee that it is complete or current at all times. Itineraries, conditions, facilities, fees and access can change without notice. Always verify important details through official sources before travel."], ["Intellectual property", "The design and original content are protected. Third-party photographs retain their creators’ rights and are shown with the relevant attribution or licence."], ["Limitation of liability", "The site is provided as is, without warranty of any kind. We accept no liability for losses related to use of this information, including travel decisions based on it."]],
    cookies: [["Necessary cookies", "These are essential to the technical operation of the site and cannot be disabled from this page."], ["Analytics cookies", "When enabled, these allow Google Analytics to load and collect aggregated, anonymous information about site use. You can change this choice at any time."], ["Preference cookies", "These store settings such as your selected language and cookie preference in your browser. No personalised advertising cookies are used."], ["Consent management", "You may save your preferences or reject all non-essential cookies. Disabling some cookies may limit functions that depend on remembering settings."]],
  },
} as const;
export const legalCopy = {
  es: { privacy: { title: "Política de privacidad", intro: "Última actualización: agosto de 2026. Esta guía independiente minimiza la recolección de información y explica de manera transparente cómo se tratan los datos de navegación.", sections: legalSections.es.privacy }, terms: { title: "Términos de uso", intro: "Última actualización: agosto de 2026. Al acceder y utilizar esta guía, usted acepta estos términos.", sections: legalSections.es.terms }, cookies: { title: "Preferencias de cookies", intro: "Última actualización: agosto de 2026. Las cookies ayudan a que la guía recuerde sus ajustes y, si usted lo permite, a comprender de manera agregada cómo se usa el sitio.", sections: legalSections.es.cookies } },
  en: { privacy: { title: "Privacy policy", intro: "Last updated: August 2026. This independent guide minimises data collection and explains clearly how browsing information is handled.", sections: legalSections.en.privacy }, terms: { title: "Terms of use", intro: "Last updated: August 2026. By accessing and using this guide, you agree to these terms.", sections: legalSections.en.terms }, cookies: { title: "Cookie preferences", intro: "Last updated: August 2026. Cookies help the guide remember your settings and, if you allow it, understand in aggregate how the site is used.", sections: legalSections.en.cookies } },
} as const;
export const attractionSchema = {
  "@context": "https://schema.org",
  "@type": ["TouristAttraction", "LocalBusiness"],
  "@id": "https://greatsaltflat.com/#attraction",
  "name": "Salinas Grandes — Parador La Curva",
  "alternateName": ["Great Salt Flat", "Salinas Grandes", "Great Salt Flat Argentina", "Salinas Grandes, Jujuy"],
  "description": "Salt flat visitor point on Ruta Nacional 52 in the Puna of Jujuy, Argentina.",
  "url": "https://greatsaltflat.com",
  "image": ["https://greatsaltflat.com/media/salinas-grandes-horizon-ccby-sa3.jpg"],
  "telephone": "+543885129817",
  "address": { "@type": "PostalAddress", streetAddress: "Ruta Nacional 52, km 60, Parador La Curva", addressLocality: "Salinas Grandes", addressRegion: "Jujuy", postalCode: "Y4618", addressCountry: "AR" },
  "geo": { "@type": "GeoCoordinates", ...location },
  "hasMap": location.map,
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "9921", "bestRating": "5", "worstRating": "1" },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"], "opens": "08:30", "closes": "18:00" }],
  "priceRange": "ARS",
  "sameAs": [location.map, "https://www.argentina.travel/actividades/salinas-grandes-jujuy", "https://www.jujuyturismo.com.ar/salinas-grandes.html"]
} as const;

// Public visitor facts shown on the page and mirrored in structured data (rating, phone, Plus Code).
export const placeFacts = {
  ratingValue: "4.8",
  reviewCount: "9921",
  telephone: "+543885129817",
  plusCode: "94RP+H5",
  postalCode: "Y4618",
} as const;

// Extended guide content: visitor services, seasonal strategy, itineraries, routes and science.
// Type-neutral, non-commercial: describes categories of services, never specific businesses.
export const guide = {
  es: {
    services: {
      kicker: "En el parador y la base",
      title: "Servicios y equipamiento de visita",
      intro: "El parador junto a la Ruta Nacional 52 funciona como punto de apoyo para quienes recorren el salar. Por la altura y la distancia, organizá lo esencial antes de dejar la localidad de base. Lo siguiente describe tipos de servicios, sin recomendar comercios concretos.",
      items: [
        ["Baños y agua", "El parador cuenta con servicios sanitarios; conviene confirmar la disponibilidad del día con quienes trabajan en el lugar. Llevá tu propia agua: dentro del salar no hay reposo ni reposición segura, y la deshidratación en altura se siente pronto."],
        ["Estacionamiento", "Hay un área de estacionamiento junto al parador, señalizada para los vehículos que realizan el recorrido guiado. No circule fuera de las trazas habilitadas."],
        ["Comidas y bebidas", "En Purmamarca y otras localidades de base encontrás restaurantes, cafeterías y pequeños mercados. En el entorno del salar puede haber propuestas sencillas, pero no está garantizado; completá provisiones antes de subir."],
        ["Alojamiento", "La oferta de hospedaje (hoteles, hosterías, cabañas y campamentos organizados) se concentra en Purmamarca, Tilcara, Humahuaca y San Salvador de Jujuy. No hay alojamiento dentro del salar."],
        ["Compras y comercios", "En las localidades de la Quebrada de Humahuaca hay almacenes, artesanías y servicios básicos. Llevá efectivo: en zonas rurales los medios electrónicos no siempre funcionan."],
        ["Combustible y carga", "Cargá combustible en San Salvador de Jujuy, Tilcara o Humahuaca antes de ascender. No hay estaciones de servicio ni cargadores para vehículos eléctricos en el salar; salí con el tanque completo y un margen de autonomía."]
      ] as const
    },
    seasonal: {
      kicker: "Estrategia de visita",
      title: "Cuándo ir: un cuadro por estación",
      intro: "La Puna tiene clima de altura: días intensos, noches frías y fuerte radiación. El cuadro resume patrones típicos de la zona (promedios orientativos, no una predicción).",
      note: "En la época de lluvias, entre diciembre y marzo, la sal puede cubrirse de agua y el acceso interior cambia; verificá el estado de la RN 52 el mismo día.",
      columns: ["Temporada", "Clima y cielo", "Acceso y superficie", "Recomendación"] as const,
      rows: [
        ["Verano (dic–mar)", "Lluvias vespertinas, tormentas, cielo variable", "Sal húmedo; el interior puede cerrarse", "Revisá la ruta cada día; preferí la mañana"],
        ["Otoño (abr–jun)", "Días despejados, noches frías", "Superficie estable, acceso más previsible", "Ventana cómoda para recorrer con calma"],
        ["Invierno (jul–sep)", "Seco, frío intenso al amanecer, cielo limpio", "Buena visibilidad y superficie firme", "Abrigate en capas; salí tras el sol para evitar el hielo matinal"],
        ["Primavera (oct–nov)", "Viento y contrastes térmicos", "Transición estable en general", "Protección solar y abrigo; consultá el viento"]
      ] as const
    },
    itineraries: {
      kicker: "Según tu grupo",
      title: "Itinerarios según el tipo de visitante",
      intro: "Elegí según la composición y el ritmo. Todas las opciones comparten la precaución por la altura y la confirmación de la ruta.",
      items: [
        { tag: "Familias", title: "Familias con niños", body: "Priorizá horarios templados y pausas frecuentes. El recorrido guiado por las piletas y los ojos del salar es accesible a pie, pero la altura y el reflejo exigen agua, gorro y protección solar desde el inicio.", tips: ["Salí después de las 9–10 h para evitar el frío matinal", "Llevá snacks, agua y algo de juego para las pausas", "Consultá con los guías el recorrido de menor esfuerzo para los más pequeños"] },
        { tag: "Fotografía", title: "Fotografía y naturaleza", body: "La luz más suave está en la mañana temprana y el atardecer; el mediodía aplana el contraste. Los ojos de agua y las cristalizaciones dan reflejos cambiantes según la humedad.", tips: ["Llevá filtro polarizador y un paño para el polvo de sal", "Cuidá los equipos del viento y la sal", "Preguntá a los guías por los puntos de menor impacto ambiental"] },
        { tag: "Bajo esfuerzo", title: "Bajo esfuerzo y accesibilidad", body: "La zona del parador y la vista del salar son recorribles sin adentrarse. El interior requiere caminata sobre superficie irregular; evaluá tu comodidad con los guías antes de avanzar.", tips: ["Quedate en la zona señalizada del parador", "Usá calzado firme aunque no entres al interior", "Evitá la exposición prolongada al mediodía"] }
      ] as const
    },
    routes: {
      kicker: "Rutas sugeridas",
      title: "Rutas generales: medio día y día completo",
      intro: "Dos recorridos base que podés combinar con la Quebrada de Humahuaca.",
      halfDay: { title: "Medio día desde Purmamarca", steps: ["Subida por RN 52 y Cuesta de Lipán", "Llegada al parador y mirador del salar", "Recorrido guiado por piletas y ojos del salar", "Regreso a la base antes del mediodía intenso"] },
      fullDay: { title: "Día completo por la Puna", steps: ["Salida temprana desde San Salvador de Jujuy o la Quebrada", "Cuesta de Lipán y paradas en miradores", "Visita al salar con guía local", "Almuerzo en una localidad de base", "Retorno por la tarde con luz suave"] }
    },
    science: {
      kicker: "Ciencia y cuidado",
      title: "Lo que el salar enseña, y cómo cuidarlo",
      intro: "Salinas Grandes no es un decorado: es un ecosistema de altura, un paisaje productivo y un territorio con memoria.",
      items: [
        ["Agua y sal", "El salar se formó por la evaporación de antiguos lagos. La capa de sal y los ojos de agua dulce conviven en un equilibrio frágil que depende de la lluvia y la filtración."],
        ["Vida de altura", "Aves y plantas adaptadas a la Puna resisten sequedad, sal y frío. Observalos sin acercarlos ni alimentarlos: tu presencia ya altera su rutina."],
        ["Trabajo y extracción", "La sal se obtiene en piletas de cristalización. Respetá las áreas de trabajo y seguí solo las huellas autorizadas con guía."],
        ["Respeto y huella cero", "Caminá por las trazas señalizadas, no dejes residuos y reducí tu huella. El salar se mantiene limpio si cada visitante se lleva lo que trajo."],
        ["Seguridad en altura", "A unos 3.450 m, la radiación y el frío son intensos. Hidratate, abrigate por capas y consultá si aparecen síntomas de mal de altura."]
      ] as const
    }
  },
  en: {
    services: {
      kicker: "At the parador and base towns",
      title: "Visitor services and facilities",
      intro: "The roadside parador on Ruta Nacional 52 is the support point for visitors to the salt flat. Given the altitude and distances, arrange essentials before leaving your base town. The following describes categories of services, never specific businesses.",
      items: [
        ["Toilets and water", "The parador has toilet facilities; it is worth confirming the day’s availability with the people working there. Bring your own water: there is no rest or reliable refill inside the salt flat, and dehydration at altitude sets in quickly."],
        ["Parking", "A parking area sits beside the parador, marked for vehicles doing the guided route. Do not drive outside the authorised tracks."],
        ["Food and drink", "In Purmamarca and other base towns you will find restaurants, cafés and small markets. Simple options may exist near the salt flat, but availability is not guaranteed; stock up before the climb."],
        ["Lodging", "Accommodation (hotels, inns, cabins and organised camps) is concentrated in Purmamarca, Tilcara, Humahuaca and San Salvador de Jujuy. There is no lodging inside the salt flat."],
        ["Shops and supplies", "The towns of the Quebrada de Humahuaca have grocery stores, craft shops and basic services. Carry cash: electronic payments are not always reliable in rural areas."],
        ["Fuel and charging", "Refuel in San Salvador de Jujuy, Tilcara or Humahuaca before ascending. There are no fuel stations or chargers for electric vehicles at the salt flat; leave with a full tank and a margin of range."]
      ] as const
    },
    seasonal: {
      kicker: "Visit strategy",
      title: "When to go: a season-by-season table",
      intro: "The Puna has high-altitude weather: intense days, cold nights and strong radiation. The table summarises typical regional patterns (indicative averages, not a forecast).",
      note: "In the rainy season, between December and March, the salt can be covered with water and interior access changes; check RN 52 conditions on the day.",
      columns: ["Season", "Weather and sky", "Access and surface", "Recommendation"] as const,
      rows: [
        ["Summer (Dec–Mar)", "Afternoon rain, storms, variable sky", "Wet salt; interior may close", "Check the road daily; prefer the morning"],
        ["Autumn (Apr–Jun)", "Clear days, cold nights", "Stable surface, more predictable access", "Comfortable window to explore at ease"],
        ["Winter (Jul–Sep)", "Dry, severe dawn cold, clear sky", "Good visibility and firm surface", "Dress in layers; leave after sunrise to avoid morning ice"],
        ["Spring (Oct–Nov)", "Wind and thermal contrasts", "Generally stable transition", "Sun protection and warm layers; watch the wind"]
      ] as const
    },
    itineraries: {
      kicker: "By your group",
      title: "Itineraries by type of visitor",
      intro: "Choose by group composition and pace. All options share altitude caution and same-day route confirmation.",
      items: [
        { tag: "Families", title: "Families with children", body: "Favour mild hours and frequent breaks. The guided walk through the pools and water eyes is walkable, but altitude and glare demand water, a hat and sun protection from the start.", tips: ["Leave after 9–10 a.m. to avoid the dawn cold", "Bring snacks, water and something to occupy the breaks", "Ask guides for the lowest-effort route for the youngest"] },
        { tag: "Photography", title: "Photography and nature", body: "The softest light is early morning and at sunset; midday flattens contrast. The water eyes and salt crystals give shifting reflections depending on humidity.", tips: ["Bring a polariser and a cloth for salt dust", "Protect gear from wind and salt", "Ask guides for the lowest-impact viewpoints"] },
        { tag: "Low effort", title: "Low effort and accessibility", body: "The parador area and the salt flat view are visitable without going inside. The interior needs walking on uneven surface; assess your comfort with guides before advancing.", tips: ["Stay in the parador’s marked area", "Wear sturdy shoes even if you do not enter", "Avoid prolonged midday exposure"] }
      ] as const
    },
    routes: {
      kicker: "Suggested routes",
      title: "General routes: half day and full day",
      intro: "Two base itineraries you can combine with the Quebrada de Humahuaca.",
      halfDay: { title: "Half day from Purmamarca", steps: ["Climb RN 52 and Cuesta de Lipán", "Arrive at the parador and salt flat viewpoint", "Guided walk through pools and water eyes", "Return to base before the intense midday"] },
      fullDay: { title: "Full day across the Puna", steps: ["Early start from San Salvador de Jujuy or the Quebrada", "Cuesta de Lipán and viewpoint stops", "Guided visit to the salt flat", "Lunch in a base town", "Return in the afternoon with soft light"] }
    },
    science: {
      kicker: "Science and care",
      title: "What the salt flat teaches, and how to care for it",
      intro: "Salinas Grandes is not a backdrop: it is a high-altitude ecosystem, a working landscape and a territory with memory.",
      items: [
        ["Water and salt", "The salt flat formed by the evaporation of ancient lakes. The salt crust and the fresh-water eyes coexist in a fragile balance shaped by rainfall and filtration."],
        ["High-altitude life", "Birds and plants adapted to the Puna endure dryness, salt and cold. Observe them without approaching or feeding; your presence already disrupts their routine."],
        ["Work and extraction", "Salt is harvested in crystallisation ponds. Respect work areas and follow only the authorised tracks with a guide."],
        ["Respect and zero footprint", "Walk the marked tracks, leave no litter and reduce your footprint. The salt flat stays clean only if every visitor takes away what they brought."],
        ["Altitude safety", "At about 3,450 m, radiation and cold are intense. Hydrate, dress in layers and seek help if altitude sickness symptoms appear."]
      ] as const
    }
  }
} as const;
