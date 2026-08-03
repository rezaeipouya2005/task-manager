// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// const form = document.querySelector("#task-form");
// const title = document.querySelector("#task-title");
// const taskList = document.querySelector("#task-list");
// const emptyState = document.querySelector("#empty-state");
// const description = document.querySelector("#task-description");
// const priorityButtons = document.querySelectorAll(".task-priority");
// const taskBtn = document.querySelector("#task-btn");
// const priorityBox = document.querySelector("#priorityBox");
// const priorityMenu = document.querySelector("#priorityMenu");
// const priorityPicture = document.querySelector("#priorityPicture");
// const completedList = document.querySelector("#completed-list");

// function saveTasks() {
//   localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function renderTasks() {
//   taskList.innerHTML = "";
//   emptyState.classList.toggle("hidden", tasks.length > 0);
//   tasks.forEach((task) => {
//     const li = document.createElement("li");
//     li.className =
//       "flex w-full max-w-[744px] min-h-[105px] h-auto bg-white border-2 border-border rounded- flex items-center justify-between relative mt-2.5";
//     li.dataset.id = task.id;

//     let priorityClass = "";
//     if (task.priority === "high") {
//       priorityClass = "bg-[#FFE2DB] text-[#FF5F37]";
//     } else if (task.priority === "medium") {
//       priorityClass = "bg-[#FFEFD6] text-[#FFAF37]";
//     } else {
//       priorityClass = "bg-[#C3FFF1] text-[#11A483]";
//     }

//     let priorityImage = "";

//     if (task.priority === "high") {
//       priorityImage = "./src/asstes/icon/Frame 1000005475 red.svg";
//     } else if (task.priority === "medium") {
//       priorityImage = "./src/asstes/icon/Frame 1000005475 (3).svg";
//     } else {
//       priorityImage = "./src/asstes/icon/Frame 1000005475 green.svg";
//     }

//     li.innerHTML = `

  
//           <img src="${priorityImage}" alt="" class="" />
//           <div class="flex items-start gap-3 flex-1  pr-2">
//           <input type="checkbox" class=" w-[22px] h-[22px] mt-1 shrink-0 p-1" ${task.completed ? "checked" : ""}/>
//            <div class="flex-1  px-3 min-w-0">
//           <div class="flex flex-col md:flex-row md:items-center gap-2">
//           <h3 class="  font-semibold text-base leading-7 "> ${task.title} </h3>
//           <span class="w-[54px] h-6  rounded-lg text-high  ${priorityClass}"> ${priorityText[task.priority]}</span>
//            </div>
//            ${task.description ? `<p class="pt-2.5 bottom-6 text-neutral-7 mt-2 leading-6" >${task.description}</p>` : ""}
//           </div>
 
//     <div class="absolute right-1/5">
//     <button class="menu-btn flex items-start" >
//       <img src="./src/asstes/icon/Frame 33317.svg" alt="frame">
//     </button>

//     <div class="menu hidden absolute right-0 bg-white border rounded shadow">
//       <button class="edit-btn">
//     <img src="" alt="edite"/>
//       </button>
//       <button class="delete-btn">
//      <img src="" alt="delete"/>
//       </button>
//     </div>
//   </div>
//       `;
//     taskList.appendChild(li);
//   });
// }

// function completedTasks() {
//   completedList.innerHTML = "";

//   tasks
//     .filter((task) => task.completed === true)
//     .forEach((task) => {
//       completedList.innerHTML += `
//        <div
//           class="w-full max-w-[744px] md:h-[74px] h-auto bg-white border-2 border-border rounded-3 flex items-center 
//           justify-between relative gap-4  ">
          
//          <!-- سه نقطه  -->
//           <img src="./src/asstes/icon/Frame 1000005475.svg" alt="" class="" />

//             <div class="flex items-center gap-3 flex-1 min-w-0">
//           <input type="checkbox" checked disable class=" right-[11px] w-[22px] h-[22px] "  />
//           <p class=" right-[58px] font-semibold text-base md:text-lg">
//               ${task.title}
//           </p>
//           </div>

//           <!-- سمت راست -->
//           <div class="flex items-center gap-3">
//             <img
//               src="./src/asstes/icon/Frame 33317.svg"
//               alt=""
//               class="px-3 md:px-6 shrink-0"
//             /> 

            
//           </div>
//         </div>
        
//         `;
//     });
// }

// taskList.addEventListener("click", (e) => {
//   if (e.target.type === "checkbox") {
//     const li = e.target.closest("li");
//     const id = Number(li.dataset.id);
//     tasks.forEach((task) => {
//       if (task.id === id) {
//         task.completed = e.target.checked;
//       }
//     });
//     saveTasks();
//     renderTasks();
//     completedTasks();
//   }
// });

// let priorityValue = "";
// priorityButtons.forEach((button) => {
//   button.addEventListener("click", () => {
//     priorityValue = button.dataset.priority;

//     priorityButtons.forEach((item) => {
//       if (item === button) {
//         item.classList.remove("hidden");
//       } else {
//         item.classList.add("hidden");
//       }
//     });
//   });
// });

// const priorityText = {
//   high: "بالا",
//   medium: "متوسط",
//   low: "پایین",
// };

// priorityBox.addEventListener("click", () => {
//   priorityMenu.classList.toggle("hidden");
//   if (priorityMenu.classList.toggle("hidden")) {
//     priorityPicture.src = `<img src="./src/asstes/icon/tag-right@2x.png"/>`;
//   } else {
//     priorityPicture.src = `<img src="/src/asstes/icon/tag-right.svg"/>`;
//   }
// });

// function taskForm() {
//   form.classList.toggle("hidden");
// }

// taskBtn.addEventListener("click", taskForm);

// function createTask(e) {
//   e.preventDefault();
//   const text = title.value;
//   if (!text) return;

//   const newTask = {
//     id: Date.now(),
//     title: text,
//     description: description.value,
//     priority: priorityValue,
//     completed: false,
//   };

//   tasks = [...tasks, newTask];

//   saveTasks();
//   renderTasks();
//   completedTasks();
//   form.classList.add("hidden");

//   title.value = "";
//   description.value = "";
//   priorityValue = "";
// }
// form.addEventListener("submit", createTask);
// renderTasks();

// function toggleMenu(button) {
//   const menu = button.nextElementSibling;
//   menu.classList.toggle("hidden");
// }

// taskList.addEventListener("click", (e) => {
//   const menuBtn = e.target.closest(".menu-btn");
//   if (menuBtn) {
//     toggleMenu(menuBtn);
//   }
// });
