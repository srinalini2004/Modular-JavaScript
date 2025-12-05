document.getElementById("loginBtn").addEventListener("click", () => {
  let stored = JSON.parse(localStorage.getItem("user"));

  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (stored && stored.email === email && stored.password === password) {
    localStorage.setItem("loggedIn", "true");
    alert("Login successful!");
    window.location.href = "todos.html";
  } else {
    alert("Invalid credentials!");
  }
});
