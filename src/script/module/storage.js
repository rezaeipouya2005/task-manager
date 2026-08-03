import { tasks } from "./state.js";

export function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}