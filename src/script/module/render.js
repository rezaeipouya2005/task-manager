import { tasks } from "./state.js";
import {
  taskList,
  completedList,
  emptyState,
  todayCount,
  completedCount,
} from "./dom.js";
import { priorityText } from "./priority.js";

export function renderTasks() {
  taskList.innerHTML = "";

  emptyState.classList.toggle("hidden", tasks.length > 0);
  const activeTasks = tasks.filter((task) => !task.completed);
  todayCount.textContent = `${activeTasks.length} تسک را باید انجام دهید.`;
  emptyState.classList.toggle("hidden", activeTasks.length > 0);

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
        "w-full max-w-[744px] min-h-[105px] h-auto bg-surface border-2 border-border rounded-xl flex items-center relative justify-between  mt-2.5";

      li.innerHTML = `
        <img src="${priorityImage}" alt="" class="absolute right-0 top-0 h-full"/>

        <div class="flex items-start  flex-1 pr-2 relative">

          <input
            type="checkbox"
            class="w-[22px] h-[22px] mt-1 shrink-0 appearance-none rounded border border-white border-2 m-4"
            ${task.completed ? "checked" : ""}
          />

          <div class="flex-1 px-3 min-w-0">

            <div class="flex flex-col md:flex-row md:items-center gap-2">

              <p class="font-semibold text-base leading-7 text-text-primary">
  ${task.title}
</p>

              <p
                class="w-[54px] h-6 flex items-center justify-center rounded-lg text-text-secondary ${priorityClass}">
                ${priorityText[task.priority]}
              </p>

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

        <div class="flex items-center absolute top-4 left-1 z-50 ">

          <button class="menu-btn ">
            <img
              src="./src/asstes/icon/Frame 33317.svg"
              class="px-3 md:px-6 "
            />
          </button>

          <div class="menu hidden absolute left-5 top-5 bg-surface flex flex-row-reverseborder border border-border rounded-lg shadow-md p-2 z-50">

            <button class="edit-btn flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full">
            
             <svg class="text-nav-text " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


            </button>
             <div class="h-6 w-px bg-border mx-2 my-2"></div>
            <button class="delete-btn flex items-center gap-2 px-3 py-2 hover:bg-gray-100 w-full text-red-500">
              <svg class="text-nav-text " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </button>

          </div>

        </div>
      `;

      taskList.appendChild(li);
    });
}

export function completedTasks() {
  const completedCountNum = tasks.filter(
    (task) => task.completed === true,
  ).length;
  completedCount.textContent = `${completedCountNum} تسک انجام شده است.`;
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
      data-id="${task.id}"
      class="w-full max-w-[744px] md:h-[74px] h-auto bg-surface border-2 border-border rounded-xl flex items-center 
      justify-between relative gap-4  ">
          
       
          <img src="${priorityImage}" alt="" class="" />

            <div class="flex items-center gap-3 flex-1 min-w-0">
          <input type="checkbox" checked  class=" right-[11px] w-[22px] h-[22px] "  />
          <p class=" right-[58px] font-semibold text-base md:text-lg line-through text-text-primary">
    ${task.title}
</p>
          </div>

          <!-- سه نقطه -->
<div class="flex items-center gap-3 relative">
  <button class="menu-btn">
    <img
      src="./src/asstes/icon/Frame 33317.svg"
      alt=""
      class="px-3 md:px-6 shrink-0"
    />
  </button>

  <div class="menu hidden absolute left-5 top-5 bg-surface flex flex-row-reverse border border-border rounded-lg shadow-md p-2 z-50">
    <button type="button" class="edit-btn flex items-center gap-2 px-3 py-2 hover:bg-nav-hover-bg w-full text-text-primary">
      
    <svg class="text-nav-text " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7H6C5.46957 7 4.96086 7.21071 4.58579 7.58579C4.21071 7.96086 4 8.46957 4 9V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H15C15.5304 20 16.0391 19.7893 16.4142 19.4142C16.7893 19.0391 17 18.5304 17 18V17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 5.00011L19 8.00011M20.385 6.58511C20.7788 6.19126 21.0001 5.65709 21.0001 5.10011C21.0001 4.54312 20.7788 4.00895 20.385 3.61511C19.9912 3.22126 19.457 3 18.9 3C18.343 3 17.8088 3.22126 17.415 3.61511L9 12.0001V15.0001H12L20.385 6.58511Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </button>
    <div class="h-6 w-px bg-border mx-2 my-2"></div>
    <button type="button" class="delete-btn flex items-center gap-2 px-3 py-2 hover:bg-nav-hover-bg w-full text-error">
     <svg class="text-nav-text " width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7H20M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7M10 12L14 16M14 12L10 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
    </button>
  </div>
</div>
        </div>
        
        `;
    });
}
