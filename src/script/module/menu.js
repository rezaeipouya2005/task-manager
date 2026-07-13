import { taskList, completedList } from "./dom.js";

export function toggleMenu(button) {
  const menu = button.nextElementSibling;
  menu.classList.toggle("hidden");
}

function handleMenuClick(e) {
  const menuBtn = e.target.closest(".menu-btn");
  if (!menuBtn) return;

  document.querySelectorAll(".menu").forEach((menu) => {
    if (menu !== menuBtn.nextElementSibling) {
      menu.classList.add("hidden");
    }
  });
  toggleMenu(menuBtn);
}

export function initMenu() {
  taskList.addEventListener("click", handleMenuClick);
  completedList.addEventListener("click", handleMenuClick);
}