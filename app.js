const DATA = window.IFM_ACTIVITY_CATALOG;

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

function esc(v = "") {
  return String(v)
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
  return id ? `https://www.youtube-nocookie.com/embed/${id}?rel=0&modestbranding=1&playsinline=1` : "";
}

function getThumbUrl(url = "") {
  const id = getVideoId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
}

function initCanvas() {
  const canvas = ELS.canvas;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width;
  let height;
  let particles;
  let trails;
  const green = "rgba(29,148,76,";
  const light = "rgba(115,183,108,";

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
  }

  class Trail {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * width;
      this.y = height * (0.2 + Math.random() * 0.6);
      this.vx = (Math.random() - 0.5) * 1.2;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.life = 0;
      this.maxLife = 180 + Math.random() * 240;
      this.radius = 1.2 + Math.random() * 2.4;
      this.bright = Math.random() > 0.7;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.vx += (Math.random() - 0.5) * 0.06;
      this.vy += (Math.random() - 0.5) * 0.04;
      this.vx *= 0.99;
      this.vy *= 0.99;
      this.life += 1;
      if (this.life > this.maxLife || this.x < -50 || this.x > width + 50) this.reset();
    }
    draw() {
      const t = this.life / this.maxLife;
      const a = t < 0.15 ? t / 0.15 : t > 0.75 ? (1 - t) / 0.25 : 1;
      const col = this.bright ? light : green;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = col + (a * (this.bright ? 0.9 : 0.55)) + ")";
      ctx.fill();
      if (this.bright) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius * 4, 0, Math.PI * 2);
        ctx.fillStyle = col + a * 0.08 + ")";
        ctx.fill();
      }
    }
  }

  class LightCurve {
    constructor() {
      this.reset();
    }
    reset() {
      this.progress = 0;
      this.speed = 0.002 + Math.random() * 0.003;
      const margin = 80;
      this.x0 = margin + Math.random() * (width * 0.3);
      this.y0 = height * (0.3 + Math.random() * 0.4);
      this.x1 = width * 0.3 + Math.random() * width * 0.4;
      this.y1 = height * (0.1 + Math.random() * 0.5);
      this.x2 = width - margin - Math.random() * (width * 0.3);
      this.y2 = height * (0.3 + Math.random() * 0.4);
      this.alpha = 0.1 + Math.random() * 0.25;
      this.stroke = 0.6 + Math.random() * 1.4;
      this.bright = Math.random() > 0.6;
    }
    update() {
      this.progress += this.speed;
      if (this.progress >= 1) this.reset();
    }
    draw() {
      const p = this.progress;
      const tail = 0.22;
      const t0 = Math.max(0, p - tail);
      ctx.beginPath();
      let first = true;
      for (let i = 0; i <= 40; i += 1) {
        const ti = t0 + (i / 40) * (p - t0);
        const px = (1 - ti) * (1 - ti) * this.x0 + 2 * (1 - ti) * ti * this.x1 + ti * ti * this.x2;
        const py = (1 - ti) * (1 - ti) * this.y0 + 2 * (1 - ti) * ti * this.y1 + ti * ti * this.y2;
        if (first) {
          ctx.moveTo(px, py);
          first = false;
        } else {
          ctx.lineTo(px, py);
        }
      }
      const col = this.bright ? light : green;
      const grad = ctx.createLinearGradient(this.x0, this.y0, this.x2, this.y2);
      grad.addColorStop(0, col + "0)");
      grad.addColorStop(1, col + this.alpha + ")");
      ctx.strokeStyle = grad;
      ctx.lineWidth = this.stroke;
      ctx.shadowColor = this.bright ? "rgba(115,183,108,0.6)" : "rgba(29,148,76,0.4)";
      ctx.shadowBlur = this.bright ? 12 : 6;
      ctx.stroke();
      ctx.shadowBlur = 0;
    }
  }

  function init() {
    resize();
    particles = Array.from({ length: 90 }, () => new Trail());
    trails = Array.from({ length: 10 }, () => new LightCurve());
    trails.forEach((item, index) => {
      item.progress = index / trails.length;
    });
  }

  let raf;
  function loop() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(5,8,10,0.18)";
    ctx.fillRect(0, 0, width, height);
    trails.forEach((item) => {
      item.update();
      item.draw();
    });
    particles.forEach((item) => {
      item.update();
      item.draw();
    });
    raf = requestAnimationFrame(loop);
  }

  init();
  loop();
  window.addEventListener("resize", () => {
    resize();
    init();
  }, { passive: true });

  const obs = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      if (!raf) loop();
    } else {
      cancelAnimationFrame(raf);
      raf = null;
    }
  });
  obs.observe($(".hero"));
}

