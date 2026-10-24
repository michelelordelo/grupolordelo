/* ============================================================
   CONFIG — edite SÓ aqui. Troque os "#" pelos links reais.
   ============================================================ */
const CONFIG = {
  whatsappNumero: "5571996179300", // WhatsApp real do escritório (DDI+DDD+número)

  linkAuditoriaPreventiva: "#",       // vai pro WhatsApp — ver bindings abaixo
  linkAuditoriaPeriodo: "#",          // vai pro WhatsApp — ver bindings abaixo
  linkDRT360Express: "https://cursodesindicoeauditoriagl.com/reforma-tributaria-condominios-mgl/?fbclid=PARlRTSAVHVwRleHRuA2FlbQIxMQBwZG9mAmZkaWQWUQx-1iCjN_yvf8wqXcSVPpMNT7OwMnNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABp86ICSv-C4msJMcDPsebQwEvqE2JGS-ADYdygAmAEZk_aoIxgTjPoSHygldO_aem_r9Zdh3LoiZHq3IkTwIAXWg",
  linkDRT360Premium: "#",             // vai pro WhatsApp — ver bindings abaixo
  linkJogoIceberg: "https://drt360.m-lordelo.chatgpt.site/",
  linkCursoAuditoriaCondominial: "https://cursodesindicoeauditoriagl.com/curso-auditoria-condominial/?fbclid=PARlRTSAVHV3ZleHRuA2FlbQIxMQBwZG9mAmZkaWQWUQxdNQIkuUxdTrTlkONMm85FWcE_YXNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpwsfH75Gh3Pa-5ZKfv18c10SM3dF6fCdWUGjK4sU1sWZ5XtKula_G2sjz7Rr_aem_-VrYeUOCBkmfLY5g5Actdg",
  linkMentoriaAuditor: "https://grupolordelo.com.br/mentoriaparaauditor/",
  linkCursoSindicoGL: "https://cursodesindicoeauditoriagl.com/",
  linkClubeLordeloGL: "https://pay.hotmart.com/N106252984V?off=ktjy0ue6&bid=1792702699368&fbclid=PARlRTSAVHWD9leHRuA2FlbQIxMQBwZG9mAmZkaWQWUQxdNQIkuUxdTrTlkONMm85FWcE_YXNydGMGYXBwX2lkDzEyNDAyNDU3NDI4NzQxNAABpwsfH75Gh3Pa-5ZKfv18c10SM3dF6fCdWUGjK4sU1sWZ5XtKula_G2sjz7Rr_aem_-VrYeUOCBkmfLY5g5Actdg",
  linkLivro: "https://pay.hotmart.com/N61139937W?bid=1788232586199", // Manual Tributário para Condomínios (Hotmart)
  linkContabilidadeEmpresarial: "#",  // vai pro WhatsApp — ver bindings abaixo
  linkPNCT: "#",                      // vai pro WhatsApp — ver bindings abaixo
  linkConsultorias: "#",              // vai pro WhatsApp — ver bindings abaixo
  linkPalestras: "#",                 // vai pro WhatsApp — ver bindings abaixo
  linkMaterialGratuito1: "#",         // TODO: link do material gratuito 1 (Podcast do Cadê o Síndico)
  linkCondcomunica: "#",              // TODO: link do material gratuito — Condcomunica / Bahia Notícias
  linkRadarImobiliario: "#",          // TODO: link do material gratuito — Radar Imobiliário
  linkColunistaRevista: "#",          // TODO: link do material gratuito — Colunista de Revista (Cadê o Síndico)
  instagram: "https://www.instagram.com/michelelordelogl/",
};

function waLink(mensagem) {
  const texto = encodeURIComponent(mensagem || "Olá! Vim pela sua bio e quero falar com o escritório.");
  return `https://wa.me/${CONFIG.whatsappNumero}?text=${texto}`;
}

/* ============================================================
   BINDINGS — liga cada elemento da página ao link do CONFIG.
   Os botões do Roteador (caixinhas de público) usam os mesmos
   links das seções principais, então um único valor no CONFIG
   atualiza os dois lugares.
   ============================================================ */
