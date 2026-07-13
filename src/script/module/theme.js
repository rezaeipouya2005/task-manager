import { lightBtn, darkBtn } from "./dom.js";

export function applyTheme(theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    darkBtn.classList.add("active");
    lightBtn.classList.remove("active");
  } else {
    document.documentElement.classList.remove("dark");
    lightBtn.classList.add("active");
    darkBtn.classList.remove("active");
  }
  localStorage.setItem("theme", theme);
}

export function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "light";
  applyTheme(savedTheme);

  darkBtn.addEventListener("click", () => {
    applyTheme("dark");
  });

  lightBtn.addEventListener("click", () => {
    applyTheme("light");
  });
}