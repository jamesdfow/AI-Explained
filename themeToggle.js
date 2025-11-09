(function () {
  const STORAGE_KEY = "ai-explained-theme";
  const root = document.documentElement;
  const prefersDark = window.matchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)").matches
    : false;

  let toggleButton = null;

  const themeStyles = document.createElement("style");
  themeStyles.setAttribute("data-theme-toggle", "");
  themeStyles.textContent = `
:root.theme-dark {
  color-scheme: dark;
}

:root.theme-light {
  color-scheme: light;
  --surface-color: rgba(15, 23, 42, 0.04);
  --surface-border: rgba(15, 23, 42, 0.08);
  --text-muted: #475569;
}

:root.theme-light body {
  background-color: #f4f6fb;
  color: #111827;
}

:root.theme-light a {
  color: #1d4ed8;
}

:root.theme-light a:hover,
:root.theme-light a:focus {
  color: #1e3a8a;
}

:root.theme-light .section-link {
  color: #7c3aed;
}

:root.theme-light .section-link:hover,
:root.theme-light .section-link:focus {
  color: #5b21b6;
}

:root.theme-light .btn {
  background: linear-gradient(135deg, #1d4ed8, #5b21b6);
  color: #f8fafc;
  text-shadow: 0 1px 1px rgba(15, 23, 42, 0.35);
  box-shadow: 0 20px 44px rgba(29, 78, 216, 0.28);
  border: 1px solid rgba(15, 23, 42, 0.2);
}

:root.theme-light .btn:hover,
:root.theme-light .btn:focus {
  box-shadow: 0 24px 54px rgba(29, 78, 216, 0.35);
  color: #f8fafc;
}

:root.theme-light .btn:focus-visible {
  outline-color: rgba(29, 78, 216, 0.6);
}

:root.theme-light .navbar {
  background-color: rgba(255, 255, 255, 0.95) !important;
  backdrop-filter: blur(12px);
  --bs-navbar-color: rgba(17, 24, 39, 0.72);
  --bs-navbar-hover-color: rgba(17, 24, 39, 0.95);
  --bs-navbar-active-color: #111827;
  --bs-navbar-brand-color: #111827;
  --bs-navbar-brand-hover-color: #111827;
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.12);
}

:root.theme-light .navbar .navbar-brand,
:root.theme-light .navbar .nav-link {
  color: var(--bs-navbar-color);
}

:root.theme-light .navbar .nav-link:hover,
:root.theme-light .navbar .nav-link:focus {
  color: var(--bs-navbar-hover-color);
}

:root.theme-light .navbar .nav-link.active {
  color: var(--bs-navbar-active-color);
}

:root.theme-light .navbar .navbar-toggler {
  border-color: rgba(17, 24, 39, 0.25);
  color: rgba(17, 24, 39, 0.7);
}

:root.theme-light .navbar .navbar-toggler-icon {
  filter: invert(0.85);
}

:root.theme-light .offcanvas.text-bg-dark {
  background-color: #ffffff !important;
  color: #111827;
}

:root.theme-light .offcanvas.text-bg-dark .btn-close {
  filter: invert(0.85);
}

:root.theme-light .offcanvas.text-bg-dark .nav-link {
  color: rgba(17, 24, 39, 0.85);
}

:root.theme-light .offcanvas.text-bg-dark .nav-link:is(:hover, :focus) {
  color: #1d4ed8;
}

:root.theme-light .detail-tabs {
  background: rgba(15, 23, 42, 0.08);
}

:root.theme-light .detail-tab {
  background-color: transparent;
  color: #0f172a;
}

:root.theme-light .detail-tab:is(:hover, :focus-visible) {
  background: rgba(37, 99, 235, 0.12);
}

:root.theme-light .detail-tab.is-active {
  background: linear-gradient(135deg, #1d4ed8, #5b21b6);
  color: #f8fafc;
}

:root.theme-light .detail-card {
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0 28px 60px rgba(15, 23, 42, 0.16);
  border-color: rgba(15, 23, 42, 0.08);
}

:root.theme-light .detail-card__eyebrow,
:root.theme-light .detail-caption,
:root.theme-light .detail-keypoint__label {
  color: #7c3aed;
}

:root.theme-light .detail-keypoint {
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 16px 38px rgba(15, 23, 42, 0.18);
  border-color: rgba(15, 23, 42, 0.08);
}

:root.theme-light .detail-article {
  background: rgba(255, 255, 255, 0.92);
  box-shadow: 0 24px 52px rgba(15, 23, 42, 0.15);
  border-color: rgba(15, 23, 42, 0.08);
}

:root.theme-light .card {
  background-color: #ffffff;
  color: #111827;
  border-color: rgba(15, 23, 42, 0.08);
  box-shadow: 0 18px 38px rgba(15, 23, 42, 0.12);
}

:root.theme-light .card .card-text {
  color: #475569;
}

:root.theme-light .dropdown-menu {
  background-color: #ffffff;
  border-color: rgba(15, 23, 42, 0.08);
  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.18);
}

:root.theme-light .dropdown-item {
  color: #111827;
}

:root.theme-light .dropdown-item:hover,
:root.theme-light .dropdown-item:focus {
  background-color: rgba(37, 99, 235, 0.12);
  color: #1d4ed8;
}

:root.theme-light .accordion-button,
:root.theme-light .accordion-body {
  color: #111827;
}

:root.theme-light .accordion-button:not(.collapsed) {
  color: #2563eb;
  background-color: rgba(37, 99, 235, 0.08);
}

:root.theme-light .accordion-item {
  background-color: #ffffff;
  border-color: rgba(15, 23, 42, 0.08);
}

:root.theme-light .theme-toggle__button {
  color: #ffffff;
}

@media (prefers-reduced-motion: reduce) {
  :root.theme-light .btn,
  :root.theme-dark .btn {
    transition: none;
  }
}
`;
  document.head.appendChild(themeStyles);

  function readStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /* ignore */
    }
  }

  function applyTheme(theme) {
    const normalized = theme === "light" ? "light" : "dark";
    root.classList.remove("theme-light", "theme-dark");
    root.classList.add(`theme-${normalized}`);
    storeTheme(normalized);
    if (toggleButton) {
      const isLight = normalized === "light";
      toggleButton.setAttribute("aria-pressed", String(isLight));
      toggleButton.textContent = isLight
        ? "Switch to dark mode"
        : "Switch to light mode";
    }
  }

  function getInitialTheme() {
    const stored = readStoredTheme();
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    return prefersDark ? "dark" : "light";
  }

  const navContainer = document.querySelector(".navbar .container-fluid");
  if (!navContainer) {
    applyTheme(getInitialTheme());
    return;
  }

  const toggleWrapper = document.createElement("div");
  toggleWrapper.classList.add(
    "theme-toggle",
    "d-flex",
    "align-items-center",
    "ms-auto",
    "gap-2"
  );

  toggleButton = document.createElement("button");
  toggleButton.type = "button";
  toggleButton.className = "btn btn-primary theme-toggle__button";
  toggleButton.setAttribute("aria-label", "Toggle light and dark mode");

  toggleWrapper.appendChild(toggleButton);

  const insertionTarget = navContainer.querySelector(".offcanvas");
  if (insertionTarget) {
    navContainer.insertBefore(toggleWrapper, insertionTarget);
  } else {
    navContainer.appendChild(toggleWrapper);
  }

  const initialTheme = getInitialTheme();
  applyTheme(initialTheme);

  toggleButton.addEventListener("click", () => {
    const nextTheme = root.classList.contains("theme-light") ? "dark" : "light";
    applyTheme(nextTheme);
  });
})();
