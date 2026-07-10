let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const form = document.querySelector("#task-form");
const title = document.querySelector("#task-title");
const taskList = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");
const description = document.querySelector("#task-description");
const priorityButtons = document.querySelectorAll(".task-priority");
const taskBtn = document.querySelector("#task-btn");

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  emptyState.classList.toggle("hidden", tasks.length > 0);
  tasks.forEach((task) => {
    const li = document.createElement("li");
    li.className =
      "flex justify-between gap-3 border rounded-md p-5 shadow-md ";
    li.dataset.id = task.id;

    let priorityClass = "";
    if (task.priority === "high") {
      priorityClass = "bg-[#FFE2DB] text-[#FF5F37]";
    } else if (task.priority === "medium") {
      priorityClass = "bg-[#FFEFD6] text-[#FFAF37]";
    } else {
      priorityClass = "bg-[#C3FFF1] text-[#11A483]";
    }

    let priorityImage = "";

    if (task.priority === "high") {
      priorityImage = "./src/assets/icon/Frame 1000005475 red.svg";
    } else if (task.priority === "medium") {
      priorityImage = "./src/assets/icon/Frame 1000005475 (3).svg";
    } else {
      priorityImage = "./src/assets/icon/Frame 1000005475.png";
    }

    li.innerHTML = `
    <div class="flex items-start gap-2 flex-1 border border-border relative justify-between p-4">
        <input type="checkbox" class="p-1" ${task.completed ? "checked" : ""}>
        <img src="${priorityImage}" class="absolute" />
    <div class="flex flex-col">
    <div class="flex flex-row gap-2">
        <h3>${task.title}</h3>
        <span class="${priorityClass}"> ${priorityText[task.priority]}</span>
    </div>
     ${task.description ? `<p>${task.description}</p>` : ""}
    </div>

    <div class="absolute">
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

taskList.addEventListener("click", (e) => {
  if (e.target.type === "checkbox") {
    const taskContent = e.target.closest("li").querySelector("div");
    taskContent.classList.toggle("line-through", e.target.checked);
  }
});

let priorityValue = "";
priorityButtons.forEach((button) => {
  button.addEventListener("click", () => {
    priorityValue = button.dataset.priority;
  });
});

const priorityText = {
  high: "بالا",
  medium: "متوسط",
  low: "پایین",
};

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
    priority: priorityValue,
    completed: false,
  };

  tasks = [...tasks, newTask];

  saveTasks();
  renderTasks();

  title.value = "";
  description.value = "";
  priorityValue = "";
}
form.addEventListener("submit", createTask);
renderTasks();

function toggleMenu(button) {
  const menu = button.nextElementSibling;
  menu.classList.toggle("hidden");
}

taskList.addEventListener("click", (e) => {
  const menuBtn = e.target.closest(".menu-btn");
});
