const DATA = window.IFM_ACTIVITY_CATALOG;
const RESEARCH = window.IFM_ACTIVITY_RESEARCH || {};

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const ELS = {
  header:      $('[data-header]'),
  burger:      $('[data-burger]'),
  mobileMenu:  $('[data-mobile-menu]'),
  canvas:      $('[data-canvas]'),
  progress:    $('[data-progress]'),
  pageNavigator: $('[data-page-navigator]'),
  catalogNav:  $('[data-catalog-nav]'),
  catalog:     $('[data-catalog]'),
  detailBoard: $('[data-detail-board]'),
  total:       $('[data-stat-total]')
};


// ── Senaryo tanımları ─────────────────────────────────────────────────────────
const SCENARIOS = {
  all:     { label: "Tümünü Gör",       ids: null },
  tech:    { label: "Teknoloji Odaklı", ids: ["A01","A03","A05","A08","A18"] },
  arrival: { label: "Lüks Karşılama",   ids: ["A06","A07","A12","A15","A20"] },
  finale:  { label: "WOW Finale",        ids: ["A02","A04","A21","A23"] }
};

// Tier görünüm etiketleri
const TIER_LABEL = {
  Signature: { label: "Signature", cls: "tier--signature" },
  Premium:   { label: "Premium",   cls: "tier--premium" },
  Deneyim:   { label: "Deneyim",   cls: "tier--deneyim" }
};

// ── Util ─────────────────────────────────────────────────────────────────────
function esc(value = "") {
  return String(value)
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
function getVideoId(url = "") {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) return parsed.pathname.slice(1);
    return parsed.searchParams.get("v") || "";
  } catch { return ""; }
}
function getThumbUrl(url = "") {
  const id = getVideoId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
}
function getResearch(act) { return RESEARCH[act.id] || {}; }
function getPressValue(act, research) {
  if (research.press) return research.press;
  const PRESS = {
    A01: "Basın için en güçlü final karesi: IFM logosu, İstanbul silueti ve kalabalık aynı anlatıda buluşur. Sosyal medyada tek bakışta anlaşılan, yüksek etkili kapanış videosu üretir.",
    A02: "Protokol fotoğrafını standart kurdele karesinden çıkarıp haber görseline dönüştürür. Basın açılış anını bina ile birlikte verir; sosyal medya aynı saniyeyi kısa video olarak taşır.",
    A03: "Mekanın ölçeğini tek karede gösterdiği için mimari ve yaşam basınına güçlü görsel verir. Yukarı bakan videolar, klasik sahne çekimlerinden hemen ayrışır.",
    A04: "Uluslararası ekip bilgisi, açılıştan önce bile haber değeri yaratır. Gece sonrası basında 'kim sahne aldı' başlığına, sosyal medyada ise imza performans anına dönüşür.",
    A05: "Açılışa teknoloji vitrini kazandırır ve iş/teknoloji basınına net bir konu verir. Kısa formatı sayesinde sahne akışını bozmadan paylaşılabilir bir an üretir.",
    A06: "Gece çekimlerinde binayı bir haber görseli haline getirir. Ekonomi, gayrimenkul ve şehir yaşamı basını için IFM'nin mimari kimliğini güçlü gösterir.",
    A07: "Arrival fotoğraflarını kontrol altına alır; cemiyet ve moda/lifestyle basınına temiz arka plan verir. Her konuk için paylaşılabilir, premium bir giriş karesi üretir.",
    A08: "Davetlinin hareketiyle çalışan sistem, basın için kolay anlatılır bir teknoloji konusu yaratır. Sosyal medyada 'ben deneyimledim' içeriğini tetikler.",
    A09: "Yakın çekimde güçlü çalıştığı için teknoloji ve etkinlik basınına net demo görüntüsü verir. Holografik etki, kısa videoda açıklama istemeden anlaşılır.",
    A10: "VIP geçişini haber değeri taşıyan bir karşılama fotoğrafına dönüştürür. Basın için giriş anı, sosyal medya için kişisel arrival videosu üretir.",
    A11: "Statik tabela yerine hareketli karşılama objesi sunduğu için kurumsal iletişim ve teknoloji basınında kullanılabilir bir detay yaratır. Logo ve mesaj görünürlüğü kontrollüdür.",
    A12: "Portre ve yürüyüş çekimlerini premiumlaştırır; cemiyet basını için temiz, tekrar kullanılabilir arka plan sağlar. Sosyal medyada sakin ama şık bir giriş ritmi üretir.",
    A13: "Mekan içinde akan görsel rota, basına 'alışveriş merkezinde deneyim tasarımı' başlığı verir. Ziyaretçi videolarında IFM'nin iç hareketini görünür kılar.",
    A14: "Gün boyu çalışan enstalasyon, basın turu ve influencer içerikleri için sürekli görsel kaynak oluşturur. Her saat farklı ışık ve kalabalıkla yeni kare üretir.",
    A15: "Sanat objesi niteliği sayesinde kültür-sanat ve mimari basına da açılır. Sosyal medyada sadece efekt değil, izlenebilir ve hatırlanabilir bir mekan imzası verir.",
    A16: "Su veya sis perdesi basın fotoğrafında alışılmış LED görüntüsünden ayrışır. Final veya bölüm geçişi için sinematik ve yüksek haber değeri taşıyan video üretir.",
    A17: "Tavan objesi, mekan fotoğraflarına güçlü bir atmosfer katmanı ekler. Basın için mimari ölçeği, sosyal medya için yukarı bakan etkileyici videoyu besler.",
    A18: "Medya sanat dili, açılışı reklamdan çok kültürel bir deneyim olarak konumlar. Basın için sanat-teknoloji kesişimi, sosyal medya için rafine bir görsel yüzey sunar.",
    A19: "Gezici ekip, basına programın AVM geneline yayıldığını gösterir. Tek bir sahneye bağlı kalmadan farklı noktalardan çok sayıda haber ve sosyal medya karesi üretir.",
    A20: "Kısa ve enerjik format, basın ve TV/dijital haber montajlarında kolay kullanılır. Sosyal medyada hızlı tüketilen, anlaşılır sahne anı üretir.",
    A21: "Canlı müzik ve aerial sahneleme birleştiğinde kültür-sanat ve cemiyet basını için güçlü bir gece anı oluşur. Yukarı bakan çekimler sosyal medyada belirgin ayrışır.",
    A22: "Ritim, kalabalığı hareketlendirirken basın kameraları için canlı atmosfer görüntüsü sağlar. Sosyal medyada sesli izlenen, enerjisi yüksek içerikler üretir.",
    A23: "Kalabalığın aynı anda ışığa dahil olması, basın için ölçek ve katılım fotoğrafı üretir. Sosyal medyada en çok etiketlenebilecek kolektif final anıdır.",
    A24: "Müzik ve teknoloji aynı anda göründüğü için teknoloji, kültür-sanat ve etkinlik basınına güçlü bir sahne detayı verir. Kısa videoda etkisi hemen anlaşılır."
  };
  return PRESS[act.id] || "Foto\u011fraf ve k\u0131sa video \u00fcretimine uygun, a\u00e7\u0131l\u0131\u015ftan sonra payla\u015f\u0131labilir net bir referans an\u0131 \u00fcretir.";
}

