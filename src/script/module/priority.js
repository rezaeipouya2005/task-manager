import {
  priorityButtons,
  priorityBox,
  priorityMenu,
  priorityPicture,
  priorityButton,
} from "./dom.js";

const defaultPriorityText = priorityButton.textContent;
const defaultPriorityClass = priorityButton.className;

export function resetPriorityButton() {
  priorityButton.textContent = defaultPriorityText;
  priorityButton.className = defaultPriorityClass;
}

export let priorityValue = "";

export const priorityText = {
  high: "بالا",
  medium: "متوسط",
  low: "پایین",
};

export function initPriority() {
  priorityButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      priorityValue = button.dataset.priority;

      priorityButton.textContent = button.textContent;
      priorityButton.className = button.className;
      priorityMenu.classList.add("hidden");
    });
  });

  priorityBox.addEventListener("click", () => {
  priorityMenu.classList.toggle("hidden");
  priorityPicture.classList.toggle("-rotate-90");
});

}

export function setPriorityValue(value) {
  priorityValue = value;
}