export function displayTodos(data) {
  const container = document.getElementById("todo-container");
  container.innerHTML = "";

  data.forEach(todo => {
    let div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.margin = "10px";
    div.style.padding = "10px";
    div.style.borderRadius = "6px";

    div.innerHTML = `
      <h4>${todo.title}</h4>
      <p>Status: ${todo.completed ? "Done" : "Pending"}</p>
    `;

    container.appendChild(div);
  });
}
