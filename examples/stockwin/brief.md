# Espio Brief: Stockwin

Generated: 2026-05-23

## Decision Question

Find a narrow wedge in the crowded AI trading and stock prediction market before rebuilding the product.

## Current Constraints

- Old Kronos GPU backend was too expensive to keep running.
- Prior launch produced 10+ registrations and 3 paid users at $3, then no growth for 4 months.
- Founder does not yet know the paid users' original trading workflow.
- Founder has no finance influencer audience and needs a realistic distribution path.

## Strategic Hypotheses

### Do not position Stockwin as another generic autonomous trading agent.

Confidence: high

The strongest visible competitors already own open-source attention for generic multi-agent trading.

Strategic meaning: Stockwin needs a wedge around decision support, trust, or distribution, not a broad clone of popular repos.

Counter-evidence to watch: A narrower vertical, verified track record, or broker-integrated workflow could still make agent trading viable.

### Trust is the real product gap in AI trading.

Confidence: medium

Fully automated trading claims are easy to make but hard to trust without risk controls and observed user workflows.

Strategic meaning: The first serious Stockwin product should explain evidence and uncertainty rather than promise autonomous profit.

Counter-evidence to watch: Some users may still pay for entertainment or exploration, but that is a weaker recurring-use foundation.

### Stockwin's first growth experiment should exploit non-influencer distribution.

Confidence: medium

The only known paid-user discovery came from offline distribution, not social media authority.

Strategic meaning: Stockwin should test localized, concrete hooks for retail traders instead of competing for finance-influencer reach.

Counter-evidence to watch: One poster conversion is too small to generalize without repeat tests.

### Customer workflow discovery is the next required action.

Confidence: high

Without knowing the user's existing trading workflow, any agent-trading rebuild may become a more expensive demo.

Strategic meaning: Espio should monitor competitors while Stockwin interviews paid users and maps their decision loop.

Counter-evidence to watch: If new analytics reveal repeated usage patterns, product decisions can use behavior data instead of interviews.

## Recommended Actions

- P0 / Stockwin: Interview the 3 paid users and reconstruct what they used before Stockwin: TradingView, Reddit, broker app, YouTube, Excel, or intuition.
  Success metric: At least 3 concrete workflow maps with tool names, triggers, and decision moments.
- P0 / Espio: Run weekly monitoring for the four open-source competitors and alert only when a signal changes Stockwin's wedge decision.
  Success metric: One weekly brief with evidence, confidence, and a recommended product/distribution action.
- P1 / Stockwin: Reframe the next Stockwin prototype from autonomous trading to evidence-backed watchlist intelligence until trust proof exists.
  Success metric: A landing page or demo that promises decision support, not automated profit.
- P1 / Stockwin: Repeat the Berlin poster experiment with a measurable QR code and a specific hook for one trader persona.
  Success metric: At least 100 scans or 5 conversations from one localized distribution experiment.

## Evidence Table

| ID | Target | Change Type | Impact | Confidence | Signal | Source |
| --- | --- | --- | ---: | --- | --- | --- |
| sig-006 | Stockwin | unknown-workflow | 70 | medium | Paid users' original workflow is unknown | stockwin office-hours session, 2026-05-17 |
| sig-001 | TradingAgents | mindshare | 68 | high | TradingAgents has the largest observed open-source pull | https://github.com/TauricResearch/TradingAgents |
| sig-003 | AI-Trader | automation-claim | 58 | high | Fully automated trading claims are easy to copy but hard to trust | https://github.com/HKUDS/AI-Trader |
| sig-002 | ai-hedge-fund | positioning | 57 | high | AI hedge fund framing is already crowded | https://github.com/virattt/ai-hedge-fund |
| sig-005 | Stockwin | distribution | 51 | medium | A Berlin poster converted one paid user | stockwin founder interview, 2026-05-17 |
| sig-004 | rqalpha | category-baseline | 39 | high | Serious quant users already have backtesting infrastructure | https://github.com/ricequant/rqalpha |
