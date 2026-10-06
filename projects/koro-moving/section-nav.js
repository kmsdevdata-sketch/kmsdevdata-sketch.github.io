const sections = [
  ["01", "프로젝트 한눈에 보기", "executive-summary.html"],
  ["02", "문제와 제품 흐름", "problem-product-flow.html"],
  ["03", "기여 범위", "contribution-scope.html"],
  ["04", "시스템 구조", "system-architecture.html"],
  ["05", "검증과 멱등성", "verification-idempotency.html"],
  ["06", "온프레미스 Agent", "onprem-runtime.html"],
  ["07", "복구와 장애 전환", "recovery-failover.html"],
  ["08", "Troubleshooting", "technical-challenges.html"],
  ["09", "실제 배포 검증", "performance-validation.html"],
  ["10", "결과와 다음 단계", "results-limitations.html"],
];

const contentVersion = "20261007-5";
const versioned = (href) => `${href}?v=${contentVersion}`;

const current = document.body.dataset.section;
const index = sections.findIndex((section) => section[2] === current);

document.querySelector(".room-list").innerHTML = sections
  .map(
    ([number, label, href]) =>
      `<a href="${versioned(href)}"${href === current ? ' aria-current="page"' : ""}><span>${number}</span><span class="room-label">${label}</span></a>`,
  )
  .join("");

const actions = document.querySelector(".room-actions");
const previous = index > 0 ? sections[index - 1] : null;
const next = index < sections.length - 1 ? sections[index + 1] : null;

actions.innerHTML = `${
  previous
    ? `<a href="${versioned(previous[2])}">이전: ${previous[1]}</a>`
    : '<a href="../koro-moving.html">전체 섹션</a>'
}${
  next
    ? `<a href="${versioned(next[2])}">다음: ${next[1]}</a>`
    : '<a href="../koro-moving.html">전체 섹션</a>'
}`;
