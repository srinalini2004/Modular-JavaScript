import { displayTodos } from "./displayTodos.js";

// protect page
if (localStorage.getItem("loggedIn") !== "true") {
  alert("Please login first!");
  window.location.href = "login.html";
}

async function fetchTodos() {
  let res = await fetch("https://jsonplaceholder.typicode.com/todos");
  let data = await res.json();

  displayTodos(data.slice(0, 20)); 
}

fetchTodos();