// ── Canvas — hero animasyonu + shooting stars ────────────────────────────────
function initCanvas() {
  const canvas = ELS.canvas;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width = 0, height = 0, raf = null;
  let particles = [], beams = [], shootingStars = [], twinklers = [];

  function resize() { width = canvas.width = canvas.offsetWidth; height = canvas.height = canvas.offsetHeight; }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * width; this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.3; this.vy = (Math.random() - 0.5) * 0.2;
      this.r = 0.8 + Math.random() * 1.8;
      this.a = 0.1 + Math.random() * 0.4;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < -20 || this.x > width + 20 || this.y < -20 || this.y > height + 20) this.reset();
    }
    draw() {
      ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(98, 233, 152, ${this.a})`; ctx.fill();
    }
  }

  class Twinkler {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * width; this.y = Math.random() * height;
      this.r = 0.5 + Math.random() * 1.2;
      this.maxA = 0.3 + Math.random() * 0.6;
      this.a = 0; this.phase = Math.random() * Math.PI * 2;
      this.speed = 0.008 + Math.random() * 0.018;
    }
    update() { this.phase += this.speed; this.a = ((Math.sin(this.phase) + 1) / 2) * this.maxA; }
    draw() {
      ctx.beginPath(); ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(220, 235, 255, ${this.a})`; ctx.fill();
    }
  }

  class Beam {
    constructor() { this.reset(); }
    reset() {
      this.x = width * (0.55 + Math.random() * 0.4);
      this.w = 14 + Math.random() * 26;
      this.a = 0.05 + Math.random() * 0.07;
      this.speed = 0.1 + Math.random() * 0.18;
      this.phase = Math.random() * Math.PI * 2;
    }
    update() { this.phase += this.speed * 0.01; }
    draw() {
      const sway = Math.sin(this.phase) * 10;
      const grad = ctx.createLinearGradient(this.x, 0, this.x + sway, height);
      grad.addColorStop(0, `rgba(180, 240, 255, ${this.a * 0.8})`);
      grad.addColorStop(0.5, `rgba(145, 228, 255, ${this.a})`);
      grad.addColorStop(1, "rgba(145, 228, 255, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(this.x + sway, 0, this.w, height);
    }
  }

  class ShootingStar {
    constructor() { this.reset(true); }
    reset(cold = false) {
      this.x = Math.random() * width * 1.3 - width * 0.15;
      this.y = cold ? Math.random() * height * 0.6 : -10 - Math.random() * 80;
      this.len = 50 + Math.random() * 130;
      this.speed = 2.4 + Math.random() * 2.6;
      this.angle = 0.85 + (Math.random() - 0.5) * 0.35; // ~49°
      this.a = 0.55 + Math.random() * 0.45;
      this.life = cold ? Math.random() * 60 : 0;
      this.maxLife = this.len / this.speed * 1.4;
      this.dead = false;
    }
    update() {
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
      this.life++;
      if (this.life > this.maxLife || this.y > height + 30 || this.x > width + 80) this.dead = true;
    }
    draw() {
      const fade = Math.min(1, (this.maxLife - this.life) / 12) * this.a;
      if (fade <= 0) return;
      const tailX = this.x - Math.cos(this.angle) * this.len;
      const tailY = this.y - Math.sin(this.angle) * this.len;
      const grad = ctx.createLinearGradient(tailX, tailY, this.x, this.y);
      grad.addColorStop(0, "rgba(255,255,255,0)");
      grad.addColorStop(0.65, `rgba(200,235,255,${fade * 0.4})`);
      grad.addColorStop(1, `rgba(255,255,255,${fade})`);
      ctx.beginPath(); ctx.strokeStyle = grad;
      ctx.lineWidth = 1.2;
      ctx.moveTo(tailX, tailY); ctx.lineTo(this.x, this.y); ctx.stroke();
      // head glow
      const hg = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, 3);
      hg.addColorStop(0, `rgba(255,255,255,${fade})`);
      hg.addColorStop(1, "rgba(255,255,255,0)");
      ctx.beginPath(); ctx.fillStyle = hg; ctx.arc(this.x, this.y, 3, 0, Math.PI * 2); ctx.fill();
    }
  }

  function seed() {
    resize();
    particles     = Array.from({ length: 50 }, () => new Particle());
    twinklers     = Array.from({ length: 80 }, () => new Twinkler());
    beams         = Array.from({ length: 6  }, () => new Beam());
    shootingStars = Array.from({ length: 6  }, () => new ShootingStar());
  }

  let shootingStarTimer = 0;
  function draw() {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "rgba(6, 12, 13, 0.15)";
    ctx.fillRect(0, 0, width, height);
    beams.forEach(b => { b.update(); b.draw(); });
    twinklers.forEach(t => { t.update(); t.draw(); });
    particles.forEach(p => { p.update(); p.draw(); });
    // shooting stars
    shootingStarTimer++;
    if (shootingStarTimer > 55) {
      shootingStarTimer = 0;
      shootingStars.push(new ShootingStar());
    }
    shootingStars = shootingStars.filter(s => {
      s.update(); if (!s.dead) s.draw(); return !s.dead;
    });
    raf = requestAnimationFrame(draw);
  }

  seed(); draw();
  window.addEventListener("resize", seed, { passive: true });

  const observer = new IntersectionObserver((entries) => {
    if (entries[0]?.isIntersecting) { if (!raf) draw(); }
    else if (raf) { cancelAnimationFrame(raf); raf = null; }
  });
  observer.observe($(".hero"));
}

