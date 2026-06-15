const data = window.IFM_ACTIVITY_CATALOG;

const els = {
  catalog: document.querySelector("[data-catalog]"),
  detailBoard: document.querySelector("[data-detail-board]"),
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderCatalog() {
  els.catalog.innerHTML = data.groups
    .map(([groupId, groupTitle]) => {
      const cards = data.activities.filter((activity) => activity.group === groupId);
      return `
        <section class="catalog-group" aria-label="${escapeHtml(groupTitle)}">
          <h2>${escapeHtml(groupTitle)}</h2>
          <div class="card-board">
            ${cards.map(renderCard).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderCard(activity) {
  return `
    <article class="activity-card" id="card-${escapeHtml(activity.id)}" style="--card-image:url('${escapeHtml(activity.image)}')">
      <button class="card-hit" type="button" data-scroll-to="detail-${escapeHtml(activity.id)}" aria-label="${escapeHtml(activity.title)} detayına git"></button>
      <div class="card-body">
        <h3>${escapeHtml(activity.title)}</h3>
        <p>${escapeHtml(activity.short)}</p>
        <div class="card-meta">
          <span>Etki: ${escapeHtml(activity.impact)}</span>
          <a class="video-button" href="${escapeHtml(activity.video[1])}">${escapeHtml(activity.video[0])}</a>
        </div>
      </div>
    </article>
  `;
}

function renderDetails() {
  els.detailBoard.innerHTML = data.activities
    .map((activity) => `
      <article class="activity-detail" id="detail-${escapeHtml(activity.id)}">
        <div class="detail-copy">
          <p class="eyebrow">${escapeHtml(activity.id)} · ${escapeHtml(activity.impact)} etki · ${escapeHtml(activity.difficulty)} operasyon</p>
          <h2>${escapeHtml(activity.title)}</h2>
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
          <section class="detail-block">
            <h3>Video Referansı</h3>
            <a class="video-button detail-video" href="${escapeHtml(activity.video[1])}">${escapeHtml(activity.video[0])}</a>
          </section>
        </div>
      </article>
    `)
    .join("");
}

document.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-scroll-to]");
  if (!trigger) return;
  const target = document.getElementById(trigger.dataset.scrollTo);
  if (!target) return;
  target.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderCatalog();
renderDetails();
