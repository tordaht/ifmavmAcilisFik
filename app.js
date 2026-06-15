const DATA = window.IFM_ACTIVITY_CATALOG;
const RESEARCH = window.IFM_ACTIVITY_RESEARCH || {};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const ELS = {
  header: $('[data-header]'),
  burger: $('[data-burger]'),
  mobileMenu: $('[data-mobile-menu]'),
  canvas: $('[data-canvas]'),
  progress: $('[data-progress]'),
  catalogNav: $('[data-catalog-nav]'),
  catalog: $('[data-catalog]'),
  detailBoard: $('[data-detail-board]'),
  total: $('[data-stat-total]')
};

const VIDEO_EMBED_STATUS_KEY = "ifm-video-embed-status";
const videoEmbedStatus = new Map();

function esc(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getVideoId(url = "") {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) return parsed.pathname.slice(1);
    return parsed.searchParams.get("v") || "";
  } catch {
    return "";
  }
}

function getEmbedUrl(url = "") {
  const id = getVideoId(url);
  const origin = typeof window !== "undefined" ? encodeURIComponent(window.location.origin) : "";
  return id
    ? `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1&enablejsapi=1&origin=${origin}`
    : "";
}

function getThumbUrl(url = "") {
  const id = getVideoId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
}

function getResearch(act) {
  return RESEARCH[act.id] || {};
}

function loadVideoEmbedStatus() {
  try {
    const raw = window.localStorage.getItem(VIDEO_EMBED_STATUS_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw);
    Object.entries(parsed).forEach(([key, value]) => videoEmbedStatus.set(key, value));
  } catch {}
}

function persistVideoEmbedStatus() {
  try {
    window.localStorage.setItem(
      VIDEO_EMBED_STATUS_KEY,
      JSON.stringify(Object.fromEntries(videoEmbedStatus.entries()))
    );
  } catch {}
}

function setVideoStatus(videoId, status) {
  if (!videoId) return;
  videoEmbedStatus.set(videoId, status);
  persistVideoEmbedStatus();
}

