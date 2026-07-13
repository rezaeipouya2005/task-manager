import { taskList, completedList, form, title, description, priorityButton, priorityButtons } from "./dom.js";
import { tasks, setEditingId } from "./state.js";
import { setPriorityValue, priorityText } from "./priority.js";

function handleEditClick(e) {
  const editBtn = e.target.closest(".edit-btn");
  if (!editBtn) return;

  const li = editBtn.closest("li") || editBtn.closest("div[data-id]");
  const id = Number(li.dataset.id);

  const task = tasks.find((t) => t.id === id);
  if (!task) return;

  title.value = task.title;
  description.value = task.description;

  setPriorityValue(task.priority);
  priorityButton.textContent = priorityText[task.priority];

  const matchingBtn = Array.from(priorityButtons).find(
    (btn) => btn.dataset.priority === task.priority
  );
  if (matchingBtn) {
    priorityButton.className = matchingBtn.className;
  }

  setEditingId(id);

  form.classList.remove("hidden");
}

export function initEdit() {
  taskList.addEventListener("click", handleEditClick);
  completedList.addEventListener("click", handleEditClick);
}