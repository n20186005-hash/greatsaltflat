// Mapa de Sal topic registry: data-driven long-tail pages for Salinas Grandes.
// One source of truth; routes and the homepage cluster read from here.
export type Language = "es" | "en";
export type TopicGroup = "visita" | "transporte";

export interface TopicSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  callout?: string;
}
export interface TopicFaq {
  q: string;
  a: string;
}
export interface TopicContent {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  lead: string;
  updated: string;
  sections: TopicSection[];
  faqs: TopicFaq[];
}
export interface Topic {
  key: string;
  group: TopicGroup;
  slug: string; // es path segment
  slugEn: string; // en path segment
  related: string[]; // topic keys
  es: TopicContent;
  en: TopicContent;
}

export const TOPIC_GROUP_LABELS: Record<TopicGroup, Record<Language, string>> = {
  visita: { es: "Visitar Salinas Grandes", en: "Visit Salinas Grandes" },
  transporte: { es: "Cómo llegar", en: "Getting there" },
};

export const TOPICS: Topic[] = [
  // ───────────────────────── visita ─────────────────────────
  {
    key: "precios-y-guias",
    group: "visita",
    slug: "precios-y-guias",
    slugEn: "prices-and-guides",
    related: ["horarios", "mapa-y-accesos", "tour-vs-por-libre", "altura"],
    es: {
      metaTitle: "Precios y guías de Salinas Grandes: qué incluye el ingreso",
      metaDescription:
        "Salinas Grandes por RN 52: guía local obligatoria y cargo de ingreso y de guía según Visit Argentina. Confirmá el importe y qué incluye antes de tu visita.",
      h1: "Precios y guías locales",
      lead: "El acceso al salar requiere guía local y tiene un cargo de ingreso y de guía, según la nota de Visit Argentina del 11 de junio de 2026. No verificamos una tarifa única y vigente para este punto de visita.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Guía local, no es opcional",
          paragraphs: [
            "Visit Argentina, en su artículo del 11 de junio de 2026, indica que el acceso al salar requiere guía local y que se cobra un cargo de ingreso y de guía.",
            "Esto significa que la visita se organiza con acompañamiento de la comunidad local, no como un ingreso libre por cuenta propia a la superficie.",
          ],
        },
        {
          heading: "Qué puede incluir el cargo",
          bullets: [
            "Guía de la comunidad que acompaña el recorrido habilitado.",
            "Uso del punto de visita y, a veces, estacionamiento en el parador.",
            "Cuidado del salar y señalización de las áreas de trabajo.",
          ],
          callout:
            "Cada operador puede armar el servicio de forma distinta. Preguntá qué incluye el importe antes de pagar.",
        },
        {
          heading: "Cómo confirmar el importe",
          paragraphs: [
            "En el Parador La Curva o con el prestador que elijas, confirmá el importe actual, la unidad de cobro y qué incluye la guía.",
          ],
          bullets: [
            "¿Se cobra por persona o por vehículo?",
            "¿Qué incluye exactamente la guía?",
            "¿Qué medios de pago aceptan?",
            "¿Cuál es el último ingreso habilitado?",
          ],
          callout:
            "No mostramos un precio fijo porque no verificamos una tarifa actual única. Tratalo como referencia, no como tarifa oficial.",
        },
      ],
      faqs: [
        {
          q: "¿Cuánto cuesta entrar a Salinas Grandes?",
          a: "Depende del operador y la fecha. Visit Argentina indica guía local obligatoria y un cargo de ingreso y de guía; confirmá el importe vigente en el parador para tu día.",
        },
        {
          q: "¿Se paga por persona o por vehículo?",
          a: "Varía según quién organice la visita. Preguntá si el cobro es por persona, por vehículo o por grupo, y qué cubre cada caso.",
        },
        {
          q: "¿La excursión desde Purmamarca ya incluye el ingreso?",
          a: "Una excursión desde tu ciudad de base suele incluir el traslado, pero la guía local y el cargo de ingreso en el salar pueden ser un concepto aparte. Pedí que te detallen qué incluye.",
        },
        {
          q: "¿Se puede entrar sin guía?",
          a: "Visit Argentina señala que la guía local es obligatoria. No ingreses a las áreas de trabajo ni a la superficie fuera de las indicaciones del guía.",
        },
      ],
    },
    en: {
      metaTitle: "Salinas Grandes prices and local guides: what the entry includes",
      metaDescription:
        "Salinas Grandes via RN 52: a mandatory local guide and an access and guiding charge per Visit Argentina. Confirm the amount and what it includes before your visit.",
      h1: "Prices and local guides",
      lead: "Salt-flat access requires a local guide and carries an access and guiding charge, according to Visit Argentina's article dated 11 June 2026. We have not verified a single current fee for this visitor point.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "A local guide is not optional",
          paragraphs: [
            "Visit Argentina's 11 June 2026 article states that salt-flat access requires a local guide and that an access and guiding charge applies.",
            "This means the visit is organised with community accompaniment, not as a free, self-guided walk onto the surface.",
          ],
        },
        {
          heading: "What the charge may include",
          bullets: [
            "A community guide who accompanies the authorised route.",
            "Use of the visitor point and, sometimes, parking at the parador.",
            "Salt-flat care and signage for the working areas.",
          ],
          callout:
            "Each operator may package the service differently. Ask what the amount includes before you pay.",
        },
        {
          heading: "How to confirm the amount",
          paragraphs: [
            "At Parador La Curva or with your chosen provider, confirm the current amount, the charging unit and what the guiding includes.",
          ],
          bullets: [
            "Is it charged per person or per vehicle?",
            "Exactly what does the guiding include?",
            "Which payment methods are accepted?",
            "What is the last authorised entry?",
          ],
          callout:
            "We do not show a fixed price because we have not verified a single current fee. Treat it as a reference, not an official rate.",
        },
      ],
      faqs: [
        {
          q: "How much does it cost to enter Salinas Grandes?",
          a: "It depends on the operator and the date. Visit Argentina indicates a mandatory local guide and an access and guiding charge; confirm the current amount at the parador for your day.",
        },
        {
          q: "Is it charged per person or per vehicle?",
          a: "It varies by who organises the visit. Ask whether the charge is per person, per vehicle or per group, and what each case covers.",
        },
        {
          q: "Does a tour from Purmamarca already include entry?",
          a: "A tour from your base town usually includes the transfer, but the local guide and the on-site access charge can be a separate item. Ask for a clear breakdown of what is included.",
        },
        {
          q: "Can I enter without a guide?",
          a: "Visit Argentina states that a local guide is required. Do not enter the working pools or the surface outside the guide's directions.",
        },
      ],
    },
  },
  {
    key: "horarios",
    group: "visita",
    slug: "horarios",
    slugEn: "opening-hours",
    related: ["precios-y-guias", "mapa-y-accesos", "clima"],
    es: {
      metaTitle: "Horarios de Salinas Grandes: última entrada y referencia fechada",
      metaDescription:
        "La ficha de Maps mostraba 09:00–18:00 todos los días. Es una referencia de este punto de visita; confirmá guía, último ingreso y condiciones antes de viajar.",
      h1: "Horarios del punto de visita",
      lead: "No hay un cartel oficial único para todo el salar. La ficha de Google Maps de este punto de visita mostraba 09:00–18:00 todos los días en una consulta fechada; tratá esa cifra como referencia, no como garantía de acceso.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Lo que mostraba la ficha de Maps",
          paragraphs: [
            "La ficha de Google Maps de este punto de visita mostraba 09:00–18:00 todos los días en una consulta del 23/10/2026.",
            "Es el horario publicado de este punto, no una garantía de acceso a todo el salar. Confirmá guía, último ingreso y condiciones antes de viajar.",
          ],
        },
        {
          heading: "Última entrada y luz natural",
          bullets: [
            "Confirmá el último ingreso habilitado en el parador antes de subir.",
            "En altura, el día se acorta en invierno: dejá margen para el regreso antes de oscurecer.",
            "El recorrido en superficie depende del guía y de las condiciones del día.",
          ],
          callout:
            "El salar es un paisaje de trabajo. Los horarios del punto de visita no son los de todo el salar.",
        },
        {
          heading: "Por qué puede cambiar",
          paragraphs: [
            "En época de lluvias el acceso interior puede modificarse. Verificá el estado de RN 52 el mismo día y consultá al guía sobre el recorrido habilitado.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿A qué hora abre Salinas Grandes?",
          a: "La ficha de Maps de este punto de visita mostraba 09:00–18:00 todos los días en una consulta fechada. Es una referencia de este punto, no un horario garantizado para todo el salar; confirmalo en el parador.",
        },
        {
          q: "¿Cuál es el último ingreso?",
          a: "Confirmalo en el Parador La Curva para tu fecha. No asumas una hora fija: el último ingreso depende del operador y de las condiciones del día.",
        },
        {
          q: "¿Se puede visitar en temporada de lluvias?",
          a: "Sí, pero el acceso interior y la superficie cambian con el agua. Verificá RN 52 el mismo día y seguí las indicaciones locales.",
        },
      ],
    },
    en: {
      metaTitle: "Salinas Grandes opening hours: last entry and a dated reference",
      metaDescription:
        "The Maps listing showed 09:00–18:00 every day. This is a reference for this visitor point; confirm guiding, last entry and conditions before travelling.",
      h1: "Hours of the visitor point",
      lead: "There is no single official sign for the whole salt flat. The Google Maps listing for this visitor point showed 09:00–18:00 every day on a dated check; treat that figure as a reference, not a guarantee of access.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "What the Maps listing showed",
          paragraphs: [
            "The Google Maps listing for this visitor point showed 09:00–18:00 every day on a check dated 23 October 2026.",
            "These are the published hours for this point, rather than guaranteed access across the whole salt flat. Confirm guiding, last entry and conditions before travelling.",
          ],
        },
        {
          heading: "Last entry and daylight",
          bullets: [
            "Confirm the last authorised entry at the parador before going up.",
            "At altitude the day is shorter in winter: leave time for the return before dark.",
            "The surface visit depends on the guide and the day's conditions.",
          ],
          callout:
            "The salt flat is a working landscape. The visitor point's hours are not the hours of the whole flat.",
        },
        {
          heading: "Why it can change",
          paragraphs: [
            "In the rainy season, interior access can change. Check RN 52 on the day and ask the guide about the authorised route.",
          ],
        },
      ],
      faqs: [
        {
          q: "What time does Salinas Grandes open?",
          a: "The Maps listing for this visitor point showed 09:00–18:00 every day on a dated check. That is a reference for this point, not a guaranteed schedule for the whole flat; confirm it at the parador.",
        },
        {
          q: "What is the last entry?",
          a: "Confirm it at Parador La Curva for your date. Do not assume a fixed time: the last entry depends on the operator and the day's conditions.",
        },
        {
          q: "Can I visit in the rainy season?",
          a: "Yes, but interior access and the surface change with water. Check RN 52 on the day and follow local directions.",
        },
      ],
    },
  },
  {
    key: "mapa-y-accesos",
    group: "visita",
    slug: "mapa-y-accesos",
    slugEn: "map-and-access",
    related: ["desde-purmamarca", "cuesta-de-lipan", "precios-y-guias"],
    es: {
      metaTitle: "Mapa y accesos a Salinas Grandes: Parador La Curva en RN 52",
      metaDescription:
        "El punto de referencia de esta guía está en RN 52 km 60, Parador La Curva, Jujuy. No identifica todos los accesos del salar; confirmá el recorrido habilitado.",
      h1: "Mapa y accesos",
      lead: "Esta guía usa como punto de referencia RN 52 km 60, Parador La Curva, Jujuy. No es la única entrada del salar, pero sí el punto de encuentro con el que orientamos el viaje.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "El punto de referencia",
          paragraphs: [
            "Coordenadas: 23.6085346° S, 65.8645729° O.",
            "Dirección de referencia: RN 52 km 60, Parador La Curva, Salinas Grandes, Jujuy, Argentina.",
            "Es un punto de referencia del recorrido, no la totalidad del salar ni cada uno de sus accesos.",
          ],
        },
        {
          heading: "Cómo llegar al punto",
          bullets: [
            "Desde Purmamarca por RN 52 y Cuesta de Lipán, unos 65 km de montaña y altura.",
            "Desde San Salvador de Jujuy, aproximadamente 130 km por RN 9 y RN 52.",
            "Desde Salta la distancia es mayor; conviene comparar con salir desde Jujuy.",
          ],
        },
        {
          heading: "Confirmá el acceso habilitado",
          paragraphs: [
            "En el parador preguntá qué recorrido está habilitado y seguí sus indicaciones.",
            "No conduzcas por la superficie fuera de las indicaciones del guía.",
            "Existen otros puntos de servicio comunitario (como Pozo Colorado o Santuario de Tres Pozos) que esta guía no usa como referencia principal.",
          ],
          callout:
            "Parador La Curva es el punto de referencia de esta guía, no necesariamente el único acceso del salar.",
        },
      ],
      faqs: [
        {
          q: "¿Dónde está la entrada a Salinas Grandes?",
          a: "El punto de referencia de esta guía está en RN 52 km 60, Parador La Curva, Jujuy. No identifica todos los accesos del salar; confirmá el recorrido habilitado en el parador.",
        },
        {
          q: "¿Qué es el Parador La Curva?",
          a: "Es el punto de referencia y encuentro que usamos para orientar el viaje, sobre RN 52. No es el salar entero ni una oficina de autoridad turística.",
        },
        {
          q: "¿Puedo ir por cuenta propia hasta el salar?",
          a: "Podés llegar en tu vehículo hasta el punto de encuentro, pero la visita sobre la sal requiere guía local. No entres a la superficie fuera de las indicaciones del guía.",
        },
      ],
    },
    en: {
      metaTitle: "Salinas Grandes map and access: Parador La Curva on RN 52",
      metaDescription:
        "This guide's reference point is RN 52 km 60, Parador La Curva, Jujuy. It does not identify every salt-flat entrance; confirm the authorised route.",
      h1: "Map and access",
      lead: "This guide uses RN 52 km 60, Parador La Curva, Jujuy as its reference point. It is not the only entrance to the salt flat, but it is the meeting point we use to orient the trip.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "The reference point",
          paragraphs: [
            "Coordinates: 23.6085346° S, 65.8645729° W.",
            "Reference address: RN 52 km 60, Parador La Curva, Salinas Grandes, Jujuy, Argentina.",
            "This is a reference point for the route, not the whole salt flat or every one of its entrances.",
          ],
        },
        {
          heading: "How to reach the point",
          bullets: [
            "From Purmamarca via RN 52 and Cuesta de Lipán, about 65 km of mountain and altitude.",
            "From San Salvador de Jujuy, roughly 130 km via RN 9 and RN 52.",
            "From Salta the distance is greater; compare with departing from Jujuy.",
          ],
        },
        {
          heading: "Confirm the authorised access",
          paragraphs: [
            "At the parador, ask which route is open and follow its directions.",
            "Do not drive onto the surface outside the guide's directions.",
            "Other community service points (such as Pozo Colorado or Santuario de Tres Pozos) exist but are not this guide's main reference.",
          ],
          callout:
            "Parador La Curva is this guide's reference point, not necessarily the only access to the salt flat.",
        },
      ],
      faqs: [
        {
          q: "Where is the entrance to Salinas Grandes?",
          a: "This guide's reference point is RN 52 km 60, Parador La Curva, Jujuy. It does not identify every salt-flat entrance; confirm the authorised route at the parador.",
        },
        {
          q: "What is Parador La Curva?",
          a: "It is the reference and meeting point we use to orient the trip, on RN 52. It is not the whole salt flat nor a tourism-authority office.",
        },
        {
          q: "Can I drive to the salt flat on my own?",
          a: "You can reach the meeting point in your vehicle, but the visit onto the salt requires a local guide. Do not enter the surface outside the guide's directions.",
        },
      ],
    },
  },
  {
    key: "mejor-epoca",
    group: "visita",
    slug: "mejor-epoca",
    slugEn: "best-time-to-visit",
    related: ["clima", "efecto-espejo", "altura"],
    es: {
      metaTitle: "Mejor época para Salinas Grandes: seca vs lluvias",
      metaDescription:
        "Temporada seca (mayo–octubre) para superficie seca y acceso más estable; diciembre–marzo hay lluvias y el salar puede cubrirse de agua. Confirmá RN 52 el día.",
      h1: "Mejor época para visitar",
      lead: "No hay una fecha que garantice superficie seca, agua o efecto espejo. La temporada seca (aprox. mayo a octubre) suele dar acceso más estable; las lluvias de diciembre a marzo pueden cubrir el salar.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Temporada seca",
          paragraphs: [
            "Entre mayo y octubre las rutas suelen estar más secas y el acceso, más estable.",
            "Las noches a esa altura son frías; llevá abrigo incluso en verano austral.",
          ],
        },
        {
          heading: "Temporada de lluvias",
          paragraphs: [
            "De diciembre a marzo el salar puede cubrirse de agua y el acceso interior cambia.",
            "Visit Argentina recomienda revisar el estado de la ruta, especialmente en las lluvias.",
          ],
        },
        {
          heading: "Elección según lo que buscás",
          bullets: [
            "Superficie seca y caminata sobre la sal: temporada seca.",
            "Efecto espejo: depende del agua y no está garantizado en ninguna fecha.",
            "Fotografía de montaña y altura: considerá la luz y el viento más que el mes.",
          ],
          callout: "El efecto espejo no está garantizado en ninguna época del año.",
        },
      ],
      faqs: [
        {
          q: "¿Cuál es la mejor época?",
          a: "La temporada seca (mayo a octubre) suele dar acceso más estable y superficie seca. Las lluvias de diciembre a marzo pueden cubrir el salar de agua.",
        },
        {
          q: "¿Se puede ir en enero (verano austral)?",
          a: "Sí, pero es temporada de lluvias: la superficie y el acceso cambian. Confirmá RN 52 el mismo día y seguí las indicaciones locales.",
        },
        {
          q: "¿Cuándo hay efecto espejo?",
          a: "Con mayor probabilidad tras lluvias, cuando hay agua sobre la sal. No se garantiza para una fecha ni una estación.",
        },
      ],
    },
    en: {
      metaTitle: "Best time to visit Salinas Grandes: dry season vs rains",
      metaDescription:
        "Dry season (May–October) for a dry surface and steadier access; December–March brings rains and the flat may fill with water. Check RN 52 on the day.",
      h1: "Best time to visit",
      lead: "No date guarantees a dry surface, standing water or a mirror effect. The dry season (roughly May to October) usually gives steadier access; the December–March rains can cover the flat with water.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Dry season",
          paragraphs: [
            "Between May and October the roads are usually drier and access is steadier.",
            "Nights at this altitude are cold; bring warm layers even in the southern summer.",
          ],
        },
        {
          heading: "Rainy season",
          paragraphs: [
            "From December to March the salt can be covered with water and interior access changes.",
            "Visit Argentina recommends checking the road status, especially in the rains.",
          ],
        },
        {
          heading: "Choosing by what you want",
          bullets: [
            "Dry surface and walking on the salt: dry season.",
            "Mirror effect: depends on water and is not guaranteed on any date.",
            "Mountain and altitude photography: consider light and wind more than the month.",
          ],
          callout: "The mirror effect is not guaranteed in any season.",
        },
      ],
      faqs: [
        {
          q: "What is the best time to go?",
          a: "The dry season (May to October) usually gives steadier access and a dry surface. The December–March rains can cover the flat with water.",
        },
        {
          q: "Can I go in January (southern summer)?",
          a: "Yes, but it is the rainy season: the surface and access change. Check RN 52 on the day and follow local directions.",
        },
        {
          q: "When is the mirror effect visible?",
          a: "Most likely after rains, when there is water on the salt. It is not guaranteed for a date or a season.",
        },
      ],
    },
  },
  {
    key: "clima",
    group: "visita",
    slug: "clima",
    slugEn: "weather",
    related: ["mejor-epoca", "efecto-espejo", "altura"],
    es: {
      metaTitle: "Clima en Salinas Grandes: viento, UV, frío y altura",
      metaDescription:
        "Altura, radiación y viento cambian la experiencia. Llevá agua, abrigo, lentes con filtro UV y protector solar; consultá el estado de RN 52 antes de salir.",
      h1: "Clima y preparación",
      lead: "A más de 3.400 m, el clima de la Puna cambia rápido: sol fuerte, viento y frío en el mismo día. Esta página carga el pronóstico actual; usalo como ayuda, no como permiso de ingreso.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Sol y radiación",
          paragraphs: [
            "A gran altura la radiación es intensa. Usá lentes con filtro UV, protector solar y gorro.",
            "La quemadura de piel ocurre rápido sobre la sal clara.",
          ],
        },
        {
          heading: "Viento y frío",
          paragraphs: [
            "El salar abierto expone al viento; la sensación térmica baja con la velocidad del aire.",
            "La temperatura puede pasar de soleada a fría en pocas horas: llevá capas.",
          ],
        },
        {
          heading: "Antes de salir",
          bullets: [
            "Consultá el estado de RN 52 y el pronóstico del día.",
            "Cargá combustible y agua antes de alejarte de la base.",
            "Dejá margen en el viaje por la altura y la ruta de montaña.",
          ],
          callout:
            "El pronóstico no da permiso para entrar. Confirmá el recorrido habilitado con el guía.",
        },
      ],
      faqs: [
        {
          q: "¿Hace frío en Salinas Grandes?",
          a: "A esa altura, sí: las mañanas y las tardes pueden ser frías incluso con sol. Llevá abrigo por capas.",
        },
        {
          q: "¿Hay mucho viento?",
          a: "El salar es superficie abierta y el viento es frecuente. Protegete los ojos y la piel, y sujetá bien el equipo.",
        },
        {
          q: "¿El pronóstico garantiza que puedo entrar?",
          a: "No. El pronóstico es una ayuda para prepararte; el acceso depende del guía y de las condiciones del día.",
        },
      ],
    },
    en: {
      metaTitle: "Salinas Grandes weather: wind, UV, cold and altitude",
      metaDescription:
        "Altitude, radiation and wind shape the experience. Carry water, warm layers, UV-filter sunglasses and sunscreen; check RN 52 status before leaving.",
      h1: "Weather and preparation",
      lead: "Above 3,400 m, the Puna weather shifts fast: strong sun, wind and cold in the same day. This page loads the current forecast; use it as a help, not as permission to enter.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Sun and radiation",
          paragraphs: [
            "At high altitude the radiation is intense. Wear UV-filter sunglasses, sunscreen and a hat.",
            "Skin burns fast on the bright salt surface.",
          ],
        },
        {
          heading: "Wind and cold",
          paragraphs: [
            "The open flat exposes you to wind; the feels-like temperature drops with air speed.",
            "The temperature can swing from sunny to cold within hours: bring layers.",
          ],
        },
        {
          heading: "Before you leave",
          bullets: [
            "Check RN 52 status and the day's forecast.",
            "Fuel up and carry water before leaving the base.",
            "Leave time in the trip for altitude and the mountain road.",
          ],
          callout:
            "The forecast does not authorise entry. Confirm the authorised route with the guide.",
        },
      ],
      faqs: [
        {
          q: "Is it cold at Salinas Grandes?",
          a: "At that altitude, yes: mornings and late afternoons can be cold even in sun. Bring warm layers.",
        },
        {
          q: "Is it very windy?",
          a: "The salt flat is open ground and wind is common. Protect your eyes and skin, and secure your equipment.",
        },
        {
          q: "Does the forecast guarantee I can enter?",
          a: "No. The forecast helps you prepare; access depends on the guide and the day's conditions.",
        },
      ],
    },
  },
  {
    key: "efecto-espejo",
    group: "visita",
    slug: "efecto-espejo",
    slugEn: "mirror-effect",
    related: ["clima", "mejor-epoca", "mapa-y-accesos"],
    es: {
      metaTitle: "Efecto espejo en Salinas Grandes: cuándo y si se garantiza",
      metaDescription:
        "El espejo aparece con agua sobre la sal, pero no está garantizado para una fecha. Visit Argentina recomienda revisar la ruta en lluvias. Prioridad a la seguridad.",
      h1: "El efecto espejo",
      lead: "El efecto espejo ocurre cuando hay agua sobre la sal y el cielo se refleja. Depende del agua y de las condiciones, y no se garantiza para una fecha o estación.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Cómo se forma",
          paragraphs: [
            "Una capa fina de agua sobre la sal actúa como espejo y refleja el cielo y las nubes.",
            "Necesita lluvia reciente y, a menudo, calma de viento para que la superficie quede lisa.",
          ],
        },
        {
          heading: "Cuándo es más probable",
          paragraphs: [
            "En la temporada de lluvias (diciembre–marzo) hay más chances si hay agua acumulada.",
            "En la temporada seca la superficie suele estar seca y no hay reflejo.",
          ],
          callout: "No prometemos el espejo para tu fecha: depende del agua y del clima.",
        },
        {
          heading: "Seguridad primero",
          paragraphs: [
            "No entres a los piletones ni a las áreas de extracción para buscar el reflejo.",
            "Seguí al guía y respetá las zonas de trabajo.",
            "La seguridad y el permiso local tienen prioridad sobre la fotografía.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Cuándo se ve el efecto espejo?",
          a: "Con mayor probabilidad tras lluvias, cuando hay agua sobre la sal. No se garantiza para una fecha ni una estación.",
        },
        {
          q: "¿Lo puedo garantizar contratando un tour?",
          a: "No. El tour organiza el traslado y la guía, pero el espejo depende del agua y el clima de ese día.",
        },
        {
          q: "¿Dónde se toma la foto?",
          a: "En los sectores habilitados por el guía. No cruces áreas de extracción ni la superficie fuera de sus indicaciones.",
        },
      ],
    },
    en: {
      metaTitle: "Salinas Grandes mirror effect: when it happens and whether it is guaranteed",
      metaDescription:
        "The mirror appears with water on the salt, but it is not guaranteed for a date. Visit Argentina recommends checking the road in the rains. Safety comes first.",
      h1: "The mirror effect",
      lead: "The mirror effect happens when there is water on the salt and the sky reflects. It depends on water and conditions, and is not guaranteed for a date or season.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "How it forms",
          paragraphs: [
            "A thin layer of water on the salt acts like a mirror and reflects the sky and clouds.",
            "It needs recent rain and, often, low wind so the surface stays smooth.",
          ],
        },
        {
          heading: "When it is most likely",
          paragraphs: [
            "In the rainy season (December–March) there is a better chance if water has accumulated.",
            "In the dry season the surface is usually dry and there is no reflection.",
          ],
          callout: "We do not promise the mirror for your date: it depends on water and weather.",
        },
        {
          heading: "Safety first",
          paragraphs: [
            "Do not enter the pools or extraction areas to chase the reflection.",
            "Follow the guide and respect the working zones.",
            "Safety and local permission come before photography.",
          ],
        },
      ],
      faqs: [
        {
          q: "When is the mirror effect visible?",
          a: "Most likely after rains, when there is water on the salt. It is not guaranteed for a date or a season.",
        },
        {
          q: "Can I guarantee it by booking a tour?",
          a: "No. The tour organises the transfer and the guide, but the mirror depends on the day's water and weather.",
        },
        {
          q: "Where do I take the photo?",
          a: "In the sectors authorised by the guide. Do not cross extraction areas or the surface outside their directions.",
        },
      ],
    },
  },
  {
    key: "tour-vs-por-libre",
    group: "visita",
    slug: "tour-vs-por-libre",
    slugEn: "tour-vs-self-guided",
    related: ["precios-y-guias", "desde-purmamarca", "cuesta-de-lipan"],
    es: {
      metaTitle: "Tour vs por libre a Salinas Grandes: diferencias",
      metaDescription:
        "Compará excursión desde tu base, traslado contratado y la guía comunitaria local obligatoria en el salar. Cada opción resuelve partes distintas del viaje.",
      h1: "Tour, traslado o por libre",
      lead: "Llegar a Salinas Grandes combina un tramo largo de altura con una guía local obligatoria en el salar. Una excursión desde tu ciudad de base, un traslado contratado y la guía del lugar resuelven cosas distintas.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Excursión desde la base",
          paragraphs: [
            "Incluye el transporte desde tu ciudad de base (por ejemplo Purmamarca o San Salvador de Jujuy).",
            "La guía local y el cargo de ingreso en el salar pueden ser un concepto aparte: pedí el detalle.",
          ],
        },
        {
          heading: "Traslado contratado",
          paragraphs: [
            "Contratás auto con chofer y vos definís los tiempos.",
            "En el salar sigue siendo obligatoria la guía local del punto de visita.",
          ],
        },
        {
          heading: "Por libre en auto",
          paragraphs: [
            "Conducís por RN 52 hasta el punto de encuentro.",
            "En el parador coordinás la guía local, el estacionamiento y el recorrido habilitado.",
          ],
        },
        {
          heading: "Lo que es igual en todos",
          bullets: [
            "La guía local en el salar es obligatoria.",
            "Confirmá el último ingreso y el recorrido habilitado.",
            "No entres a la superficie fuera de las indicaciones del guía.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Necesito sí o sí una excursión?",
          a: "No es lo único: podés contratar un traslado o ir en auto. Pero en el salar la guía local es obligatoria en cualquier caso.",
        },
        {
          q: "¿El tour incluye la guía del salar?",
          a: "A veces sí, a veces no. Pedí que te detallen si el tour cubre la guía local y el cargo de ingreso o si son aparte.",
        },
        {
          q: "¿Puedo ir por mi cuenta?",
          a: "Sí, hasta el punto de encuentro en tu vehículo. La visita sobre la sal requiere guía local; coordinala en el parador.",
        },
      ],
    },
    en: {
      metaTitle: "Salinas Grandes tour vs self-guided: the differences",
      metaDescription:
        "Compare a tour from your base, a hired transfer and the mandatory local community guide on the salt flat. Each option solves a different part of the trip.",
      h1: "Tour, transfer or self-drive",
      lead: "Reaching Salinas Grandes combines a long high-altitude stretch with a mandatory local guide on the salt. A tour from your base town, a hired transfer and the on-site guide solve different things.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Tour from your base",
          paragraphs: [
            "Includes transport from your base town (for example Purmamarca or San Salvador de Jujuy).",
            "The local guide and the on-site access charge can be a separate item: ask for the detail.",
          ],
        },
        {
          heading: "Hired transfer",
          paragraphs: [
            "You hire a car with driver and set the timing yourself.",
            "On the salt flat the local guide at the visitor point is still mandatory.",
          ],
        },
        {
          heading: "Self-drive",
          paragraphs: [
            "You drive RN 52 to the meeting point.",
            "At the parador you arrange the local guide, parking and the authorised route.",
          ],
        },
        {
          heading: "What is the same in every case",
          bullets: [
            "The local guide on the salt is mandatory.",
            "Confirm last entry and the authorised route.",
            "Do not enter the surface outside the guide's directions.",
          ],
        },
      ],
      faqs: [
        {
          q: "Do I absolutely need a tour?",
          a: "Not the only option: you can hire a transfer or drive yourself. But on the salt the local guide is mandatory in every case.",
        },
        {
          q: "Does the tour include the salt-flat guide?",
          a: "Sometimes yes, sometimes no. Ask whether the tour covers the local guide and access charge or whether they are separate.",
        },
        {
          q: "Can I go on my own?",
          a: "Yes, to the meeting point in your vehicle. The visit onto the salt requires a local guide; arrange it at the parador.",
        },
      ],
    },
  },
  {
    key: "altura",
    group: "visita",
    slug: "altura",
    slugEn: "altitude",
    related: ["clima", "mejor-epoca", "tour-vs-por-libre"],
    es: {
      metaTitle: "Altura en Salinas Grandes: preparación y síntomas",
      metaDescription:
        "El salar está cerca de los 3.450 m y la Cuesta de Lipán supera los 4.000 m. Dejá margen, hidratate y adaptá el ritmo; consultá a un profesional si tenés dudas.",
      h1: "Altura y cómo prepararte",
      lead: "Salinas Grandes está a gran altura (la referencia de esta guía cerca de los 3.450 m) y la Cuesta de Lipán supera los 4.000 m. La altitud cambia el esfuerzo; preparate con margen.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Qué esperar",
          paragraphs: [
            "A más altura, el cuerpo necesita más tiempo para el esfuerzo: la respiración se acorta y la fatiga llega antes.",
            "Purmamarca, a menor altura, es buen punto para adaptarse antes de subir.",
          ],
        },
        {
          heading: "Antes de subir",
          bullets: [
            "Hidratate bien y evitá el esfuerzo brusco el primer día de altura.",
            "Dormí en la base y dejá una mañana tranquila antes del ascenso.",
            "Si tenés dudas de salud, consultá a un profesional antes de viajar.",
          ],
          callout:
            "No damos consejo médico; consultá a un profesional si lo necesitás.",
        },
        {
          heading: "En el salar",
          paragraphs: [
            "El sol y el viento aumentan la exposición; usá protección y seguí al guía.",
            "Si los síntomas empeoran (mareo fuerte, dolor de cabeza persistente), descendé y buscá ayuda.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿A qué altura está Salinas Grandes?",
          a: "La referencia de esta guía está cerca de los 3.450 m, y la Cuesta de Lipán supera los 4.000 m en el camino. Son puntos de referencia, no mediciones de todo el salar.",
        },
        {
          q: "¿Da mal de altura?",
          a: "Puede dar síntomas leves a quienes suben rápido desde baja altura. Adaptarse en Purmamarca y no apurarse ayuda.",
        },
        {
          q: "¿Cómo me preparo?",
          a: "Hidratate, dormí en la base, evitá el esfuerzo brusco el primer día y consultá a un profesional si tenés condiciones de salud que lo justifiquen.",
        },
      ],
    },
    en: {
      metaTitle: "Altitude at Salinas Grandes: preparation and symptoms",
      metaDescription:
        "The flat sits near 3,450 m and Cuesta de Lipán rises above 4,000 m. Leave margin, hydrate and pace yourself; ask a professional if you have concerns.",
      h1: "Altitude and how to prepare",
      lead: "Salinas Grandes is at high altitude (this guide's reference point near 3,450 m) and Cuesta de Lipán rises above 4,000 m. Altitude changes the effort; prepare with margin.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "What to expect",
          paragraphs: [
            "At higher altitude the body needs more time for effort: breathing shortens and fatigue comes sooner.",
            "Purmamarca, at lower altitude, is a good place to acclimatise before going up.",
          ],
        },
        {
          heading: "Before going up",
          bullets: [
            "Hydrate well and avoid sudden effort on the first day at altitude.",
            "Sleep at the base and keep a calm morning before the ascent.",
            "If you have health concerns, ask a professional before travelling.",
          ],
          callout:
            "We do not give medical advice; consult a professional if you need to.",
        },
        {
          heading: "On the salt flat",
          paragraphs: [
            "Sun and wind increase exposure; use protection and follow the guide.",
            "If symptoms worsen (strong dizziness, persistent headache), descend and seek help.",
          ],
        },
      ],
      faqs: [
        {
          q: "What altitude is Salinas Grandes?",
          a: "This guide's reference point is near 3,450 m, and Cuesta de Lipán rises above 4,000 m on the way. These are reference points, not measurements of the whole flat.",
        },
        {
          q: "Does it cause altitude sickness?",
          a: "It can cause mild symptoms for those who ascend quickly from low altitude. Acclimatising in Purmamarca and not rushing helps.",
        },
        {
          q: "How do I prepare?",
          a: "Hydrate, sleep at the base, avoid sudden effort on the first day, and consult a professional if you have health conditions that warrant it.",
        },
      ],
    },
  },
  {
    key: "que-ver-cerca",
    group: "visita",
    slug: "que-ver-cerca",
    slugEn: "what-to-see-nearby",
    related: ["mapa-y-accesos", "desde-purmamarca", "cuesta-de-lipan", "mejor-epoca"],
    es: {
      metaTitle: "Qué ver cerca de Salinas Grandes: Purmamarca y Cuesta de Lipán",
      metaDescription:
        "Desde el salar, Purmamarca (cerca de 65 km por RN 52) y la Cuesta de Lipán son el complemento natural. No verificamos un listado cerrado de atracciones.",
      h1: "Qué ver cerca del salar",
      lead: "El salar queda en plena Puna, y el recorrido hasta él ya es parte del paisaje. Purmamarca y la Cuesta de Lipán son los puntos que esta guía usa como referencia, pero no agotan lo que hay en la zona.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "En el camino: Cuesta de Lipán",
          paragraphs: [
            "La RN 52 sube por la Cuesta de Lipán, que supera los 4.000 metros antes de descender al salar.",
            "Hay miradores donde parar, pero esta guía los usa como referencia de altura y paisaje, no como un listado oficial de atracciones.",
          ],
        },
        {
          heading: "Purmamarca y la Quebrada",
          paragraphs: [
            "Purmamarca queda aproximadamente 65 km del punto de referencia por RN 52 y Cuesta de Lipán.",
            "El Cerrito de los Siete Colores es el punto más conocido de la localidad y suele ser base para adaptarse a la altura antes de subir.",
          ],
        },
        {
          heading: "No es un listado cerrado",
          bullets: [
            "Existen otros puntos de servicio comunitario (como Pozo Colorado o Santuario de Tres Pozos) que esta guía no usa como referencia principal.",
            "El salar es un paisaje de trabajo: el recorrido depende del guía y de las condiciones del día.",
          ],
          callout:
            "No presentamos una lista definitiva de atracciones: confirmá en el parador qué se puede visitar el día que vayas.",
        },
      ],
      faqs: [
        {
          q: "¿Qué hay cerca de Salinas Grandes?",
          a: "Purmamarca, a unos 65 km por RN 52, y la Cuesta de Lipán en el camino. No verificamos un listado cerrado: depende del recorrido habilitado ese día.",
        },
        {
          q: "¿Vale la pena parar en Purmamarca?",
          a: "Sí como base para adaptarse a la altura y para ver el Cerrito de los Siete Colores. Confirmá horarios y accesos el mismo día.",
        },
        {
          q: "¿Se puede ver el salar y la Quebrada en el mismo día?",
          a: "Es posible si salís temprano desde San Salvador de Jujuy o Purmamarca. Dejá margen por la altura y la ruta de montaña.",
        },
      ],
    },
    en: {
      metaTitle: "What to see near Salinas Grandes: Purmamarca and Cuesta de Lipán",
      metaDescription:
        "From the salt flat, Purmamarca (about 65 km via RN 52) and the Cuesta de Lipán are the natural add-ons. We have not verified a fixed list of attractions.",
      h1: "What to see near the salt flat",
      lead: "The salt flat sits in the Puna, and the drive to it is already part of the landscape. Purmamarca and the Cuesta de Lipán are the reference points this guide uses, but they do not exhaust what the region offers.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "On the way: Cuesta de Lipán",
          paragraphs: [
            "RN 52 climbs the Cuesta de Lipán, which rises above 4,000 metres before descending to the salt flat.",
            "There are viewpoints to stop at, but this guide uses them as a reference for altitude and scenery, not as an official list of attractions.",
          ],
        },
        {
          heading: "Purmamarca and the Quebrada",
          paragraphs: [
            "Purmamarca is roughly 65 km from the reference point via RN 52 and the Cuesta de Lipán.",
            "The Hill of Seven Colours is the town's best-known spot and is often used as a base to acclimatise before going up.",
          ],
        },
        {
          heading: "Not a closed list",
          bullets: [
            "Other community service points exist (such as Pozo Colorado or Santuario de Tres Pozos) that this guide does not use as its main reference.",
            "The salt flat is a working landscape: the route depends on the guide and the day's conditions.",
          ],
          callout:
            "We do not present a definitive attraction list: ask at the parador what can be visited on the day you go.",
        },
      ],
      faqs: [
        {
          q: "What is near Salinas Grandes?",
          a: "Purmamarca, about 65 km via RN 52, and the Cuesta de Lipán on the way. We have not verified a closed list: it depends on the route open that day.",
        },
        {
          q: "Is it worth stopping in Purmamarca?",
          a: "Yes as a base to acclimatise and to see the Hill of Seven Colours. Confirm hours and access on the day.",
        },
        {
          q: "Can I see the salt flat and the Quebrada in one day?",
          a: "Possible if you leave early from San Salvador de Jujuy or Purmamarca. Leave margin for altitude and the mountain road.",
        },
      ],
    },
  },
  {
    key: "fotografia",
    group: "visita",
    slug: "fotografia",
    slugEn: "photography",
    related: ["clima", "efecto-espejo", "mejor-hora-dia", "seguridad"],
    es: {
      metaTitle: "Fotografía en Salinas Grandes: luces, espejo y precaución",
      metaDescription:
        "Consejos de fotografía en el salar: cuidado del equipo por la sal y el viento, luz fuerte y el espejo que no está garantizado.",
      h1: "Fotografía en el salar",
      lead: "La superficie blanca y el cielo abierto son fotogénicos, pero la Puna exige preparación: sol fuerte, viento y sal. El efecto espejo depende del agua y no se garantiza.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Luz y exposición",
          paragraphs: [
            "A gran altura la radiación es intensa: usá lentes con filtro UV y protegé la piel.",
            "La sal blanca engaña al exposímetro; conviene sobreexponer un poco para no perder detalle en el blanco.",
          ],
        },
        {
          heading: "Cuidado del equipo",
          bullets: [
            "La sal fina y el viento dañan lentes y sensores: protegé el equipo y limpiá después de la visita.",
            "Usá trípode firme: el viento abierto del salar mueve la cámara.",
            "No cambies lentes expuesto al viento sobre la sal: entra grano fino.",
          ],
          callout:
            "La sal es abrasiva: una limpieza suave y posterior evita rayones en el equipo.",
        },
        {
          heading: "Espejo y seguridad",
          paragraphs: [
            "El espejo aparece con agua sobre la sal, pero no está garantizado para una fecha.",
            "No entres a los piletones ni a las áreas de extracción para la foto; seguí al guía y respetá las zonas de trabajo.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Cuándo sale mejor la foto?",
          a: "Con agua tras lluvias hay espejo (no garantizado); en seco, la superficie blanca da mucho contraste. La luz suave es a primera hora o al final de la tarde.",
        },
        {
          q: "¿El efecto espejo está garantizado?",
          a: "No. Depende del agua y del clima del día; no lo prometemos para tu fecha.",
        },
        {
          q: "¿Cómo protejo la cámara de la sal?",
          a: "Bolsas selladas para el equipo, limpieza posterior y evitá cambiar lentes al viento sobre la sal.",
        },
      ],
    },
    en: {
      metaTitle: "Photography at Salinas Grandes: light, mirror and caution",
      metaDescription:
        "Salt-flat photography tips: protect gear from salt and wind, handle strong light, and the mirror effect is not guaranteed.",
      h1: "Photography on the salt flat",
      lead: "The white surface and open sky are photogenic, but the Puna demands preparation: strong sun, wind and salt. The mirror effect depends on water and is not guaranteed.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Light and exposure",
          paragraphs: [
            "At high altitude the radiation is intense: use UV-filter sunglasses and protect your skin.",
            "The white salt fools the light meter; slightly overexposing helps keep detail in the whites.",
          ],
        },
        {
          heading: "Gear care",
          bullets: [
            "Fine salt and wind damage lenses and sensors: protect the gear and clean it after the visit.",
            "Use a sturdy tripod: the open flat wind moves the camera.",
            "Do not change lenses exposed to wind over the salt: fine grit gets in.",
          ],
          callout:
            "Salt is abrasive: a gentle clean-up afterwards avoids scratches on the gear.",
        },
        {
          heading: "Mirror and safety",
          paragraphs: [
            "The mirror appears with water on the salt, but it is not guaranteed for a date.",
            "Do not enter the pools or extraction areas for the photo; follow the guide and respect the working zones.",
          ],
        },
      ],
      faqs: [
        {
          q: "When are photos best?",
          a: "With water after rains there is a mirror (not guaranteed); in dry season the white surface gives strong contrast. Soft light is early or late in the day.",
        },
        {
          q: "Is the mirror effect guaranteed?",
          a: "No. It depends on the day's water and weather; we do not promise it for your date.",
        },
        {
          q: "How do I protect the camera from salt?",
          a: "Sealed bags for the gear, cleaning afterwards, and avoid changing lenses in wind over the salt.",
        },
      ],
    },
  },
  {
    key: "seguridad",
    group: "visita",
    slug: "seguridad",
    slugEn: "safety",
    related: ["precios-y-guias", "altura", "clima", "mapa-y-accesos"],
    es: {
      metaTitle: "Seguridad en Salinas Grandes: guía, altura y ruta",
      metaDescription:
        "Visitá el salar con guía local obligatoria, respetá las áreas de trabajo y preparate para la altura y el viento. No es un mirador libre.",
      h1: "Seguridad en la visita",
      lead: "El salar es un paisaje de trabajo, no un mirador habilitado. La guía local es obligatoria y las zonas de extracción quedan fuera de los recorridos habilitados.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Guía y áreas de trabajo",
          paragraphs: [
            "Visit Argentina indica que la guía local es obligatoria en el acceso al salar.",
            "No entres a los piletones ni a las áreas de extracción; seguí al guía y respetá las zonas de trabajo.",
          ],
          bullets: [
            "Confirmá el recorrido habilitado en el parador antes de subir.",
            "No conduzcas por la superficie fuera de las indicaciones del guía.",
          ],
        },
        {
          heading: "Altura y clima",
          bullets: [
            "A más de 3.400 m, hidratate y no apures el esfuerzo el primer día de altura.",
            "El viento y el frío pueden aparecer de repente: llevá abrigo por capas.",
            "Si los síntomas empeoran (mareo fuerte, dolor de cabeza persistente), descendé y buscá ayuda.",
          ],
          callout: "No damos consejo médico; consultá a un profesional si lo necesitás.",
        },
        {
          heading: "Ruta y comunicación",
          paragraphs: [
            "RN 52 puede cambiar en época de lluvias; verificá el estado de la ruta el mismo día.",
            "No dependas de conectividad continua en la Puna: avisá tu ruta y cargá combustible y agua antes de alejarte de la base.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Es peligroso?",
          a: "No si seguís al guía y respetás las áreas de trabajo. El riesgo principal es la altura y el clima, no la superficie en sí.",
        },
        {
          q: "¿Puedo caminar solo sobre la sal?",
          a: "La visita requiere guía local; no entres a la superficie fuera de las indicaciones del guía.",
        },
        {
          q: "¿Hay señal de celular?",
          a: "No es confiable en la Puna. Avisá tu ruta a alguien y llevá margen por si cambia el acceso.",
        },
      ],
    },
    en: {
      metaTitle: "Safety at Salinas Grandes: guide, altitude and road",
      metaDescription:
        "Visit the salt flat with a mandatory local guide, respect the working areas and prepare for altitude and wind. It is not a free viewpoint.",
      h1: "Safety on the visit",
      lead: "The salt flat is a working landscape, not an open viewpoint. The local guide is mandatory and the extraction areas are outside the authorised routes.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Guide and working areas",
          paragraphs: [
            "Visit Argentina states that the local guide is mandatory for access to the salt flat.",
            "Do not enter the pools or the extraction areas; follow the guide and respect the working zones.",
          ],
          bullets: [
            "Confirm the authorised route at the parador before going up.",
            "Do not drive on the surface outside the guide's directions.",
          ],
        },
        {
          heading: "Altitude and weather",
          bullets: [
            "Above 3,400 m, hydrate and do not rush the effort on the first day at altitude.",
            "Wind and cold can appear suddenly: bring warm layers.",
            "If symptoms worsen (strong dizziness, persistent headache), descend and seek help.",
          ],
          callout: "We do not give medical advice; ask a professional if you need to.",
        },
        {
          heading: "Road and communication",
          paragraphs: [
            "RN 52 can change in the rainy season; check the road status on the day.",
            "Do not rely on continuous connectivity in the Puna: tell someone your route and fuel up and carry water before leaving the base.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is it dangerous?",
          a: "Not if you follow the guide and respect the working areas. The main risk is altitude and weather, not the surface itself.",
        },
        {
          q: "Can I walk on the salt on my own?",
          a: "The visit requires a local guide; do not enter the surface outside the guide's directions.",
        },
        {
          q: "Is there mobile signal?",
          a: "Not reliable in the Puna. Tell someone your route and leave margin in case access changes.",
        },
      ],
    },
  },
  {
    key: "con-ninos",
    group: "visita",
    slug: "con-ninos",
    slugEn: "with-kids",
    related: ["altura", "clima", "precios-y-guias", "donde-comer"],
    es: {
      metaTitle: "Salinas Grandes con niños: altura, frío y preparación",
      metaDescription:
        "Visitar el salar con niños: altura, frío y sol fuerte. Adaptación en Purmamarca, hidratación y guía local obligatoria.",
      h1: "Visitar el salar con niños",
      lead: "La altura y el sol fuerte son el punto a vigilar con niños. Purmamarca es buen punto para adaptarse antes de subir por RN 52.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Antes de subir",
          bullets: [
            "Dormí en Purmamarca o en la base una noche antes, si es posible.",
            "Hidratá a los niños y poneles protector solar y gorro.",
            "No apures el ascenso: la altura se nota más en los más pequeños.",
          ],
        },
        {
          heading: "En el salar",
          paragraphs: [
            "La guía local es obligatoria para toda la visita.",
            "No dejes a los niños cerca de los piletones ni de las áreas de extracción; llevá agua y abrigo por capas.",
          ],
          callout:
            "Consultá a un profesional si tu hijo tiene condiciones de salud que la altura pudiera agravar.",
        },
        {
          heading: "Tiempos",
          bullets: [
            "Salí temprano para evitar el sol más fuerte y el retorno nocturno.",
            "Dejá margen por la ruta de montaña y la altura.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿A partir de qué edad se puede ir?",
          a: "No hay un límite fijo: la clave es la adaptación a la altura y la hidratación. Consultá a un profesional si tenés dudas.",
        },
        {
          q: "¿Hace mucho frío para ellos?",
          a: "Sí a esa altura, aunque sea verano austral. Llevá capas y abrigo incluso en diciembre–febrero.",
        },
        {
          q: "¿La guía es obligatoria igual con niños?",
          a: "Sí: la guía local es obligatoria para toda la visita, sin distinción de edad.",
        },
      ],
    },
    en: {
      metaTitle: "Salinas Grandes with kids: altitude, cold and preparation",
      metaDescription:
        "Visiting the salt flat with children: altitude, cold and strong sun. Acclimatise in Purmamarca, hydrate and the local guide is mandatory.",
      h1: "Visiting the salt flat with kids",
      lead: "Altitude and strong sun are the things to watch with children. Purmamarca is a good place to acclimatise before going up RN 52.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Before going up",
          bullets: [
            "Sleep in Purmamarca or at the base the night before, if possible.",
            "Keep children hydrated and apply sunscreen and a hat.",
            "Do not rush the ascent: altitude hits the youngest harder.",
          ],
        },
        {
          heading: "On the salt flat",
          paragraphs: [
            "The local guide is mandatory for the whole visit.",
            "Keep children away from the pools and extraction areas; carry water and warm layers.",
          ],
          callout:
            "Ask a professional if your child has a health condition that altitude could worsen.",
        },
        {
          heading: "Timing",
          bullets: [
            "Leave early to avoid the strongest sun and a night return.",
            "Leave margin for the mountain road and altitude.",
          ],
        },
      ],
      faqs: [
        {
          q: "From what age can children go?",
          a: "There is no fixed limit: the key is altitude acclimatisation and hydration. Ask a professional if unsure.",
        },
        {
          q: "Is it very cold for them?",
          a: "Yes at that altitude, even in the southern summer. Bring layers and warm clothes even in December–February.",
        },
        {
          q: "Is the guide still mandatory with kids?",
          a: "Yes: the local guide is mandatory for the whole visit, regardless of age.",
        },
      ],
    },
  },
  {
    key: "donde-comer",
    group: "visita",
    slug: "donde-comer",
    slugEn: "where-to-eat",
    related: ["mapa-y-accesos", "desde-purmamarca", "con-ninos"],
    es: {
      metaTitle: "Dónde comer cerca de Salinas Grandes: parador y Purmamarca",
      metaDescription:
        "En el punto de referencia (Parador La Curva, RN 52 km 60) suele haber comida de la comunidad. No verificamos una oferta fija; confirmá el día.",
      h1: "Dónde comer cerca del salar",
      lead: "El punto de referencia de esta guía es el Parador La Curva (RN 52 km 60), donde la comunidad suele ofrecer comida y bebida. No verificamos un listado cerrado de locales.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "En el punto de referencia",
          paragraphs: [
            "El parador es el punto de encuentro y suele tener servicio de comida y bebida de la comunidad.",
            "Confirmá qué hay disponible el día que vayas; no esperes una carta fija ni gran variedad.",
          ],
          bullets: [
            "Llevá efectivo: no asumas que aceptan tarjeta.",
            "Los horarios pueden variar según la temporada y el día.",
          ],
        },
        {
          heading: "En Purmamarca",
          paragraphs: [
            "A unos 65 km por RN 52, la localidad tiene más opciones de comida.",
            "Conviene comer antes o después en la base, donde hay más variedad y servicios.",
          ],
          callout:
            "No mostramos precios ni carta porque no verificamos una oferta actual: tratá la información como referencia.",
        },
        {
          heading: "Llevá tu propia agua",
          bullets: [
            "Hidratate: comprá agua antes de alejarte de la base.",
            "La Puna es seca y el esfuerzo a altura aumenta la necesidad de líquido.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Hay comida en el salar?",
          a: "En el Parador La Curva suele haber servicio de comida y bebida de la comunidad. Confirmá qué hay el día que vayas.",
        },
        {
          q: "¿Aceptan tarjeta?",
          a: "No lo asumas: llevá efectivo para el punto de referencia.",
        },
        {
          q: "¿Dónde comer con más opciones?",
          a: "En Purmamarca, a unos 65 km por RN 52, donde hay más variedad que en el punto de encuentro.",
        },
      ],
    },
    en: {
      metaTitle: "Where to eat near Salinas Grandes: parador and Purmamarca",
      metaDescription:
        "At the reference point (Parador La Curva, RN 52 km 60) the community usually offers food. We have not verified a fixed offer; check on the day.",
      h1: "Where to eat near the salt flat",
      lead: "This guide's reference point is Parador La Curva (RN 52 km 60), where the community usually offers food and drink. We have not verified a closed list of venues.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "At the reference point",
          paragraphs: [
            "The parador is the meeting point and usually has community food and drink service.",
            "Check what is available on the day you go; do not expect a fixed menu or much variety.",
          ],
          bullets: [
            "Carry cash: do not assume cards are accepted.",
            "Hours can vary by season and day.",
          ],
        },
        {
          heading: "In Purmamarca",
          paragraphs: [
            "About 65 km via RN 52, the town has more food options.",
            "It is worth eating before or after at the base, where there is more variety and services.",
          ],
          callout:
            "We do not show prices or a menu because we have not verified a current offer: treat the information as a reference.",
        },
        {
          heading: "Bring your own water",
          bullets: [
            "Stay hydrated: buy water before leaving the base.",
            "The Puna is dry and effort at altitude increases the need for fluids.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is there food at the salt flat?",
          a: "At Parador La Curva the community usually offers food and drink. Check what is available on the day you go.",
        },
        {
          q: "Do they accept cards?",
          a: "Do not assume so: carry cash for the reference point.",
        },
        {
          q: "Where can I eat with more options?",
          a: "In Purmamarca, about 65 km via RN 52, which has more variety than the meeting point.",
        },
      ],
    },
  },
  {
    key: "donde-dormir",
    group: "visita",
    slug: "donde-dormir",
    slugEn: "where-to-stay",
    related: ["desde-purmamarca", "desde-san-salvador-de-jujuy", "altura"],
    es: {
      metaTitle: "Dónde dormir para visitar Salinas Grandes: Purmamarca y Jujuy",
      metaDescription:
        "Dormir en Purmamarca (≈65 km) o San Salvador de Jujuy acorta el viaje y ayuda a adaptarse a la altura. No listamos hoteles concretos.",
      h1: "Dónde dormir cerca del salar",
      lead: "No hay alojamiento sobre el salar. Purmamarca (≈65 km por RN 52) y San Salvador de Jujuy son las bases que usamos como referencia para acortar el viaje y adaptarse a la altura.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Purmamarca (base cercana)",
          paragraphs: [
            "Queda aproximadamente 65 km del punto de referencia por RN 52 y Cuesta de Lipán.",
            "Permite salir temprano y adaptarse a la altura antes de subir.",
          ],
          bullets: [
            "Compará según tu presupuesto y lo que busques.",
            "Reservá con antelación en temporada alta.",
          ],
        },
        {
          heading: "San Salvador de Jujuy (base lejana)",
          paragraphs: [
            "A unos 130 km, ofrece más opciones de alojamiento y servicios que la localidad de altura.",
          ],
        },
        {
          heading: "Sobre el salar",
          callout:
            "No hay alojamiento en el salar ni en el punto de referencia: es un paisaje de trabajo, no un polo turístico habilitado.",
        },
      ],
      faqs: [
        {
          q: "¿Se puede dormir en el salar?",
          a: "No según esta guía: es un paisaje de trabajo y el punto de referencia no es alojamiento.",
        },
        {
          q: "¿Dónde es mejor dormir?",
          a: "Purmamarca para acortar el viaje y adaptarse a la altura; San Salvador de Jujuy para más opciones de alojamiento.",
        },
        {
          q: "¿Conviene reservar?",
          a: "Sí en temporada alta: compará y reservá con antelación para no depender de la disponibilidad del día.",
        },
      ],
    },
    en: {
      metaTitle: "Where to stay for Salinas Grandes: Purmamarca and Jujuy",
      metaDescription:
        "Sleeping in Purmamarca (≈65 km) or San Salvador de Jujuy shortens the trip and helps with altitude. We do not list specific hotels.",
      h1: "Where to stay near the salt flat",
      lead: "There is no accommodation on the salt flat. Purmamarca (≈65 km via RN 52) and San Salvador de Jujuy are the reference bases we use to shorten the trip and acclimatise.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Purmamarca (nearby base)",
          paragraphs: [
            "It is roughly 65 km from the reference point via RN 52 and the Cuesta de Lipán.",
            "It lets you leave early and acclimatise before going up.",
          ],
          bullets: [
            "Compare by budget and what you are looking for.",
            "Book ahead in high season.",
          ],
        },
        {
          heading: "San Salvador de Jujuy (farther base)",
          paragraphs: [
            "About 130 km away, it offers more accommodation and service options than the high-altitude town.",
          ],
        },
        {
          heading: "On the salt flat",
          callout:
            "There is no accommodation on the salt flat or at the reference point: it is a working landscape, not an enabled tourist hub.",
        },
      ],
      faqs: [
        {
          q: "Can you sleep at the salt flat?",
          a: "Not per this guide: it is a working landscape and the reference point is not lodging.",
        },
        {
          q: "Where is it best to sleep?",
          a: "Purmamarca to shorten the trip and acclimatise; San Salvador de Jujuy for more lodging options.",
        },
        {
          q: "Is it worth booking?",
          a: "Yes in high season: compare and book ahead so you do not depend on same-day availability.",
        },
      ],
    },
  },
  {
    key: "la-sal",
    group: "visita",
    slug: "la-sal",
    slugEn: "the-salt",
    related: ["efecto-espejo", "seguridad", "mapa-y-accesos"],
    es: {
      metaTitle: "La sal de Salinas Grandes: qué es y cómo se forma",
      metaDescription:
        "El salar es una cuenca de evaporación de la Puna donde la comunidad extrae sal. Es un paisaje de trabajo, no un mirador libre.",
      h1: "La sal y el paisaje",
      lead: "Salinas Grandes es una de las salinas más grandes de la Puna. La sal se extrae de piletones de evaporación que la comunidad local trabaja; por eso la visita requiere guía.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Cómo se forma",
          paragraphs: [
            "Es una cuenca cerrada de la altiplanicie: el agua se evapora y deja la sal acumulada.",
            "La comunidad la cosecha en piletones de evaporación, no en un lago permanente visible.",
          ],
          bullets: [
            "La superficie cambia con la estación: seca o cubierta de agua.",
            "No es una piscina turística: es un recurso que se trabaja.",
          ],
        },
        {
          heading: "Trabajo, no decorado",
          paragraphs: [
            "Las áreas de extracción quedan fuera del recorrido habilitado.",
            "No entres a los piletones ni a las zonas de trabajo.",
          ],
          callout:
            "El salar es un paisaje de trabajo de la comunidad: la guía local es obligatoria y señala dónde circular.",
        },
        {
          heading: "Cuidado del lugar",
          bullets: [
            "No arrojes basura ni piedras a los piletones.",
            "Respetá las señalizaciones y seguí al guía.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Es un lago?",
          a: "No siempre: es una cuenca de evaporación cuya superficie cambia con la estación. En la temporada seca suele estar seca.",
        },
        {
          q: "¿Se puede sacar sal?",
          a: "No lo presentamos como permitido: es trabajo de la comunidad. Consultá al guía y a la autoridad local.",
        },
        {
          q: "¿Por qué la guía es obligatoria?",
          a: "Porque es un paisaje de trabajo con áreas de extracción; la guía señala el recorrido habilitado y cuida el lugar.",
        },
      ],
    },
    en: {
      metaTitle: "The salt of Salinas Grandes: what it is and how it forms",
      metaDescription:
        "The salt flat is an evaporation basin of the Puna where the community extracts salt. It is a working landscape, not a free viewpoint.",
      h1: "The salt and the landscape",
      lead: "Salinas Grandes is one of the largest salt flats of the Puna. Salt is harvested from evaporation ponds worked by the local community; that is why the visit requires a guide.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "How it forms",
          paragraphs: [
            "It is a closed basin of the high plateau: water evaporates and leaves accumulated salt.",
            "The community harvests it from evaporation ponds, not from a permanent visible lake.",
          ],
          bullets: [
            "The surface changes with the season: dry or covered with water.",
            "It is not a tourist pool: it is a worked resource.",
          ],
        },
        {
          heading: "Work, not decor",
          paragraphs: [
            "The extraction areas are outside the authorised route.",
            "Do not enter the ponds or the working zones.",
          ],
          callout:
            "The salt flat is a working landscape of the community: the local guide is mandatory and marks where to go.",
        },
        {
          heading: "Caring for the place",
          bullets: [
            "Do not throw litter or stones into the ponds.",
            "Respect the signage and follow the guide.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is it a lake?",
          a: "Not always: it is an evaporation basin whose surface changes with the season. In the dry season it is usually dry.",
        },
        {
          q: "Can I take salt?",
          a: "We do not present this as allowed: it is community work. Ask the guide and the local authority.",
        },
        {
          q: "Why is the guide mandatory?",
          a: "Because it is a working landscape with extraction areas; the guide marks the authorised route and protects the place.",
        },
      ],
    },
  },
  {
    key: "fauna-flora-puna",
    group: "visita",
    slug: "fauna-flora-puna",
    slugEn: "puna-wildlife",
    related: ["clima", "seguridad", "la-sal"],
    es: {
      metaTitle: "Fauna y flora de la Puna en Salinas Grandes",
      metaDescription:
        "La Puna es un ecosistema de altura: suelos salinos, viento y poca agua. No verificamos especies concretas para este punto; llevá binoculares.",
      h1: "Fauna y flora de la Puna",
      lead: "A más de 3.400 m, el ecosistema es de altura: suelos salinos, viento y poca agua. No verificamos un listado cerrado de especies para este punto de visita.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Un ecosistema de altura",
          paragraphs: [
            "La Puna combina altiplano, salina y quebrada; la vida se adapta al frío, al viento y a la sal.",
          ],
          bullets: [
            "Vegetación baja y resistente, capaz de soportar la sal y el frío.",
            "Camélidos y aves suelen verse en la zona, según la época del año.",
          ],
        },
        {
          heading: "Observación",
          bullets: [
            "Llevá binoculares si te interesa la observación.",
            "No alimentes ni persigas animales; respetá las áreas de trabajo.",
          ],
          callout:
            "No listamos nombres de especies porque no verificamos un inventario para este punto: la zona es amplia y variable.",
        },
        {
          heading: "Cuidado",
          paragraphs: [
            "No dejes basura: el ecosistema es frágil frente al pisoteo y la sal.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Qué animales hay?",
          a: "Suelen verse camélidos y aves, pero no verificamos un listado cerrado para este punto de visita.",
        },
        {
          q: "¿Hay vegetación?",
          a: "Sí, baja y resistente a la sal y al frío del altiplano.",
        },
        {
          q: "¿Se puede acampar?",
          a: "No lo presentamos como habilitado: es un paisaje de trabajo. Consultá al guía y a la autoridad local.",
        },
      ],
    },
    en: {
      metaTitle: "Puna wildlife at Salinas Grandes",
      metaDescription:
        "The Puna is a high-altitude ecosystem: saline soils, wind and little water. We have not verified specific species for this point; bring binoculars.",
      h1: "Puna wildlife",
      lead: "Above 3,400 m, the ecosystem is high-altitude: saline soils, wind and little water. We have not verified a closed species list for this visitor point.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "A high-altitude ecosystem",
          paragraphs: [
            "The Puna mixes high plateau, salt flat and gorge; life adapts to cold, wind and salt.",
          ],
          bullets: [
            "Low, resilient vegetation able to withstand salt and cold.",
            "Camelids and birds are often seen in the area, depending on the time of year.",
          ],
        },
        {
          heading: "Observation",
          bullets: [
            "Bring binoculars if you are into watching wildlife.",
            "Do not feed or chase animals; respect the working areas.",
          ],
          callout:
            "We do not list species names because we have not verified an inventory for this point: the area is wide and variable.",
        },
        {
          heading: "Care",
          paragraphs: [
            "Do not leave litter: the ecosystem is fragile against trampling and salt.",
          ],
        },
      ],
      faqs: [
        {
          q: "What animals are there?",
          a: "Camelids and birds are often seen, but we have not verified a closed list for this visitor point.",
        },
        {
          q: "Is there vegetation?",
          a: "Yes, low and resistant to the salt and cold of the high plateau.",
        },
        {
          q: "Can you camp?",
          a: "We do not present this as enabled: it is a working landscape. Ask the guide and the local authority.",
        },
      ],
    },
  },
  {
    key: "mejor-hora-dia",
    group: "visita",
    slug: "mejor-hora-dia",
    slugEn: "best-time-of-day",
    related: ["horarios", "clima", "fotografia", "efecto-espejo"],
    es: {
      metaTitle: "Mejor hora del día en Salinas Grandes: luz y frío",
      metaDescription:
        "El salar se visita con luz natural; la mañana temprana y la tarde evitan el sol más fuerte. Confirmá el último ingreso en el parador.",
      h1: "La mejor hora del día",
      lead: "No hay un cartel oficial de horario para todo el salar. La ficha de Maps de este punto mostraba 09:00–18:00 en una consulta fechada; la luz y el frío cambian según la hora.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Mañana vs tarde",
          paragraphs: [
            "La mañana temprana suele tener luz suave y menos viento; la tarde alarga las sombras y puede enfriar rápido.",
          ],
          bullets: [
            "Evitá el mediodía de sol fuerte en altura: la radiación es intensa.",
            "La superficie blanca refleja y cansa la vista sin protección.",
          ],
        },
        {
          heading: "Último ingreso",
          bullets: [
            "Confirmá el último ingreso habilitado en el Parador La Curva para tu fecha.",
            "No asumes una hora fija: depende del operador y de las condiciones del día.",
          ],
          callout:
            "El día se acorta en invierno: dejá margen para el regreso antes de oscurecer.",
        },
        {
          heading: "Por qué cambia",
          paragraphs: [
            "En la temporada de lluvias el acceso interior cambia.",
            "Verificá el estado de RN 52 el mismo día y consultá al guía sobre el recorrido habilitado.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Qué hora es mejor para ir?",
          a: "Mañana temprana o tarde, para luz suave y menos viento. Evitá el mediodía de sol fuerte en altura.",
        },
        {
          q: "¿A qué hora cierra?",
          a: "No hay un cierre oficial del salar; confirmá el último ingreso habilitado en el parador para tu día.",
        },
        {
          q: "¿En invierno se puede visitar?",
          a: "Sí, pero el día es más corto: dejá margen para volver antes de que oscurezca.",
        },
      ],
    },
    en: {
      metaTitle: "Best time of day at Salinas Grandes: light and cold",
      metaDescription:
        "The salt flat is visited in daylight; early morning and afternoon avoid the strongest sun. Confirm the last entry at the parador.",
      h1: "The best time of day",
      lead: "There is no official sign with hours for the whole salt flat. The Maps listing for this point showed 09:00–18:00 on a dated check; light and cold change by the hour.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Morning vs afternoon",
          paragraphs: [
            "Early morning usually has soft light and less wind; afternoon lengthens shadows and can cool quickly.",
          ],
          bullets: [
            "Avoid the strong midday sun at altitude: radiation is intense.",
            "The white surface reflects and tires the eyes without protection.",
          ],
        },
        {
          heading: "Last entry",
          bullets: [
            "Confirm the last authorised entry at Parador La Curva for your date.",
            "Do not assume a fixed time: it depends on the operator and the day's conditions.",
          ],
          callout:
            "The day is shorter in winter: leave margin to return before dark.",
        },
        {
          heading: "Why it changes",
          paragraphs: [
            "In the rainy season, interior access changes.",
            "Check RN 52 on the day and ask the guide about the authorised route.",
          ],
        },
      ],
      faqs: [
        {
          q: "What time is best to go?",
          a: "Early morning or afternoon, for soft light and less wind. Avoid the strong midday sun at altitude.",
        },
        {
          q: "What time does it close?",
          a: "There is no official closing of the salt flat; confirm the last authorised entry at the parador for your day.",
        },
        {
          q: "Can you visit in winter?",
          a: "Yes, but the day is shorter: leave margin to get back before dark.",
        },
      ],
    },
  },
  // ───────────────────────── transporte ─────────────────────────
  {
    key: "desde-purmamarca",
    group: "transporte",
    slug: "desde-purmamarca",
    slugEn: "from-purmamarca",
    related: ["cuesta-de-lipan", "mapa-y-accesos", "horarios", "tour-vs-por-libre"],
    es: {
      metaTitle: "Cómo llegar a Salinas Grandes desde Purmamarca por RN 52",
      metaDescription:
        "Desde Purmamarca por RN 52 y Cuesta de Lipán, unos 65 km de montaña y altura. Confirmá el estado de la ruta y el punto de encuentro antes de viajar.",
      h1: "Desde Purmamarca",
      lead: "Purmamarca es la base más cercana: la información nacional sitúa el salar a unos 66 km por RN 52 y Cuesta de Lipán. Es una referencia de recorrido, no una duración garantizada.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "El recorrido",
          paragraphs: [
            "Desde Purmamarca se toma RN 52 hacia el oeste por la Cuesta de Lipán.",
            "El camino de montaña supera los 4.000 metros antes de descender al salar. Son unos 65–66 km de referencia.",
          ],
        },
        {
          heading: "Paradas sugeridas",
          bullets: [
            "Mirador de la Cuesta de Lipán, para la altura y el paisaje.",
            "El punto de encuentro en Parador La Curva (RN 52 km 60).",
            "Sectores habilitados por el guía para la visita sobre la sal.",
          ],
        },
        {
          heading: "Retorno",
          paragraphs: [
            "Confirmá la recogida, el combustible y la autonomía antes de subir.",
            "No dependas de conectividad continua en la ruta.",
          ],
          callout:
            "No asumamos una duración fija: la altura y el estado de la ruta cambian el viaje.",
        },
      ],
      faqs: [
        {
          q: "¿Cuánto dura desde Purmamarca?",
          a: "La referencia nacional es de unos 66 km por RN 52. No es una duración garantizada: la altura y el estado de la ruta la modifican; dejá margen.",
        },
        {
          q: "¿Se puede en medio día?",
          a: "Es posible como medio día si salís temprano y coordinás guía y regreso. Confirmá el último ingreso en el parador.",
        },
        {
          q: "¿Dónde contrato el traslado?",
          a: "En Purmamarca hay prestadores de traslado y excursiones; compará el recorrido real y qué incluye antes de contratar.",
        },
      ],
    },
    en: {
      metaTitle: "How to get to Salinas Grandes from Purmamarca via RN 52",
      metaDescription:
        "From Purmamarca via RN 52 and Cuesta de Lipán, about 65 km of mountain and altitude. Confirm road status and the meeting point before travelling.",
      h1: "From Purmamarca",
      lead: "Purmamarca is the closest base: national information places the salt flat about 66 km away via RN 52 and Cuesta de Lipán. That is a route reference, not a guaranteed duration.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "The route",
          paragraphs: [
            "From Purmamarca take RN 52 westbound up the Cuesta de Lipán.",
            "The mountain road rises above 4,000 metres before descending to the salt. It is about 65–66 km as a reference.",
          ],
        },
        {
          heading: "Suggested stops",
          bullets: [
            "Cuesta de Lipán viewpoint, for the altitude and the landscape.",
            "The meeting point at Parador La Curva (RN 52 km 60).",
            "Sectors authorised by the guide for the visit on the salt.",
          ],
        },
        {
          heading: "Return",
          paragraphs: [
            "Confirm pickup, fuel and range before the ascent.",
            "Do not rely on continuous connectivity on the road.",
          ],
          callout:
            "Do not assume a fixed duration: altitude and road conditions change the trip.",
        },
      ],
      faqs: [
        {
          q: "How long from Purmamarca?",
          a: "National reference is about 66 km via RN 52. That is not a guaranteed duration: altitude and road conditions change it; leave margin.",
        },
        {
          q: "Can it be done in half a day?",
          a: "Possible as a half day if you leave early and coordinate guide and return. Confirm last entry at the parador.",
        },
        {
          q: "Where do I hire the transfer?",
          a: "Purmamarca has transfer and tour providers; compare the actual route and what is included before booking.",
        },
      ],
    },
  },
  {
    key: "desde-san-salvador-de-jujuy",
    group: "transporte",
    slug: "desde-san-salvador-de-jujuy",
    slugEn: "from-san-salvador-de-jujuy",
    related: ["desde-purmamarca", "desde-salta", "cuesta-de-lipan", "horarios"],
    es: {
      metaTitle: "Salinas Grandes desde San Salvador de Jujuy: ruta completa",
      metaDescription:
        "Desde la capital jujeña son aproximadamente 130 km por RN 9 y RN 52. Organizá transporte, guía local y regreso con un proveedor; compará el recorrido real.",
      h1: "Desde San Salvador de Jujuy",
      lead: "San Salvador de Jujuy queda a unos 130 km del punto de referencia de esta guía. El viaje combina RN 9 hacia el norte y luego RN 52 por la Cuesta de Lipán.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Ruta general",
          paragraphs: [
            "Desde la capital se toma RN 9 hacia el norte hasta cerca de la zona de Purmamarca y luego RN 52 por la Cuesta de Lipán.",
            "Son aproximadamente 130 km de referencia hasta el punto de encuentro.",
          ],
        },
        {
          heading: "Organización",
          bullets: [
            "Organizá el traslado completo y el regreso con un proveedor.",
            "Confirmá guía local, cargo de ingreso y último ingreso.",
            "Compará el recorrido real y lo que incluye cada prestador.",
          ],
        },
        {
          heading: "Tiempo y altura",
          paragraphs: [
            "El viaje es más largo que desde Purmamarca y suma altura en la Cuesta de Lipán.",
            "Dejá margen para el recorrido y verificá el estado vial antes de salir.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Cuánto se tarda desde la capital?",
          a: "La referencia es de unos 130 km por RN 9 y RN 52. No damos una duración fija porque la altura y el estado de la ruta la modifican.",
        },
        {
          q: "¿Hay transporte público directo?",
          a: "No confirmamos un servicio regular directo para esta fecha. Consultá al operador vigente y resolvé el último tramo con un prestador.",
        },
        {
          q: "¿Vale la pena ir en el día?",
          a: "Es posible, pero es una jornada larga. Muchos prefieren dormir en Purmamarca o San Salvador de Jujuy y salir temprano.",
        },
      ],
    },
    en: {
      metaTitle: "Salinas Grandes from San Salvador de Jujuy: the full route",
      metaDescription:
        "From the Jujuy capital it is roughly 130 km via RN 9 and RN 52. Arrange transport, local guide and return with a provider; compare the actual route.",
      h1: "From San Salvador de Jujuy",
      lead: "San Salvador de Jujuy is about 130 km from this guide's reference point. The trip combines RN 9 northbound and then RN 52 up the Cuesta de Lipán.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "General route",
          paragraphs: [
            "From the capital take RN 9 northbound toward the Purmamarca area, then RN 52 up the Cuesta de Lipán.",
            "It is roughly 130 km as a reference to the meeting point.",
          ],
        },
        {
          heading: "Organisation",
          bullets: [
            "Arrange the complete transfer and return with a provider.",
            "Confirm local guide, access charge and last entry.",
            "Compare the actual route and what each provider includes.",
          ],
        },
        {
          heading: "Time and altitude",
          paragraphs: [
            "The trip is longer than from Purmamarca and adds altitude on the Cuesta de Lipán.",
            "Leave margin for the journey and check road conditions before leaving.",
          ],
        },
      ],
      faqs: [
        {
          q: "How long from the capital?",
          a: "The reference is about 130 km via RN 9 and RN 52. We do not quote a fixed duration because altitude and road conditions change it.",
        },
        {
          q: "Is there direct public transport?",
          a: "We have not confirmed a direct scheduled service for this date. Check with the current operator and arrange the final leg with a provider.",
        },
        {
          q: "Is a day trip worth it?",
          a: "Possible, but it is a long day. Many prefer to sleep in Purmamarca or San Salvador de Jujuy and leave early.",
        },
      ],
    },
  },
  {
    key: "desde-salta",
    group: "transporte",
    slug: "desde-salta",
    slugEn: "from-salta",
    related: ["desde-san-salvador-de-jujuy", "desde-purmamarca", "cuesta-de-lipan"],
    es: {
      metaTitle: "Salinas Grandes desde Salta: excursión en el día",
      metaDescription:
        "Desde Salta la distancia es mayor; una excursión en el día es posible pero larga. Compará con salir desde San Salvador de Jujuy o Purmamarca.",
      h1: "Desde Salta",
      lead: "Salta está más lejos que Jujuy. Una visita en el día es posible, pero implica muchas horas de ruta y altura; conviene comparar con salir desde San Salvador de Jujuy o Purmamarca.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Distancia y tiempo",
          paragraphs: [
            "Salta queda más lejos que la capital jujeña; el día completo de ruta es considerable.",
            "No presentamos una duración fija: depende del proveedor y el estado vial.",
          ],
        },
        {
          heading: "Alternativas",
          bullets: [
            "Dormir en San Salvador de Jujuy acorta el tramo final.",
            "Dormir en Purmamarca deja el salar a unos 65 km.",
            "Combinar con la Quebrada de Humahuaca en el camino.",
          ],
        },
        {
          heading: "Lo que debés confirmar",
          paragraphs: [
            "Proveedor, guía local, retorno y tolerancia a la altura.",
            "que el recorrido incluya el tramo de montaña por RN 52.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Se puede hacer en un día desde Salta?",
          a: "Es posible, pero es una jornada larga de ruta y altura. Confirmá el proveedor, la guía y el regreso.",
        },
        {
          q: "¿Conviene dormir en Purmamarca?",
          a: "Sí para muchos: deja el salar a unos 65 km y permite salir temprano y adaptarse a la altura.",
        },
        {
          q: "¿Es muy largo el viaje?",
          a: "Desde Salta es más largo que desde Jujuy. Compará salir desde San Salvador de Jujuy o alojarte en Purmamarca para acortar.",
        },
      ],
    },
    en: {
      metaTitle: "Salinas Grandes from Salta: a day excursion",
      metaDescription:
        "From Salta the distance is greater; a day trip is possible but long. Compare with departing from San Salvador de Jujuy or Purmamarca.",
      h1: "From Salta",
      lead: "Salta is further than Jujuy. A same-day visit is possible but involves many hours of road and altitude; it is worth comparing with departing from San Salvador de Jujuy or Purmamarca.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Distance and time",
          paragraphs: [
            "Salta is further than the Jujuy capital; the full day of driving is considerable.",
            "We do not quote a fixed duration: it depends on the provider and road conditions.",
          ],
        },
        {
          heading: "Alternatives",
          bullets: [
            "Sleeping in San Salvador de Jujuy shortens the final stretch.",
            "Sleeping in Purmamarca leaves the salt flat about 65 km away.",
            "Combining with the Quebrada de Humahuaca along the way.",
          ],
        },
        {
          heading: "What to confirm",
          paragraphs: [
            "Provider, local guide, return and altitude tolerance.",
            "That the route includes the mountain stretch on RN 52.",
          ],
        },
      ],
      faqs: [
        {
          q: "Can it be done in a day from Salta?",
          a: "Possible, but it is a long day of road and altitude. Confirm the provider, the guide and the return.",
        },
        {
          q: "Is it better to sleep in Purmamarca?",
          a: "Yes for many: it leaves the salt flat about 65 km away and lets you leave early and acclimatise.",
        },
        {
          q: "Is the trip very long?",
          a: "From Salta it is longer than from Jujuy. Compare departing from San Salvador de Jujuy or staying in Purmamarca to shorten it.",
        },
      ],
    },
  },
  {
    key: "cuesta-de-lipan",
    group: "transporte",
    slug: "cuesta-de-lipan",
    slugEn: "cuesta-de-lipan",
    related: ["desde-purmamarca", "desde-san-salvador-de-jujuy", "mapa-y-accesos", "clima"],
    es: {
      metaTitle: "Cuesta de Lipán en RN 52: curvas, altura y conducción",
      metaDescription:
        "La Cuesta de Lipán es el tramo de montaña de RN 52 hacia el salar, con curvas y más de 4.000 m. Conducí con precaución, paradas seguras y sin prisa.",
      h1: "La Cuesta de Lipán",
      lead: "La Cuesta de Lipán es el tramo de RN 52 donde el paisaje y la altitud cambian de forma marcada. Supera los 4.000 metros y tiene muchas curvas.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "El tramo",
          paragraphs: [
            "Es la subida de montaña de RN 52 hacia el salar, entre Purmamarca y la Puna.",
            "El paisaje pasa de quebrada a altiplano y la altitud sube de forma sostenida.",
          ],
        },
        {
          heading: "Conducción",
          bullets: [
            "Andá lento en las curvas y respetá los tiempos de los camiones.",
            "Usá los sectores de sobrepaso y las paradas seguras, no el borde de la ruta.",
            "Cargá combustible antes de alejarte de la base.",
          ],
          callout: "No es una autopista: es altura y curvas.",
        },
        {
          heading: "Miradores",
          paragraphs: [
            "Hay puntos de detención para mirar la altura y la ruta.",
            "No bloquees la calzada ni te detengas en lugares sin banquina.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Qué es la Cuesta de Lipán?",
          a: "Es el tramo de montaña de RN 52 entre Purmamarca y el salar, donde la altitud y el paisaje cambian de forma marcada.",
        },
        {
          q: "¿A qué altura está?",
          a: "Supera los 4.000 metros en su punto más alto, según la información de la ruta.",
        },
        {
          q: "¿Se puede parar a sacar fotos?",
          a: "Sí, en los sectores habilitados y con el vehículo fuera de la calzada. No te detengas en curvas sin visibilidad.",
        },
      ],
    },
    en: {
      metaTitle: "Cuesta de Lipán on RN 52: curves, altitude and driving",
      metaDescription:
        "Cuesta de Lipán is the mountain stretch of RN 52 to the salt flat, with curves and above 4,000 m. Drive carefully, use safe stops and take your time.",
      h1: "The Cuesta de Lipán",
      lead: "The Cuesta de Lipán is the RN 52 stretch where the landscape and altitude change sharply. It rises above 4,000 metres and has many curves.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "The stretch",
          paragraphs: [
            "It is the mountain climb of RN 52 toward the salt flat, between Purmamarca and the Puna.",
            "The landscape shifts from gorge to high plateau and the altitude rises steadily.",
          ],
        },
        {
          heading: "Driving",
          bullets: [
            "Go slow on the curves and respect the trucks' timing.",
            "Use the overtaking sections and safe pull-offs, not the road edge.",
            "Fuel up before leaving the base.",
          ],
          callout: "This is not a highway: it is altitude and curves.",
        },
        {
          heading: "Viewpoints",
          paragraphs: [
            "There are stopping points to view the altitude and the road.",
            "Do not block the carriageway or stop where there is no shoulder.",
          ],
        },
      ],
      faqs: [
        {
          q: "What is the Cuesta de Lipán?",
          a: "It is the mountain stretch of RN 52 between Purmamarca and the salt flat, where altitude and landscape change sharply.",
        },
        {
          q: "What altitude is it?",
          a: "It rises above 4,000 metres at its highest point, per the route information.",
        },
        {
          q: "Can I stop for photos?",
          a: "Yes, at the authorised sections with the vehicle off the carriageway. Do not stop on blind curves.",
        },
      ],
    },
  },
  // ───────────────────────── P2 ─────────────────────────
  {
    key: "mal-de-altura",
    group: "visita",
    slug: "mal-de-altura",
    slugEn: "altitude-sickness",
    related: ["altura", "clima", "seguridad", "que-llevar"],
    es: {
      metaTitle: "Mal de altura en Salinas Grandes: síntomas y prevención",
      metaDescription:
        "El salar está a unos 3.450 m y la Cuesta de Lipán supera los 4.000 m. Consejos para prevenir el mal de altura y qué hacer si aparecen síntomas.",
      h1: "Mal de altura (soroche)",
      lead: "El punto de visita del salar está a unos 3.450 m y la Cuesta de Lipán supera los 4.000 m. La altitud puede afectar a cualquiera; conviene prevenir y no ignorar los síntomas.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Qué es",
          paragraphs: [
            "A mayor altitud, hay menos oxígeno en el aire. El cuerpo tarda en adaptarse.",
            "Los síntomas suelen ser leves: dolor de cabeza, cansancio, náuseas o respiración más corta. Mejoran con reposo y aclimatación.",
          ],
        },
        {
          heading: "Cómo prevenir",
          bullets: [
            "Dormí a menor altura la noche anterior (Purmamarca ~2.320 m o San Salvador de Jujuy ~1.260 m).",
            "Subí de a poco y sin prisa.",
            "Hidratate y evitá el alcohol y las comidas pesadas el primer día.",
            "Consultá a un médico si tenés condiciones previas.",
          ],
          callout:
            "No es una guía médica: ante síntomas fuertes o dudas, consultá a un profesional.",
        },
        {
          heading: "Qué hacer si aparecen síntomas",
          bullets: [
            "Detenete, descansá y tomá agua.",
            "No sigas subiendo si empeoran.",
            "Bajá de altura si no mejoran.",
            "Pedí ayuda al guía o al parador.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿A qué altura está el salar?",
          a: "El punto de visita está a unos 3.450 m; la Cuesta de Lipán, en el camino, supera los 4.000 m.",
        },
        {
          q: "¿Lo siente cualquiera?",
          a: "Sí: la altura no discrimina por estado físico. Quien está en forma también puede sentirlo.",
        },
        {
          q: "¿Pueden ir niños?",
          a: "Sí, pero vigilá los síntomas y aclimatalos subiendo de a poco desde una base más baja.",
        },
        {
          q: "¿El alcohol o el mate ayudan?",
          a: "No. Evitá el alcohol el primer día a la altura; la hidratación con agua es lo recomendable.",
        },
      ],
    },
    en: {
      metaTitle: "Altitude sickness at Salinas Grandes: symptoms and prevention",
      metaDescription:
        "The salt flat sits around 3,450 m and the Cuesta de Lipán rises above 4,000 m. Tips to prevent altitude sickness and what to do if symptoms appear.",
      h1: "Altitude sickness (soroche)",
      lead: "The visitor point of the salt flat sits around 3,450 m and the Cuesta de Lipán rises above 4,000 m. Altitude can affect anyone; it is worth preventing and not ignoring symptoms.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "What it is",
          paragraphs: [
            "At higher altitudes there is less oxygen in the air. The body takes time to adapt.",
            "Symptoms are usually mild: headache, fatigue, nausea or shorter breath. They improve with rest and acclimatisation.",
          ],
        },
        {
          heading: "How to prevent it",
          bullets: [
            "Sleep lower the night before (Purmamarca ~2,320 m or San Salvador de Jujuy ~1,260 m).",
            "Gain altitude gradually and without rushing.",
            "Hydrate and avoid alcohol and heavy meals on the first day.",
            "See a doctor if you have pre-existing conditions.",
          ],
          callout:
            "This is not medical advice: with strong symptoms or doubts, consult a professional.",
        },
        {
          heading: "What to do if symptoms appear",
          bullets: [
            "Stop, rest and drink water.",
            "Do not keep climbing if they worsen.",
            "Drop in altitude if they do not improve.",
            "Ask the guide or the parador for help.",
          ],
        },
      ],
      faqs: [
        {
          q: "What altitude is the salt flat?",
          a: "The visitor point is around 3,450 m; the Cuesta de Lipán on the way rises above 4,000 m.",
        },
        {
          q: "Can it affect anyone?",
          a: "Yes: altitude does not discriminate by fitness. Even fit travellers can feel it.",
        },
        {
          q: "Can children go?",
          a: "Yes, but watch for symptoms and let them acclimatise by climbing gradually from a lower base.",
        },
        {
          q: "Does alcohol or mate help?",
          a: "No. Avoid alcohol on the first day at altitude; water and hydration are the recommendation.",
        },
      ],
    },
  },
  {
    key: "que-llevar",
    group: "visita",
    slug: "que-llevar",
    slugEn: "what-to-pack",
    related: ["clima", "altura", "seguridad", "mal-de-altura"],
    es: {
      metaTitle: "Qué llevar a Salinas Grandes: lista de equipo",
      metaDescription:
        "Altura, frío, viento y sol fuerte en el salar. Llevá ropa por capas, agua, protector solar, gorra y efectivo antes de salir por RN 52.",
      h1: "Qué llevar",
      lead: "En el salar hace frío y viento, y el sol es muy fuerte a más de 3.000 m. Una lista simple de equipo evita sorpresas.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Ropa",
          bullets: [
            "Ropa por capas: base, polar y cortaviento.",
            "Gorro y guantes si vas en invierno o temprano.",
            "Calzado cómodo para caminar sobre sal.",
            "Lentes de sol con buena protección.",
          ],
        },
        {
          heading: "Sol y piel",
          bullets: [
            "Protector solar de alto factor.",
            "Bálsamo labial.",
            "Gorra o sombrero de ala.",
            "Repuesto de protector: el sol a la altura quema rápido.",
          ],
        },
        {
          heading: "Otros",
          bullets: [
            "Agua y algo de comida.",
            "Efectivo: en el parador no es seguro pagar con tarjeta.",
            "Documentos y, si conducís, combustible cargado antes de alejarte.",
          ],
          callout:
            "No hay cajero ni señal de tarjeta confiable en el salar: llevá efectivo.",
        },
      ],
      faqs: [
        {
          q: "¿Hace frío?",
          a: "A la altura sí, sobre todo por el viento y al amanecer, aunque sea verano.",
        },
        {
          q: "¿Se puede pagar con tarjeta?",
          a: "En el parador no es seguro; llevá efectivo para guía, ingreso y comida.",
        },
        {
          q: "¿Cuánta agua llevar?",
          a: "La hidratación importa a la altura; llevá suficiente para el recorrido y el regreso.",
        },
        {
          q: "¿Ropa de baño?",
          a: "No es balneario; el salar no es para bañarse, no hace falta llevarla.",
        },
      ],
    },
    en: {
      metaTitle: "What to pack for Salinas Grandes: gear checklist",
      metaDescription:
        "Altitude, cold, wind and strong sun at the salt flat. Pack layers, water, sunscreen, a cap and cash before heading out on RN 52.",
      h1: "What to pack",
      lead: "At the salt flat it is cold and windy, and the sun is very strong above 3,000 m. A simple gear list avoids surprises.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Clothing",
          bullets: [
            "Layers: base, fleece and windbreaker.",
            "Hat and gloves in winter or early morning.",
            "Comfortable shoes to walk on salt.",
            "Good UV-protective sunglasses.",
          ],
        },
        {
          heading: "Sun and skin",
          bullets: [
            "High-SPF sunscreen.",
            "Lip balm.",
            "Cap or wide-brim hat.",
            "Spare sunscreen: the high-altitude sun burns fast.",
          ],
        },
        {
          heading: "Other",
          bullets: [
            "Water and some food.",
            "Cash: card payment at the parador is not reliable.",
            "Documents and, if driving, fuel topped up before leaving the base.",
          ],
          callout:
            "No ATM or reliable card signal at the salt flat: bring cash.",
        },
      ],
      faqs: [
        {
          q: "Is it cold?",
          a: "At altitude yes, especially with wind and at sunrise, even in summer.",
        },
        {
          q: "Can I pay by card?",
          a: "At the parador it is not reliable; bring cash for guide, entry and food.",
        },
        {
          q: "How much water?",
          a: "Hydration matters at altitude; bring enough for the visit and the return.",
        },
        {
          q: "Swimwear?",
          a: "Not a bathing spot; the salt flat is not for swimming, so no need to bring it.",
        },
      ],
    },
  },
  {
    key: "cuanto-tiempo",
    group: "visita",
    slug: "cuanto-tiempo",
    slugEn: "how-long-to-visit",
    related: ["mejor-epoca", "mapa-y-accesos", "itinerario", "desde-purmamarca"],
    es: {
      metaTitle: "Cuánto tiempo en Salinas Grandes: duración de la visita",
      metaDescription:
        "En el salar mismo se suele estar unas horas. Desde Purmamarca es media jornada con la Cuesta de Lipán; desde Jujuy o Salta, un día completo.",
      h1: "Cuánto tiempo lleva",
      lead: "El tiempo depende de tu base. En el salar se camina y fotografía durante unas horas; el viaje desde tu ciudad suma varias horas de ruta.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "En el salar",
          paragraphs: [
            "Con la guía local, en la superficie y los miradores se suele estar unas horas.",
            "No damos un número fijo: depende del operador y del día.",
          ],
        },
        {
          heading: "Desde Purmamarca",
          bullets: [
            "Una media jornada: ida, Cuesta de Lipán, salar y regreso.",
            "Purmamarca queda a unos 65 km del salar.",
          ],
        },
        {
          heading: "Desde Jujuy o Salta",
          paragraphs: [
            "Es un día completo por la distancia y la altura.",
            "Conviene salir muy temprano para aprovechar la luz.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Cuántas horas en el salar?",
          a: "Generalmente unas horas con la guía local; depende del operador.",
        },
        {
          q: "¿Media jornada desde Purmamarca?",
          a: "Sí: la cercanía (~65 km) permite ir y volver en medio día.",
        },
        {
          q: "¿Un día completo desde Salta?",
          a: "Sí, es más lejos que Jujuy y suma muchas horas de ruta y altura.",
        },
      ],
    },
    en: {
      metaTitle: "How long at Salinas Grandes: visit duration",
      metaDescription:
        "At the salt flat itself you usually spend a few hours. From Purmamarca it is a half-day with the Cuesta de Lipán; from Jujuy or Salta, a full day.",
      h1: "How long it takes",
      lead: "The time depends on your base. On the salt flat you walk and photograph for a few hours; the trip from your city adds several hours of road.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "At the salt flat",
          paragraphs: [
            "With the local guide, on the surface and viewpoints you usually spend a few hours.",
            "We do not give a fixed number: it depends on the operator and the day.",
          ],
        },
        {
          heading: "From Purmamarca",
          bullets: [
            "A half-day: out, Cuesta de Lipán, salt flat and back.",
            "Purmamarca is about 65 km from the salt flat.",
          ],
        },
        {
          heading: "From Jujuy or Salta",
          paragraphs: [
            "It is a full day because of the distance and altitude.",
            "Leave very early to make the most of the light.",
          ],
        },
      ],
      faqs: [
        {
          q: "How many hours at the salt flat?",
          a: "Usually a few hours with the local guide; it depends on the operator.",
        },
        {
          q: "Half-day from Purmamarca?",
          a: "Yes: the proximity (~65 km) lets you go and return in half a day.",
        },
        {
          q: "Full day from Salta?",
          a: "Yes, it is further than Jujuy and adds many hours of road and altitude.",
        },
      ],
    },
  },
  {
    key: "presupuesto",
    group: "visita",
    slug: "presupuesto",
    slugEn: "budget",
    related: ["precios-y-guias", "donde-comer", "donde-dormir", "como-planificar"],
    es: {
      metaTitle: "Presupuesto para Salinas Grandes: en qué gastar",
      metaDescription:
        "El viaje incluye guía local y cargo de ingreso (variable), combustible, comida y, a veces, alojamiento. No citamos tarifas fijas: confirmá en el parador.",
      h1: "Presupuesto",
      lead: "No mostramos un monto fijo porque el cargo de guía e ingreso varía. El presupuesto suele tener cuatro partes: guía e ingreso, combustible, comida y, si vas lejos, alojamiento.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "En qué pensar",
          bullets: [
            "Guía local e ingreso (ver precios y guías).",
            "Combustible: cargalo antes de alejarte de la base.",
            "Comida en el parador o en tu ciudad de base.",
            "Alojamiento si pernoctás lejos del salar.",
          ],
        },
        {
          heading: "Por qué no damos un número",
          paragraphs: [
            "Los importes dependen del operador y la fecha.",
            "Confirmalos en el parador o con tu prestador para tu día.",
          ],
          callout:
            "Tratalo como referencia, no como tarifa oficial: no verificamos un monto único y vigente.",
        },
        {
          heading: "Cómo acotarlo",
          bullets: [
            "Salir desde Purmamarca acorta ruta y combustible.",
            "Llevá agua y algo de comida.",
            "Coordiná el viaje en grupo cuando sea posible.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Cuánto cuesta en total?",
          a: "Varía según el operador y el día; confirmá el guía y el ingreso en el parador.",
        },
        {
          q: "¿El combustible?",
          a: "Cargalo antes de alejarte de la base: no hay servicios en el salar.",
        },
        {
          q: "¿Se puede ahorrar?",
          a: "Sí: saliendo desde Purmamarca, en grupo y llevando lo básico.",
        },
      ],
    },
    en: {
      metaTitle: "Salinas Grandes budget: what you will spend",
      metaDescription:
        "The trip includes local guide and entry charge (variable), fuel, food and sometimes lodging. We do not quote fixed fares: confirm at the parador.",
      h1: "Budget",
      lead: "We do not show a fixed amount because the guide and entry charge varies. The budget usually has four parts: guide and entry, fuel, food and, if you come from far, lodging.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "What to plan for",
          bullets: [
            "Local guide and entry (see prices and guides).",
            "Fuel: top up before leaving the base.",
            "Food at the parador or in your base town.",
            "Lodging if you sleep far from the salt flat.",
          ],
        },
        {
          heading: "Why we do not give a number",
          paragraphs: [
            "Amounts depend on the operator and the date.",
            "Confirm them at the parador or with your provider for your day.",
          ],
          callout:
            "Treat this as a reference, not an official fare: we have not verified a single current amount.",
        },
        {
          heading: "How to keep it down",
          bullets: [
            "Departing from Purmamarca shortens route and fuel.",
            "Bring water and some food.",
            "Coordinate group travel when possible.",
          ],
        },
      ],
      faqs: [
        {
          q: "How much does it cost in total?",
          a: "It varies by operator and day; confirm the guide and entry at the parador.",
        },
        {
          q: "What about fuel?",
          a: "Top up before leaving the base: there are no services at the salt flat.",
        },
        {
          q: "Can I save?",
          a: "Yes: departing from Purmamarca, in a group and bringing the basics.",
        },
      ],
    },
  },
  {
    key: "itinerario",
    group: "visita",
    slug: "itinerario",
    slugEn: "itinerary",
    related: ["cuanto-tiempo", "desde-purmamarca", "donde-comer", "mapa-y-accesos"],
    es: {
      metaTitle: "Itinerario de Salinas Grandes: ruta desde Purmamarca",
      metaDescription:
        "Un itinerario de día desde Purmamarca: salida temprana, Cuesta de Lipán, Parador La Curva, salar y regreso. También opciones desde Jujuy.",
      h1: "Itinerario sugerido",
      lead: "Un itinerario sencillo desde Purmamarca aprovecha la cercanía (~65 km) y permite salir temprano para la luz y la altura.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Desde Purmamarca (media jornada)",
          bullets: [
            "Salida temprano hacia la RN 52.",
            "Cuesta de Lipán: paradas seguras para mirar la altura.",
            "Parador La Curva, sobre la RN 52, para la guía local.",
            "Salar con guía y regreso a Purmamarca.",
          ],
        },
        {
          heading: "Desde San Salvador de Jujuy (día)",
          paragraphs: [
            "Es más distancia: salida muy temprano.",
            "Podés sumar Purmamarca o la Quebrada de Humahuaca a la vuelta.",
          ],
        },
        {
          heading: "Consejos de horario",
          bullets: [
            "Andá temprano para la luz y para evitar lluvias de tarde en verano.",
            "Confirmá el estado de la RN 52 antes de salir.",
          ],
          callout: "Las lluvias de verano pueden alterar la RN 52: consultalo antes.",
        },
      ],
      faqs: [
        {
          q: "¿Se puede en medio día desde Purmamarca?",
          a: "Sí: la cercanía (~65 km) lo permite y deja tiempo en el salar.",
        },
        {
          q: "¿Incluir la Quebrada de Humahuaca?",
          a: "Sí si salís desde Jujuy: encaja en la vuelta como jornada más completa.",
        },
        {
          q: "¿Qué confirmar antes?",
          a: "El estado de la RN 52 y la guía local para tu fecha.",
        },
      ],
    },
    en: {
      metaTitle: "Salinas Grandes itinerary: route from Purmamarca",
      metaDescription:
        "A day itinerary from Purmamarca: early start, Cuesta de Lipán, Parador La Curva, salt flat and return. Also options from Jujuy.",
      h1: "Suggested itinerary",
      lead: "A simple itinerary from Purmamarca uses the proximity (~65 km) and lets you leave early for the light and the altitude.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "From Purmamarca (half-day)",
          bullets: [
            "Early departure toward RN 52.",
            "Cuesta de Lipán: safe pull-offs to view the altitude.",
            "Parador La Curva, on RN 52, for the local guide.",
            "Salt flat with guide and return to Purmamarca.",
          ],
        },
        {
          heading: "From San Salvador de Jujuy (full day)",
          paragraphs: [
            "It is further: leave very early.",
            "You can add Purmamarca or the Quebrada de Humahuaca on the way back.",
          ],
        },
        {
          heading: "Timing tips",
          bullets: [
            "Go early for the light and to avoid summer afternoon rain.",
            "Confirm the state of RN 52 before leaving.",
          ],
          callout: "Summer rains can affect RN 52: check it beforehand.",
        },
      ],
      faqs: [
        {
          q: "Half-day from Purmamarca?",
          a: "Yes: the proximity (~65 km) allows it and leaves time at the salt flat.",
        },
        {
          q: "Include the Quebrada de Humahuaca?",
          a: "Yes if you leave from Jujuy: it fits on the return as a fuller day.",
        },
        {
          q: "What to confirm first?",
          a: "The state of RN 52 and the local guide for your date.",
        },
      ],
    },
  },
  {
    key: "como-planificar",
    group: "visita",
    slug: "como-planificar",
    slugEn: "how-to-plan",
    related: ["mapa-y-accesos", "precios-y-guias", "altura", "presupuesto"],
    es: {
      metaTitle: "Cómo planificar Salinas Grandes antes de salir",
      metaDescription:
        "Revisá el estado de RN 52, el clima y la guía; aclimatate a la altura y cargá combustible. Una checklist antes de cruzar la Cuesta de Lipán.",
      h1: "Cómo planificar la visita",
      lead: "Planear antes de salir evita inconvenientes en la Puna. Revisá ruta, clima, guía, altura y combustible.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Checklist previa",
          bullets: [
            "Estado de la RN 52 (lluvias pueden afectar la ruta).",
            "Clima y horario del día.",
            "Confirmación o reserva de la guía local.",
            "Aclimatación previa a la altura.",
            "Combustible cargado y efectivo.",
            "Equipo básico (ver qué llevar).",
          ],
        },
        {
          heading: "Altura",
          paragraphs: [
            "Dormir más bajo la noche anterior ayuda a aclimatar.",
            "Ver el tema de la altura antes de decidir el ritmo.",
          ],
        },
        {
          heading: "Señal y comunicación",
          bullets: [
            "La señal es limitada en la Puna.",
            "Avisá tu ruta a alguien y no dependas de datos móviles.",
          ],
          callout:
            "Consultá el estado de la RN 52 antes de salir: las lluvias de verano pueden alterar la ruta.",
        },
      ],
      faqs: [
        {
          q: "¿Cuándo conviene ir?",
          a: "Depende de clima y temporada; ver la mejor época para decidir.",
        },
        {
          q: "¿Reservar la guía?",
          a: "Confirmala con anticipación, sobre todo en alta temporada.",
        },
        {
          q: "¿Hay señal en el salar?",
          a: "Limitada: no dependas del celular para pagos ni para orientarte.",
        },
        {
          q: "¿Qué revisar primero?",
          a: "El estado de la ruta y el clima del día.",
        },
      ],
    },
    en: {
      metaTitle: "How to plan Salinas Grandes before you go",
      metaDescription:
        "Check RN 52 status, weather and the guide; acclimatise to altitude and fuel up. A checklist before crossing the Cuesta de Lipán.",
      h1: "How to plan the visit",
      lead: "Planning before you leave avoids trouble in the Puna. Check route, weather, guide, altitude and fuel.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Pre-trip checklist",
          bullets: [
            "State of RN 52 (rains can affect the route).",
            "Weather and daytime hours.",
            "Confirmation or booking of the local guide.",
            "Prior acclimatisation to altitude.",
            "Fuel topped up and cash on hand.",
            "Basic gear (see what to pack).",
          ],
        },
        {
          heading: "Altitude",
          paragraphs: [
            "Sleeping lower the night before helps acclimatise.",
            "Review the altitude topic before setting your pace.",
          ],
        },
        {
          heading: "Signal and communication",
          bullets: [
            "Signal is limited on the Puna.",
            "Tell someone your route and do not rely on mobile data.",
          ],
          callout:
            "Check the state of RN 52 before leaving: summer rains can affect the route.",
        },
      ],
      faqs: [
        {
          q: "When is it best to go?",
          a: "It depends on weather and season; see the best season to decide.",
        },
        {
          q: "Book the guide?",
          a: "Confirm it ahead, especially in high season.",
        },
        {
          q: "Is there signal at the salt flat?",
          a: "Limited: do not rely on your phone for payments or orientation.",
        },
        {
          q: "What to check first?",
          a: "The state of the route and the day's weather.",
        },
      ],
    },
  },
  {
    key: "consejos",
    group: "visita",
    slug: "consejos",
    slugEn: "tips",
    related: ["seguridad", "clima", "que-llevar", "mal-de-altura"],
    es: {
      metaTitle: "Consejos para visitar Salinas Grandes",
      metaDescription:
        "Consejos prácticos: altura, sol, viento, guía local, señal limitada y respeto por el salar. Una guía breve antes de tu visita.",
      h1: "Consejos prácticos",
      lead: "Una guía breve de consejos para disfrutar el salar con seguridad y respeto: altura, sol, viento, guía y Puna.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Antes de salir",
          bullets: [
            "Estado de RN 52 y clima del día.",
            "Confirmación de la guía local.",
            "Combustible cargado y efectivo.",
            "Equipo básico (ver qué llevar).",
          ],
        },
        {
          heading: "En el salar",
          bullets: [
            "Andá siempre con la guía local.",
            "No dejes basura y no salgas de lo habilitado.",
            "Protegé piel y ojos del sol fuerte.",
          ],
        },
        {
          heading: "Respeto",
          paragraphs: [
            "El salar es trabajo y cuidado de la comunidad local.",
            "Seguí las indicaciones y no dañes la superficie.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Cuáles son los mejores consejos?",
          a: "Ir con guía, hidratarse, protegerse del sol y respetar el salar.",
        },
        {
          q: "¿Se puede ir por cuenta propia?",
          a: "No: la guía local es obligatoria según Visit Argentina.",
        },
        {
          q: "¿Cuidado especial?",
          a: "La altura y el sol fuerte: aclimatate y usá protector.",
        },
        {
          q: "¿Y la basura?",
          a: "Llevate lo que traés; el salar no tiene servicios de limpieza.",
        },
      ],
    },
    en: {
      metaTitle: "Tips for visiting Salinas Grandes",
      metaDescription:
        "Practical tips: altitude, sun, wind, local guide, limited signal and respect for the salt flat. A brief guide before your visit.",
      h1: "Practical tips",
      lead: "A brief tip guide to enjoy the salt flat safely and respectfully: altitude, sun, wind, guide and Puna.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Before leaving",
          bullets: [
            "State of RN 52 and the day's weather.",
            "Confirmation of the local guide.",
            "Fuel topped up and cash on hand.",
            "Basic gear (see what to pack).",
          ],
        },
        {
          heading: "At the salt flat",
          bullets: [
            "Always go with the local guide.",
            "Leave no litter and stay within authorised areas.",
            "Protect skin and eyes from the strong sun.",
          ],
        },
        {
          heading: "Respect",
          paragraphs: [
            "The salt flat is the work and care of the local community.",
            "Follow the guidance and do not damage the surface.",
          ],
        },
      ],
      faqs: [
        {
          q: "What are the best tips?",
          a: "Go with a guide, hydrate, protect from the sun and respect the salt flat.",
        },
        {
          q: "Can I go on my own?",
          a: "No: the local guide is mandatory per Visit Argentina.",
        },
        {
          q: "Any special care?",
          a: "Altitude and strong sun: acclimatise and use sunscreen.",
        },
        {
          q: "What about litter?",
          a: "Take back what you bring; the salt flat has no cleaning services.",
        },
      ],
    },
  },
  // ───────────────────────── P3 ─────────────────────────
  {
    key: "como-llegar",
    group: "transporte",
    slug: "como-llegar",
    slugEn: "how-to-get-there",
    related: [
      "mapa-y-accesos",
      "desde-purmamarca",
      "cuesta-de-lipan",
      "tour-organizado",
      "transporte-publico",
      "en-auto",
    ],
    es: {
      metaTitle: "Cómo llegar a Salinas Grandes: RN 52, Purmamarca y la guía",
      metaDescription:
        "El salar se accede por RN 52 desde Purmamarca, Jujuy. Opciones: auto, tour o transporte público. La guía local es obligatoria en el Parador La Curva.",
      h1: "Cómo llegar",
      lead: "El salar está en la Puna jujeña y se accede por la RN 52, que sube desde Purmamarca por la Cuesta de Lipán. La guía local es obligatoria y se coordina en el Parador La Curva.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "La ruta principal",
          paragraphs: [
            "La RN 52 une Purmamarca con el salar, cruzando la Cuesta de Lipán.",
            "Es la vía habitual y la que usan autos, tours y colectivos.",
          ],
        },
        {
          heading: "Desde dónde salir",
          bullets: [
            "Purmamarca (~65 km del salar): la base más cercana.",
            "San Salvador de Jujuy o Salta: más lejos, jornada completa.",
            "Tilcara y Humahuaca: más al norte, se pasa por Purmamarca.",
          ],
        },
        {
          heading: "La guía local",
          paragraphs: [
            "La visita requiere guía local, según Visit Argentina.",
            "Se coordina en el Parador La Curva, sobre la RN 52.",
          ],
          callout:
            "No hay acceso sin guía: confírmala antes, sobre todo en alta temporada.",
        },
      ],
      faqs: [
        {
          q: "¿Por dónde se llega?",
          a: "Por la RN 52 desde Purmamarca, cruzando la Cuesta de Lipán.",
        },
        {
          q: "¿Necesito guía?",
          a: "Sí, la guía local es obligatoria; se toma en el Parador La Curva.",
        },
        {
          q: "¿Desde Salta o Jujuy?",
          a: "Es posible, pero son jornadas largas de ruta y altura; Purmamarca acorta.",
        },
        {
          q: "¿Hay señal?",
          a: "Limitada en la Puna: no dependas del celular para orientarte.",
        },
      ],
    },
    en: {
      metaTitle: "How to get to Salinas Grandes: RN 52, Purmamarca and the guide",
      metaDescription:
        "The salt flat is reached via RN 52 from Purmamarca, Jujuy. Options: car, tour or public transport. The local guide is mandatory at Parador La Curva.",
      h1: "How to get there",
      lead: "The salt flat is in the Jujuy Puna and is reached via RN 52, which climbs from Purmamarca over the Cuesta de Lipán. A local guide is mandatory and arranged at Parador La Curva.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "The main route",
          paragraphs: [
            "RN 52 links Purmamarca with the salt flat, crossing the Cuesta de Lipán.",
            "It is the usual route for cars, tours and buses.",
          ],
        },
        {
          heading: "Where to start",
          bullets: [
            "Purmamarca (~65 km from the salt flat): the closest base.",
            "San Salvador de Jujuy or Salta: further, a full day.",
            "Tilcara and Humahuaca: further north, you pass through Purmamarca.",
          ],
        },
        {
          heading: "The local guide",
          paragraphs: [
            "A local guide is required, per Visit Argentina.",
            "It is arranged at Parador La Curva, on RN 52.",
          ],
          callout:
            "No access without a guide: confirm it ahead, especially in high season.",
        },
      ],
      faqs: [
        {
          q: "Which way do you arrive?",
          a: "Via RN 52 from Purmamarca, crossing the Cuesta de Lipán.",
        },
        {
          q: "Do I need a guide?",
          a: "Yes, the local guide is mandatory; you take it at Parador La Curva.",
        },
        {
          q: "From Salta or Jujuy?",
          a: "Possible, but they are long days of road and altitude; Purmamarca shortens it.",
        },
        {
          q: "Is there signal?",
          a: "Limited on the Puna: do not rely on your phone to find your way.",
        },
      ],
    },
  },
  {
    key: "en-auto",
    group: "transporte",
    slug: "en-auto",
    slugEn: "by-car",
    related: ["como-llegar", "cuesta-de-lipan", "mapa-y-accesos", "que-llevar", "seguridad"],
    es: {
      metaTitle: "En auto a Salinas Grandes: ruta, combustible y conducción",
      metaDescription:
        "Llegar en auto por RN 52 es posible. Cargá combustible antes, conducí con precaución en la Cuesta de Lipán y confirmá la guía en el Parador La Curva.",
      h1: "En auto",
      lead: "Ir en auto propio te da horarios flexibles, pero la RN 52 es de altura, curvas y servicios escasos. La guía local se suma en el Parador La Curva.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Antes de salir",
          bullets: [
            "Combustible cargado: no hay servicios en el salar.",
            "Estado de la RN 52 (lluvias pueden afectar).",
            "Efectivo para guía e ingreso.",
            "Equipo básico (ver qué llevar).",
          ],
        },
        {
          heading: "En la ruta",
          paragraphs: [
            "La RN 52 sube por la Cuesta de Lipán con curvas y más de 4.000 m.",
            "Andá lento, usá paradas seguras y respetá los camiones.",
          ],
          callout: "No es autopista: altura y curvas.",
        },
        {
          heading: "En el salar",
          bullets: [
            "Pará donde indique la guía.",
            "No salgas de lo habilitado.",
            "Cuidá el vehículo en la sal: enjuagá si es necesario.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Puedo ir en mi auto?",
          a: "Sí: por RN 52, con guía local obligatoria en el Parador La Curva.",
        },
        {
          q: "¿Hay nafta cerca?",
          a: "Cargá en tu ciudad de base; no hay servicios en el salar.",
        },
        {
          q: "¿Difícil para principiantes?",
          a: "La Cuesta de Lipán tiene curvas y altura; andá lento y sin prisa.",
        },
        {
          q: "¿Se paga estacionar?",
          a: "Confirmalo en el Parador La Curva; no damos un monto fijo.",
        },
      ],
    },
    en: {
      metaTitle: "Driving to Salinas Grandes: route, fuel and driving",
      metaDescription:
        "Reaching the salt flat by car on RN 52 is possible. Fuel up beforehand, drive carefully on the Cuesta de Lipán and confirm the guide at Parador La Curva.",
      h1: "By car",
      lead: "Going in your own car gives flexible timing, but RN 52 is high, curvy and short on services. The local guide is added at Parador La Curva.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Before leaving",
          bullets: [
            "Fuel topped up: there are no services at the salt flat.",
            "State of RN 52 (rains can affect it).",
            "Cash for guide and entry.",
            "Basic gear (see what to pack).",
          ],
        },
        {
          heading: "On the road",
          paragraphs: [
            "RN 52 climbs the Cuesta de Lipán with curves and above 4,000 m.",
            "Go slow, use safe pull-offs and respect the trucks.",
          ],
          callout: "This is not a highway: altitude and curves.",
        },
        {
          heading: "At the salt flat",
          bullets: [
            "Stop where the guide indicates.",
            "Stay within authorised areas.",
            "Look after the vehicle on the salt: rinse if needed.",
          ],
        },
      ],
      faqs: [
        {
          q: "Can I drive my own car?",
          a: "Yes: via RN 52, with a mandatory local guide at Parador La Curva.",
        },
        {
          q: "Is there fuel nearby?",
          a: "Top up in your base town; there are no services at the salt flat.",
        },
        {
          q: "Hard for beginners?",
          a: "The Cuesta de Lipán has curves and altitude; go slow and unhurried.",
        },
        {
          q: "Do you pay to park?",
          a: "Confirm at Parador La Curva; we do not give a fixed amount.",
        },
      ],
    },
  },
  {
    key: "tour-organizado",
    group: "transporte",
    slug: "tour-organizado",
    slugEn: "organized-tour",
    related: [
      "como-llegar",
      "desde-purmamarca",
      "desde-san-salvador-de-jujuy",
      "desde-salta",
      "precios-y-guias",
    ],
    es: {
      metaTitle: "Tour organizado a Salinas Grandes desde Jujuy y Salta",
      metaDescription:
        "Los tours salen desde San Salvador de Jujuy, Salta y la Quebrada. Incluyen transporte, guía local y a veces Quebrada de Humahuaca. Compará y confirmá antes.",
      h1: "Tour organizado",
      lead: "Un tour quita la logística de ruta y guía. Salen desde San Salvador de Jujuy, Salta y pueblos de la Quebrada; conviene comparar y confirmar qué incluye.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Desde dónde salen",
          bullets: [
            "San Salvador de Jujuy y Salta: los puntos más comunes.",
            "Purmamarca, Tilcara y Humahuaca: también ofrecen salidas.",
            "Confirmá la base de cada prestador.",
          ],
        },
        {
          heading: "Qué suele incluir",
          paragraphs: [
            "Transporte de ida y vuelta.",
            "Guía local en el salar (obligatoria).",
            "A veces la Quebrada de Humahuaca o la Cuesta de Lipán en el recorrido.",
          ],
          callout:
            "No citamos precios fijos: compará prestadores y confirmá qué incluye tu salida.",
        },
        {
          heading: "Cómo elegir",
          bullets: [
            "Leé qué incluye (guía, ingreso, comida).",
            "Confirmá horarios y punto de encuentro.",
            "Preguntá por el estado de la RN 52.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Vale la pena un tour?",
          a: "Para muchos sí: quita la guía y la ruta. Compará con ir por cuenta propia.",
        },
        {
          q: "¿Salen desde Purmamarca?",
          a: "Sí, y es la base más cercana (~65 km del salar).",
        },
        {
          q: "¿Incluyen la Quebrada?",
          a: "Algunos tours la suman en la vuelta; confirmalo con el prestador.",
        },
        {
          q: "¿Precio fijo?",
          a: "No: varía por prestador y fecha; compará antes.",
        },
      ],
    },
    en: {
      metaTitle: "Organized tour to Salinas Grandes from Jujuy and Salta",
      metaDescription:
        "Tours leave from San Salvador de Jujuy, Salta and the Quebrada. They include transport, local guide and sometimes the Quebrada de Humahuaca. Compare and confirm first.",
      h1: "Organized tour",
      lead: "A tour removes the route and guide logistics. They leave from San Salvador de Jujuy, Salta and Quebrada towns; it is worth comparing and confirming what is included.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Where they leave from",
          bullets: [
            "San Salvador de Jujuy and Salta: the most common points.",
            "Purmamarca, Tilcara and Humahuaca: also offer departures.",
            "Confirm each provider's base.",
          ],
        },
        {
          heading: "What they usually include",
          paragraphs: [
            "Return transport.",
            "Local guide at the salt flat (mandatory).",
            "Sometimes the Quebrada de Humahuaca or the Cuesta de Lipán on the way.",
          ],
          callout:
            "We do not quote fixed prices: compare providers and confirm what your departure includes.",
        },
        {
          heading: "How to choose",
          bullets: [
            "Read what is included (guide, entry, food).",
            "Confirm times and meeting point.",
            "Ask about the state of RN 52.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is a tour worth it?",
          a: "For many, yes: it removes the guide and the route. Compare with going on your own.",
        },
        {
          q: "Do they leave from Purmamarca?",
          a: "Yes, and it is the closest base (~65 km from the salt flat).",
        },
        {
          q: "Do they include the Quebrada?",
          a: "Some tours add it on the return; confirm with the provider.",
        },
        {
          q: "Fixed price?",
          a: "No: it varies by provider and date; compare first.",
        },
      ],
    },
  },
  {
    key: "transporte-publico",
    group: "transporte",
    slug: "transporte-publico",
    slugEn: "public-transport",
    related: [
      "como-llegar",
      "desde-purmamarca",
      "desde-tilcara",
      "desde-humahuaca",
      "precios-y-guias",
    ],
    es: {
      metaTitle: "Transporte público a Salinas Grandes: colectivos y remises",
      metaDescription:
        "No hay línea directa y frecuente al salar. Se combina colectivo o remis a Purmamarca con la guía local. Confirmá horarios, que cambian.",
      h1: "Transporte público",
      lead: "No hay un servicio público directo y frecuente hasta el salar. La opción común es llegar a Purmamarca (colectivo o remis) y sumar la guía local que va al salar.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Hasta Purmamarca",
          bullets: [
            "Colectivos desde San Salvador de Jujuy y la Quebrada.",
            "Remises o combis turísticas como alternativa.",
            "Horarios y frecuencias cambian: confirmalos.",
          ],
        },
        {
          heading: "De Purmamarca al salar",
          paragraphs: [
            "No hay línea fija de colectivo al salar.",
            "La guía local (obligatoria) es quien organiza el tramo al salar.",
            "Algunos remises o tours cubren el tramo.",
          ],
          callout:
            "No dependas de horarios rígidos: consultá en Purmamarca antes.",
        },
        {
          heading: "Qué llevar",
          bullets: [
            "Efectivo para guía e ingreso.",
            "Agua y abrigo.",
            "Tiempo flexible: el transporte puede demorar.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Hay colectivo directo al salar?",
          a: "No una línea fija y frecuente; se llega a Purmamarca y se suma la guía.",
        },
        {
          q: "¿Remis desde Jujuy?",
          a: "Sí como opción, pero confirmá precio y que incluya la guía del salar.",
        },
        {
          q: "¿Y desde Salta?",
          a: "Más lejos: primero a Jujuy o Quebrada, luego a Purmamarca.",
        },
        {
          q: "¿Confiable el horario?",
          a: "Cambia; confirmalo en tu ciudad base o en Purmamarca.",
        },
      ],
    },
    en: {
      metaTitle: "Public transport to Salinas Grandes: buses and remises",
      metaDescription:
        "There is no direct, frequent line to the salt flat. Combine a bus or remis to Purmamarca with the local guide. Confirm times, which change.",
      h1: "Public transport",
      lead: "There is no direct, frequent public service all the way to the salt flat. The common option is to reach Purmamarca (bus or remis) and add the local guide that goes to the salt flat.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "To Purmamarca",
          bullets: [
            "Buses from San Salvador de Jujuy and the Quebrada.",
            "Remises or tourist vans as an alternative.",
            "Schedules and frequency change: confirm them.",
          ],
        },
        {
          heading: "From Purmamarca to the salt flat",
          paragraphs: [
            "There is no fixed bus line to the salt flat.",
            "The local guide (mandatory) is the one who organises the stretch to the salt flat.",
            "Some remises or tours cover the stretch.",
          ],
          callout:
            "Do not rely on rigid schedules: ask in Purmamarca first.",
        },
        {
          heading: "What to bring",
          bullets: [
            "Cash for guide and entry.",
            "Water and warm clothing.",
            "Flexible time: transport can be delayed.",
          ],
        },
      ],
      faqs: [
        {
          q: "Is there a direct bus to the salt flat?",
          a: "Not a fixed, frequent line; you reach Purmamarca and add the guide.",
        },
        {
          q: "Remis from Jujuy?",
          a: "Yes as an option, but confirm the price and that it includes the salt-flat guide.",
        },
        {
          q: "And from Salta?",
          a: "Further: first to Jujuy or the Quebrada, then to Purmamarca.",
        },
        {
          q: "Is the schedule reliable?",
          a: "It changes; confirm it in your base town or in Purmamarca.",
        },
      ],
    },
  },
  {
    key: "que-hacer",
    group: "visita",
    slug: "que-hacer",
    slugEn: "things-to-do",
    related: ["la-sal", "efecto-espejo", "fotografia", "consejos", "seguridad"],
    es: {
      metaTitle: "Qué hacer en Salinas Grandes: caminar, fotos y el espejo",
      metaDescription:
        "En el salar se camina sobre la sal, se fotografía el blanco infinito y, con suerte tras la lluvia, el efecto espejo. Todo con la guía local.",
      h1: "Qué hacer en el salar",
      lead: "La experiencia principal es el blanco infinito: caminar sobre la sal, fotografiar la superficie y, si hubo lluvia reciente, ver el efecto espejo. Siempre con la guía local.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Caminar sobre la sal",
          bullets: [
            "La guía indica dónde caminar sin dañar la superficie.",
            "Zapatos cómodos; la sal es irregular en partes.",
            "No te alejes de lo habilitado.",
          ],
        },
        {
          heading: "Fotografía",
          paragraphs: [
            "El blanco da fotos amplias y minimalistas.",
            "El efecto espejo aparece tras lluvias (ver efecto espejo).",
            "La luz es fuerte: protegé lentes y piel.",
          ],
          callout:
            "El espejo no es garantía: depende de la lluvia reciente.",
        },
        {
          heading: "Miradores y comunidad",
          bullets: [
            "El Parador La Curva es el punto de guía.",
            "El salar es trabajo de la comunidad local: respetalo.",
            "No dejes basura.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Se puede bañar?",
          a: "No es balneario; el salar no es para bañarse.",
        },
        {
          q: "¿El espejo siempre?",
          a: "No: aparece tras lluvias recientes; no está garantizado.",
        },
        {
          q: "¿Cuánto se camina?",
          a: "Depende del día y la guía; no damos un número fijo.",
        },
        {
          q: "¿Se puede la sal como recuerdo?",
          a: "Consultalo con la guía y la comunidad; no extraigas por tu cuenta.",
        },
      ],
    },
    en: {
      metaTitle: "Things to do at Salinas Grandes: walk, photos and the mirror",
      metaDescription:
        "At the salt flat you walk on the salt, photograph the infinite white and, weather permitting after rain, the mirror effect. All with the local guide.",
      h1: "Things to do at the salt flat",
      lead: "The main experience is the infinite white: walking on the salt, photographing the surface and, if there was recent rain, seeing the mirror effect. Always with the local guide.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "Walk on the salt",
          bullets: [
            "The guide shows where to walk without damaging the surface.",
            "Comfortable shoes; the salt is uneven in places.",
            "Do not stray beyond the authorised areas.",
          ],
        },
        {
          heading: "Photography",
          paragraphs: [
            "The white gives wide, minimalist photos.",
            "The mirror effect appears after rains (see mirror effect).",
            "The light is strong: protect lenses and skin.",
          ],
          callout:
            "The mirror is not guaranteed: it depends on recent rain.",
        },
        {
          heading: "Viewpoints and community",
          bullets: [
            "Parador La Curva is the guide point.",
            "The salt flat is the work of the local community: respect it.",
            "Leave no litter.",
          ],
        },
      ],
      faqs: [
        {
          q: "Can you swim?",
          a: "Not a bathing spot; the salt flat is not for swimming.",
        },
        {
          q: "Is the mirror always there?",
          a: "No: it appears after recent rains; it is not guaranteed.",
        },
        {
          q: "How far do you walk?",
          a: "Depends on the day and the guide; we do not give a fixed number.",
        },
        {
          q: "Can I take salt as a souvenir?",
          a: "Ask the guide and the community; do not extract it on your own.",
        },
      ],
    },
  },
  {
    key: "desde-tilcara",
    group: "transporte",
    slug: "desde-tilcara",
    slugEn: "from-tilcara",
    related: [
      "desde-purmamarca",
      "desde-humahuaca",
      "cuesta-de-lipan",
      "itinerario",
      "como-llegar",
    ],
    es: {
      metaTitle: "Desde Tilcara a Salinas Grandes: ruta y duración",
      metaDescription:
        "Tilcara está más al norte, en la Quebrada de Humahuaca. Para el salar pasás primero por Purmamarca y sumás ese tramo a los ~65 km hasta el salar.",
      h1: "Desde Tilcara",
      lead: "Tilcara queda más al norte que Purmamarca, dentro de la Quebrada de Humahuaca. Para llegar al salar pasás por Purmamarca, así que sumás ese tramo a los ~65 km desde allí.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "La ruta",
          paragraphs: [
            "Desde Tilcara bajás hacia el sur por la Quebrada hasta Purmamarca.",
            "De Purmamarca seguís por RN 52 y la Cuesta de Lipán al salar.",
          ],
          callout:
            "No hay atajo directo: primero Purmamarca, luego RN 52.",
        },
        {
          heading: "Tiempo y día",
          bullets: [
            "Es más lejos que desde Purmamarca: consideralo jornada completa.",
            "Salí temprano para la luz y la altura.",
            "Confirmá el estado de la RN 52.",
          ],
        },
        {
          heading: "Guía local",
          paragraphs: [
            "La guía obligatoria se toma en el Parador La Curva.",
            "Podés coordinarla desde Tilcara o al llegar a Purmamarca.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Se puede en medio día?",
          a: "Difícil: al estar más al norte, suma el tramo a Purmamarca; es más bien día completo.",
        },
        {
          q: "¿Paso por Purmamarca?",
          a: "Sí, es el camino: Purmamarca es la base de RN 52 al salar.",
        },
        {
          q: "¿Distancia aproximada?",
          a: "Más lejos que los ~65 km de Purmamarca; depende de tu punto de partida en Tilcara.",
        },
        {
          q: "¿Conviene dormir en Tilcara?",
          a: "Sí si querés recorrer la Quebrada; el salar queda como jornada desde allí.",
        },
      ],
    },
    en: {
      metaTitle: "From Tilcara to Salinas Grandes: route and duration",
      metaDescription:
        "Tilcara is further north, in the Quebrada de Humahuaca. For the salt flat you first pass through Purmamarca and add that stretch to the ~65 km to the salt flat.",
      h1: "From Tilcara",
      lead: "Tilcara lies further north than Purmamarca, within the Quebrada de Humahuaca. To reach the salt flat you pass through Purmamarca, so you add that stretch to the ~65 km from there.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "The route",
          paragraphs: [
            "From Tilcara you go south down the Quebrada to Purmamarca.",
            "From Purmamarca you continue on RN 52 and the Cuesta de Lipán to the salt flat.",
          ],
          callout:
            "There is no direct shortcut: first Purmamarca, then RN 52.",
        },
        {
          heading: "Time and day",
          bullets: [
            "It is further than from Purmamarca: treat it as a full day.",
            "Leave early for the light and the altitude.",
            "Confirm the state of RN 52.",
          ],
        },
        {
          heading: "Local guide",
          paragraphs: [
            "The mandatory guide is taken at Parador La Curva.",
            "You can arrange it from Tilcara or on arrival in Purmamarca.",
          ],
        },
      ],
      faqs: [
        {
          q: "Can it be done in half a day?",
          a: "Hard: being further north, it adds the stretch to Purmamarca; it is more of a full day.",
        },
        {
          q: "Do I pass through Purmamarca?",
          a: "Yes, that is the way: Purmamarca is the RN 52 base to the salt flat.",
        },
        {
          q: "Approximate distance?",
          a: "Further than the ~65 km from Purmamarca; it depends on your starting point in Tilcara.",
        },
        {
          q: "Is it worth staying in Tilcara?",
          a: "Yes if you want to tour the Quebrada; the salt flat becomes a day trip from there.",
        },
      ],
    },
  },
  {
    key: "desde-humahuaca",
    group: "transporte",
    slug: "desde-humahuaca",
    slugEn: "from-humahuaca",
    related: [
      "desde-tilcara",
      "desde-purmamarca",
      "cuesta-de-lipan",
      "itinerario",
      "como-llegar",
    ],
    es: {
      metaTitle: "Desde Humahuaca a Salinas Grandes: día completo",
      metaDescription:
        "Humahuaca está al norte de la Quebrada, lejos del salar. Para visitarlo sumás todo el tramo hasta Purmamarca y la RN 52: es una jornada larga.",
      h1: "Desde Humahuaca",
      lead: "Humahuaca está al norte de la Quebrada de Humahuaca, bastante más lejos del salar que Purmamarca. Llegar implica bajar hasta Purmamarca y seguir por RN 52: es una jornada larga de ruta y altura.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "La ruta",
          paragraphs: [
            "Desde Humahuaca bajás la Quebrada hacia el sur hasta Purmamarca.",
            "De allí, RN 52 y Cuesta de Lipán al salar.",
          ],
          callout:
            "Es el punto más lejano de los pueblos de la Quebrada: planificá día completo.",
        },
        {
          heading: "Día completo",
          bullets: [
            "Salí muy temprano.",
            "Considerá dormir en Purmamarca para acortar.",
            "Confirmá RN 52 y el proveedor.",
          ],
        },
        {
          heading: "Guía local",
          paragraphs: [
            "Obligatoria, en el Parador La Curva.",
            "Muchos tours desde Humahuaca la incluyen.",
          ],
        },
      ],
      faqs: [
        {
          q: "¿Día completo desde Humahuaca?",
          a: "Sí: es el pueblo más lejano de la Quebrada al salar.",
        },
        {
          q: "¿Mejor dormir en Purmamarca?",
          a: "Sí para muchos: acorta la jornada y ayuda a aclimatar.",
        },
        {
          q: "¿Tour o auto?",
          a: "Ambos posibles; la guía local es obligatoria en cualquier caso.",
        },
        {
          q: "¿Vale la pena si estoy en Humahuaca?",
          a: "Sí si tenés el día; es largo pero combina Quebrada y Puna.",
        },
      ],
    },
    en: {
      metaTitle: "From Humahuaca to Salinas Grandes: a full day",
      metaDescription:
        "Humahuaca is north of the Quebrada, far from the salt flat. To visit you add the whole stretch to Purmamarca and RN 52: it is a long day.",
      h1: "From Humahuaca",
      lead: "Humahuaca is north of the Quebrada de Humahuaca, much further from the salt flat than Purmamarca. Getting there means going down to Purmamarca and on via RN 52: a long day of road and altitude.",
      updated: "01/11/2026",
      sections: [
        {
          heading: "The route",
          paragraphs: [
            "From Humahuaca you go down the Quebrada south to Purmamarca.",
            "From there, RN 52 and Cuesta de Lipán to the salt flat.",
          ],
          callout:
            "It is the farthest point of the Quebrada towns: plan a full day.",
        },
        {
          heading: "Full day",
          bullets: [
            "Leave very early.",
            "Consider sleeping in Purmamarca to shorten it.",
            "Confirm RN 52 and the provider.",
          ],
        },
        {
          heading: "Local guide",
          paragraphs: [
            "Mandatory, at Parador La Curva.",
            "Many tours from Humahuaca include it.",
          ],
        },
      ],
      faqs: [
        {
          q: "Full day from Humahuaca?",
          a: "Yes: it is the farthest Quebrada town from the salt flat.",
        },
        {
          q: "Better to sleep in Purmamarca?",
          a: "Yes for many: it shortens the day and helps acclimatise.",
        },
        {
          q: "Tour or car?",
          a: "Both possible; the local guide is mandatory in any case.",
        },
        {
          q: "Worth it if I am in Humahuaca?",
          a: "Yes if you have the day; it is long but combines Quebrada and Puna.",
        },
      ],
    },
  },
];

export function getTopic(key: string): Topic | undefined {
  return TOPICS.find((t) => t.key === key);
}

export function topicPath(topic: Topic, lang: Language): string {
  return lang === "es"
    ? `/${topic.group}/${topic.slug}/`
    : `/en/${topic.group}/${topic.slugEn}/`;
}

export function topicsByGroup(group: TopicGroup): Topic[] {
  return TOPICS.filter((t) => t.group === group);
}
