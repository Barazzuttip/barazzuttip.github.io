// Arma el portfolio a partir de datos.js (no hace falta tocar este archivo).
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const dominio = (url) => new URL(url).hostname.replace(/^www\./, "");
const slug = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\s+/g, "-");

// ---------- Hero ----------
$("hero-nombre").textContent = CV.nombre.split(" ")[0];
$("hero-sub").textContent = CV.titulo + ". Creo y mantengo sitios para inmobiliarias y empresas de Estados Unidos, con foco en diseño, rendimiento y SEO.";
$("hero-img").src = CV.foto;
const actual = CV.experiencia.find((e) => e.hasta === "Presente");
if (actual) $("estado").textContent = `Actualmente: ${actual.puesto} en ${actual.empresa}`;
const certificados = CV.formacion.filter((f) => f.certificado);
const contar = (el, fin) => {
  let n = 0; const paso = Math.max(1, Math.round(fin / 30));
  const t = setInterval(() => { n = Math.min(fin, n + paso); el.textContent = n + (n === fin ? "+" : ""); if (n === fin) clearInterval(t); }, 35);
};
contar($("n-sitios"), CV.portfolio.length);
contar($("n-cursos"), certificados.length);

// ---------- Proyectos con filtros ----------
const plataformas = ["Todos", ...new Set(CV.portfolio.map((p) => p.plataforma))];
const pintarProyectos = (filtro) => {
  const lista = filtro === "Todos" ? CV.portfolio : CV.portfolio.filter((p) => p.plataforma === filtro);
  $("lista-proyectos").innerHTML = lista.map((p) => `
    <a class="proyecto revelar" href="${esc(p.url)}" target="_blank" rel="noopener">
      <div class="navegador"><i></i><i></i><i></i><span>${esc(dominio(p.url))}</span></div>
      <div class="captura"><span class="sin">${esc(dominio(p.url))}</span>
        <img src="${CV.captura(p.url)}" alt="Página de inicio de ${esc(p.nombre)}" loading="lazy" style="position:relative" onerror="this.remove()"></div>
      <div class="proyecto-info">
        <h3>${esc(p.nombre)}</h3>
        <div class="proyecto-meta"><span><span class="pill ${slug(p.plataforma)}">${esc(p.plataforma)}</span> &nbsp;${esc(p.rubro)}</span><span class="visitar">Visitar</span></div>
      </div>
    </a>`).join("");
  observar();
};
$("filtros").innerHTML = plataformas.map((p, i) => {
  const cant = p === "Todos" ? CV.portfolio.length : CV.portfolio.filter((x) => x.plataforma === p).length;
  return `<button role="tab" aria-selected="${i === 0}" data-p="${esc(p)}">${esc(p)}<small>${cant}</small></button>`;
}).join("");
$("filtros").addEventListener("click", (e) => {
  const b = e.target.closest("button"); if (!b) return;
  $("filtros").querySelectorAll("button").forEach((x) => x.setAttribute("aria-selected", x === b));
  pintarProyectos(b.dataset.p);
});

// ---------- Sobre mi ----------
$("perfil").textContent = CV.perfil;
$("ia-texto").textContent = CV.ia.texto;
$("ia-chips").innerHTML = CV.ia.herramientas.map((h) => `<span>${esc(h)}</span>`).join("");
$("habilidades").innerHTML = CV.habilidades.map((g) =>
  `<div class="hab"><h3>${esc(g.grupo)}</h3><div class="chips">${g.items.map((i) => `<span>${esc(i)}</span>`).join("")}</div></div>`).join("") +
  `<div class="hab"><h3>Idiomas</h3><div class="idiomas">${CV.idiomas.map((i) => `<span><b>${esc(i.idioma)}</b> · ${esc(i.nivel)}</span>`).join("")}</div></div>`;

// ---------- Experiencia ----------
$("linea").innerHTML = CV.experiencia.map((e) => {
  const fecha = e.hasta ? `${e.desde} – ${e.hasta}` : e.desde;
  const tareas = e.tareas.length ? `<ul>${e.tareas.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : "";
  return `<li class="revelar${e.hasta === "Presente" ? " actual" : ""}"><span class="fecha">${esc(fecha)}</span>
    <h3>${esc(e.puesto)}</h3><p class="empresa"><b>${esc(e.empresa)}</b> · ${esc(e.lugar)}</p>${tareas}</li>`;
}).join("");

// ---------- Certificados + visor ----------
$("certs").innerHTML = certificados.map((c, i) => `
  <button class="cert revelar" data-i="${i}">
    <img src="${esc(c.certificado)}" alt="Certificado ${esc(c.titulo)}" loading="lazy">
    <div><b>${esc(c.titulo)}</b><span>${esc([c.lugar, c.anio].filter(Boolean).join(" · "))}</span></div>
  </button>`).join("");
const sinCert = CV.formacion.filter((f) => !f.certificado);
$("formacion-extra").innerHTML = sinCert.map((f) => `<b>${esc(f.titulo)}</b> · ${esc(f.lugar)}${f.detalle ? " · " + esc(f.detalle) : ""}`).join("<br>");
$("certs").addEventListener("click", (e) => {
  const b = e.target.closest(".cert"); if (!b) return;
  const c = certificados[b.dataset.i];
  $("visor-img").src = c.certificado; $("visor-img").alt = "Certificado " + c.titulo;
  $("visor-txt").textContent = `${c.titulo} · ${c.lugar}`;
  $("visor").showModal();
});
$("cerrar").addEventListener("click", () => $("visor").close());
$("visor").addEventListener("click", (e) => { if (e.target === $("visor")) $("visor").close(); });

// ---------- Contacto ----------
const iconos = {
  mail: '<path d="M4 6h16v12H4z"/><path d="m4 7 8 6 8-6"/>',
  tel: '<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"/>',
};
$("contacto-btns").innerHTML = CV.contacto.filter((c) => c.link && iconos[c.icono]).map((c, i) =>
  `<a class="btn${i ? " btn-borde" : ""}" href="${esc(c.link)}" target="_blank" rel="noopener"><svg viewBox="0 0 24 24">${iconos[c.icono]}</svg>${c.icono === "tel" ? "WhatsApp" : esc(c.texto)}</a>`).join("") +
  `<a class="btn btn-borde" href="CV - Pablo Barazzutti.pdf" download>Descargar CV (PDF)</a>`;
$("anio").textContent = new Date().getFullYear();

// ---------- Nav: fondo al scrollear, menu movil, link activo ----------
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

// ---------- Animacion de entrada ----------
function observar() {
  document.querySelectorAll(".revelar:not(.visible)").forEach((el) => io.observe(el));
}
var io = new IntersectionObserver((ents) => ents.forEach((en) => {
  if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); }
}), { threshold: .08 });
pintarProyectos("Todos");