// ── Header ────────────────────────────────────────────────────────────────────
function initHeader() {
  const onScroll = () => {
    ELS.header.classList.toggle("is-scrolled", window.scrollY > 10);
    ELS.pageNavigator?.classList.toggle("is-visible", window.scrollY > 220);
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
  ELS.mobileMenu?.addEventListener("click", (e) => {
    if (!e.target.closest("a")) return;
    ELS.mobileMenu.classList.remove("is-open");
    ELS.burger.classList.remove("is-open");
    ELS.burger.setAttribute("aria-expanded", "false");
  });
}

function initPageNavigator() {
  if (!ELS.pageNavigator) return;
  const links = $$("[data-page-nav]", ELS.pageNavigator);
  const navTargets = links.map(link => {
    const hrefId = link.getAttribute("href")?.replace("#", "");
    const observeId = link.dataset.pageNav === "top" ? "hero" : hrefId;
    const target = document.getElementById(hrefId);
    const observed = document.getElementById(observeId);
    return { id: link.dataset.pageNav, link, target, observed };
  }).filter(item => item.target && item.observed);

  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const target = document.getElementById(link.getAttribute("href").replace("#", ""));
      if (!target) return;
      e.preventDefault();
      setActive(link.dataset.pageNav);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const setActive = (id) => {
    links.forEach(link => {
      const active = link.dataset.pageNav === id;
      link.classList.toggle("is-active", active);
      link.querySelector(".page-navigator__dot")?.classList.toggle("is-active", active);
    });
  };

  let ticking = false;
  const updateActive = () => {
    ticking = false;
    ELS.pageNavigator?.classList.toggle("is-visible", window.scrollY > 220);
    const marker = window.scrollY + window.innerHeight * 0.42;
    const ordered = navTargets
      .slice()
      .sort((a, b) => a.observed.offsetTop - b.observed.offsetTop);
    const current = ordered.reduce((active, item) => {
      return item.observed.offsetTop <= marker ? item : active;
    }, ordered[0]);
    if (current?.id) setActive(current.id);
  };
  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateActive);
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate, { passive: true });
  window.addEventListener("hashchange", requestUpdate, { passive: true });
  requestUpdate();
  window.setTimeout(requestUpdate, 120);
  window.setTimeout(requestUpdate, 520);

  const initialHash = window.location.hash?.replace("#", "");
  const initialTarget = navTargets.find(item => item.target.id === initialHash || item.id === initialHash);
  if (initialTarget) {
    window.setTimeout(() => {
      initialTarget.target.scrollIntoView({ behavior: "auto", block: "start" });
      ELS.pageNavigator?.classList.toggle("is-visible", window.scrollY > 220);
      setActive(initialTarget.id);
      requestUpdate();
    }, 180);
  }
}

