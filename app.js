const data = window.IFM_ACTIVITY_CATALOG;

const els = {
  header: document.querySelector("[data-header]"),
  groupNav: document.querySelector("[data-group-nav]"),
  menuToggle: document.querySelector("[data-menu-toggle]"),
  catalog: document.querySelector("[data-catalog]"),
  detailBoard: document.querySelector("[data-detail-board]"),
  progress: document.querySelector("[data-progress]"),
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderGroupNav() {
  els.groupNav.innerHTML = data.groups
    .map(([groupId, groupTitle]) => {
      const count = data.activities.filter((activity) => activity.group === groupId).length;
      return `
        <a href="#group-${escapeHtml(groupId)}" data-group-link="${escapeHtml(groupId)}">
          ${escapeHtml(groupTitle)}
          <span class="count">${count}</span>
        </a>
      `;
    })
    .join("");
}

function renderCatalog() {
  els.catalog.innerHTML = data.groups
    .map(([groupId, groupTitle]) => {
      const cards = data.activities.filter((activity) => activity.group === groupId);
      return `
        <section class="catalog-group" id="group-${escapeHtml(groupId)}" aria-label="${escapeHtml(groupTitle)}">
          <div class="catalog-group__head">
            <h2>${escapeHtml(groupTitle)}</h2>
            <div class="catalog-group__line"></div>
            <span class="catalog-group__count">${cards.length} aktivite</span>
          </div>
          <div class="card-board">
            ${cards.map(renderCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderCard(activity, index) {
  const number = String(index + 1).padStart(2, "0");
  return `
    <article class="activity-card" id="card-${escapeHtml(activity.id)}" style="--card-image:url('${escapeHtml(activity.image)}')">
      <span class="card-index">${escapeHtml(activity.id)}</span>
      <button class="card-hit" type="button" data-scroll-to="detail-${escapeHtml(activity.id)}" aria-label="${escapeHtml(activity.title)} detayına git"></button>
      <div class="card-body">
        <h3>${escapeHtml(activity.title)}</h3>
        <p>${escapeHtml(activity.short)}</p>
        <div class="card-meta">
          <span class="impact">Etki: ${escapeHtml(activity.impact)}</span>
          <a class="video-button" href="${escapeHtml(activity.video[1])}" target="_blank" rel="noopener">${escapeHtml(activity.video[0])}</a>
        </div>
      </div>
    </article>
  `;
}

function renderDetails() {
  const headHtml = `
    <div class="detail-board__head">
      <h2>Aktivite Detayları</h2>
      <div class="catalog-group__line"></div>
    </div>
  `;

  const cardsHtml = data.activities
    .map((activity) => `
      <article class="activity-detail" id="detail-${escapeHtml(activity.id)}" data-card-id="card-${escapeHtml(activity.id)}" style="--detail-image:url('${escapeHtml(activity.image)}')">
        <div class="detail-copy">
          <p class="eyebrow">${escapeHtml(activity.id)} <span class="sep">&middot;</span> ${escapeHtml(activity.impact)} etki <span class="sep">&middot;</span> ${escapeHtml(activity.difficulty)} operasyon</p>
          <h2>${escapeHtml(activity.title)}</h2>
          <div class="detail-grid">
            <section class="detail-block">
              <h3>Aktivite Özeti</h3>
              <p>${escapeHtml(activity.summary)}</p>
            </section>
            <section class="detail-block">
              <h3>İFM İçin Kullanım Senaryosu</h3>
              <p>${escapeHtml(activity.ifm)}</p>
            </section>
            <section class="detail-block">
              <h3>Ziyaretçi Deneyimi</h3>
              <p>${escapeHtml(activity.visitor)}</p>
            </section>
            <section class="detail-block">
              <h3>Basın ve Sosyal Medya Değeri</h3>
              <p>${escapeHtml(activity.media)}</p>
            </section>
            <section class="detail-block">
              <h3>Operasyon Notları</h3>
              <p>${escapeHtml(activity.ops)}</p>
            </section>
          </div>
          <div class="detail-video-row">
            <a class="video-button detail-video" href="${escapeHtml(activity.video[1])}" target="_blank" rel="noopener">${escapeHtml(activity.video[0])}</a>
          </div>
        </div>
      </article>
    `)
    .join("");

  els.detailBoard.innerHTML = headHtml + cardsHtml;
}

function setupScrollSpy() {
  const groupSections = [...document.querySelectorAll(".catalog-group")];
  const navLinks = new Map(
    [...document.querySelectorAll("[data-group-link]")].map((link) => [link.dataset.groupLink, link])
  );

  if (!groupSections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const groupId = entry.target.id.replace("group-", "");
        navLinks.forEach((link, id) => link.classList.toggle("is-active", id === groupId));
      });
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
  );

  groupSections.forEach((section) => observer.observe(section));
}

function setupRevealAnimations() {
  const targets = [...document.querySelectorAll(".activity-card, .activity-detail")];
  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
  );

  targets.forEach((target) => observer.observe(target));
}

function setupActiveDetailHighlight() {
  const details = [...document.querySelectorAll(".activity-detail")];
  if (!details.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("is-active", entry.isIntersecting);
      });
    },
    { rootMargin: "-35% 0px -45% 0px", threshold: 0 }
  );

  details.forEach((detail) => observer.observe(detail));
}

function setupHeaderState() {
  const onScroll = () => {
    els.header.classList.toggle("is-scrolled", window.scrollY > 8);

    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - doc.clientHeight;
    const ratio = scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0;
    els.progress.style.width = `${Math.min(100, Math.max(0, ratio))}%`;
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function setupMobileMenu() {
  els.menuToggle.addEventListener("click", () => {
    const isOpen = els.groupNav.classList.toggle("is-open");
    els.menuToggle.classList.toggle("is-open", isOpen);
    els.menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  els.groupNav.addEventListener("click", (event) => {
    if (!event.target.closest("a")) return;
    els.groupNav.classList.remove("is-open");
    els.menuToggle.classList.remove("is-open");
    els.menuToggle.setAttribute("aria-expanded", "false");
  });
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-scroll-to]");
  if (!trigger) return;
  const target = document.getElementById(trigger.dataset.scrollTo);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderGroupNav();
renderCatalog();
renderDetails();
setupScrollSpy();
setupRevealAnimations();
setupActiveDetailHighlight();
setupHeaderState();
setupMobileMenu();
