const TAG_WEIGHTS = {
  "agent-trading": 5,
  automation: 4,
  "category-baseline": 3,
  "customer-research": 5,
  distribution: 4,
  "mindshare": 5,
  "open-source": 4,
  positioning: 4,
  quant: 3,
  risk: 5,
  "trust-gap": 5,
  "unknown-workflow": 5,
  "workflow-gap": 5
};

const SOURCE_WEIGHTS = {
  github: 4,
  "founder-observation": 5,
  docs: 4,
  pricing: 4,
  careers: 3,
  social: 2
};

export function runEspio(caseStudy) {
  const targets = discoverTargets(caseStudy);
  const signals = collectSignals(caseStudy);
  const evidence = normalizeEvidence(signals);
  const hypotheses = inferHypotheses(caseStudy, evidence);
  const recommendations = recommendActions(caseStudy, hypotheses);

  return {
    generatedAt: caseStudy.generatedAt,
    subject: caseStudy.subject,
    targets,
    evidence,
    hypotheses,
    recommendations,
    workflow: [
      {
        agent: "Source Scout Agent",
        output: `${targets.length} monitored targets selected`
      },
      {
        agent: "Signal Collector Agent",
        output: `${signals.length} public signals collected`
      },
      {
        agent: "Evidence Normalizer Agent",
        output: `${evidence.length} evidence items scored`
      },
      {
        agent: "Strategy Analyst Agent",
        output: `${hypotheses.length} strategic hypotheses produced`
      },
      {
        agent: "Briefing Agent",
        output: `${recommendations.length} recommended actions generated`
      }
    ]
  };
}

export function discoverTargets(caseStudy) {
  return caseStudy.competitors.map((competitor) => ({
    id: competitor.id,
    name: competitor.name,
    type: competitor.type,
    url: competitor.url,
    watchReason: competitor.watchReason,
    priority: competitor.stars > 50000 ? "critical" : competitor.stars > 10000 ? "high" : "baseline"
  }));
}

export function collectSignals(caseStudy) {
  return caseStudy.signals.map((signal) => ({
    ...signal,
    competitor:
      caseStudy.competitors.find((competitor) => competitor.id === signal.competitorId)?.name ??
      caseStudy.subject.name
  }));
}

export function normalizeEvidence(signals) {
  return signals
    .map((signal) => {
      const tagScore = signal.tags.reduce((sum, tag) => sum + (TAG_WEIGHTS[tag] ?? 1), 0);
      const sourceScore = SOURCE_WEIGHTS[signal.sourceType] ?? 1;
      const impact = Math.min(100, signal.strength * 10 + tagScore + sourceScore);

      return {
        ...signal,
        impact,
        confidence: signal.sourceType === "founder-observation" ? "medium" : "high",
        citation: signal.evidenceUrl
      };
    })
    .sort((a, b) => b.impact - a.impact);
}

export function inferHypotheses(caseStudy, evidence) {
  const openSourceAgentSignals = evidence.filter(
    (item) => item.tags.includes("agent-trading") && item.tags.includes("open-source")
  );
  const trustGapSignals = evidence.filter(
    (item) => item.tags.includes("trust-gap") || item.tags.includes("risk")
  );
  const distributionSignals = evidence.filter((item) => item.tags.includes("distribution"));
  const workflowSignals = evidence.filter((item) => item.tags.includes("workflow-gap"));

  return [
    {
      id: "hyp-001",
      title: "Do not position Stockwin as another generic autonomous trading agent.",
      confidence: openSourceAgentSignals.length >= 2 ? "high" : "medium",
      why:
        "The strongest visible competitors already own open-source attention for generic multi-agent trading.",
      evidenceIds: openSourceAgentSignals.map((item) => item.id),
      counterEvidence:
        "A narrower vertical, verified track record, or broker-integrated workflow could still make agent trading viable.",
      strategicMeaning:
        "Stockwin needs a wedge around decision support, trust, or distribution, not a broad clone of popular repos."
    },
    {
      id: "hyp-002",
      title: "Trust is the real product gap in AI trading.",
      confidence: trustGapSignals.length >= 1 ? "medium" : "low",
      why:
        "Fully automated trading claims are easy to make but hard to trust without risk controls and observed user workflows.",
      evidenceIds: trustGapSignals.map((item) => item.id),
      counterEvidence:
        "Some users may still pay for entertainment or exploration, but that is a weaker recurring-use foundation.",
      strategicMeaning:
        "The first serious Stockwin product should explain evidence and uncertainty rather than promise autonomous profit."
    },
    {
      id: "hyp-003",
      title: "Stockwin's first growth experiment should exploit non-influencer distribution.",
      confidence: distributionSignals.length >= 1 ? "medium" : "low",
      why:
        "The only known paid-user discovery came from offline distribution, not social media authority.",
      evidenceIds: distributionSignals.map((item) => item.id),
      counterEvidence:
        "One poster conversion is too small to generalize without repeat tests.",
      strategicMeaning:
        "Stockwin should test localized, concrete hooks for retail traders instead of competing for finance-influencer reach."
    },
    {
      id: "hyp-004",
      title: "Customer workflow discovery is the next required action.",
      confidence: workflowSignals.length >= 1 ? "high" : "medium",
      why:
        "Without knowing the user's existing trading workflow, any agent-trading rebuild may become a more expensive demo.",
      evidenceIds: workflowSignals.map((item) => item.id),
      counterEvidence:
        "If new analytics reveal repeated usage patterns, product decisions can use behavior data instead of interviews.",
      strategicMeaning:
        "Espio should monitor competitors while Stockwin interviews paid users and maps their decision loop."
    }
  ];
}

