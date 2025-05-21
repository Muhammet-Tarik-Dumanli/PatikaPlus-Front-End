document.getElementById("list").addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});

function addCloseButton(li, taskText) {
  let span = document.createElement("SPAN");
  span.className = "close";
  span.appendChild(document.createTextNode("\u00D7"));
  li.appendChild(span);

  span.onclick = function () {
    li.remove();
    removeTaskFromLocalStorage(taskText);
  };
}

function newElement() {
  let taskInput = document.getElementById("task");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    $(".error").toast("show");
    return;
  }

  $(".success").toast("show");

  let li = document.createElement("LI");
  li.textContent = taskText;
  addCloseButton(li, taskText);
  document.getElementById("list").appendChild(li);
  saveTaskToLocalStorage(taskText);
  taskInput.value = "";
}

//Saves a new task to localStorage
function saveTaskToLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("taskList")) || [];
  tasks.push(task);
  localStorage.setItem("taskList", JSON.stringify(tasks));
}

//Removes a task from localStorage
function removeTaskFromLocalStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem("taskList")) || [];
  tasks = tasks.filter((task) => task !== taskText);
  localStorage.setItem("taskList", JSON.stringify(tasks));
}

window.onload = function () {
  let tasks = JSON.parse(localStorage.getItem("taskList")) || [];
  tasks.forEach((task) => {
    let li = document.createElement("LI");
    li.textContent = task;
    addCloseButton(li, task);
    document.getElementById("list").appendChild(li);
  });

  let existingLis = document.querySelectorAll("#list li");
  existingLis.forEach((li) => {
    if (!li.querySelector(".close")) {
      let taskText = li.textContent.trim();
      addCloseButton(li, taskText);
    }
  });
};
