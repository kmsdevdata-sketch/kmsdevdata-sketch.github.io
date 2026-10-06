const detailContentVersion = "20261007-5";

document.querySelectorAll('a[href]').forEach((link) => {
  const href = link.getAttribute("href");

  if (!href || !href.includes(".html") || href.startsWith("http")) {
    return;
  }

  const url = new URL(href, window.location.href);
  url.searchParams.set("v", detailContentVersion);
  link.href = `${url.pathname}${url.search}${url.hash}`;
});
