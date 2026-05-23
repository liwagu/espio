import { generateBrief, runEspio } from "./espio-agent.js";
import { caseStudy } from "./sample-data.js";

const report = runEspio(caseStudy);
const app = document.querySelector("#app");
const variants = [
  { key: "mission", name: "Mission Control" },
  { key: "brief", name: "Brief Room" },
  { key: "radar", name: "Competitor Radar" }
];

function getVariant() {
  const params = new URLSearchParams(window.location.search);
  return params.get("variant") ?? "mission";
}

function setVariant(next) {
  const params = new URLSearchParams(window.location.search);
  params.set("variant", next);
  window.history.replaceState({}, "", `${window.location.pathname}?${params.toString()}`);
  render();
}

function cycleVariant(direction) {
  const current = getVariant();
  const index = Math.max(0, variants.findIndex((variant) => variant.key === current));
  const nextIndex = (index + direction + variants.length) % variants.length;
  setVariant(variants[nextIndex].key);
}

function layoutShell(content) {
  return `
    <header class="topbar">
      <div>
        <p class="eyebrow">Espio prototype / Agents track</p>
        <h1>Competitive intelligence agent for Stockwin</h1>
      </div>
      <div class="status-pill">
        <span></span>
        ${report.evidence.length} signals monitored
      </div>
    </header>
    ${content}
    ${renderSwitcher()}
  `;
}

function renderMissionControl() {
  return layoutShell(`
    <main class="mission-layout">
      <section class="panel hero-panel">
        <div class="section-label">Decision question</div>
        <h2>${report.subject.goal}</h2>
        <p>${report.subject.constraints[2]}</p>
        <div class="metric-row">
          <div><strong>${report.targets.length}</strong><span>targets</span></div>
          <div><strong>${report.hypotheses.length}</strong><span>hypotheses</span></div>
          <div><strong>${report.recommendations.length}</strong><span>actions</span></div>
        </div>
      </section>

      <section class="panel pipeline-panel">
        <div class="section-label">Agent workflow</div>
        <div class="pipeline">
          ${report.workflow
            .map(
              (step, index) => `
                <div class="pipeline-step">
                  <div class="step-index">${index + 1}</div>
                  <div>
                    <h3>${step.agent}</h3>
                    <p>${step.output}</p>
                  </div>
                </div>`
            )
            .join("")}
        </div>
      </section>

      <section class="panel hypotheses-panel">
        <div class="section-label">Strategic hypotheses</div>
        ${report.hypotheses
          .map(
            (hypothesis) => `
              <article class="hypothesis">
                <div>
                  <h3>${hypothesis.title}</h3>
                  <p>${hypothesis.strategicMeaning}</p>
                </div>
                <span class="confidence ${hypothesis.confidence}">${hypothesis.confidence}</span>
              </article>`
          )
          .join("")}
      </section>

      <section class="panel actions-panel">
        <div class="section-label">Next actions</div>
        ${report.recommendations
          .map(
            (item) => `
              <article class="action">
                <span>${item.priority}</span>
                <div>
                  <h3>${item.action}</h3>
                  <p>${item.successMetric}</p>
                </div>
              </article>`
          )
          .join("")}
      </section>
    </main>
  `);
}

function renderBriefRoom() {
  return layoutShell(`
    <main class="brief-layout">
      <aside class="panel side-brief">
        <div class="section-label">Targets</div>
        ${report.targets
          .map(
            (target) => `
              <a class="target-row" href="${target.url}" target="_blank" rel="noreferrer">
                <strong>${target.name}</strong>
                <span>${target.priority}</span>
              </a>`
          )
          .join("")}
      </aside>
      <section class="panel report-doc">
        <div class="section-label">Generated brief</div>
        <h2>Stockwin should not start as a generic trading-agent clone.</h2>
        <p>
          Open-source competitors already own the broad AI trading-agent narrative.
          Stockwin's near-term wedge should be evidence-backed watchlist intelligence
          plus user workflow discovery.
        </p>
        ${report.hypotheses
          .map(
            (hypothesis) => `
              <article class="doc-section">
                <h3>${hypothesis.title}</h3>
                <p>${hypothesis.why}</p>
                <p><strong>Counter:</strong> ${hypothesis.counterEvidence}</p>
              </article>`
          )
          .join("")}
      </section>
      <aside class="panel evidence-stack">
        <div class="section-label">Evidence trail</div>
        ${report.evidence
          .slice(0, 5)
          .map(
            (item) => `
              <article class="evidence-card">
                <span>${item.impact}</span>
                <h3>${item.title}</h3>
                <p>${item.competitor} / ${item.sourceType}</p>
              </article>`
          )
          .join("")}
      </aside>
    </main>
  `);
}

function renderRadar() {
  return layoutShell(`
    <main class="radar-layout">
      <section class="panel radar-panel">
        <div class="section-label">Market radar</div>
        <div class="radar-grid">
          ${report.targets
            .map((target, index) => {
              const related = report.evidence.filter((item) => item.competitorId === target.id);
              const score = related.reduce((sum, item) => sum + item.impact, 0) || 20;
              return `
                <article class="radar-target style-${index}">
                  <div>
                    <h2>${target.name}</h2>
                    <p>${target.watchReason}</p>
                  </div>
                  <strong>${score}</strong>
                </article>`;
            })
            .join("")}
        </div>
      </section>
      <section class="panel signal-table">
        <div class="section-label">Signals</div>
        <table>
          <thead>
            <tr>
              <th>Signal</th>
              <th>Target</th>
              <th>Impact</th>
              <th>Confidence</th>
            </tr>
          </thead>
          <tbody>
            ${report.evidence
              .map(
                (item) => `
                  <tr>
                    <td>${item.title}</td>
                    <td>${item.competitor}</td>
                    <td>${item.impact}</td>
                    <td>${item.confidence}</td>
                  </tr>`
              )
              .join("")}
          </tbody>
        </table>
      </section>
    </main>
  `);
}

function renderSwitcher() {
  const current = getVariant();
  const active = variants.find((variant) => variant.key === current) ?? variants[0];
  return `
    <nav class="prototype-switcher" aria-label="Prototype variants">
      <button data-direction="-1" aria-label="Previous variant">←</button>
      <span>${active.key} / ${active.name}</span>
      <button data-direction="1" aria-label="Next variant">→</button>
    </nav>
  `;
}

function bindEvents() {
  document.querySelectorAll(".prototype-switcher button").forEach((button) => {
    button.addEventListener("click", () => cycleVariant(Number(button.dataset.direction)));
  });

  document.addEventListener("keydown", (event) => {
    const target = event.target;
    const isTyping =
      target instanceof HTMLElement &&
      (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable);
    if (isTyping) return;
    if (event.key === "ArrowLeft") cycleVariant(-1);
    if (event.key === "ArrowRight") cycleVariant(1);
  });
}

function render() {
  const variant = getVariant();
  const renderers = {
    mission: renderMissionControl,
    brief: renderBriefRoom,
    radar: renderRadar
  };
  app.innerHTML = (renderers[variant] ?? renderMissionControl)();
  bindEvents();
}

window.espio = {
  report,
  markdown: generateBrief(report)
};

render();
