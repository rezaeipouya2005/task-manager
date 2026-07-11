export let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

export function setTasks(newTasks) {
  tasks = newTasks;
}