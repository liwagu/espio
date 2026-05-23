export const caseStudy = {
  generatedAt: "2026-05-23",
  subject: {
    name: "Stockwin",
    domain: "stockwin.win",
    stage: "revival",
    goal:
      "Find a narrow wedge in the crowded AI trading and stock prediction market before rebuilding the product.",
    constraints: [
      "Old Kronos GPU backend was too expensive to keep running.",
      "Prior launch produced 10+ registrations and 3 paid users at $3, then no growth for 4 months.",
      "Founder does not yet know the paid users' original trading workflow.",
      "Founder has no finance influencer audience and needs a realistic distribution path."
    ]
  },
  competitors: [
    {
      id: "ai-hedge-fund",
      name: "ai-hedge-fund",
      type: "open-source",
      owner: "virattt",
      url: "https://github.com/virattt/ai-hedge-fund",
      stars: 59148,
      lastObserved: "2026-05-23T10:50:12Z",
      summary: "An AI hedge fund team with multiple investment-style agents.",
      watchReason: "Large open-source mindshare around agentic trading."
    },
    {
      id: "tradingagents",
      name: "TradingAgents",
      type: "open-source",
      owner: "TauricResearch",
      url: "https://github.com/TauricResearch/TradingAgents",
      stars: 78765,
      lastObserved: "2026-05-23T12:57:00Z",
      summary: "Multi-agent LLM financial trading framework.",
      watchReason: "Strongest open-source signal in the trading-agent category."
    },
    {
      id: "ai-trader",
      name: "AI-Trader",
      type: "open-source",
      owner: "HKUDS",
      url: "https://github.com/HKUDS/AI-Trader",
      stars: 18515,
      lastObserved: "2026-05-23T12:57:32Z",
      summary: "Agent-native automated trading project.",
      watchReason: "Directly overlaps with the autonomous trading pitch."
    },
    {
      id: "rqalpha",
      name: "rqalpha",
      type: "open-source",
      owner: "ricequant",
      url: "https://github.com/ricequant/rqalpha",
      stars: 6411,
      lastObserved: "2026-05-23T01:22:25Z",
      summary: "Python algorithmic backtest and trading framework.",
      watchReason: "Mature infrastructure benchmark for serious quant users."
    }
  ],
  signals: [
    {
      id: "sig-001",
      competitorId: "tradingagents",
      sourceType: "github",
      changeType: "mindshare",
      title: "TradingAgents has the largest observed open-source pull",
      summary:
        "The project has 78k+ GitHub stars, making generic trading-agent positioning difficult to defend.",
      evidenceUrl: "https://github.com/TauricResearch/TradingAgents",
      observedAt: "2026-05-23",
      tags: ["agent-trading", "open-source", "mindshare"],
      strength: 5
    },
    {
      id: "sig-002",
      competitorId: "ai-hedge-fund",
      sourceType: "github",
      changeType: "positioning",
      title: "AI hedge fund framing is already crowded",
      summary:
        "The multi-agent investment-team metaphor is already a popular open-source narrative.",
      evidenceUrl: "https://github.com/virattt/ai-hedge-fund",
      observedAt: "2026-05-23",
      tags: ["agent-trading", "positioning", "open-source"],
      strength: 4
    },
    {
      id: "sig-003",
      competitorId: "ai-trader",
      sourceType: "github",
      changeType: "automation-claim",
      title: "Fully automated trading claims are easy to copy but hard to trust",
      summary:
        "Projects can claim full automation, but production trust requires brokerage, compliance, risk controls, and verified returns.",
      evidenceUrl: "https://github.com/HKUDS/AI-Trader",
      observedAt: "2026-05-23",
      tags: ["automation", "trust-gap", "risk"],
      strength: 4
    },
    {
      id: "sig-004",
      competitorId: "rqalpha",
      sourceType: "github",
      changeType: "category-baseline",
      title: "Serious quant users already have backtesting infrastructure",
      summary:
        "Backtesting and strategy execution are established categories; Stockwin needs a sharper wedge than generic quant tooling.",
      evidenceUrl: "https://github.com/ricequant/rqalpha",
      observedAt: "2026-05-23",
      tags: ["backtesting", "quant", "maturity"],
      strength: 3
    },
    {
      id: "sig-005",
      competitorId: "stockwin",
      sourceType: "founder-observation",
      changeType: "distribution",
      title: "A Berlin poster converted one paid user",
      summary:
        "Prior Stockwin demand came from a physical poster, not from an online finance audience.",
      evidenceUrl: "stockwin founder interview, 2026-05-17",
      observedAt: "2026-05-17",
      tags: ["distribution", "offline", "paid-user"],
      strength: 4
    },
    {
      id: "sig-006",
      competitorId: "stockwin",
      sourceType: "founder-observation",
      changeType: "unknown-workflow",
      title: "Paid users' original workflow is unknown",
      summary:
        "The current product risk is not model cost; it is not knowing what users did before Stockwin.",
      evidenceUrl: "stockwin office-hours session, 2026-05-17",
      observedAt: "2026-05-17",
      tags: ["workflow-gap", "customer-research", "risk"],
      strength: 5
    }
  ]
};
