// Capibara Music — small JS for dropdown + current nav + language active

(function () {
  // Dropdown toggle
  document.querySelectorAll("[data-dropdown]").forEach((dd) => {
    const btn = dd.querySelector("[data-dropdown-button]");
    if (!btn) return;

    const close = () => dd.setAttribute("aria-expanded", "false");
    const open = () => dd.setAttribute("aria-expanded", "true");

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const expanded = dd.getAttribute("aria-expanded") === "true";
      expanded ? close() : open();
    });

    document.addEventListener("click", (e) => {
      if (!dd.contains(e.target)) close();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  });

  // Set aria-current on matching nav link
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  document.querySelectorAll(".nav-link").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href) return;
    const normalized = href.replace(/\/+$/, "") || "/";
    if (normalized === path) a.setAttribute("aria-current", "page");
  });
})();