// ── Catalog nav + senaryo tabs ────────────────────────────────────────────────
function renderCatalogNav() {
  const groupLinks = DATA.groups.map(([id, title]) => {
    const count = DATA.activities.filter(a => a.group === id).length;
    return `<a href="#group-${esc(id)}" data-group-link="${esc(id)}">${esc(title)} <span class="cat-count">${count}</span></a>`;
  }).join("");

  const scenarioTabs = Object.entries(SCENARIOS).map(([key, s]) =>
    `<button class="scenario-tab${key === 'all' ? ' is-active' : ''}" data-scenario="${key}" type="button">${esc(s.label)}</button>`
  ).join("");

  ELS.catalogNav.innerHTML = `
    <div class="catalog-nav__groups">${groupLinks}</div>
    <div class="scenario-tabs" role="group" aria-label="Program Senaryosu">${scenarioTabs}</div>`;
}

// ── Kart render ───────────────────────────────────────────────────────────────
function renderCard(act) {
  const hasImage = act.image && act.image.trim();
  const videoUrl = act.video?.[1] || "";
  const tier = TIER_LABEL[act.tier] || {};
  return `
    <article class="activity-card${hasImage ? '' : ' no-image'}" id="card-${esc(act.id)}" ${hasImage ? `style="--card-img:url('${esc(act.image)}')"` : ''} role="button" tabindex="0" data-scroll-to="detail-${esc(act.id)}" data-scenario-ids="${esc((act.scenario||[]).join(','))}" aria-label="${esc(act.title)} detayına git">
      ${videoUrl ? `<a class="card-media-link" href="${esc(videoUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(act.title)} YouTube'da izle"></a>` : ''}
      <div class="card-badges">
        <span class="card-id-badge">${esc(act.id)}</span>
        ${tier.label ? `<span class="card-tier-badge ${tier.cls}">${esc(tier.label)}</span>` : ''}
      </div>
      <div class="card-body">
        <h3 class="card-title">${esc(act.title)}</h3>
        <p class="card-short">${esc(act.short)}</p>
        <div class="card-footer">
          <span class="card-cta">Keşfet →</span>
        </div>
      </div>
    </article>`;
}

