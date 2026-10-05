const sections = [
  ["01", "Executive Summary", "executive-summary.html"],
  ["02", "Problem & Product Flow", "problem-product-flow.html"],
  ["03", "Contribution & Scope", "contribution-scope.html"],
  ["04", "System Architecture", "system-architecture.html"],
  ["05", "Verification & Idempotency", "verification-idempotency.html"],
  ["06", "On-Prem Agent Runtime", "onprem-runtime.html"],
  ["07", "Recovery, Cleanup & Failover", "recovery-failover.html"],
  ["08", "Technical Challenges", "technical-challenges.html"],
  ["09", "Performance & Validation", "performance-validation.html"],
  ["10", "Results & Limitations", "results-limitations.html"],
];

const current = document.body.dataset.section;
const index = sections.findIndex((section) => section[2] === current);

document.querySelector(".room-list").innerHTML = sections
  .map(
    ([number, label, href]) =>
      `<a href="${href}"${href === current ? ' aria-current="page"' : ""}><span>${number}</span><span class="room-label">${label}</span></a>`,
  )
  .join("");

const actions = document.querySelector(".room-actions");
const previous = index > 0 ? sections[index - 1] : null;
const next = index < sections.length - 1 ? sections[index + 1] : null;

actions.innerHTML = `${
  previous
    ? `<a href="${previous[2]}">Previous: ${previous[1]}</a>`
    : '<a href="../koro-moving.html">All Sections</a>'
}${
  next
    ? `<a href="${next[2]}">Next: ${next[1]}</a>`
    : '<a href="../koro-moving.html">All Sections</a>'
}`;
