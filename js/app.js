// Arma el portfolio a partir de datos.js y textos-web.js (no hace falta tocar este archivo).
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const dominio = (url) => new URL(url).hostname.replace(/^www\./, "");
const slug = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "-");
const certificados = CV.formacion.filter((f) => f.certificado);
const iconos = {
  mail: '<path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/>',
  tel: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
};

// ---------- Idioma: ?lang=en en la URL, o lo ultimo que eligio el visitante, o el del navegador ----------
const guardado = (() => { try { return localStorage.getItem("idioma"); } catch { return null; } })();
const deUrl = new URLSearchParams(location.search).get("lang");
let lang = deUrl || guardado || (navigator.language || "es").slice(0, 2);
if (lang !== "en") lang = "es";
let filtro = null;

function render() {
  const T = TEXTOS[lang];
  const t = (obj, campo) => CV.t(obj, campo, lang);
  document.documentElement.lang = lang;
  document.title = T.tituloPagina;
  document.querySelectorAll("[data-i]").forEach((el) => (el.textContent = T[el.dataset.i]));
  document.querySelectorAll(".selector-idioma button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  document.querySelectorAll(".link-cv").forEach((a) => (a.href = CV.pdf[lang]));

  // Hero
  $("hero-nombre").textContent = CV.nombre.split(" ")[0];
  $("hero-sub").textContent = T.heroSub.replace("{titulo}", t(CV, "titulo"));
  $("hero-img").src = CV.foto;
  const actual = CV.experiencia.find((e) => e.hasta === "Presente");
  $("estado").textContent = actual ? T.estadoActual.replace("{puesto}", t(actual, "puesto")).replace("{empresa}", actual.empresa) : T.estadoDefault;

  // Proyectos (los filtros solo aparecen si hay mas de una plataforma)
  const plataformas = [...new Set(CV.portfolio.map((p) => p.plataforma))];
  $("filtros").hidden = plataformas.length < 2;
  const opciones = [null, ...plataformas];
  $("filtros").innerHTML = opciones.map((p) => {
    const cant = p ? CV.portfolio.filter((x) => x.plataforma === p).length : CV.portfolio.length;
    return `<button role="tab" aria-selected="${p === filtro}" data-p="${esc(p || "")}">${esc(p ? CV.tr(p, lang) : T.todos)}<small>${cant}</small></button>`;
  }).join("");
  const lista = filtro ? CV.portfolio.filter((p) => p.plataforma === filtro) : CV.portfolio;
  $("lista-proyectos").innerHTML = lista.map((p) => `
    <a class="proyecto revelar" href="${esc(p.url)}" target="_blank" rel="noopener">
      <div class="navegador"><i></i><i></i><i></i><span>${esc(dominio(p.url))}</span></div>
      <div class="captura"><span class="sin">${esc(dominio(p.url))}</span>
        <img src="${CV.captura(p.url)}" alt="${esc(T.inicioDe + " " + p.nombre)}" loading="lazy" style="position:relative" onerror="this.remove()"></div>
      <div class="proyecto-info">
        <h3>${esc(p.nombre)}</h3>
        <div class="proyecto-meta"><span><span class="pill ${slug(p.plataforma)}">${esc(CV.tr(p.plataforma, lang))}</span> &nbsp;${esc(CV.tr(p.rubro, lang))}</span><span class="visitar">${esc(T.visitar)}</span></div>
      </div>
    </a>`).join("");

  // Sobre mi
  $("perfil").textContent = t(CV, "perfil");
  $("ia-texto").textContent = t(CV.ia, "texto");
  $("ia-chips").innerHTML = CV.ia.herramientas.map((h) => `<span>${esc(h)}</span>`).join("");
  $("habilidades").innerHTML = CV.habilidades.map((g) =>
    `<div class="hab"><h3>${esc(t(g, "grupo"))}</h3><div class="chips">${t(g, "items").map((i) => `<span>${esc(i)}</span>`).join("")}</div></div>`).join("") +
    `<div class="hab"><h3>${esc(T.idiomas)}</h3><div class="idiomas">${CV.idiomas.map((i) => `<span><b>${esc(t(i, "idioma"))}</b> · ${esc(t(i, "nivel"))}</span>`).join("")}</div></div>`;

  // Experiencia
  $("linea").innerHTML = CV.experiencia.map((e) => {
    const fecha = e.hasta ? `${e.desde} – ${CV.tr(e.hasta, lang)}` : e.desde;
    const tareas = (t(e, "tareas") || []);
    const ul = tareas.length ? `<ul>${tareas.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
    return `<li class="revelar${e.hasta === "Presente" ? " actual" : ""}"><span class="fecha">${esc(fecha)}</span>
      <h3>${esc(t(e, "puesto"))}</h3><p class="empresa"><b>${esc(e.empresa)}</b> · ${esc(t(e, "lugar"))}</p>${ul}</li>`;
  }).join("");

  // Certificados
  $("certs").innerHTML = certificados.map((c, i) => `
    <button class="cert revelar" data-i-cert="${i}">
      <img src="${esc(c.certificado)}" alt="${esc(T.certificado + " " + t(c, "titulo"))}" loading="lazy">
      <div><b>${esc(t(c, "titulo"))}</b><span>${esc([c.lugar, c.anio].filter(Boolean).join(" · "))}</span></div>
    </button>`).join("");
  $("formacion-extra").innerHTML = CV.formacion.filter((f) => !f.certificado)
    .map((f) => `<b>${esc(t(f, "titulo"))}</b> · ${esc(f.lugar)}${t(f, "detalle") ? " · " + esc(t(f, "detalle")) : ""}`).join("<br>");

  // Contacto
  $("contacto-btns").innerHTML = CV.contacto.filter((c) => c.link && iconos[c.icono]).map((c, i) =>
    `<a class="btn${i ? " btn-borde" : ""}" href="${esc(c.link)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24">${iconos[c.icono]}</svg>${c.icono === "tel" ? "WhatsApp" : esc(c.texto)}</a>`).join("") +
    `<a class="btn btn-borde" href="${esc(CV.pdf[lang])}" download>${esc(T.descargarPdf)}</a>`;

  observar();
}

// ---------- Eventos ----------
document.querySelector(".selector-idioma").addEventListener("click", (e) => {
  const b = e.target.closest("button[data-lang]"); if (!b || b.dataset.lang === lang) return;
  lang = b.dataset.lang;
  try { localStorage.setItem("idioma", lang); } catch {}
  const u = new URL(location.href); u.searchParams.set("lang", lang); history.replaceState(null, "", u);
  render();
  document.querySelectorAll(".revelar").forEach((el) => el.classList.add("visible"));
});
$("filtros").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  filtro = b.dataset.p || null;
  render();
  document.querySelectorAll("#lista-proyectos .revelar, #filtros").forEach((el) => el.classList.add("visible"));
});
$("certs").addEventListener("click", (e) => {
  const b = e.target.closest(".cert"); if (!b) return;
  const c = certificados[b.dataset.iCert];
  $("visor-img").src = c.certificado; $("visor-img").alt = TEXTOS[lang].certificado + " " + CV.t(c, "titulo", lang);
  $("visor-txt").textContent = `${CV.t(c, "titulo", lang)} · ${c.lugar}`;
  $("visor").showModal();
});
$("cerrar").addEventListener("click", () => $("visor").close());
$("visor").addEventListener("click", (e) => { if (e.target === $("visor")) $("visor").close(); });
$("anio").textContent = new Date().getFullYear();

// Nav: fondo al scrollear, menu movil, link activo
const nav = document.querySelector(".nav");
const alScroll = () => nav.classList.toggle("solida", scrollY > 20);
addEventListener("scroll", alScroll, { passive: true }); alScroll();
$("hamburguesa").addEventListener("click", () => {
  const abierto = $("menu").classList.toggle("abierto");
  $("hamburguesa").setAttribute("aria-expanded", abierto);
});
$("menu").addEventListener("click", (e) => { if (e.target.tagName === "A") { $("menu").classList.remove("abierto"); $("hamburguesa").setAttribute("aria-expanded", false); } });
const ioNav = new IntersectionObserver((ents) => ents.forEach((en) => {
  if (en.isIntersecting) document.querySelectorAll(".links a").forEach((a) => a.classList.toggle("activo", a.getAttribute("href") === "#" + en.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach((s) => ioNav.observe(s));

// Animacion de entrada
const io = new IntersectionObserver((ents) => ents.forEach((en) => {
  if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
}), { threshold: .08 });
function observar() { document.querySelectorAll(".revelar:not(.visible)").forEach((el) => io.observe(el)); }

// Contadores del hero
const contar = (el, fin) => {
  let n = 0; const paso = Math.max(1, Math.round(fin / 30));
  const tm = setInterval(() => { n = Math.min(fin, n + paso); el.textContent = n + (n === fin ? "+" : ""); if (n === fin) clearInterval(tm); }, 35);
};

render();
contar($("n-sitios"), CV.portfolio.length);
contar($("n-cursos"), certificados.length);