function renderCatalog() {
  ELS.catalog.innerHTML = DATA.groups.map(([id, title]) => {
    const cards = DATA.activities.filter(a => a.group === id);
    return `
      <section class="cat-group" id="group-${esc(id)}" aria-label="${esc(title)}" data-group-id="${esc(id)}">
        <div class="cat-group__head">
          <h2 class="cat-group__title">${esc(title)}</h2>
          <div class="cat-group__line"></div>
          <span class="cat-group__num">${cards.length} aktivite</span>
        </div>
        <div class="card-grid">${cards.map(renderCard).join("")}</div>
      </section>`;
  }).join("");
}

// ── Detail panel render ───────────────────────────────────────────────────────
function renderVideoPanel(act, research) {
  const videoUrl = act.video[1] || "";
  // Aktivitenin kendi üretilmiş görseli varsa onu kullan; yoksa YouTube thumbu
  const hasActImg = act.image && act.image.trim();
  const posterImg = hasActImg ? act.image : getThumbUrl(videoUrl);
  const posterStyle = posterImg ? `style="--video-thumb:url('${esc(posterImg)}')"` : "";
  return `
    <a class="detail-video" href="${esc(videoUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(act.title)} — YouTube'da izle">
      <div class="detail-video__poster" ${posterStyle}>
        <div class="detail-video__scrim"></div>
        <div class="detail-video__content">
          <h3 class="detail-video__title">${esc(research.referenceName || act.title)}</h3>
          <p class="detail-video__note">${esc(research.referenceNote || "Sahne etkisini görmek için referans video.")}</p>
          <div class="detail-video__actions">
            <span class="card-video-btn">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
              YouTube'da izle
            </span>
          </div>
        </div>
      </div>
      ${research.sourceUrl ? `<span class="detail-source-link">${esc(research.sourceName || "Referans")}</span>` : ""}
    </a>`;
}

function renderDetails() {
  ELS.detailBoard.innerHTML = DATA.activities.map((act) => {
    const research = getResearch(act);
    const hasImage = act.image && act.image.trim();
    const tier = TIER_LABEL[act.tier] || {};
    return `
      <article class="detail-card" id="detail-${esc(act.id)}">
        <div class="detail-inner">
          <div class="detail-meta-row">
            <span class="detail-id">${esc(act.id)}</span>
            ${tier.label ? `<span class="detail-tier-badge ${tier.cls}">${esc(tier.label)}</span>` : ''}
          </div>
          <div class="detail-copy">
            <h2 class="detail-title">${esc(act.title)}</h2>
            <p class="detail-summary">${esc(research.intro || act.summary)}</p>
          </div>
          <div class="detail-video-wrap">
            ${renderVideoPanel(act, research)}
          </div>
          <div class="detail-grid">
            <section class="detail-block">
              <h3>Açılıştaki Yeri</h3>
              <p>${esc(research.role || act.ifm)}</p>
            </section>
            <section class="detail-block">
              <h3>IFM için Neden?</h3>
              <p>${esc(research.creative || act.visitor)}</p>
            </section>
            <section class="detail-block">
              <h3>Dünyadan Örnek</h3>
              <p>${esc(research.benchmark || "Bu kategoride uluslararası sahneden referans işler mevcuttur.")}</p>
            </section>
            <section class="detail-block detail-block--client">
              <h3>Bas\u0131n ve Sosyal Medya De\u011feri</h3>
              <p>${esc(getPressValue(act, research))}</p>
            </section>
            <section class="detail-block detail-block--client">
              <h3>Ziyaret\u00e7i Deneyimi</h3>
              <p>${esc(act.visitor || research.creative || "Davetlinin kolay anlayaca\u011f\u0131, foto\u011fraf ve video ile aktarabilece\u011fi net bir deneyim \u00fcretir.")}</p>
            </section>
            <section class="detail-block detail-block--client">
              <h3>Operasyonel Notlar</h3>
              <p>${esc(act.ops || research.site || "Yerle\u015fim, g\u00fcvenlik, enerji, prova ve kalabal\u0131k ak\u0131\u015f\u0131 uygulama \u00f6ncesinde teknik ekiplerle netle\u015ftirilmelidir.")}</p>
            </section>
          </div>
        </div>
      </article>`;
  }).join("");
}

