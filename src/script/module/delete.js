import { taskList, completedList } from "./dom.js";
import { tasks, setTasks } from "./state.js";
import { saveTasks } from "./storage.js";
import { renderTasks, completedTasks } from "./render.js";

function handleDeleteClick(e) {
  const deleteBtn = e.target.closest(".delete-btn");
  if (!deleteBtn) return;

  const li = deleteBtn.closest("li") || deleteBtn.closest("div[data-id]");
  const id = Number(li.dataset.id);

  const newTasks = tasks.filter((task) => task.id !== id);
  setTasks(newTasks);

  saveTasks();
  renderTasks();
  completedTasks();
}

export function initDelete() {
  taskList.addEventListener("click", handleDeleteClick);
  completedList.addEventListener("click", handleDeleteClick);
}