import { sidebar, menuBtn, closeBtn, overlay } from "./dom.js";

export function openSidebar() {
  sidebar.classList.remove("translate-x-full");
  overlay.classList.remove("hidden");
}

export function closeSidebar() {
  sidebar.classList.add("translate-x-full");
  overlay.classList.add("hidden");
}

export function initSidebar() {
  menuBtn.addEventListener("click", openSidebar);
  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);
}