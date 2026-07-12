

import { renderTasks, completedTasks } from "./module/render.js";

import { initCreate } from "./module/create.js";
import { initPriority } from "./module/priority.js";
import { initComplete } from "./module/complete.js";
import { initMenu } from "./module/menu.js";

renderTasks();
completedTasks();

initCreate();
initPriority();
initComplete();
initMenu();

