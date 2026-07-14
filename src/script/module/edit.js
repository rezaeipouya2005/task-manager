import {
  taskList,
  completedList,
  form,
  title,
  description,
  priorityButton,
  priorityButtons,
  priorityLabel,
  submitBtn,
  formOriginalParent,
  formOriginalNextSibling,
} from "./dom.js";
import { tasks, editingId, setEditingId } from "./state.js";
import { setPriorityValue, priorityText } from "./priority.js";
import { clearFormFields } from "./create.js";

function handleEditClick(e) {
  const editBtn = e.target.closest(".edit-btn");
  if (!editBtn) return;

  const li = editBtn.closest("li") || editBtn.closest("div[data-id]");
  const id = Number(li.dataset.id);

  const isFormOpen = !form.classList.contains("hidden");
  const isSameTask = editingId === id;

  if (isFormOpen && isSameTask) {
    form.classList.add("hidden");
    formOriginalParent.insertBefore(form, formOriginalNextSibling);
    setEditingId(null);
    clearFormFields();
    return;
  }

  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  title.value = task.title;
  description.value = task.description;

  setPriorityValue(task.priority);
  const priorityTextColorMap = { high: "text-high", medium: "text-medium", low: "text-low" };
priorityLabel.textContent = priorityText[task.priority];
priorityLabel.className = `${priorityTextColorMap[task.priority]} text-sm font-semibold leading-none text-right whitespace-nowrap`;
priorityPicture.classList.add("hidden");
  const matchingBtn = Array.from(priorityButtons).find(
    (btn) => btn.dataset.priority === task.priority
  );
  if (matchingBtn) {
    priorityButton.className = matchingBtn.className;
  }

  setEditingId(id);

  li.insertAdjacentElement("afterend", form);
  submitBtn.textContent = "ویرایش تسک";

  form.classList.remove("hidden");
}

export function initEdit() {
  taskList.addEventListener("click", handleEditClick);
  completedList.addEventListener("click", handleEditClick);
}