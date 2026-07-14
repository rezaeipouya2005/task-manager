import {
  priorityButtons,
  priorityBox,
  priorityMenu,
  priorityPicture,
  priorityButton,
  priorityLabel,
  priorityClearBtn,
} from "./dom.js";

const defaultPriorityText = priorityLabel.textContent;
const defaultLabelClass = priorityLabel.className;
const defaultButtonClass = priorityButton.className;

let isMenuOpen = false;

function setMenuOpen(open) {
  isMenuOpen = open;
  priorityMenu.classList.toggle("hidden", !open);
  priorityPicture.classList.toggle("-rotate-90", !open);
}

export function resetPriorityButton() {
  priorityLabel.textContent = defaultPriorityText;
  priorityLabel.className = defaultLabelClass;
  priorityButton.className = defaultButtonClass;
  priorityPicture.classList.remove("hidden");
  setMenuOpen(false);
  priorityClearBtn.classList.add("hidden");
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

const priorityBgColor = {
  high: "bg-high-bg",
  medium: "bg-medium-bg",
  low: "bg-low-bg",
};

export function initPriority() {
  priorityButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      priorityValue = button.dataset.priority;

      priorityLabel.textContent = button.textContent;
      priorityLabel.className = `${priorityTextColor[priorityValue]} text-sm font-semibold leading-none text-right whitespace-nowrap`;
      priorityButton.className = "flex items-center justify-center gap-1.5 w-[73px] h-[30px] px-2 py-1 rounded relative";
      priorityButton.classList.add(priorityBgColor[priorityValue]);
      priorityPicture.classList.add("hidden");
      priorityClearBtn.classList.remove("hidden");
      setMenuOpen(false);
    });
  });

  priorityBox.addEventListener("click", (e) => {
    if (priorityClearBtn.contains(e.target)) return;
    setMenuOpen(!isMenuOpen);
    e.stopPropagation();
  });

  priorityClearBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    resetPriorityButton();
    priorityValue = "";
  });
}

export function setPriorityValue(value) {
  priorityValue = value;
}