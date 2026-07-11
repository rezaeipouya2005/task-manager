import { tasks } from "./state.js";
import { taskList, completedList, emptyState } from "./dom.js";
import { priorityText } from "./priority.js";

export function renderTasks() {
  taskList.innerHTML = "";

  emptyState.classList.toggle("hidden", tasks.length > 0);

  tasks
    .filter((task) => !task.completed)
    .forEach((task) => {
      const li = document.createElement("li");

      li.dataset.id = task.id;

      let priorityClass = "";
      let priorityImage = "";

      if (task.priority === "high") {
        priorityClass = "bg-high-bg text-high";
        priorityImage = "./src/asstes/icon/Frame 1000005475 red.svg";
      } else if (task.priority === "medium") {
        priorityClass = "bg-medium-bg text-medium";
        priorityImage = "./src/asstes/icon/Frame 1000005475 (3).svg";
      } else {
        priorityClass = "bg-low-bg text-low";
        priorityImage = "./src/asstes/icon/Frame 1000005475 green.svg";
      }

      li.className =
        "w-full max-w-[744px] min-h-[105px] h-auto bg-white border-2 border-border rounded-3 flex items-center justify-between relative mt-2.5";

      li.innerHTML = `
        <img src="${priorityImage}" alt="" class="absolute right-0 top-0 h-full"/>

        <div class="flex items-start gap-3 flex-1 pr-2">

          <input
            type="checkbox"
            class="w-[22px] h-[22px] mt-1 shrink-0"
            ${task.completed ? "checked" : ""}
          />

          <div class="flex-1 px-3 min-w-0">

            <div class="flex flex-col md:flex-row md:items-center gap-2">

              <p class="font-semibold text-base leading-7">
                ${task.title}
              </p>

              <button
                class="w-[54px] h-6 flex items-center justify-center rounded-lg ${priorityClass}">
                ${priorityText[task.priority]}
              </button>

            </div>

            ${
              task.description
                ? `<p class="pt-2.5 text-neutral-7 mt-2 leading-6">
              ${task.description}
            </p>
            `
                : ""
            }

          </div>

        </div>

        <div class="flex items-center">

          <button class="menu-btn">
            <img
              src="./src/asstes/icon/Frame 33317.svg"
              class="px-3 md:px-6"
            />
          </button>

          <div class="menu hidden absolute left-5 top-14 bg-white border rounded-lg shadow-md p-2 z-50">

            <button class="edit-btn flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full">
              ویرایش
            </button>

            <button class="delete-btn flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full text-red-500">
              حذف
            </button>

          </div>

        </div>
      `;

      taskList.appendChild(li);
    });
}

export function completedTasks() {
  completedList.innerHTML = "";

  tasks
    .filter((task) => task.completed === true)
    .forEach((task) => {
      let priorityImage = "";

      if (task.priority === "high") {
        priorityImage = "./src/asstes/icon/Frame 1000005475 red s.svg";
      } else if (task.priority === "medium") {
        priorityImage = "./src/asstes/icon/Frame 1000005475 yellow.svg";
      } else {
        priorityImage = "./src/asstes/icon/Frame 1000005475.svg";
      }

      completedList.innerHTML += `
       <div
          class="w-full max-w-[744px] md:h-[74px] h-auto bg-white border-2 border-border rounded-3 flex items-center 
          justify-between relative gap-4  ">
          
       
          <img src="${priorityImage}" alt="" class="" />

            <div class="flex items-center gap-3 flex-1 min-w-0">
          <input type="checkbox" checked  class=" right-[11px] w-[22px] h-[22px] "  />
          <p class=" right-[58px] font-semibold text-base md:text-lg line-through">
              ${task.title}
          </p>
          </div>

          <!-- سه نقطه -->
          <div class="flex items-center gap-3">
            <img
              src="./src/asstes/icon/Frame 33317.svg"
              alt=""
              class="px-3 md:px-6 shrink-0"
            /> 

            
          </div>
        </div>
        
        `;
    });
}
