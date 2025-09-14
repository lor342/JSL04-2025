/**
 * Array of initial task objects for the application.
 * @type {Array<{id: number, title: string, description: string, status: string}>}
 */
const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career 🚀",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript 💛",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Keep on Going 🏆",
    description: "You're almost there",
    status: "doing",
  },

  {
    id: 11,
    title: "Learn Data Structures and Algorithms 📚",
    description:
      "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  {
    id: 13,
    title: "Build Portfolio Projects 🛠️",
    description:
      "Create a portfolio showcasing your skills and projects to potential employers",
    status: "done",
  },
];

/**
 * Filters tasks by status and appends them to the corresponding column in the DOM.
 * @param {Array<Object>} tasks - Array of task objects.
 * @param {string} status - Status to filter by ("todo", "doing", "done").
 * @param {string} containerSelector - CSS selector for the column container.
 */
function displayTasks(taskList, status, containerClass) {
  const filteredTasks = taskList.filter(t => t.status === status);
  filteredTasks.forEach(element => {
    const div = document.createElement("div");
    div.className = "task";
    div.textContent = element.title;
    div.onclick = () => displayModal(element.id);
    document.querySelector(containerClass).appendChild(div);
  });
}

// Build the task divs for each status column
displayTasks(initialTasks, "todo", ".tasks-todo");
displayTasks(initialTasks, "doing", ".tasks-doing");
displayTasks(initialTasks, "done", ".tasks-done");

/**
 * Sets up the close icon event listener for the modal dialog after DOM is loaded.
 */
document.addEventListener("DOMContentLoaded", () => {
  const closeIcon = document.getElementById("closeDialog");
  const dialog = document.getElementById("taskDialog");
  if (closeIcon && dialog) {
    closeIcon.onclick = () => dialog.close();
  }
});

/**
 * Displays the modal dialog with the details of the selected task.
 * Populates the modal fields with the task's title, description, and status.
 * @param {number} id - The ID of the task to display.
 */

function displayModal(id) {
  const task = initialTasks.find(t => t.id === id);

  // populate the dialog with task details
  const dialog = document.getElementById("taskDialog");
  let titleInput = dialog.querySelector('input[name="taskTitle"]');
  titleInput.value = task.title;
  let descInput = dialog.querySelector('textarea[name="taskDescription"]');
  descInput.value = task.description;
  let statusSelect = dialog.querySelector('select[name="taskStatus"]');
  statusSelect.value = task.status;
  dialog.showModal();
}