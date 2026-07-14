import {
  priorityButtons,
  priorityBox,
  priorityMenu,
  priorityPicture,
  priorityButton,
  priorityLabel,
} from "./dom.js";

const defaultPriorityText = priorityLabel.textContent;
const defaultLabelClass = priorityLabel.className;
const defaultButtonClass = priorityButton.className;

export function resetPriorityButton() {
  priorityLabel.textContent = defaultPriorityText;
  priorityLabel.className = defaultLabelClass;
  priorityButton.className = defaultButtonClass;
  priorityPicture.classList.remove("hidden");
}

export let priorityValue = "";

export const priorityText = {
  high: "بالا",
  medium: "متوسط",
  low: "پایین",
};

const priorityTextColor = {
  high: "text-high",
  medium: "text-medium",
  low: "text-low",
};

export function initPriority() {
  priorityButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      priorityValue = button.dataset.priority;

      priorityLabel.textContent = button.textContent;
      priorityLabel.className = `${priorityTextColor[priorityValue]} text-sm font-semibold leading-none text-right whitespace-nowrap`;
      priorityButton.className = button.className;
      priorityPicture.classList.add("hidden");
      priorityMenu.classList.add("hidden");
    });
  });

  priorityBox.addEventListener("click", (e) => {
    priorityMenu.classList.toggle("hidden");
    priorityPicture.classList.toggle("-rotate-90");
    e.stopPropagation();
  });
}

export function setPriorityValue(value) {
  priorityValue = value;
}