const taskInput = document.getElementById("task__input");
const dateInput = document.getElementById("date__input");
const addButton = document.getElementById("add__button");
const alertMessage = document.getElementById("alert__message");

const todos = JSON.parse(localStorage.getItem("todos")) || [];
console.log(todos);

const generateId = () => {
  return Math.round(
    Math.random() * Math.random() * Math.pow(10, 15),
  ).toString();
};

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

const saveToLocalStorage = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

const addHandler = () => {
  const task = taskInput.value;
  const date = dateInput.value;
  const todo = {
    id: generateId(),
    completed: false,
    task,
    date,
  };
  if (task) {
    todos.push(todo);
    saveToLocalStorage();
    taskInput.value = "";
    dateInput.value = "";
    console.log(todo);
    showAlert("Todo added successfully", "success");
  } else {
    showAlert("Please enter a todo!", "error");
  }
};

addButton.addEventListener("click", addHandler);
