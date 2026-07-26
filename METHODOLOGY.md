# Methodology

iMinistry exists to make ministry performance legible to citizens without becoming another
outrage feed. That only works if every claim on the site would survive being read out loud in
front of the ministry it's about. These rules are non-negotiable.

## 1. Ministries, never people

We track the **Ministry of X**, not the minister currently holding that office. Ministers change;
the institution's obligations (exam integrity, disaster response time, road safety, budget
discipline) don't. This is a deliberate choice:

- It keeps the project useful across any government, of any party.
- It avoids defamation risk — criticizing an institution's delivery record is fundamentally
  different, legally and ethically, from making a claim about a named person.
- It matches how accountability actually works: a resignation fixes an optics problem for a week;
  a public, sourced, ongoing scorecard creates pressure that outlasts any one appointment.

Do not add names, photos, party affiliations, or "who's responsible" framing anywhere in this repo.

## 2. No source, no score

Every non-null value in a ministry's `scores` object must have a matching entry in `citations`:

```js
{
  scores: { transparency: 4, delivery: null, responsiveness: null, fiscalDiscipline: null },
  citations: [
    {
      label: "CAG Report No. 12 of 2024 — delays in RTI response times",
      url: "https://cag.gov.in/... (a real, checkable link)",
    },
  ],
}
```

Acceptable source types, roughly in order of strength:

1. **CAG (Comptroller and Auditor General) reports** — the strongest source for fiscal/delivery claims.
2. **RTI replies** — attach a copy or a link to where the reply is published.
3. **Parliament records** — Lok Sabha / Rajya Sabha starred/unstarred question answers, which
   are official written government statements and are searchable on sansad.in.
4. **PIB (Press Information Bureau) releases** — official government statements, useful for both
   "what they promised" and "what they claim was delivered."
5. **Court orders / judgments** — for anything under active litigation.
6. **Government open-data portals** (data.gov.in, scheme dashboards, ASER/NAS survey data, etc.)
7. **Named news reporting with a URL and date** — acceptable, but weaker than the above; prefer
   reporting that itself cites an official document or filed RTI.

Rejected as sources: anonymous social media posts, opinion columns, unverified WhatsApp forwards,
or "everyone knows" claims. If you only have that, don't submit a score — submit it as a
**watch area** suggestion instead (see below), which is a neutral "here's a theme worth tracking,"
not a scored claim.

## 3. Scoring scale

Each pillar is scored 0–10 (or left `null`/"Unrated"):

| Score | Meaning |
|---|---|
| 0–2 | Sourced evidence of serious, repeated failure |
| 3–5 | Mixed record — real gaps alongside real progress |
| 6–8 | Generally meeting stated targets/obligations |
| 9–10 | Consistently exceeding stated targets, per multiple independent sources |
| null | Not yet rated — no sourced data submitted |

A single citation can justify moving a score within one band (e.g. from "Unrated" to 4, or from
4 to 5) but a jump of more than 2 points requires at least two independent sources.

## 4. Watch areas are not accusations

The `watchAreas` field is a list of neutral themes worth monitoring for that ministry (e.g. "exam
paper leak incidents & NTA reforms" for Education). These are topics, not verdicts — they exist so
readers and contributors know where to look for sourced updates. Phrase every watch area as a
theme, never as a claim ("X ministry is corrupt" is not a watch area; "procurement timelines" is).

## 5. Right of reply / corrections

Any ministry, official, or member of the public can open a GitHub issue disputing a rating or a
citation. Corrections are processed the same way additions are: on the strength of the source, not
on the identity of who's asking. If a cited source is later retracted, contradicted, or shown to be
misread, the score is reverted immediately and the correction is noted in the commit message.

## 6. What this project is not

- Not a platform for naming, shaming, or speculating about individual officials.
- Not affiliated with, funded by, or speaking for any political party.
- Not a final legal or factual verdict — it's a starting point for citizens to look at primary
  sources themselves. Every citation should be a link the reader can click and verify directly.
