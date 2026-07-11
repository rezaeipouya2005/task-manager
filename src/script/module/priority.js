import {
  priorityButtons,
  priorityBox,
  priorityMenu,
  priorityPicture,
  priorityButton,
} from "./dom.js";

export let priorityValue = "";

export const priorityText = {
  high: "بالا",
  medium: "متوسط",
  low: "پایین",
};

export function initPriority() {
  priorityButtons.forEach((button) => {
    button.addEventListener("click", () => {
      priorityValue = button.dataset.priority;

      priorityButton.textContent = button.textContent;
      priorityButton.className = button.className;
      priorityMenu.classList.add("hidden");

      priorityButtons.forEach((item) => {
        if (item === button) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });

  priorityBox.addEventListener("click", () => {
    priorityMenu.classList.toggle("hidden");
    if (priorityMenu.classList.contains("hidden")) {
      priorityPicture.src = `./src/asstes/icon/tag-right@2x.png"`;
    } else {
      priorityPicture.src = `./src/asstes/icon/tag-right.svg"`;
    }
  });
}
