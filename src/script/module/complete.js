import { taskList, completedList } from "./dom.js";
import { tasks } from "./state.js";
import { saveTasks } from "./storage.js";
import { renderTasks, completedTasks } from "./render.js";

function handleCheckboxClick(e) {
  if (e.target.type !== "checkbox") return;

  const li = e.target.closest("li") || e.target.closest("div[data-id]");
  const id = Number(li.dataset.id);

  tasks.forEach((task) => {
    if (task.id === id) {
      task.completed = e.target.checked;
    }
  });

  saveTasks();
  renderTasks();
  completedTasks();
}

export function initComplete() {
  taskList.addEventListener("click", handleCheckboxClick);
  completedList.addEventListener("click", handleCheckboxClick);
}