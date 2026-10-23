export type Language = "es" | "en";
export type LegalDocument = "privacy" | "terms" | "cookies";
export const SITE_NAME = {
  "es": "Salinas Grandes, Jujuy — Guía Turística",
  "en": "Salinas Grandes, Jujuy — Travel Guide"
} as const;
export const attractionSchema = {
  "@context": "https://schema.org",
  "@type": [
    "TouristAttraction",
    "Place"
  ],
  "@id": "https://greatsaltflat.com/#attraction",
  "name": "Salinas Grandes — punto de visita RN 52",
  "alternateName": [
    "Great Salt Flat",
    "Salinas Grandes, Jujuy"
  ],
  "url": "https://greatsaltflat.com/",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "RN 52 km 60, Parador La Curva",
    "addressLocality": "Salinas Grandes",
    "addressRegion": "Jujuy",
    "postalCode": "Y4618",
    "addressCountry": "AR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -23.6085346,
    "longitude": -65.8645729
  },
  "hasMap": "https://maps.app.goo.gl/VENAP9GkKEWXUcsY6",
  "sameAs": [
    "https://maps.app.goo.gl/VENAP9GkKEWXUcsY6"
  ]
} as const;
export const copy = {
  "es": {
    "locale": "es_AR",
    "title": "Salinas Grandes, Jujuy: guía, acceso y cómo llegar",
    "description": "Planificá Salinas Grandes por RN 52: punto de referencia en Jujuy, guía local, costos a confirmar, horarios publicados y preparación para la altura.",
    "nav": [
      [
        "El salar",
        "#salar"
      ],
      [
        "Qué lugar es",
        "#compare"
      ],
      [
        "Planificá",
        "#planifica"
      ],
      [
        "Cómo llegar",
        "#llegar"
      ],
      [
        "Servicios",
        "#servicios"
      ],
      [
        "Preguntas",
        "#preguntas"
      ]
    ],
    "languageLabel": "EN",
    "languageHref": "/en/",
    "eyebrow": "Puna jujeña · RN 52 · Argentina",
    "heroTitle": "Salinas Grandes, en la Puna de Jujuy.",
    "heroIntro": "Un paisaje de sal entre Jujuy y Salta. Prepará el viaje por RN 52, confirmá el ingreso con guías locales y respetá los sectores de trabajo.",
    "primaryCta": "Prepará tu visita",
    "secondaryCta": "Abrir en el mapa",
    "facts": [
      [
        "RN 52",
        "corredor de acceso"
      ],
      [
        "Guía local",
        "para ingresar al salar"
      ],
      [
        "Puna",
        "paisaje de altura"
      ]
    ],
    "quickTitle": "Antes de avanzar",
    "quickText": "La altitud, la radiación y el clima de la Puna cambian la experiencia. Llevá agua, abrigo, lentes con filtro UV, protector solar y consultá el estado de la ruta antes de salir.",
    "learnKicker": "Contexto",
    "learnTitle": "La sal no es un decorado: es territorio, trabajo y memoria.",
    "learnBody": "Salinas Grandes es un salar y un paisaje de extracción de sal. La información nacional invita a conocer los piletones de procesamiento y las artesanías; no es un lago destinado a nadar ni una superficie para circular libremente.",
    "locationTitle": "Una escala que orienta",
    "locationBody": "El punto de referencia de esta guía está en RN 52 km 60, Parador La Curva, Jujuy. No identifica todos los accesos del salar.",
    "routeKicker": "Recorrido",
    "routeTitle": "Llegar es parte del paisaje.",
    "routeBody": "Visit Argentina describe la llegada desde Purmamarca por RN 52 y Cuesta de Lipán. El paso de montaña supera los 4.000 metros: dejá margen para el recorrido y verificá el estado vial antes de salir.",
    "accessTitle": "Entrada y acompañamiento local",
    "accessBody": "Visit Argentina, en su nota del 11 de junio de 2026, indica que el acceso al salar requiere guía local y tiene un cargo de ingreso y de guía. Confirmá el recorrido habilitado en el parador antes de avanzar y seguí sus indicaciones.",
    "priceLabel": "Referencia de ingreso",
    "priceValue": "Consultar importe vigente",
    "priceNote": "No verificamos una tarifa actual única para este punto. Preguntá si se cobra por persona o vehículo, qué incluye el guía, medios de pago y último ingreso. No confundas una excursión desde tu ciudad de base con el cargo local.",
    "bestTitle": "Horario publicado: referencia fechada",
    "bestText": "La ficha de Google Maps mostraba 09:00–18:00 todos los días el 23/10/2026. Es el horario publicado de este punto, no una garantía de acceso a todo el salar. Confirmá guía, último ingreso y condiciones antes de viajar.",
    "planKicker": "Planificá con margen",
    "planTitle": "Servicios: usalos como apoyo, no como garantía.",
    "planIntro": "Organizá agua, abrigo, transporte y regreso antes del ascenso. Consultá qué está disponible en el punto de visita; una descripción general no garantiza cada servicio.",
    "planning": [
      [
        "Ingreso y estacionamiento",
        "Al llegar, consultá dónde detener el vehículo y cómo se organiza el recorrido. No conduzcas por la superficie fuera de las indicaciones del guía."
      ],
      [
        "Baños y agua",
        "Preguntá por sanitarios y su disponibilidad para tu grupo. Llevá agua suficiente, sin depender de una reposición en el interior."
      ],
      [
        "Comida",
        "Prepará tus provisiones en la localidad de base. Consultá los servicios abiertos si necesitás comer en el parador."
      ],
      [
        "Regreso",
        "Confirmá recogida, combustible, autonomía y medios de pago antes de subir; no dependas de conectividad continua."
      ]
    ],
    "gettingKicker": "Transporte",
    "gettingTitle": "Cómo llegar sin perder de vista la altura.",
    "transport": [
      [
        "Desde tu llegada a Jujuy o Salta",
        "Organizá el traslado completo hasta el punto de RN 52 y el regreso con un prestador. Compará el recorrido real y lo que incluye; no presentamos un tiempo fijo desde un aeropuerto."
      ],
      [
        "Desde Purmamarca por RN 52",
        "La información nacional sitúa el salar a unos 66 km por la Cuesta de Lipán. Es una referencia de recorrido, no una duración garantizada ni una puerta exacta. Revisá el estado vial y las condiciones de altura."
      ],
      [
        "Transporte público",
        "No confirmamos un servicio regular directo para esta fecha. Consultá al operador vigente y resolvé el último tramo y el regreso antes de viajar."
      ],
      [
        "Excursión o traslado contratado",
        "Preguntá si incluye guía local, cargo de acceso, esperas y recogida. Acordá qué ocurre si no se habilita el recorrido por condiciones del día."
      ]
    ],
    "foodKicker": "Alrededores",
    "foodTitle": "Comer, dormir y seguir la ruta.",
    "foodBody": "Organizá alojamiento y provisiones desde tu localidad de base, por ejemplo Purmamarca. Consultá la oferta real y el regreso según tu ruta; no asumimos servicios abiertos o alojamiento dentro del salar.",
    "nearbyTitle": "Lugares cercanos para entender la región",
    "nearby": [
      [
        "Purmamarca",
        "Punto de salida hacia la RN 52 y referencia de servicios para preparar el ascenso."
      ],
      [
        "Cuesta de Lipán",
        "Tramo de montaña de la RN 52 donde el paisaje y la altitud cambian de forma marcada."
      ],
      [
        "Quebrada de Humahuaca",
        "Paisaje cultural andino de gran escala, con localidades que pueden servir de base según el itinerario."
      ],
      [
        "Paso de Jama",
        "Continuidad internacional de la RN 52; su uso requiere planificar controles, clima y documentación de frontera por separado."
      ]
    ],
    "mapKicker": "Ubicación",
    "mapTitle": "Salinas Grandes · RN 52",
    "mapText": "Usá el mapa como orientación inicial y verificá en fuentes oficiales las condiciones de circulación antes de partir.",
    "faqKicker": "Preguntas frecuentes",
    "faqTitle": "Respuestas para una visita responsable.",
    "faq": [
      [
        "¿Dónde está la Great Salt Flat de esta guía?",
        "Se trata de Salinas Grandes, en el norte de Argentina, entre Jujuy y Salta. El punto de referencia de esta guía está en RN 52 km 60, Parador La Curva, Jujuy. No identifica la totalidad del salar ni cada acceso."
      ],
      [
        "¿Es un lago?",
        "Es una planicie salina y un paisaje de extracción de sal. Puede haber agua en ciertas condiciones, pero no es una zona de baño. No ingreses a piletones o áreas de trabajo."
      ],
      [
        "¿Hace falta guía y cuánto cuesta?",
        "Visit Argentina, en su nota del 11/06/2026, indica guía local obligatorio y cargo de acceso y guiado. No verificamos una tarifa actual única: confirmá el importe, la unidad de cobro y lo incluido antes de entrar."
      ],
      [
        "¿Qué horario tiene?",
        "La ficha de Google Maps mostraba 09:00–18:00 todos los días el 23/10/2026. Es una referencia de este punto de visita; confirmá el último ingreso, el guía y las condiciones del salar."
      ],
      [
        "¿Cómo se llega desde Purmamarca?",
        "Por RN 52 y Cuesta de Lipán, un viaje de montaña y altura. La referencia nacional es de unos 66 km hasta el salar. Confirmá el estado de la ruta y el punto de encuentro sin asumir una duración fija."
      ],
      [
        "¿Qué debo llevar y cómo preparo la altura?",
        "Abrigo por capas, agua, lentes de sol, gorro, protector solar y calzado apropiado. Dejá margen en el viaje y adaptá el ritmo a la altura; si necesitás orientación de salud para viajar, consultá a un profesional antes de salir."
      ],
      [
        "¿Siempre se puede ver el efecto espejo?",
        "No. Depende del agua y de las condiciones; no se garantiza en una fecha o estación. Visit Argentina recomienda revisar el estado vial especialmente durante las lluvias de diciembre a marzo. La seguridad y la autorización local tienen prioridad."
      ],
      [
        "¿Hay baños o un recorrido accesible garantizado?",
        "Consultá la disponibilidad del punto de visita para tu fecha y tus necesidades. No verificamos sanitarios accesibles, un recorrido sin barreras ni servicios abiertos de forma continua."
      ]
    ],
    "sourceTitle": "Fuentes para seguir verificando",
    "sourceText": "Esta guía relaciona el nombre del sitio, su ubicación, la RN 52 y el Departamento de Cochinoca con fuentes públicas. No reemplaza los avisos de autoridades, guías locales ni condiciones vigentes en el camino.",
    "nonOfficial": "Guía independiente de terceros. No es el sitio oficial del salar, del parador ni de una autoridad turística.",
    "footerSource": "Fuentes nacionales de turismo y ficha de Maps fechada; confirmá las condiciones operativas antes de viajar.",
    "copyright": "© 2026 Guía Salinas Grandes. Todos los derechos reservados.",
    "legal": [
      [
        "Privacidad",
        "/privacy/"
      ],
      [
        "Términos",
        "/terms/"
      ],
      [
        "Cookies",
        "/cookies/"
      ]
    ],
    "photoCredit": "Fotografía documental de piletas: Guerretto, CC BY 2.0, vía Wikimedia Commons."
  },
  "en": {
    "locale": "en_US",
    "title": "Salinas Grandes, Argentina: Salt Flat Visitor Guide",
    "description": "Plan a Salinas Grandes visit via RN 52: the Jujuy visitor point, local guides, fees to confirm, published hours and high-altitude preparation.",
    "nav": [
      [
        "The salt flat",
        "#salar"
      ],
      [
        "Plan ahead",
        "#planifica"
      ],
      [
        "Getting there",
        "#llegar"
      ],
      [
        "Which salt flat",
        "#compare"
      ],
      [
        "Services",
        "#servicios"
      ],
      [
        "FAQ",
        "#preguntas"
      ]
    ],
    "languageLabel": "ES",
    "languageHref": "/",
    "eyebrow": "Jujuy Puna · RN 52 · Argentina",
    "heroTitle": "Salinas Grandes: Argentina’s high-altitude salt flat.",
    "heroIntro": "A salt landscape between Jujuy and Salta. Plan the RN 52 journey, confirm entry with local guides and respect working areas.",
    "primaryCta": "Plan your visit",
    "secondaryCta": "Open map",
    "facts": [
      [
        "RN 52",
        "access corridor"
      ],
      [
        "Local guide",
        "for salt-flat entry"
      ],
      [
        "Puna",
        "high-altitude landscape"
      ]
    ],
    "quickTitle": "Before you go farther",
    "quickText": "Puna altitude, radiation and weather shape the experience. Carry water, warm layers, UV-filtering sunglasses and sunscreen, and check the road status before leaving.",
    "learnKicker": "Context",
    "learnTitle": "Salt is not a backdrop: it is land, work and memory.",
    "learnBody": "Salinas Grandes is a salt flat and a working salt-extraction landscape. National tourism information describes processing pools and salt crafts; it is not a swimming lake or a surface for unrestricted driving.",
    "locationTitle": "A scale that helps you orient yourself",
    "locationBody": "This guide’s reference point is RN 52 km 60, Parador La Curva, Jujuy. It does not identify every salt-flat entrance.",
    "routeKicker": "The route",
    "routeTitle": "Getting there is part of the landscape.",
    "routeBody": "Visit Argentina describes the route from Purmamarca via RN 52 and Cuesta de Lipán. The mountain crossing rises above 4,000 metres: leave time for the journey and check road conditions before leaving.",
    "accessTitle": "Admission and local accompaniment",
    "accessBody": "Visit Argentina’s article dated 11 June 2026 states that salt-flat access requires a local guide and an access and guiding charge. Confirm the authorised route at the visitor stop before going farther, then follow local directions.",
    "priceLabel": "Admission reference",
    "priceValue": "Confirm the current amount",
    "priceNote": "No single current fee was verified for this point. Ask whether it is per person or vehicle, what guiding includes, payment methods and last admission. A tour from your base town may be separate from the local charge.",
    "bestTitle": "Published hours: a dated reference",
    "bestText": "The Google Maps listing showed 09:00–18:00 every day on 23 October 2026. These are published hours for this visitor point, rather than guaranteed access across the salt flat. Confirm guiding, last entry and conditions before travelling.",
    "planKicker": "Leave room in your plan",
    "planTitle": "Facilities: use them as support, not as a guarantee.",
    "planIntro": "Arrange water, warm layers, transport and the return before the ascent. Ask what is available at the visitor point; a general description does not guarantee every facility.",
    "planning": [
      [
        "Entry and parking",
        "Ask where to stop and how the visit is organised. Do not drive onto the surface outside the guide’s directions."
      ],
      [
        "Toilets and water",
        "Ask about toilets and their availability for your group. Bring enough drinking water rather than relying on an interior refill."
      ],
      [
        "Food",
        "Arrange supplies in your base town. Check which services are open if you need a meal at the visitor stop."
      ],
      [
        "Return",
        "Confirm pickup, fuel, range and payment methods before the ascent; do not rely on continuous connectivity."
      ]
    ],
    "gettingKicker": "Transport",
    "gettingTitle": "Getting there while respecting altitude.",
    "transport": [
      [
        "Arriving in Jujuy or Salta",
        "Arrange the complete transfer to the RN 52 visitor point and back with a provider. Compare the actual route and inclusions; no fixed airport journey time is quoted."
      ],
      [
        "From Purmamarca via RN 52",
        "National tourism information places the salt flat about 66 km away via Cuesta de Lipán. That is a route reference, rather than a guaranteed duration or exact gate. Check the road and high-altitude conditions."
      ],
      [
        "Public transport",
        "A direct scheduled service was not confirmed for this date. Check with the current operator and arrange the final leg and return before travelling."
      ],
      [
        "Booked tour or transfer",
        "Ask whether the local guide, access charge, waiting and return pickup are included. Agree what happens if the route is not authorised in the conditions of the day."
      ]
    ],
    "foodKicker": "In the surrounding area",
    "foodTitle": "Eat, sleep and continue the route.",
    "foodBody": "Arrange accommodation and supplies in your base town, such as Purmamarca. Check actual availability and return logistics for your route; this guide does not assume open services or accommodation within the flat.",
    "nearbyTitle": "Nearby places that add regional context",
    "nearby": [
      [
        "Purmamarca",
        "The departure point for RN 52 and a service reference for preparing the ascent."
      ],
      [
        "Cuesta de Lipán",
        "The mountain section of RN 52, where scenery and altitude change sharply."
      ],
      [
        "Quebrada de Humahuaca",
        "A large Andean cultural landscape, with towns that can serve as itinerary bases."
      ],
      [
        "Paso de Jama",
        "The international continuation of RN 52; use requires separate planning for border documentation and weather."
      ]
    ],
    "mapKicker": "Location",
    "mapTitle": "Salinas Grandes · RN 52",
    "mapText": "Use the map as a starting point, then confirm current driving conditions through official sources before departure.",
    "faqKicker": "Frequently asked questions",
    "faqTitle": "Answers for a responsible visit.",
    "faq": [
      [
        "Where is the Great Salt Flat covered by this guide?",
        "This is Salinas Grandes in northern Argentina, between Jujuy and Salta. This guide’s reference point is RN 52 km 60, Parador La Curva, Jujuy. It does not identify the whole salt flat or every entrance."
      ],
      [
        "Is it a salt lake?",
        "It is a salt plain and a working salt-extraction landscape. Water may be present in some conditions, but this is not a swimming area. Stay out of processing pools and working areas."
      ],
      [
        "Do I need a guide, and how much does entry cost?",
        "Visit Argentina’s article dated 11 June 2026 states that a local guide is required and that access and guiding are charged. No single current fee was verified: confirm the amount, charging unit and inclusions before entry."
      ],
      [
        "What are the opening hours?",
        "The Google Maps listing showed 09:00–18:00 every day on 23 October 2026. This is a reference for the visitor point; confirm last entry, guiding and conditions on the flat."
      ],
      [
        "How do I get there from Purmamarca?",
        "Via RN 52 and Cuesta de Lipán, a high-altitude mountain journey. National tourism information gives about 66 km to the salt flat. Check the road and meeting point rather than assuming a fixed journey time."
      ],
      [
        "What should I bring for the altitude?",
        "Warm layers, water, sunglasses, a hat, sunscreen and suitable footwear. Leave time for the journey and adjust your pace to the altitude; ask a health professional before departure if you need personal advice about high-altitude travel."
      ],
      [
        "Is the mirror effect guaranteed?",
        "No. It depends on water and conditions, and is not guaranteed for a date or season. Visit Argentina recommends checking road conditions especially in the December–March rains. Safety and local access permission come first."
      ],
      [
        "Are toilets or an accessible route guaranteed?",
        "Ask the visitor point about availability for your date and needs. Accessible toilets, a barrier-free route and continuously open services were not verified."
      ]
    ],
    "sourceTitle": "Sources for continued checking",
    "sourceText": "This guide connects the place name, location, RN 52 and Cochinoca Department to public sources. It does not replace notices issued by authorities, local guides or current road conditions.",
    "nonOfficial": "An independent third-party guide. This is not the official website of the salt flat, the visitor stop or a tourism authority.",
    "footerSource": "National tourism sources and a dated Maps listing; confirm operating conditions before travelling.",
    "copyright": "© 2026 Salinas Grandes Guide. All rights reserved.",
    "legal": [
      [
        "Privacy",
        "/en/privacy/"
      ],
      [
        "Terms",
        "/en/terms/"
      ],
      [
        "Cookies",
        "/en/cookies/"
      ]
    ],
    "photoCredit": "Documentary pool photograph: Guerretto, CC BY 2.0, via Wikimedia Commons."
  }
} as const;
export const guide = {
  "es": {
    "services": {
      "kicker": "En el parador y la base",
      "title": "Servicios y equipamiento de visita",
      "intro": "Organizá agua, abrigo, transporte y regreso antes del ascenso. Consultá qué está disponible en el punto de visita; una descripción general no garantiza cada servicio.",
      "items": [
        [
          "Ingreso y estacionamiento",
          "Al llegar, consultá dónde detener el vehículo y cómo se organiza el recorrido. No conduzcas por la superficie fuera de las indicaciones del guía."
        ],
        [
          "Baños y agua",
          "Preguntá por sanitarios y su disponibilidad para tu grupo. Llevá agua suficiente, sin depender de una reposición en el interior."
        ],
        [
          "Comida",
          "Prepará tus provisiones en la localidad de base. Consultá los servicios abiertos si necesitás comer en el parador."
        ],
        [
          "Regreso",
          "Confirmá recogida, combustible, autonomía y medios de pago antes de subir; no dependas de conectividad continua."
        ]
      ]
    },
    "seasonal": {
      "kicker": "Estrategia de visita",
      "title": "Condiciones para ajustar el plan",
      "intro": "No hay una fecha que garantice superficie seca, agua o efecto espejo. Usá el pronóstico y las indicaciones locales para decidir.",
      "note": "En la época de lluvias, entre diciembre y marzo, la sal puede cubrirse de agua y el acceso interior cambia; verificá el estado de la RN 52 el mismo día.",
      "columns": [
        "Condición",
        "Qué puede cambiar",
        "Antes de entrar",
        "Preparación"
      ],
      "rows": [
        [
          "Lluvia o agua",
          "Estado de rutas y superficie",
          "Confirmar recorrido habilitado",
          "Impermeable y plan flexible"
        ],
        [
          "Frío",
          "Comodidad y duración del paseo",
          "Acordar el esfuerzo con el guía",
          "Abrigo por capas"
        ],
        [
          "Sol y viento",
          "Exposición y visibilidad",
          "Consultar condiciones del día",
          "Protección de piel, ojos y equipo"
        ]
      ]
    },
    "itineraries": {
      "kicker": "Según tu grupo",
      "title": "Itinerarios según el tipo de visitante",
      "intro": "Elegí según la composición y el ritmo. Todas las opciones comparten la precaución por la altura y la confirmación de la ruta.",
      "items": [
        {
          "tag": "Grupo",
          "title": "Paseo de menor esfuerzo",
          "body": "Preguntá por un recorrido adecuado al grupo y por los puntos donde se puede detener o regresar.",
          "tips": [
            "No asumimos un circuito accesible continuo",
            "Dejá margen para pausas",
            "Confirmá la recogida"
          ]
        },
        {
          "tag": "Fotografía",
          "title": "Fotografías con permiso local",
          "body": "Consultá los puntos habilitados y cuidá el equipo del viento y la sal. El efecto espejo no se garantiza.",
          "tips": [
            "No cruces áreas de extracción",
            "Pedí permiso para retratos",
            "Priorizá las indicaciones del guía"
          ]
        }
      ]
    },
    "routes": {
      "kicker": "Rutas sugeridas",
      "title": "Rutas generales: medio día y día completo",
      "intro": "Dos recorridos base que podés combinar con la Quebrada de Humahuaca.",
      "halfDay": {
        "title": "Medio día desde Purmamarca",
        "steps": [
          "Confirmar ruta, ingreso y regreso desde la base",
          "Llegar al punto acordado y consultar el guía",
          "Recorrer únicamente sectores habilitados",
          "Regresar según condiciones y plan de recogida"
        ]
      },
      "fullDay": {
        "title": "Día completo por la Puna",
        "steps": [
          "Dejar margen para el trayecto de altura",
          "Confirmar accesos y pausas con el grupo",
          "Realizar el recorrido autorizado",
          "Volver a la base sin depender de servicios no confirmados"
        ]
      }
    },
    "science": {
      "kicker": "Ciencia y cuidado",
      "title": "Lo que el salar enseña, y cómo cuidarlo",
      "intro": "Salinas Grandes no es un decorado: es un ecosistema de altura, un paisaje productivo y un territorio con memoria.",
      "items": [
        [
          "Paisaje de trabajo",
          "Los piletones forman parte del procesamiento de sal. No son piletas para bañarse: respetá la señalización y a quienes trabajan."
        ],
        [
          "Respeto del territorio",
          "Seguí las indicaciones locales, no recolectes sal ni otros materiales sin permiso y llevate tus residuos."
        ],
        [
          "Cuidado de la visita",
          "El pronóstico no da permiso para entrar. Consultá el recorrido habilitado y organizá abrigo, agua y protección solar."
        ]
      ]
    }
  },
  "en": {
    "services": {
      "kicker": "At the parador and base towns",
      "title": "Visitor services and facilities",
      "intro": "Arrange water, warm layers, transport and the return before the ascent. Ask what is available at the visitor point; a general description does not guarantee every facility.",
      "items": [
        [
          "Entry and parking",
          "Ask where to stop and how the visit is organised. Do not drive onto the surface outside the guide’s directions."
        ],
        [
          "Toilets and water",
          "Ask about toilets and their availability for your group. Bring enough drinking water rather than relying on an interior refill."
        ],
        [
          "Food",
          "Arrange supplies in your base town. Check which services are open if you need a meal at the visitor stop."
        ],
        [
          "Return",
          "Confirm pickup, fuel, range and payment methods before the ascent; do not rely on continuous connectivity."
        ]
      ]
    },
    "seasonal": {
      "kicker": "Visit strategy",
      "title": "Conditions to plan around",
      "intro": "No date guarantees a dry surface, standing water or a mirror effect. Use the forecast and local directions when deciding.",
      "note": "In the rainy season, between December and March, the salt can be covered with water and interior access changes; check RN 52 conditions on the day.",
      "columns": [
        "Condition",
        "What can change",
        "Before entry",
        "Preparation"
      ],
      "rows": [
        [
          "Rain or standing water",
          "Road and surface conditions",
          "Confirm the authorised route",
          "Rain layer and flexible plans"
        ],
        [
          "Cold",
          "Comfort and visit duration",
          "Discuss the effort with the guide",
          "Warm layers"
        ],
        [
          "Sun and wind",
          "Exposure and visibility",
          "Check conditions for the day",
          "Protect skin, eyes and equipment"
        ]
      ]
    },
    "itineraries": {
      "kicker": "By your group",
      "title": "Itineraries by type of visitor",
      "intro": "Choose by group composition and pace. All options share altitude caution and same-day route confirmation.",
      "items": [
        {
          "tag": "Group",
          "title": "A lower-effort visit",
          "body": "Ask about a route suitable for the group and places where you can pause or return.",
          "tips": [
            "No continuous accessible route is assumed",
            "Leave room for breaks",
            "Confirm pickup"
          ]
        },
        {
          "tag": "Photography",
          "title": "Photographs with local permission",
          "body": "Ask which viewpoints are authorised and protect equipment from wind and salt. A mirror effect is not guaranteed.",
          "tips": [
            "Do not cross extraction areas",
            "Ask before taking portraits",
            "Follow the guide’s directions"
          ]
        }
      ]
    },
    "routes": {
      "kicker": "Suggested routes",
      "title": "General routes: half day and full day",
      "intro": "Two base itineraries you can combine with the Quebrada de Humahuaca.",
      "halfDay": {
        "title": "Half day from Purmamarca",
        "steps": [
          "Confirm the road, entry and return from your base",
          "Meet at the agreed point and speak to the guide",
          "Visit authorised sectors only",
          "Return according to conditions and pickup plans"
        ]
      },
      "fullDay": {
        "title": "Full day across the Puna",
        "steps": [
          "Leave time for the high-altitude journey",
          "Confirm access and breaks with the group",
          "Take the authorised route",
          "Return to base without relying on unconfirmed services"
        ]
      }
    },
    "science": {
      "kicker": "Science and care",
      "title": "What the salt flat teaches, and how to care for it",
      "intro": "Salinas Grandes is not a backdrop: it is a high-altitude ecosystem, a working landscape and a territory with memory.",
      "items": [
        [
          "Working landscape",
          "The pools are part of salt processing. They are not swimming pools: respect signs and people working here."
        ],
        [
          "Respect for the place",
          "Follow local directions, do not collect salt or other material without permission, and take your litter away."
        ],
        [
          "Planning with care",
          "A forecast does not authorise entry. Check the approved route and arrange warm layers, water and sun protection."
        ]
      ]
    }
  }
} as const;
export const imageUrls = {
  "logo": "/media/salinas-grandes-mark.png",
  "hero": "/media/salinas-grandes-horizon-ccby-sa3.jpg",
  "crystallization": "/media/salinas-grandes-pools-ccby2.jpg",
  "route": "/media/ruta-52-cuesta-lipan-ccby-sa3.jpg",
  "documentedPools": "/media/salinas-grandes-pools-ccby2.jpg"
} as const;
export const legalCopy = {
  "es": {
    "privacy": {
      "title": "Política de privacidad",
      "intro": "Actualizado el 23/10/2026. Alojamiento, Google Maps, fuentes, pronóstico del servidor y datos de analítica opcional.",
      "sections": [
        [
          "Interfaces reales",
          "Esta guía no tiene cuentas, reservas, compras ni formulario de contacto."
        ],
        [
          "Servicios externos",
          "Cloudflare sirve el sitio. Google Maps y Google Fonts pueden recibir dirección IP y datos técnicos al cargarse, aunque Analytics esté apagado. El pronóstico se obtiene en el servidor desde Open-Meteo para coordenadas fijas; no pide tu geolocalización ni requiere una solicitud directa del navegador a ese proveedor."
        ],
        [
          "Analítica opcional",
          "Google Analytics (G-HXM22WWPKP) se carga con una autorización guardada y comprobada. Puede procesar identificadores y datos de uso; no se describe como completamente anónima. Podés retirarla desde Cookies; eso no borra datos enviados anteriormente."
        ],
        [
          "Almacenamiento",
          "La elección se conserva en localStorage. Los mensajes indican si pudo verificarse; ante un fallo se mantiene apagada la medición de esta página y se intenta guardar una negativa o quitar la autorización. Si no puede confirmarse, una autorización podría seguir disponible en otras pestañas o al recargar."
        ]
      ]
    },
    "terms": {
      "title": "Términos de uso",
      "intro": "Actualizado el 23/10/2026. Alcance de esta guía, verificación de acceso, pronóstico e imágenes de archivo.",
      "sections": [
        [
          "Alcance",
          "Guía independiente de terceros; no emite permisos de ingreso, reservas ni avisos oficiales."
        ],
        [
          "Antes de viajar",
          "Confirmá cargos, guía, último ingreso y ruta con los responsables para tu fecha. Los horarios de Maps son una referencia fechada de un punto, no del acceso a toda la planicie."
        ],
        [
          "Pronóstico e imágenes",
          "El tiempo es un modelo y no prueba que el acceso esté habilitado. Las fotografías históricas de archivo tienen atribución individual y no confirman el estado actual ni la puerta exacta."
        ]
      ]
    },
    "cookies": {
      "title": "Preferencias de cookies",
      "intro": "Actualizado el 23/10/2026. Activá o rechazá Google Analytics y comprobá el alcance real de la decisión guardada.",
      "sections": [
        [
          "Elegir analítica",
          "Los botones controlan únicamente Google Analytics, no el mapa, las fuentes ni el alojamiento. No se guarda una preferencia de idioma."
        ],
        [
          "Retirar la autorización",
          "Rechazar apaga inmediatamente la medición de esta página y borra las cookies Analytics accesibles en la ruta raíz. La interfaz comprueba si se pudo guardar la decisión para próximas vistas."
        ],
        [
          "Si falla el almacenamiento",
          "Revisá el mensaje: si no se puede verificar la negativa, el apagado puede limitarse a esta página y una autorización previa o de este intento podría seguir usable en otras pestañas o al recargar."
        ]
      ]
    }
  },
  "en": {
    "privacy": {
      "title": "Privacy policy",
      "intro": "Updated 23 October 2026. Hosting, Google Maps, fonts, server weather and optional analytics data.",
      "sections": [
        [
          "Actual interfaces",
          "This guide has no accounts, booking, checkout or contact form."
        ],
        [
          "External services",
          "Cloudflare serves the site. Google Maps and Google Fonts may receive IP and technical request data when loaded, even with Analytics off. Weather is requested server-side from Open-Meteo for fixed coordinates; it does not request your geolocation or require your browser to contact that provider directly."
        ],
        [
          "Optional analytics",
          "Google Analytics (G-HXM22WWPKP) loads with a stored, verified permission. It may process identifiers and usage data; this is not described as fully anonymous. Withdraw it on Cookies; that does not erase previously sent data."
        ],
        [
          "Storage",
          "The choice is kept in localStorage. Result messages say whether it could be verified; a failure keeps measurement off on this page and attempts to store refusal or remove permission. If that cannot be confirmed, permission may remain usable in other tabs or after reload."
        ]
      ]
    },
    "terms": {
      "title": "Terms of use",
      "intro": "Updated 23 October 2026. The guide’s scope, access checks, model weather and archive photographs.",
      "sections": [
        [
          "Scope",
          "An independent third-party guide; it does not issue entry permits, bookings or official notices."
        ],
        [
          "Before travelling",
          "Confirm charges, guiding, last entry and road conditions with those responsible for your date. Maps hours are a dated reference for one point, rather than access across the entire flat."
        ],
        [
          "Forecast and images",
          "Weather is model data and does not prove entry is authorised. Individually credited archive photographs do not establish present conditions or the exact gate."
        ]
      ]
    },
    "cookies": {
      "title": "Cookie preferences",
      "intro": "Updated 23 October 2026. Enable or reject Google Analytics and check the scope of the saved choice.",
      "sections": [
        [
          "Choosing analytics",
          "The buttons control Google Analytics only, rather than Maps, fonts or hosting. No language preference is stored."
        ],
        [
          "Withdrawing permission",
          "Reject immediately disables measurement on this page and clears accessible root-path Analytics cookies. The interface verifies whether the choice could be saved for later page views."
        ],
        [
          "Storage failures",
          "Check the result message: if refusal cannot be verified, disabling may apply only to this page, and an old or attempted permission could remain usable in other tabs or after reload."
        ]
      ]
    }
  }
} as const;
export const placeFacts = {
  "ratingValue": "4.8",
  "reviewCount": "9967",
  "date": "23/10/2026",
  "address": "RN 52 km 60, Parador La Curva, Jujuy, Argentina"
} as const;
