// const { createElement } = require("react");

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
    description: "Study fundamental data structures and algorithms to solve coding problems efficiently",
    status: "todo",
  },
  {
    id: 12,
    title: "Contribute to Open Source Projects 🌐",
    description: "Gain practical experience and collaborate with others in the software development community",
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

// Extract the todo tasks
const todoTasks = initialTasks.filter(t => t.status === "todo");
// <div class="task">Launch Epic Career 🚀</div>
todoTasks.forEach(element => {
  const div = document.createElement("div");
  div.className = "task";
  div.textContent = element.title;
  // add on click event to div to invoke the displayModal function
  div.onclick = () => displayModal(element.id);
  // append the div to the tasks-todo container in index.html
  document.querySelector(".tasks-todo").appendChild(div);
});

document.addEventListener("DOMContentLoaded", () => {
  const closeIcon = document.getElementById("closeDialog");
  const dialog = document.getElementById("taskDialog");
  if (closeIcon && dialog) {
    closeIcon.onclick = () => dialog.close();
  }
});


function displayModal(taskId) {
  // find taskId in initialTasks
  let task = initialTasks.find(t => t.id === taskId);  
  console.log(task);

  // populate the dialog with task details
  const dialog = document.getElementById("taskDialog");
  let titleInput = dialog.querySelector('input[name="task-title"]');
  titleInput.value = task.title;
  let descInput = dialog.querySelector('textarea[name="task-description"]');
  descInput.value = task.description;
  let statusSelect = dialog.querySelector('select[name="task-status"]');
  statusSelect.value = task.status;

  dialog.showModal();
}