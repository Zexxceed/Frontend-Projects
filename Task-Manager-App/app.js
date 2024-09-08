// Step 1: Select DOM elements
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const filterTodo = document.querySelector(".filter-todo");
const todoList = document.querySelector(".todo-list");

// Step 2: Create event listeners for each button.
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteOrCompleteTodo);
filterTodo.addEventListener("change", filterTodos);

// Step 3: Function to add a new task
// e (event) = the information of a change on the website
// event.target = the element that the event happened on
// event.type = what kind of event happened
function addTodo(e) {
  // Prevent form submission
  e.preventDefault();

  // Create a new todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create a new list item for the task
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  // Create a button to mark the task as completed
  const completedButton = document.createElement("button");
  completedButton.classList.add("complete-btn");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  todoDiv.appendChild(completedButton);

  // Create a button to delete the task
  const trashButton = document.createElement("button");
  trashButton.classList.add("trash-btn");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  todoDiv.appendChild(trashButton);

  // Append the todo div to the todo list
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

// Step 4: Function to delete or complete task
function deleteOrCompleteTodo(e) {
  const item = e.target;

  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.classList.add("fall");

    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // If the complete button is clicked, toggle the completed class
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    // toggle() - Add if not existing, remove if existing.
    todo.classList.toggle("completed");
  }
}

// Step 5: Function to filter task based on completion status
function filterTodos(e) {
  const todos = todoList.childNodes;
  todos.forEach(function (todo) {
    switch (e.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}

// DOM Event Ref: https://www.w3schools.com/jsref/dom_obj_event.asp
// Test your knowledge: https://quiz-hub-iota.vercel.app/


// Some things to add to improve the app
// Store it in the Backend, study MySQL or Django
// 