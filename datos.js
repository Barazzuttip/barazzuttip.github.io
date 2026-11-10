/* =====================================================================
   DATOS - Pablo Barazzutti
   ---------------------------------------------------------------------
   Este es el UNICO archivo que necesitas editar.
   Lo usan el CV en PDF (cv/cv.html) y el portfolio web (index.html).
   Despues de guardar, hace doble clic en "generar-pdf.bat".

   Reglas para no romper nada:
   - Cada texto va entre comillas: "asi".
   - Cada item de una lista termina con coma.
   - Para agregar algo, copia un bloque { ... }, pegalo debajo y cambialo.
   ===================================================================== */

const CV = {

  nombre: "Pablo Agustín Barazzutti",
  titulo: "Desarrollador Web Front-end · Soporte Técnico",

  // Si cambias la foto, reemplaza el archivo assets/foto.png (cuadrada).
  foto: "assets/foto.png",

  // Direccion donde vas a publicar el portfolio (GitHub Pages).
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

  /* ---------------- EXPERIENCIA ----------------
     Si dejas SaleCore: cambia  hasta: "Presente"  por el año, ej: "2027".
     hasta: "" muestra solo el año de inicio (trabajos de un solo año). */
  experiencia: [
    {
      puesto:  "Desarrollador Web y Soporte Técnico",
      empresa: "SaleCore",
      lugar:   "Fairfield, California, EE.UU. · Remoto",
      desde:   "2025",
      hasta:   "Presente",
      tareas: [
        "Diseño y desarrollo de más de 15 sitios web para agentes y brokers inmobiliarios de EE.UU. sobre la plataforma SaleCore, con búsqueda de propiedades integrada (IDX/MLS).",
        "Creación de secciones y componentes a medida con HTML, CSS y JavaScript dentro del CMS: responsive y adaptados a la identidad de cada marca.",
        "Rediseño y migración de sitios existentes y optimización de SEO on-page.",
        "Soporte técnico front-end y back-end a clientes en inglés: diagnóstico, resolución de incidencias y actualización de contenidos.",
      ],
    },
    {
      puesto:  "Diseñador y Desarrollador Web",
      empresa: "Bz Diseño Web",
      lugar:   "Emprendimiento propio",
      desde:   "2024",
      hasta:   "",
      tareas: [
        "Sitios web de punta a punta: relevamiento con el cliente, diseño en Figma y desarrollo en WordPress y HTML/CSS.",
      ],
    },
    {
      puesto:  "Pasantía UX/UI Designer",
      empresa: "GAO Tek Inc.",
      lugar:   "Nueva York, EE.UU. · Remoto",
      desde:   "2024",
      hasta:   "",
      tareas: [
        "Diseño de interfaces y propuestas de mejora de experiencia de usuario en un equipo internacional.",
      ],
    },
    {
      puesto:  "Diseñador de Redes Sociales",
      empresa: "Provencred",
      lugar:   "Bahía Blanca",
      desde:   "2018",
      hasta:   "2019",
      tareas: [],
    },
  ],

  // Una sola linea al final de Experiencia. Deja "" para ocultarla.
  otrasExperiencias:
    "Atención al público e instrucción náutica en Escuela de Mar Puerto Madryn (2014–2021) y La Pacheca Restobar (2022–2023).",

  /* ---------------- FORMACION ----------------
     certificado: imagen dentro de assets/certificados ("" si no hay).
     En el PDF, cada curso enlaza a su certificado publicado en tu sitio. */
  formacion: [
    { titulo: "Desarrollador Web Flex",         lugar: "Coderhouse",    anio: "2024", detalle: "HTML, CSS, SASS, Bootstrap, Git, SEO", certificado: "assets/certificados/desarrollo-web.jpg" },
    { titulo: "JavaScript",                     lugar: "Coderhouse",    anio: "2024", detalle: "",                                     certificado: "assets/certificados/javascript.jpg" },
    { titulo: "WordPress",                      lugar: "Coderhouse",    anio: "2024", detalle: "Elementor, WooCommerce, SEO, hosting",  certificado: "assets/certificados/wordpress.jpg" },
    { titulo: "Fundamentos del Diseño Gráfico", lugar: "Coderhouse",    anio: "2024", detalle: "",                                     certificado: "assets/certificados/diseno-grafico.jpg" },
    { titulo: "Figma",                          lugar: "Desafío Latam", anio: "2024", detalle: "",                                     certificado: "assets/certificados/figma.jpg" },
    { titulo: "Git y GitHub",                   lugar: "Desafío Latam", anio: "2024", detalle: "",                                     certificado: "assets/certificados/git-github.jpg" },
    { titulo: "UX/UI: conceptos básicos",       lugar: "Desafío Latam", anio: "2024", detalle: "",                                     certificado: "assets/certificados/ux-ui.jpg" },
    { titulo: "UX Content Design",              lugar: "Desafío Latam", anio: "2024", detalle: "",                                     certificado: "assets/certificados/ux-content.jpg" },
    { titulo: "Lic. en Oceanografía · Física Marina", lugar: "Universidad Nacional del Sur", anio: "", detalle: "75% de la carrera aprobada", certificado: "" },
  ],

  /* ---------------- HABILIDADES ---------------- */
  habilidades: [
    { grupo: "Front-end",    items: ["HTML5", "CSS3", "SASS", "JavaScript", "Responsive design"] },
    { grupo: "CMS",          items: ["SaleCore", "WordPress", "Elementor"] },
    { grupo: "Herramientas", items: ["Git", "GitHub", "Figma", "Canva", "CapCut"] },
    { grupo: "Otros",        items: ["SEO on-page", "UX/UI", "R", "MATLAB", "Excel avanzado"] },
  ],

  ia: {
    herramientas: ["Claude", "Claude Code", "ChatGPT", "Gemini"],
    texto:
      "Uso profesional diario de IA generativa: generación y revisión de código, depuración, " +
      "maquetado de secciones, redacción y traducción de contenidos web, SEO y documentación. " +
      "Escritura de prompts efectivos y verificación crítica de cada resultado.",
  },

  idiomas: [
    { idioma: "Español", nivel: "Nativo" },
    { idioma: "Inglés",  nivel: "Avanzado · First Certificate (FCE) · uso laboral diario" },
  ],

  /* ---------------- PORTFOLIO ----------------
     Para sumar un sitio: copia una linea, cambia los datos y corre generar-pdf.bat.
     La captura se saca sola y se guarda en la carpeta "capturas".
     Si un sitio cambia de diseño, borra su imagen de "capturas" y se vuelve a sacar.
     plataforma: "SaleCore", "WordPress", "A medida", etc.
     El orden de esta lista es el orden en el PDF y en la web. */
  portfolio: [
    { nombre: "Contra Costa Association of REALTORS®", url: "https://ccarhomes.com/",                 rubro: "Asociación inmobiliaria",    plataforma: "SaleCore" },
    { nombre: "The Bentley Real Estate Group",          url: "https://thebentleyrealestategroup.com/", rubro: "Inmobiliaria",               plataforma: "SaleCore" },
    { nombre: "Swink Empire Realty",                    url: "https://swinkempirerealty.com/",         rubro: "Inmobiliaria",               plataforma: "SaleCore" },
    { nombre: "Les Jones, Realtor",                     url: "https://lesjonesrealtor.com/",           rubro: "Agente inmobiliario",        plataforma: "SaleCore" },
    { nombre: "Ligia Andrade FL Realty",                url: "https://ligiaandradeflrealty.com/",      rubro: "Agente inmobiliario",        plataforma: "SaleCore" },
    { nombre: "Iconic Altura Group",                    url: "https://iconicalturagroup.com/",         rubro: "Inmobiliaria",               plataforma: "SaleCore" },
    { nombre: "Bergamini & Associates",                 url: "https://bergaminiandassociates.com/",    rubro: "Inmobiliaria",               plataforma: "SaleCore" },
    { nombre: "Foothill Real Estate",                   url: "https://foothillrealestate.net/",        rubro: "Inmobiliaria",               plataforma: "SaleCore" },
    { nombre: "Maui Real Estate LLC",                   url: "https://www.mauirealestatellc.com/",     rubro: "Inmobiliaria",               plataforma: "SaleCore" },
    { nombre: "Geneva Autry",                           url: "https://genevaautry.com/",               rubro: "Agente inmobiliario",        plataforma: "SaleCore" },
    { nombre: "Daniel Hanuka",                          url: "https://danielhanuka.realtor/",          rubro: "Agente inmobiliario",        plataforma: "SaleCore" },
    { nombre: "Amber LaVal Martinez",                   url: "https://ambersells4u.com/",              rubro: "Agente inmobiliario",        plataforma: "SaleCore" },
    { nombre: "Realtor Lehigh Acres",                   url: "https://realtorlehighacres.com/",        rubro: "Agente inmobiliario",        plataforma: "SaleCore" },
    { nombre: "CNY Real Estate",                        url: "https://cnyre.com/",                     rubro: "Inmobiliaria",               plataforma: "SaleCore" },
    { nombre: "AEI · Arfsten Enterprises",              url: "https://aeiproperty.com/",               rubro: "Real estate y construcción", plataforma: "A medida" },
    { nombre: "Liquid Solutions Inc.",                  url: "https://liquidsolutionsinc.com/",        rubro: "Tratamiento de agua",        plataforma: "A medida" },
    { nombre: "Christiane Berry",                       url: "https://christianeberry.com/",           rubro: "Agente inmobiliario",        plataforma: "WordPress" },
  ],
};

// Nombre de archivo de la captura de cada sitio (no tocar)
CV.captura = (url) => "capturas/" + new URL(url).hostname.replace(/^www\./, "") + ".jpg";
