console.log("CREATE FILE RUNNING");

import { form, title, description, taskBtn } from "./dom.js";
import { tasks, setTasks } from "./state.js";
import { saveTasks } from "./storage.js";
import { renderTasks, completedTasks } from "./render.js";
import { priorityValue } from "./priority.js";

export function taskForm() {
  form.classList.toggle("hidden");
}

export function createTask(e) {
  e.preventDefault();
  const text = title.value;
  if (!text) return;

  const newTask = {
    id: Date.now(),
    title: text,
    description: description.value,
    priority: priorityValue,
    completed: false,
  };

 setTasks = [...tasks, newTask];

  saveTasks();
  renderTasks();
  completedTasks();
  form.classList.add("hidden");

  title.value = "";
  description.value = "";
  priorityValue = "";
}

export function initCreate() {
  form.addEventListener("submit", createTask);

  taskBtn.addEventListener("click", taskForm);
}
