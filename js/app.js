const taskInput = document.getElementById("task__input");
const dateInput = document.getElementById("date__input");
const addButton = document.getElementById("add__button");
const alertMessage = document.getElementById("alert__message");

const todos = [];

const showAlert = (message, type) => {
  alertMessage.innerHTML = "";
  const alert = document.createElement("p");
  alert.innerText = message;
  alert.classList.add("alert");
  alert.classList.add(`alert__${type}`);
  alertMessage.append(alert);

  setTimeout(() => {
    alert.style.display = "none";
  }, 2000);
};

const addHandler = () => {
  const task = taskInput.value;
  const date = dateInput.value;
  const todo = {
    task: task,
    date: date,
    completed: false,
  };
  if (task) {
    todos.push(todo);
    taskInput.value = "";
    dateInput.value = "";
    showAlert("Todo added successfully", "success");
  } else {
    showAlert("Please enter a todo!", "error");
  }
};

addButton.addEventListener("click", addHandler);