// ── Video panels — embed yok, direkt YouTube linki ───────────────────────────
function initVideoPanels() {
  // .detail-video artık <a> elementi — tıklama tarayıcı tarafından handle ediliyor.
}

// ── Senaryo filtre ────────────────────────────────────────────────────────────
function initScenarioFilter() {
  document.addEventListener("click", (e) => {
    const tab = e.target.closest("[data-scenario]");
    if (!tab || !tab.classList.contains("scenario-tab")) return;

    const key = tab.dataset.scenario;
    const scenario = SCENARIOS[key];
    if (!scenario) return;

    // active tab
    $$(".scenario-tab").forEach(t => t.classList.toggle("is-active", t === tab));

    const allCards = $$(".activity-card");
    if (!scenario.ids) {
      // tümü
      allCards.forEach(c => { c.style.display = ""; c.classList.remove("scenario-hidden"); });
      $$(".cat-group").forEach(g => { g.style.display = ""; });
    } else {
      allCards.forEach(c => {
        const cardId = c.id.replace("card-", "");
        const visible = scenario.ids.includes(cardId);
        c.style.display = visible ? "" : "none";
        c.classList.toggle("scenario-hidden", !visible);
      });
      $$(".cat-group").forEach(g => {
        const anyVisible = [...g.querySelectorAll(".activity-card")].some(c => c.style.display !== "none");
        g.style.display = anyVisible ? "" : "none";
      });
    }
  });
}

// ── Scroll reveal ─────────────────────────────────────────────────────────────
function initReveal() {
  const CARD_TARGETS    = ".activity-card, .detail-card";
  const SECTION_TARGETS = ".section-head, .cat-group__head, .detail-block, .stats-bar__item, .catalog-nav";

  const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      cardObserver.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -6% 0px", threshold: 0.04 });
  $$(CARD_TARGETS).forEach(t => cardObserver.observe(t));

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      const delay = (i % 6) * 80;
      window.setTimeout(() => { entry.target.classList.add("visible"); }, delay);
      sectionObserver.unobserve(entry.target);
    });
  }, { rootMargin: "0px 0px -4% 0px", threshold: 0.06 });
  $$(SECTION_TARGETS).forEach(t => sectionObserver.observe(t));
}

// ── Scroll spy ────────────────────────────────────────────────────────────────
function initScrollSpy() {
  const groups   = $$(".cat-group");
  const navLinks = new Map($$("[data-group-link]").map(a => [a.dataset.groupLink, a]));
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id.replace("group-", "");
      navLinks.forEach((link, key) => link.classList.toggle("is-active", key === id));
    });
  }, { rootMargin: "-38% 0px -55% 0px" });
  groups.forEach(g => observer.observe(g));

  const headerLinks = $$("[data-nav] a");
  const secObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      headerLinks.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === `#${entry.target.id}`));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  $$("section[id]").forEach(s => secObserver.observe(s));
}

// ── Detail highlight ──────────────────────────────────────────────────────────
function initDetailHighlight() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => e.target.classList.toggle("highlighted", e.isIntersecting));
  }, { rootMargin: "-30% 0px -40% 0px" });
  $$(".detail-card").forEach(c => observer.observe(c));
}

// ── Global click delegation ───────────────────────────────────────────────────
document.addEventListener("click", (e) => {
  const trigger = e.target.closest("[data-scroll-to]");
  if (!trigger || e.target.closest("a, button")) return;
  const target = document.getElementById(trigger.dataset.scrollTo);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
});
document.addEventListener("keydown", (e) => {
  if (e.key !== "Enter") return;
  const trigger = e.target.closest("[data-scroll-to]");
  if (!trigger) return;
  const target = document.getElementById(trigger.dataset.scrollTo);
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
});

// ── Boot ──────────────────────────────────────────────────────────────────────
renderCatalogNav();
renderCatalog();
renderDetails();
if (ELS.total) ELS.total.textContent = String(DATA.activities.length);

requestAnimationFrame(() => {
  initReveal();
  initScrollSpy();
  initDetailHighlight();
  initScenarioFilter();
});

initHeader();
initPageNavigator();
initCanvas();
initVideoPanels();
