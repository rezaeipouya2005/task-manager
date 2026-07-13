export let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

export function setTasks(newTasks) {
  tasks = newTasks;
}
export let editingId = null;

export function setEditingId(id) {
  editingId = id;
}