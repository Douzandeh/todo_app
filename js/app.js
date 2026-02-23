const taskInput = document.getElementById("task__input");
const dateInput = document.getElementById("date__input");
const addButton = document.getElementById("add__button");

const todos = [];

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
    console.log(todos);
  } else {
    alert("Warning");
  }
};

addButton.addEventListener("click", addHandler);
