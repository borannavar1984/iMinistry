# iMinistry 🇮🇳

A nonpartisan, citizen-run report card for **India's Union Ministries** — not politicians.

Every ministry (Home, Education, Health, Finance, Railways, Women & Child Development, and
more) gets tracked on four pillars: **transparency, delivery, responsiveness, fiscal discipline**.
Every rating must cite a public, checkable source. No source, no score. No individuals named,
ever — this project is about institutional performance, not personal attacks.

**Why:** government redressal systems exist on paper, but citizens have no simple, ongoing view
of "is this ministry actually doing its job." iMinistry is a small, open attempt to build that
view — starting with the ministries most linked to urgent public issues (exam integrity, health
access, farmer welfare, and so on), not with any one political party or leader.

## Quick start

No build step. Just open `index.html` in a browser, or serve it locally:

```bash
# any static server works, e.g.:
python3 -m http.server 8000
# then visit http://localhost:8000
```

To publish it for free with GitHub Pages: **Settings → Pages → Deploy from branch → main → / (root)**.

## Project structure

```
index.html          the whole single-page site
css/style.css        styling (mobile-first, light/dark aware)
js/app.js            rendering, search, and the ministry detail modal
data/ministries.js   the ministry registry — mandates, watch areas, scores, citations
METHODOLOGY.md        the full scoring rubric and sourcing rules
CONTRIBUTING.md       how to submit a sourced update or flag an error
```

## How scoring works (short version)

- Score = average of 4 pillars, each 0–10, or **"Unrated"** until real sourced data exists.
- A pillar score only changes when a citation (URL + label) is attached in `data/ministries.js`.
- Acceptable sources: CAG reports, RTI replies, Parliament Q&A records (Lok Sabha/Rajya Sabha),
  PIB releases, court orders, official government data portals, or dated news articles with links.
- Full rubric: [METHODOLOGY.md](METHODOLOGY.md).

## Roadmap ideas

- [ ] Wire up real first citations for 2–3 ministries as a proof of concept
- [ ] A simple "submit a sourced update" form (GitHub Issue template) instead of raw JS edits
- [ ] Per-ministry history/timeline view
- [ ] State-level ministries (this starts with the Union/central government only)
- [ ] A public API (`data/ministries.js` → JSON) so others can build on top of the dataset

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md). Short version: open an issue, attach a public source,
propose the change — no unsourced claims, no naming individuals.

## License

Code is MIT-licensed (see [LICENSE](LICENSE)). Ministry ratings data is a factual civic dataset
intended for free public reuse.

---

*iMinistry is an independent volunteer project. It is not affiliated with, and does not speak
for, any political party or the Government of India.*
