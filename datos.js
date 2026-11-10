/* =====================================================================
   DATOS - Pablo Barazzutti
   ---------------------------------------------------------------------
   Este es el UNICO archivo que necesitas editar.
   Lo usan los CV en PDF (español e inglés) y el portfolio web.
   Despues de guardar, hace doble clic en "generar-pdf.bat".

   IDIOMAS: los campos que terminan en _en son la version en ingles.
   Si cambias un texto en español, cambia tambien su _en.
   Si un campo no tiene _en, se usa el español en las dos versiones.

   Reglas para no romper nada:
   - Cada texto va entre comillas: "asi".
   - Cada item de una lista termina con coma.
   - Para agregar algo, copia un bloque { ... }, pegalo debajo y cambialo.
   ===================================================================== */

const CV = {

  nombre: "Pablo Agustín Barazzutti",
  titulo:    "Desarrollador Web Front-end · Soporte Técnico",
  titulo_en: "Front-end Web Developer · Technical Support",

  // Si cambias la foto, reemplaza el archivo assets/foto.png (cuadrada).
  foto: "assets/foto.png",

  // Direccion donde esta publicado el portfolio (GitHub Pages).
  sitio: "https://barazzuttip.github.io/",

  contacto: [
    { icono: "mail", texto: "barazzuttip@gmail.com",   link: "mailto:barazzuttip@gmail.com" },
    { icono: "tel",  texto: "+54 9 280 463-7812",      link: "https://wa.me/5492804637812" },
    { icono: "pin",  texto: "Bahía Blanca, Argentina", link: "" },
    { icono: "web",  texto: "barazzuttip.github.io",   link: "https://barazzuttip.github.io/" },
  ],

  perfil:
    "Desarrollador web front-end con experiencia creando y manteniendo sitios para inmobiliarias " +
    "y empresas de Estados Unidos. Trabajo con HTML, CSS, JavaScript y plataformas CMS, cuidando " +
    "el diseño, la experiencia de usuario y el SEO, y brindo soporte técnico directo a clientes en inglés. " +
    "Integro herramientas de IA generativa en mi trabajo diario para entregar más rápido sin resignar calidad. " +
    "Mi formación científica (Oceanografía, UNS) me aporta pensamiento analítico y resolución de problemas.",
  perfil_en:
    "Front-end web developer with hands-on experience building and maintaining websites for real estate firms " +
    "and businesses in the United States. I work with HTML, CSS, JavaScript and CMS platforms, with a strong focus " +
    "on design, user experience and SEO, and I provide direct technical support to English-speaking clients. " +
    "I use generative AI tools every day to deliver faster without compromising quality. " +
    "My scientific background (Oceanography, UNS) brings analytical thinking and problem-solving skills.",

  /* ---------------- EXPERIENCIA ----------------
     Si dejas SaleCore: cambia  hasta: "Presente"  por el año, ej: "2027"
     (sirve para los dos idiomas, "Presente" se traduce solo).
     hasta: "" muestra solo el año de inicio (trabajos de un solo año). */
  experiencia: [
    {
      puesto:    "Desarrollador Web y Soporte Técnico",
      puesto_en: "Web Developer & Technical Support",
      empresa:   "SaleCore",
      lugar:     "Fairfield, California, EE.UU. · Remoto",
      lugar_en:  "Fairfield, California, USA · Remote",
      desde:     "2025",
      hasta:     "Presente",
      tareas: [
        "Diseño y desarrollo de más de 10 sitios web para agentes y brokers inmobiliarios de EE.UU. sobre la plataforma SaleCore, con búsqueda de propiedades integrada (IDX/MLS).",
        "Creación de secciones y componentes a medida con HTML, CSS y JavaScript dentro del CMS: responsive y adaptados a la identidad de cada marca.",
        "Rediseño y migración de sitios existentes y optimización de SEO on-page.",
        "Soporte técnico front-end y back-end a clientes en inglés: diagnóstico, resolución de incidencias y actualización de contenidos.",
      ],
      tareas_en: [
        "Designed and built 10+ websites for U.S. real estate agents and brokerages on the SaleCore platform, with integrated property search (IDX/MLS).",
        "Created custom sections and components with HTML, CSS and JavaScript inside the CMS: responsive and tailored to each brand's identity.",
        "Redesigned and migrated existing websites and improved on-page SEO.",
        "Provided front-end and back-end technical support to English-speaking clients: troubleshooting, issue resolution and content updates.",
      ],
    },
    {
      puesto:    "Diseñador y Desarrollador Web",
      puesto_en: "Web Designer & Developer",
      empresa:   "Bz Diseño Web",
      lugar:     "Emprendimiento propio",
      lugar_en:  "Own business",
      desde:     "2024",
      hasta:     "",
      tareas:    ["Sitios web de punta a punta: relevamiento con el cliente, diseño en Figma y desarrollo en WordPress y HTML/CSS."],
      tareas_en: ["End-to-end websites: client discovery, design in Figma and development in WordPress and HTML/CSS."],
    },
    {
      puesto:    "Pasantía UX/UI Designer",
      puesto_en: "UX/UI Design Intern",
      empresa:   "GAO Tek Inc.",
      lugar:     "Nueva York, EE.UU. · Remoto",
      lugar_en:  "New York, USA · Remote",
      desde:     "2024",
      hasta:     "",
      tareas:    ["Diseño de interfaces y propuestas de mejora de experiencia de usuario en un equipo internacional."],
      tareas_en: ["Interface design and user-experience improvement proposals within an international team."],
    },
    {
      puesto:    "Diseñador de Redes Sociales",
      puesto_en: "Social Media Designer",
      empresa:   "Provencred",
      lugar:     "Bahía Blanca",
      lugar_en:  "Bahía Blanca, Argentina",
      desde:     "2018",
      hasta:     "2019",
      tareas:    [],
      tareas_en: [],
    },
  ],

  // Una sola linea al final de Experiencia. Deja "" para ocultarla.
  otrasExperiencias:
    "Atención al público e instrucción náutica en Escuela de Mar Puerto Madryn (2014–2021) y La Pacheca Restobar (2022–2023).",
  otrasExperiencias_en:
    "Customer service and water-sports instruction at Escuela de Mar Puerto Madryn (2014–2021) and La Pacheca Restobar (2022–2023).",

  /* ---------------- FORMACION ----------------
     certificado: imagen dentro de assets/certificados ("" si no hay).
     En el PDF, cada curso enlaza a su certificado publicado en tu sitio. */
  formacion: [
    { titulo: "Desarrollador Web Flex",         titulo_en: "Web Developer (Flex)",          lugar: "Coderhouse",    anio: "2024", detalle: "HTML, CSS, SASS, Bootstrap, Git, SEO", certificado: "assets/certificados/desarrollo-web.jpg" },
    { titulo: "JavaScript",                                                                lugar: "Coderhouse",    anio: "2024", detalle: "",                                     certificado: "assets/certificados/javascript.jpg" },
    { titulo: "WordPress",                                                                 lugar: "Coderhouse",    anio: "2024", detalle: "Elementor, WooCommerce, SEO, hosting",  certificado: "assets/certificados/wordpress.jpg" },
    { titulo: "Fundamentos del Diseño Gráfico", titulo_en: "Graphic Design Fundamentals",   lugar: "Coderhouse",    anio: "2024", detalle: "",                                     certificado: "assets/certificados/diseno-grafico.jpg" },
    { titulo: "Figma",                                                                     lugar: "Desafío Latam", anio: "2024", detalle: "",                                     certificado: "assets/certificados/figma.jpg" },
    { titulo: "Git y GitHub",                   titulo_en: "Git & GitHub",                  lugar: "Desafío Latam", anio: "2024", detalle: "",                                     certificado: "assets/certificados/git-github.jpg" },
    { titulo: "UX/UI: conceptos básicos",       titulo_en: "UX/UI Fundamentals",            lugar: "Desafío Latam", anio: "2024", detalle: "",                                     certificado: "assets/certificados/ux-ui.jpg" },
    { titulo: "UX Content Design",                                                         lugar: "Desafío Latam", anio: "2024", detalle: "",                                     certificado: "assets/certificados/ux-content.jpg" },
    { titulo: "Lic. en Oceanografía · Física Marina", titulo_en: "B.Sc. in Oceanography · Marine Physics", lugar: "Universidad Nacional del Sur", anio: "",
      detalle: "75% de la carrera aprobada", detalle_en: "75% of coursework completed", certificado: "" },
  ],

  /* ---------------- HABILIDADES ---------------- */
  habilidades: [
    { grupo: "Front-end",                              items: ["HTML5", "CSS3", "SASS", "JavaScript", "Responsive design"] },
    { grupo: "CMS",                                    items: ["SaleCore", "WordPress", "Elementor"] },
    { grupo: "Herramientas", grupo_en: "Tools",        items: ["Git", "GitHub", "Figma", "Canva", "CapCut"] },
    { grupo: "Otros",        grupo_en: "Other",        items: ["SEO on-page", "UX/UI", "R", "MATLAB", "Excel avanzado"],
                                                       items_en: ["On-page SEO", "UX/UI", "R", "MATLAB", "Advanced Excel"] },
  ],

  ia: {
    herramientas: ["Claude", "Claude Code", "ChatGPT", "Gemini"],
    texto:
      "Uso profesional diario de IA generativa: generación y revisión de código, depuración, " +
      "maquetado de secciones, redacción y traducción de contenidos web, SEO y documentación. " +
      "Escritura de prompts efectivos y verificación crítica de cada resultado.",
    texto_en:
      "Daily professional use of generative AI: writing and reviewing code, debugging, " +
      "building page sections, writing and translating web content, SEO and documentation. " +
      "Effective prompt writing and critical review of every output.",
  },

  idiomas: [
    { idioma: "Español", idioma_en: "Spanish", nivel: "Nativo",  nivel_en: "Native" },
    { idioma: "Inglés",  idioma_en: "English", nivel: "Avanzado · First Certificate (FCE) · uso laboral diario",
                                               nivel_en: "Advanced · Cambridge First Certificate (FCE) · used daily at work" },
  ],

  /* ---------------- PORTFOLIO ----------------
     Para sumar un sitio: copia una linea, cambia los datos y corre generar-pdf.bat.
     La captura se saca sola y se guarda en la carpeta "capturas".
     Si un sitio cambia de diseño, borra su imagen de "capturas" y se vuelve a sacar.
     rubro y plataforma se traducen solos con la lista "traducciones" de abajo.
     Si usas un rubro nuevo, agregalo ahi con su version en ingles.
     El orden de esta lista es el orden en el PDF y en la web. */
  portfolio: [
    { nombre: "Contra Costa Association of REALTORS®", url: "https://ccarhomes.com/",                 rubro: "Asociación inmobiliaria",    plataforma: "SaleCore" },
    { nombre: "The Bentley Real Estate Group",          url: "https://thebentleyrealestategroup.com/", rubro: "Inmobiliaria",               plataforma: "SaleCore" },
    { nombre: "Realtor Lehigh Acres",                   url: "https://realtorlehighacres.com/",        rubro: "Agente inmobiliario",        plataforma: "SaleCore" },
    { nombre: "Swink Empire Realty",                    url: "https://swinkempirerealty.com/",         rubro: "Inmobiliaria",               plataforma: "SaleCore" },
    { nombre: "Les Jones, Realtor",                    url: "https://lesjonesrealtor.com/",           rubro: "Agente inmobiliario",        plataforma: "SaleCore" },
    { nombre: "Ligia Andrade FL Realty",                url: "https://ligiaandradeflrealty.com/",      rubro: "Agente inmobiliario",        plataforma: "SaleCore" },
    { nombre: "Iconic Altura Group",                    url: "https://iconicalturagroup.com/",         rubro: "Inmobiliaria",               plataforma: "SaleCore" },
    { nombre: "Bergamini & Associates",                 url: "https://bergaminiandassociates.com/",    rubro: "Inmobiliaria",               plataforma: "SaleCore" },
    { nombre: "Foothill Real Estate",                   url: "https://foothillrealestate.net/",        rubro: "Inmobiliaria",               plataforma: "SaleCore" },
    { nombre: "Maui Real Estate LLC",                   url: "https://www.mauirealestatellc.com/",     rubro: "Inmobiliaria",               plataforma: "SaleCore" },
    { nombre: "Geneva Autry",                           url: "https://genevaautry.com/",               rubro: "Agente inmobiliario",        plataforma: "SaleCore" },
    { nombre: "Daniel Hanuka",                          url: "https://danielhanuka.realtor/",          rubro: "Agente inmobiliario",        plataforma: "SaleCore" },
    { nombre: "Amber LaVal Martinez",                   url: "https://ambersells4u.com/",              rubro: "Agente inmobiliario",        plataforma: "SaleCore" },
    { nombre: "CNY Real Estate",                        url: "https://cnyre.com/",                     rubro: "Inmobiliaria",               plataforma: "SaleCore" },
  ],

  // Traduccion automatica de rubros y plataformas del portfolio (español: ingles)
  traducciones: {
    "Inmobiliaria":               "Real estate brokerage",
    "Agente inmobiliario":        "Real estate agent",
    "Asociación inmobiliaria":    "REALTOR® association",
    "Real estate y construcción": "Real estate & construction",
    "Tratamiento de agua":        "Water treatment",
    "A medida":                   "Custom build",
    "Presente":                   "Present",
  },
};

/* ===== No tocar de aca para abajo ===== */
// Nombre de archivo de la captura de cada sitio
CV.captura = (url) => "capturas/" + new URL(url).hostname.replace(/^www\./, "") + ".jpg";
// Devuelve el campo en el idioma pedido (usa el español si falta el _en)
CV.t = (obj, campo, lang) => (lang === "en" && obj[campo + "_en"] !== undefined ? obj[campo + "_en"] : obj[campo]);
// Traduce rubros/plataformas/"Presente"
CV.tr = (texto, lang) => (lang === "en" ? CV.traducciones[texto] || texto : texto);
// Nombres de los PDF
CV.pdf = { es: "CV - Pablo Barazzutti.pdf", en: "Resume - Pablo Barazzutti.pdf" };