export function recommendActions(caseStudy, hypotheses) {
  return [
    {
      id: "act-001",
      owner: caseStudy.subject.name,
      priority: "P0",
      action:
        "Interview the 3 paid users and reconstruct what they used before Stockwin: TradingView, Reddit, broker app, YouTube, Excel, or intuition.",
      successMetric: "At least 3 concrete workflow maps with tool names, triggers, and decision moments.",
      linkedHypothesis: "hyp-004"
    },
    {
      id: "act-002",
      owner: "Espio",
      priority: "P0",
      action:
        "Run weekly monitoring for the four open-source competitors and alert only when a signal changes Stockwin's wedge decision.",
      successMetric: "One weekly brief with evidence, confidence, and a recommended product/distribution action.",
      linkedHypothesis: "hyp-001"
    },
    {
      id: "act-003",
      owner: caseStudy.subject.name,
      priority: "P1",
      action:
        "Reframe the next Stockwin prototype from autonomous trading to evidence-backed watchlist intelligence until trust proof exists.",
      successMetric: "A landing page or demo that promises decision support, not automated profit.",
      linkedHypothesis: "hyp-002"
    },
    {
      id: "act-004",
      owner: caseStudy.subject.name,
      priority: "P1",
      action:
        "Repeat the Berlin poster experiment with a measurable QR code and a specific hook for one trader persona.",
      successMetric: "At least 100 scans or 5 conversations from one localized distribution experiment.",
      linkedHypothesis: "hyp-003"
    }
  ].map((recommendation) => ({
    ...recommendation,
    hypothesis: hypotheses.find((hypothesis) => hypothesis.id === recommendation.linkedHypothesis)
  }));
}

export function generateBrief(report) {
  const evidenceLines = report.evidence
    .map(
      (item) =>
        `| ${item.id} | ${item.competitor} | ${item.changeType} | ${item.impact} | ${item.confidence} | ${item.title} | ${item.citation} |`
    )
    .join("\n");

  const hypothesisLines = report.hypotheses
    .map(
      (hypothesis) => `### ${hypothesis.title}

Confidence: ${hypothesis.confidence}

${hypothesis.why}

Strategic meaning: ${hypothesis.strategicMeaning}

Counter-evidence to watch: ${hypothesis.counterEvidence}
`
    )
    .join("\n");

  const actionLines = report.recommendations
    .map(
      (item) => `- ${item.priority} / ${item.owner}: ${item.action}
  Success metric: ${item.successMetric}`
    )
    .join("\n");

  return `# Espio Brief: ${report.subject.name}

Generated: ${report.generatedAt}

## Decision Question

${report.subject.goal}

## Current Constraints

${report.subject.constraints.map((constraint) => `- ${constraint}`).join("\n")}

## Strategic Hypotheses

${hypothesisLines}
## Recommended Actions

${actionLines}

## Evidence Table

| ID | Target | Change Type | Impact | Confidence | Signal | Source |
| --- | --- | --- | ---: | --- | --- | --- |
${evidenceLines}
`;
}
