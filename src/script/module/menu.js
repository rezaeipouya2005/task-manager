
import { taskList } from "./dom.js";

export function toggleMenu(button) {
  const menu = button.nextElementSibling;
  menu.classList.toggle("hidden");
}


 export function initMenu() {
     taskList.addEventListener("click", (e) => {
  const menuBtn = e.target.closest(".menu-btn");
  if (menuBtn) return;

  document.querySelectorAll(".menu").forEach((menu) => {
      if (menu !== menuBtn.nextElementSibling) {
        menu.classList.add("hidden");
      }
    });
    toggleMenu(menuBtn);
});
}