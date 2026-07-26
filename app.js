(function () {
  "use strict";

  const grid = document.getElementById("ministry-grid");
  const search = document.getElementById("search");
  const countPill = document.getElementById("count-pill");
  const modalBackdrop = document.getElementById("modal-backdrop");
  const modal = document.getElementById("modal");
  const yearEl = document.getElementById("year");

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  function overallScore(scores) {
    const vals = Object.values(scores).filter((v) => typeof v === "number");
    if (vals.length === 0) return null;
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function stampHtml(overall) {
    return overall !== null
      ? `<span class="stamp rated">${overall.toFixed(1)} / 10</span>`
      : `<span class="stamp unrated">unrated</span>`;
  }

  function cardTemplate(m) {
    const overall = overallScore(m.scores);
    const tags = m.watchAreas
      .slice(0, 3)
      .map((w) => `<span class="tag">${escapeHtml(w)}</span>`)
      .join("");

    return `
      <article class="card" tabindex="0" role="button" aria-label="Open ${escapeHtml(m.name)} detail" data-id="${m.id}">
        <div class="card-top">
          <span class="file-code">GOI / ${m.code}</span>
          ${stampHtml(overall)}
        </div>
        <h3>${escapeHtml(m.name)}</h3>
        <p class="mandate">${escapeHtml(m.mandate)}</p>
        <div class="watch-tags">${tags}</div>
      </article>
    `;
  }

  function render(list) {
    grid.innerHTML = list.map(cardTemplate).join("");
    countPill.textContent = `${list.length} of ${MINISTRIES.length} ministries on file`;
    grid.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", () => openModal(card.dataset.id));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openModal(card.dataset.id);
        }
      });
    });
  }

  function pillarLabel(key) {
    return (
      {
        transparency: "Transparency",
        delivery: "Delivery",
        responsiveness: "Responsiveness",
        fiscalDiscipline: "Fiscal discipline",
      }[key] || key
    );
  }

  function openModal(id) {
    const m = MINISTRIES.find((x) => x.id === id);
    if (!m) return;

    const pillarsHtml = PILLARS.map((key) => {
      const v = m.scores[key];
      const rated = typeof v === "number";
      return `
        <div class="pillar ${rated ? "is-rated" : ""}">
          <div class="label">${pillarLabel(key)}</div>
          <div class="value">${rated ? v.toFixed(1) + " / 10" : "Unrated"}</div>
        </div>
      `;
    }).join("");

    const watchHtml = m.watchAreas.map((w) => `<li>${escapeHtml(w)}</li>`).join("");
    const citeHtml = m.citations.length
      ? m.citations.map((c) => `<li><a href="${c.url}" target="_blank" rel="noopener">${escapeHtml(c.label)}</a></li>`).join("")
      : `<li><em>No sourced citations submitted yet — see "Contribute a sourced update" below.</em></li>`;

    modal.innerHTML = `
      <div class="modal-head">
        <div>
          <span class="file-code">GOI / ${m.code}</span>
          <h3 style="margin-top:8px;">${escapeHtml(m.name)}</h3>
        </div>
        <button class="modal-close" aria-label="Close">&times;</button>
      </div>
      <p class="mandate">${escapeHtml(m.mandate)}</p>
      <div class="pillars">${pillarsHtml}</div>
      <h4>Watch areas</h4>
      <ul>${watchHtml}</ul>
      <h4>Sourced citations</h4>
      <ul>${citeHtml}</ul>
      <div class="modal-actions">
        <a class="btn btn-primary" href="https://github.com/borannavar1984/iMinistry/issues/new?title=${encodeURIComponent(
          "[" + m.name + "] "
        )}&labels=sourced-update" target="_blank" rel="noopener">Contribute a sourced update</a>
        <button class="btn btn-ghost" id="modal-close-2">Close</button>
      </div>
    `;

    modal.querySelector(".modal-close").addEventListener("click", closeModal);
    modal.querySelector("#modal-close-2").addEventListener("click", closeModal);
    modalBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modalBackdrop.classList.remove("open");
    document.body.style.overflow = "";
  }

  modalBackdrop.addEventListener("click", (e) => {
    if (e.target === modalBackdrop) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase();
    if (!q) return render(MINISTRIES);
    const filtered = MINISTRIES.filter(
      (m) =>
        m.name.toLowerCase().includes(q) ||
        m.mandate.toLowerCase().includes(q) ||
        m.watchAreas.some((w) => w.toLowerCase().includes(q))
    );
    render(filtered);
  });

  render(MINISTRIES);
})();
