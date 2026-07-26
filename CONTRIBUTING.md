# Contributing to iMinistry

Thanks for wanting to help. Two ways in, depending on how comfortable you are with code.

## Option A — Open an issue (no coding needed)

1. Go to the repo's **Issues** tab → **New issue**.
2. Title it `[Ministry name] short description`, e.g. `[Ministry of Railways] Kavach rollout delay`.
3. In the body, include:
   - The ministry it's about.
   - Which pillar it affects: transparency, delivery, responsiveness, or fiscal discipline.
   - The **source**: a link to the CAG report / RTI reply / Parliament answer / PIB release /
     news article. No link, no action — see [METHODOLOGY.md](METHODOLOGY.md) for what counts.
   - A one-line summary of what the source says.
4. A maintainer will translate accepted issues into a `data/ministries.js` update.

## Option B — Submit the data change yourself (a small PR)

1. Fork the repo, then edit `data/ministries.js`.
2. Find the ministry object by `id`.
3. Update `scores.<pillar>` and add a matching object to `citations`:

   ```js
   citations: [
     { label: "Short, specific description of the source", url: "https://..." },
   ],
   ```
4. Keep the tone neutral and factual — the label should describe the source, not editorialize.
5. Open a PR. Please don't bundle unrelated ministries in one PR — one theme per PR makes review fast.

## House rules

- **No individual names, photos, or party labels anywhere** — ministries only. This is enforced in
  review, not just requested.
- **No source, no score** — if you can't link it, it goes in as a discussion point in the issue,
  not as a rated claim.
- **Corrections welcome** — if you find a stale, wrong, or misread citation, open an issue the same
  way. We'd rather revert fast than defend a bad edit.
- Be the person you'd want fact-checking your own work: link primary sources, quote them
  accurately, and let the reader verify it themselves.
