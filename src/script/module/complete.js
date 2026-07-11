
import { taskList } from "./dom.js";
import { tasks } from "./state.js";
import { saveTasks } from "./storage.js";
import { renderTasks, completedTasks } from "./render.js";

export function initComplete() {
  taskList.addEventListener("click", (e) => {
    if (e.target.type !== "checkbox") return;

    const li = e.target.closest("li");
    const id = Number(li.dataset.id);

    tasks.forEach((task) => {
      if (task.id === id) {
        task.completed = e.target.checked;
      }
    });

    saveTasks();
    renderTasks();
    completedTasks();
  });
}