function initHeader() {
  const onScroll = () => {
    ELS.header.classList.toggle("is-scrolled", window.scrollY > 10);
    const doc = document.documentElement;
    const pct = (doc.scrollTop / (doc.scrollHeight - doc.clientHeight)) * 100;
    ELS.progress.style.width = Math.min(100, pct) + "%";
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  ELS.burger.addEventListener("click", () => {
    const open = ELS.mobileMenu.classList.toggle("is-open");
    ELS.burger.classList.toggle("is-open", open);
    ELS.burger.setAttribute("aria-expanded", open);
  });
  ELS.mobileMenu.addEventListener("click", (event) => {
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
    <article class="activity-card" id="card-${esc(act.id)}" style="--card-img:url('${esc(act.image)}')" role="button" tabindex="0" data-scroll-to="detail-${esc(act.id)}" aria-label="${esc(act.title)} detayına git">
      <span class="card-badge">${esc(act.id)}</span>
      <div class="card-body">
        <h3 class="card-title">${esc(act.title)}</h3>
        <p class="card-short">${esc(act.short)}</p>
        <div class="card-footer">
          <span class="card-impact">${esc(act.impact)}</span>
          <a class="card-video-btn" href="${esc(act.video[1])}" tabindex="0" onclick="event.stopPropagation()">
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

function renderVideoPanel(act) {
  const embedUrl = getEmbedUrl(act.video[1]);
  const thumbUrl = getThumbUrl(act.video[1]);
  const openText = "YouTube'da aç";
  return `
    <section class="detail-video" data-video-root data-video-url="${esc(embedUrl)}" data-video-title="${esc(act.title)}">
      <div class="detail-video__poster" style="--video-thumb:url('${esc(thumbUrl)}')">
        <div class="detail-video__scrim"></div>
        <div class="detail-video__content">
          <p class="detail-video__eyebrow">Video Referansı</p>
          <h3 class="detail-video__title">${esc(act.title)}</h3>
          <p class="detail-video__note">Videoyu sayfa içinde açabilir, embed çalışmazsa aynı alandan doğrudan YouTube'a geçebilirsin.</p>
          <div class="detail-video__actions">
            <button class="card-video-btn detail-video__play" type="button" data-play-video="${esc(act.id)}">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              Sayfada oynat
            </button>
            <a class="detail-video__link" href="${esc(act.video[1])}">${openText}</a>
          </div>
        </div>
      </div>
      <div class="detail-video__fallback" hidden>
        <p>Bu referans video embed'e kapalı olabilir.</p>
        <a class="detail-video__link" href="${esc(act.video[1])}">${openText}</a>
      </div>
    </section>`;
}

function renderDetails() {
  ELS.detailBoard.innerHTML = DATA.activities.map((act) => `
    <article class="detail-card" id="detail-${esc(act.id)}" style="--detail-img:url('${esc(act.image)}')">
      <div class="detail-inner">
        <p class="detail-eyebrow">${esc(act.id)}<span class="sep">·</span>${esc(act.impact)} etki<span class="sep">·</span>${esc(act.difficulty)} operasyon</p>
        <div class="detail-hero">
          <div class="detail-copy">
            <h2 class="detail-title">${esc(act.title)}</h2>
            <p class="detail-summary">${esc(act.summary)}</p>
          </div>
          ${renderVideoPanel(act)}
        </div>
        <div class="detail-grid">
          <section class="detail-block">
            <h3>İFM İçin Kullanım Senaryosu</h3>
            <p>${esc(act.ifm)}</p>
          </section>
          <section class="detail-block">
            <h3>Ziyaretçi Deneyimi</h3>
            <p>${esc(act.visitor)}</p>
          </section>
          <section class="detail-block">
            <h3>Basın ve Sosyal Medya Değeri</h3>
            <p>${esc(act.media)}</p>
          </section>
          <section class="detail-block">
            <h3>Operasyon Notları</h3>
            <p>${esc(act.ops)}</p>
          </section>
        </div>
      </div>
    </article>`).join("");
}

function initVideoPanels() {
  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-play-video]");
    if (!button) return;
    const root = button.closest("[data-video-root]");
    if (!root) return;
    const embedUrl = root.dataset.videoUrl;
    if (!embedUrl) return;
    const poster = root.querySelector(".detail-video__poster");
    const fallback = root.querySelector(".detail-video__fallback");
    const iframe = document.createElement("iframe");
    iframe.className = "detail-video__frame";
    iframe.src = embedUrl;
    iframe.title = root.dataset.videoTitle || "Video referansı";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.loading = "lazy";
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    const timer = window.setTimeout(() => {
      if (!root.querySelector("iframe")) return;
      fallback.hidden = false;
    }, 3200);
    iframe.addEventListener("load", () => {
      window.clearTimeout(timer);
    });
    poster.replaceWith(iframe);
  });
}

function initReveal() {
  const targets = $$(".activity-card, .detail-card");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      obs.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -6% 0px", threshold: 0.04 });
  targets.forEach((target) => obs.observe(target));
}

function initScrollSpy() {
  const groups = $$(".cat-group");
  const navLinks = new Map($$("[data-group-link]").map((item) => [item.dataset.groupLink, item]));
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id.replace("group-", "");
      navLinks.forEach((item, key) => item.classList.toggle("is-active", key === id));
    });
  }, { rootMargin: "-38% 0px -55% 0px" });
  groups.forEach((group) => obs.observe(group));

  const headerLinks = $$("[data-nav] a");
  const secObs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      headerLinks.forEach((item) => item.classList.toggle("is-active", item.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("section[id]").forEach((section) => secObs.observe(section));
}

function initDetailHighlight() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("highlighted", entry.isIntersecting));
  }, { rootMargin: "-30% 0px -40% 0px" });
  $$(".detail-card").forEach((item) => obs.observe(item));
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
