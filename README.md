# Espio

Espio is an open-source competitive intelligence agent prototype for founders.

The first use case is Stockwin: monitor the AI trading and stock prediction market, collect competitor signals, and produce a weekly evidence-backed strategy brief.

Live demo: https://liwagu.github.io/espio/

## Hackathon submission

- Track: Agent
- Prototype question: can a small agent workflow turn public competitor signals into a decision-grade brief for Stockwin?
- Demo case: Stockwin vs open-source AI trading projects
- Output: strategic hypotheses, evidence trail, and recommended actions

## Why this exists

Stockwin is evaluating whether to rebuild as an agent-trading product. The market already has large open-source projects such as `TradingAgents`, `ai-hedge-fund`, `AI-Trader`, and mature quant tooling such as `rqalpha`.

Espio's job is not to produce more alerts. Espio should answer: what changed, why it matters, how confident we are, and what Stockwin should do next.

## Run locally

```bash
npm run dev
```

Open `http://localhost:5173`.

The UI has three prototype variants:

- `?variant=mission`
- `?variant=brief`
- `?variant=radar`

Generate the sample Stockwin brief:

```bash
npm run brief
```

Check that the committed brief is up to date:

```bash
npm run check
```

## Agent workflow

1. Source Scout Agent chooses monitored competitors.
2. Signal Collector Agent collects public signals.
3. Evidence Normalizer Agent scores impact and confidence.
4. Strategy Analyst Agent links evidence into hypotheses.
5. Briefing Agent writes a decision-grade brief.

The current prototype uses deterministic sample data so judges and contributors can run it without API keys.

## Current Stockwin watchlist

- [TradingAgents](https://github.com/TauricResearch/TradingAgents)
- [ai-hedge-fund](https://github.com/virattt/ai-hedge-fund)
- [AI-Trader](https://github.com/HKUDS/AI-Trader)
- [rqalpha](https://github.com/ricequant/rqalpha)

## What the prototype already demonstrates

- Competitor target discovery from a Stockwin-specific watchlist
- Evidence scoring with source type, impact, confidence, and citation
- Strategic hypotheses with counter-evidence
- Action recommendations tied to hypotheses
- A generated Markdown brief in `examples/stockwin/brief.md`
- Three UI shapes for evaluating the product surface

## What is intentionally not built yet

- Live crawlers
- Authentication
- Persistence
- Email or Slack delivery
- LinkedIn scraping
- LLM inference

Those are excluded to keep the hackathon prototype runnable and auditable.

## Compliance position

Espio should use public sources, respect site terms, and preserve source links. Hiring signals should come from company career pages or explicit user-provided exports. The product should sell legal competitive intelligence, not covert scraping.

## Roadmap

- Add GitHub API ingestion for stars, releases, issues, and commit velocity
- Add website and docs diffing
- Add scheduled weekly brief generation
- Add Slack and email delivery
- Add LLM-based hypothesis generation behind a human review gate
- Add a hosted version for private watchlists
