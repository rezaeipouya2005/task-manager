let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const form = document.querySelector("#task-form");
const title = document.querySelector("#task-title");
const taskList = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");
const description = document.querySelector("#task-description");
const priorityButtons = document.querySelector(".task-priority");
const taskBtn = document.querySelector("#task-btn");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  emptyState.classList.toggle("hidden", tasks.length > 0);
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className = "flex justify-between gap-3 border rounded-md p-5";
    li.dataset.id = task.id;

    let priorityClass = "";
    if (task.priority === "high") {
      priorityClass = "bg-[#FFE2DB] text-[#FF5F37]";
    } else if (task.priority === "medium") {
      priorityClass = "bg-[#FFEFD6] text-[#FFAF37]";
    } else {
      priorityClass = "bg-[#C3FFF1] text-[#11A483]";
    }
    li.innerHTML = `
        <input type="checkbox" ${task.completed ? "checked" : ""}>

    <div>
        <h3>${task.title}</h3>
      ${task.description ? `<p>${task.description}</p>` : ""}
        <span class="${priorityClass}">${task.priority}</span>
    </div>

    <div class="relative">
    <button class="menu-btn" >
      <img src="" alt="frame">
    </button>

    <div class="menu hidden absolute right-0 bg-white border rounded shadow">
      <button class="edit-btn">
    <img src="" alt="edite"/>
      </button>
      <button class="delete-btn">
     <img src="" alt="delete"/>
      </button>
    </div>
  </div>
      `;
    taskList.appendChild(li);
  });
}
function taskForm() {
  form.classList.toggle("hidden");
}

taskBtn.addEventListener("click", taskForm);

function createTask(e) {
  e.preventDefault();
  const text = title.value;
  if (!text) return;

  const newTask = {
    id: Date.now(),
    title: text,
    description: description.value,
    priority: priority.value,
    completed: false,
  };

  tasks = [...tasks, newTask];

  saveTasks();
  renderTasks();

  title.value = "";
  description.value = "";
}
form.addEventListener("submit", createTask);
renderTasks();

function toggleMenu(button) {
  const menu = button.nextElementSibling;
  menu.classList.toggle("hidden");
}