function initCanvas() {
  const canvas = ELS.canvas;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let raf = null;
  let particles = [];
  let beams = [];

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.35;
      this.vy = (Math.random() - 0.5) * 0.25;
      this.r = 1 + Math.random() * 2.6;
      this.a = 0.12 + Math.random() * 0.5;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < -20 || this.x > width + 20 || this.y < -20 || this.y > height + 20) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(98, 233, 152, ${this.a})`;
      ctx.fill();
    }
  }

  class Beam {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = width * (0.55 + Math.random() * 0.4);
      this.w = 16 + Math.random() * 30;
      this.a = 0.06 + Math.random() * 0.08;
      this.speed = 0.1 + Math.random() * 0.2;
      this.phase = Math.random() * Math.PI * 2;
    }
    update() {
      this.phase += this.speed * 0.01;
    }
    draw() {
      const sway = Math.sin(this.phase) * 10;
      const grad = ctx.createLinearGradient(this.x, 0, this.x + sway, height);
      grad.addColorStop(0, `rgba(180, 240, 255, ${this.a * 0.9})`);
      grad.addColorStop(0.5, `rgba(145, 228, 255, ${this.a})`);
      grad.addColorStop(1, "rgba(145, 228, 255, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(this.x + sway, 0, this.w, height);
    }
  }

  function seed() {
    resize();
    particles = Array.from({ length: 64 }, () => new Particle());
    beams = Array.from({ length: 7 }, () => new Beam());
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(6, 12, 13, 0.18)";
    ctx.fillRect(0, 0, width, height);
    beams.forEach((beam) => {
      beam.update();
      beam.draw();
    });
    particles.forEach((particle) => {
      particle.update();
      particle.draw();
    });
    raf = requestAnimationFrame(draw);
  }

  seed();
  draw();
  window.addEventListener("resize", seed, { passive: true });

  const observer = new IntersectionObserver((entries) => {
    if (entries[0]?.isIntersecting) {
      if (!raf) draw();
    } else if (raf) {
      cancelAnimationFrame(raf);
      raf = null;
    }
  });
  observer.observe($(".hero"));
}

function initHeader() {
  const onScroll = () => {
    ELS.header.classList.toggle("is-scrolled", window.scrollY > 10);
    const doc = document.documentElement;
    const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
    ELS.progress.style.width = `${Math.min(100, pct)}%`;
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  ELS.burger?.addEventListener("click", () => {
    const open = ELS.mobileMenu.classList.toggle("is-open");
    ELS.burger.classList.toggle("is-open", open);
    ELS.burger.setAttribute("aria-expanded", String(open));
  });

  ELS.mobileMenu?.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    ELS.mobileMenu.classList.remove("is-open");
    ELS.burger.classList.remove("is-open");
    ELS.burger.setAttribute("aria-expanded", "false");
  });
}

function renderCatalogNav() {
  ELS.catalogNav.innerHTML = DATA.groups.map(([id, title]) => {
    const count = DATA.activities.filter((item) => item.group === id).length;
    return `<a href="#group-${esc(id)}" data-group-link="${esc(id)}">${esc(title)} <span class="cat-count">${count}</span></a>`;
  }).join("");
}

function renderCard(act) {
  return `
    <article class="activity-card" id="card-${esc(act.id)}" style="--card-img:url('${esc(act.image)}')" role="button" tabindex="0" data-scroll-to="detail-${esc(act.id)}" aria-label="${esc(act.title)} detayina git">
      <span class="card-badge">${esc(act.id)}</span>
      <div class="card-body">
        <h3 class="card-title">${esc(act.title)}</h3>
        <p class="card-short">${esc(act.short)}</p>
        <div class="card-footer">
          <span class="card-impact">${esc(act.impact)}</span>
          <a class="card-video-btn" href="${esc(act.video[1])}" onclick="event.stopPropagation()">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            Referans
          </a>
        </div>
      </div>
    </article>`;
}

function renderCatalog() {
  ELS.catalog.innerHTML = DATA.groups.map(([id, title]) => {
    const cards = DATA.activities.filter((item) => item.group === id);
    return `
      <section class="cat-group" id="group-${esc(id)}" aria-label="${esc(title)}">
        <div class="cat-group__head">
          <h2 class="cat-group__title">${esc(title)}</h2>
          <div class="cat-group__line"></div>
          <span class="cat-group__num">${cards.length} aktivite</span>
        </div>
        <div class="card-grid">${cards.map(renderCard).join("")}</div>
      </section>`;
  }).join("");
}

function renderConceptPanel(act, research) {
  return `
    <section class="detail-concept">
      <div class="detail-concept__media">
        <img src="${esc(act.image)}" alt="${esc(act.title)} IFM konsept gorseli" loading="lazy">
      </div>
      <div class="detail-concept__meta">
        <p class="detail-concept__eyebrow">IFM icin mekan yerlesimi</p>
        <p class="detail-concept__text">${esc(research.visualNote || "Bu gorsel, aktivitenin IFM mimarisi icinde hangi olcekte ve hangi okuma ile gorunecegini anlatir.")}</p>
      </div>
    </section>`;
}

function renderVideoPanel(act, research) {
  const videoId = getVideoId(act.video[1]);
  const embedUrl = getEmbedUrl(act.video[1]);
  const thumbUrl = getThumbUrl(act.video[1]);
  return `
    <section class="detail-video" data-video-root data-video-id="${esc(videoId)}" data-video-url="${esc(embedUrl)}" data-video-title="${esc(act.title)}">
      <div class="detail-video__poster" style="--video-thumb:url('${esc(thumbUrl)}')">
        <div class="detail-video__scrim"></div>
        <div class="detail-video__content">
          <p class="detail-video__eyebrow">Gercek referans videosu</p>
          <h3 class="detail-video__title">${esc(research.referenceName || act.title)}</h3>
          <p class="detail-video__note">${esc(research.referenceNote || "Bu video, aktivitenin sahadaki fiziksel etkisini ve izleyiciye nasil gosterildigini okumak icin secildi.")}</p>
          <div class="detail-video__actions">
            <button class="card-video-btn detail-video__play" type="button" data-play-video="${esc(act.id)}">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              Sayfada oynat
            </button>
            <a class="detail-video__link" href="${esc(act.video[1])}">YouTube'da ac</a>
          </div>
        </div>
      </div>
      <div class="detail-video__fallback" hidden>
        <p>Bu referans video embed'e kapali. Ayni sayfada hata gostermek yerine dogrudan YouTube'a gecis acilir.</p>
        <a class="detail-video__link" href="${esc(act.video[1])}">YouTube'da ac</a>
      </div>
      ${research.sourceUrl ? `<a class="detail-source-link" href="${esc(research.sourceUrl)}">${esc(research.sourceName || "Resmi teknik referans")}</a>` : ""}
    </section>`;
}

function renderDetails() {
  ELS.detailBoard.innerHTML = DATA.activities.map((act) => {
    const research = getResearch(act);
    return `
      <article class="detail-card" id="detail-${esc(act.id)}" style="--detail-img:url('${esc(act.image)}')">
        <div class="detail-inner">
          <p class="detail-eyebrow">${esc(act.id)}<span class="sep">·</span>${esc(act.impact)} etki<span class="sep">·</span>${esc(act.difficulty)} operasyon</p>
          <div class="detail-copy">
            <h2 class="detail-title">${esc(act.title)}</h2>
            <p class="detail-summary">${esc(research.intro || act.summary)}</p>
          </div>
          <div class="detail-hero">
            ${renderConceptPanel(act, research)}
            ${renderVideoPanel(act, research)}
          </div>
          <div class="detail-grid">
            <section class="detail-block">
              <h3>Acilistaki rolu</h3>
              <p>${esc(research.role || act.ifm)}</p>
            </section>
            <section class="detail-block">
              <h3>Kreatif karar</h3>
              <p>${esc(research.creative || act.visitor)}</p>
            </section>
            <section class="detail-block">
              <h3>Teknik kurgu</h3>
              <p>${esc(research.technical || act.media)}</p>
            </section>
            <section class="detail-block">
              <h3>Saha gereksinimi</h3>
              <p>${esc(research.site || act.ops)}</p>
            </section>
            <section class="detail-block">
              <h3>Operasyon ve planlama</h3>
              <p>${esc(research.delivery || act.ops)}</p>
            </section>
            <section class="detail-block">
              <h3>Benchmark ve kaynak</h3>
              <p>${esc(research.benchmark || "Referans video ve sistem ornegi, aktivitenin IFM olceginde nasil konumlanacagini okumak icin kullanilir.")}</p>
            </section>
          </div>
        </div>
      </article>`;
  }).join("");
}

function showFallback(root) {
  root.dataset.embedState = "blocked";
  const iframe = $("iframe", root);
  if (iframe) iframe.remove();
  const fallback = $(".detail-video__fallback", root);
  if (fallback) fallback.hidden = false;
}

function activateVideo(root) {
  const videoId = root.dataset.videoId || "";
  const embedUrl = root.dataset.videoUrl || "";
  if (!embedUrl) return;

  if (videoEmbedStatus.get(videoId) === "blocked") {
    showFallback(root);
    return;
  }

  const poster = $(".detail-video__poster", root);
  const fallback = $(".detail-video__fallback", root);
  if (fallback) fallback.hidden = true;

  const iframe = document.createElement("iframe");
  iframe.className = "detail-video__frame";
  iframe.src = embedUrl;
  iframe.title = root.dataset.videoTitle || "Video referansi";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  iframe.loading = "lazy";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  root.dataset.embedState = "pending";

  const timeoutId = window.setTimeout(() => {
    if (root.dataset.embedState === "ready") return;
    setVideoStatus(videoId, "blocked");
    showFallback(root);
  }, 2600);

  iframe.dataset.timeoutId = String(timeoutId);
  if (poster) poster.replaceWith(iframe);
}

function initVideoPanels() {
  loadVideoEmbedStatus();

  window.addEventListener("message", (event) => {
    if (!String(event.origin || "").includes("youtube")) return;
    const frames = $$("[data-video-root] iframe");
    const match = frames.find((frame) => frame.contentWindow === event.source);
    if (!match) return;

    let payload = event.data;
    if (typeof payload === "string") {
      try {
        payload = JSON.parse(payload);
      } catch {
        return;
      }
    }
    if (!payload || typeof payload !== "object") return;

    if (payload.event === "onReady" || payload.event === "initialDelivery" || payload.event === "infoDelivery") {
      const root = match.closest("[data-video-root]");
      if (!root) return;
      root.dataset.embedState = "ready";
      setVideoStatus(root.dataset.videoId || "", "ready");
      const timeoutId = Number(match.dataset.timeoutId || 0);
      if (timeoutId) window.clearTimeout(timeoutId);
    }
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-play-video]");
    if (!button) return;
    const root = button.closest("[data-video-root]");
    if (!root) return;
    activateVideo(root);
  });
}

function initReveal() {
  const targets = $$(".activity-card, .detail-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -6% 0px", threshold: 0.04 });
  targets.forEach((target) => observer.observe(target));
}

function initScrollSpy() {
  const groups = $$(".cat-group");
  const navLinks = new Map($$("[data-group-link]").map((item) => [item.dataset.groupLink, item]));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id.replace("group-", "");
      navLinks.forEach((item, key) => item.classList.toggle("is-active", key === id));
    });
  }, { rootMargin: "-38% 0px -55% 0px" });
  groups.forEach((group) => observer.observe(group));

  const headerLinks = $$("[data-nav] a");
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      headerLinks.forEach((item) => item.classList.toggle("is-active", item.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("section[id]").forEach((section) => sectionObserver.observe(section));
}

function initDetailHighlight() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("highlighted", entry.isIntersecting));
  }, { rootMargin: "-30% 0px -40% 0px" });
  $$(".detail-card").forEach((item) => observer.observe(item));
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-scroll-to]");
  if (!trigger || event.target.closest("a, button")) return;
  const target = document.getElementById(trigger.dataset.scrollTo);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;
  const trigger = event.target.closest("[data-scroll-to]");
  if (!trigger) return;
  const target = document.getElementById(trigger.dataset.scrollTo);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderCatalogNav();
renderCatalog();
renderDetails();
if (ELS.total) ELS.total.textContent = String(DATA.activities.length);

requestAnimationFrame(() => {
  initReveal();
  initScrollSpy();
  initDetailHighlight();
});

initHeader();
initCanvas();
initVideoPanels();
