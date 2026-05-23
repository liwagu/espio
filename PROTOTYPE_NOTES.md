# Prototype notes

Question: can Espio make the Stockwin competitor-intelligence loop concrete enough for a hackathon submission?

Answer so far: the smallest useful shape is not a generic scraping dashboard. It is a Stockwin-specific agent workflow that converts public competitor signals into strategic hypotheses, counter-evidence, and recommended actions.

Prototype constraints:

- No API keys.
- No persistence.
- No live crawling.
- Deterministic sample data.
- Three UI variants on one route via `?variant=`.

Next decision:

- Keep the mission-control layout if the product is pitched as an agent workflow.
- Keep the brief-room layout if the product is pitched as analyst-grade output.
- Keep the radar layout if the product is pitched as continuous monitoring.
