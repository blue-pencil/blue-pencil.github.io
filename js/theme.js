function applyTheme(isDark) {
  const body = document.body;
  const toggleHandle = document.querySelector(".toggle-handle");
  if (isDark) {
    body.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleHandle.style.left = "25px";
  } else {
    body.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    toggleHandle.style.left = "3px";
  }
}

function toggleDarkMode() {
  const isDark = document.body.getAttribute("data-theme") === "dark";
  applyTheme(!isDark);
}

window.onload = function () {
  const savedTheme = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (savedTheme) {
    applyTheme(savedTheme === "dark");
  } else {
    applyTheme(prefersDark);
  }
};