const bindings = {
  // Hero / rodapé
  linkInstagram: CONFIG.instagram,
  linkWhatsappFooter: waLink(),

  // Auditoria Preventiva Mensal / Auditoria por Período — WhatsApp
  ctaAuditoriaPreventiva: waLink("Olá! Quero uma gestão mais protegida — tenho interesse na Auditoria Preventiva Mensal."),
  ctaAuditoriaPeriodo: waLink("Olá! Quero auditar um período específico da gestão do meu condomínio."),

  // DRT360™ (grupo com carrossel: Express / Premium / Jogo do Iceberg)
  ctaDRT360Express: CONFIG.linkDRT360Express,
  ctaDRT360Premium: waLink("Olá! Quero saber mais sobre o DRT360™ Premium."),
  ctaJogoIceberg: CONFIG.linkJogoIceberg,

  // Curso de Auditoria / Mentoria / Curso de Síndico / Clube / Livro
  ctaCursoAuditoria: CONFIG.linkCursoAuditoriaCondominial,
  ctaMentoriaAuditor: CONFIG.linkMentoriaAuditor,
  ctaCursoSindicoGL: CONFIG.linkCursoSindicoGL,
  ctaClubeLordeloGL: CONFIG.linkClubeLordeloGL,
  ctaLivro: CONFIG.linkLivro,

  // Contabilidade (grupo com carrossel: Contabilidade / PNCT) — WhatsApp
  ctaContabilidadeEmpresarial: waLink("Olá! Quero falar sobre a Contabilidade para Empresas Digital."),
  ctaPNCT: waLink("Olá! Preciso que a Lordêlo revise minhas notas fiscais pelo PNCT."),

  // Consultorias / Palestras / CTA final — WhatsApp
  ctaConsultorias: waLink("Olá! Quero falar com uma especialista sobre Consultoria Condominial."),
  ctaPalestras: waLink("Olá! Quero falar com a assessoria sobre palestras com a Michele Lordêlo."),
  ctaFalarComGrupo: waLink("Olá! Ainda não sei qual solução da Lordêlo é ideal pra mim, pode me ajudar?"),

  // Gratuitos
  linkMaterialGratuito1: CONFIG.linkMaterialGratuito1,
  linkCondcomunica: CONFIG.linkCondcomunica,
  linkRadarImobiliario: CONFIG.linkRadarImobiliario,
  linkColunistaRevista: CONFIG.linkColunistaRevista,
};

/* O Roteador (caixinhas da Bússola) não usa o CONFIG: cada link dentro
   dos painéis é uma âncora interna (href="#id-da-seção") que rola a
   página direto até o card correspondente — a Bússola leva ao "lugar
   certo" dentro da própria bio, e é o botão de CADA card que leva
   pro link externo (checkout, WhatsApp etc.), já tratado acima. */

Object.entries(bindings).forEach(([id, href]) => {
  const el = document.getElementById(id);
  if (el && href) el.setAttribute("href", href);
});

/* ============================================================
   ROTEADOR — caixinhas de público em acordeão.
   Toca em uma caixinha, abre a lista de links daquele público;
   só uma caixinha fica aberta por vez.
   ============================================================ */
document.querySelectorAll(".router-box").forEach((box) => {
  box.addEventListener("click", () => {
    const panelId = box.getAttribute("data-panel");
    const panel = document.getElementById(panelId);
    const isOpen = box.getAttribute("aria-expanded") === "true";

    document.querySelectorAll(".router-box").forEach((otherBox) => {
      if (otherBox !== box) {
        otherBox.setAttribute("aria-expanded", "false");
        const otherPanel = document.getElementById(otherBox.getAttribute("data-panel"));
        if (otherPanel) otherPanel.hidden = true;
      }
    });

    box.setAttribute("aria-expanded", String(!isOpen));
    if (panel) panel.hidden = isOpen;
  });
});

// Ao clicar num link dentro do painel do Roteador, fecha a caixinha
// (ela já está indo embora pro card de destino, não precisa ficar aberta).
document.querySelectorAll(".router-panel .router-link").forEach((link) => {
  link.addEventListener("click", () => {
    const panel = link.closest(".router-panel");
    const box = panel && document.querySelector(`.router-box[data-panel="${panel.id}"]`);
    if (panel) panel.hidden = true;
    if (box) box.setAttribute("aria-expanded", "false");
  });
});

/* ============================================================
   CARROSSÉIS COM SETAS — DRT360™ e Contabilidade.
   Cada botão de seta rola o carrossel correspondente
   (data-carousel aponta pro id do .carousel--cards).
   ============================================================ */
document.querySelectorAll(".group__arrow").forEach((arrow) => {
  arrow.addEventListener("click", () => {
    const carousel = document.getElementById(arrow.getAttribute("data-carousel"));
    if (!carousel) return;
    const card = carousel.querySelector(".card-mini");
    const step = card ? card.getBoundingClientRect().width + 14 : 240;
    carousel.scrollBy({ left: Number(arrow.getAttribute("data-dir")) * step, behavior: "smooth" });
  });
});

/* ============================================================
   Animação de revelação ao rolar a página
   ============================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ============================================================
   Autoplay do vídeo do hero (retry em navegadores mais restritos)
   ============================================================ */
document.querySelectorAll(".hero__media").forEach((video) => {
  const tryPlay = () => video.play().catch(() => {});
  tryPlay();
  document.addEventListener("click", tryPlay, { once: true });
  document.addEventListener("touchstart", tryPlay, { once: true });
});
