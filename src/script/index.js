

import { renderTasks, completedTasks } from "./module/render.js";

import { initCreate } from "./module/create.js";
import { initPriority } from "./module/priority.js";
import { initComplete } from "./module/complete.js";
import { initMenu } from "./module/menu.js";
import { initTheme } from "./module/theme.js";
import { initSidebar } from "./module/sidebar.js";
import { initDelete } from "./module/delete.js";
import { initEdit } from "./module/edit.js";
import { initDate } from "./module/date.js";

renderTasks();
completedTasks();

initCreate();
initPriority();
initComplete();
initMenu();
initTheme();
initSidebar();
initDelete();
initEdit();
initDate();
