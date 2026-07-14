console.log("CREATE FILE RUNNING");

import { form, title, description, taskBtn, closeFormBtn, submitBtn, formOriginalParent, formOriginalNextSibling } from "./dom.js";
import { tasks, setTasks, editingId, setEditingId } from "./state.js";
import { saveTasks } from "./storage.js";
import { renderTasks, completedTasks } from "./render.js";
import { priorityValue, setPriorityValue, resetPriorityButton } from "./priority.js";

function resetFormPosition() {
  formOriginalParent.insertBefore(form, formOriginalNextSibling);
  submitBtn.textContent = "اضافه کردن تسک";
}

export function clearFormFields() {
  title.value = "";
  description.value = "";
  setPriorityValue("");
  resetPriorityButton();
}

export function taskForm() {
  if (editingId !== null) {
    setEditingId(null);
    resetFormPosition();
    clearFormFields();
    form.classList.remove("hidden");
    return;
  }

  const isHidden = form.classList.contains("hidden");
  if (isHidden) {
    resetFormPosition();
  }
  form.classList.toggle("hidden");
}

export function createTask(e) {
  e.preventDefault();
  const text = title.value;
  if (!text) return;

  if (editingId !== null) {
    tasks.forEach((task) => {
      if (task.id === editingId) {
        task.title = text;
        task.description = description.value;
        task.priority = priorityValue || "low";
      }
    });
    setEditingId(null);
  } else {
    const newTask = {
      id: Date.now(),
      title: text,
      description: description.value,
      priority: priorityValue || "low",
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  saveTasks();
  renderTasks();
  completedTasks();
  form.classList.add("hidden");
  resetFormPosition();
  clearFormFields();
}

export function initCreate() {
  form.addEventListener("submit", createTask);

  taskBtn.addEventListener("click", taskForm);
  closeFormBtn.addEventListener("click", () => {
    form.classList.add("hidden");
    resetFormPosition();
    setEditingId(null);
    clearFormFields();
  });
}