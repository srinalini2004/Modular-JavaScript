document.getElementById("signupBtn").addEventListener("click", () => {
  const user = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };

  if (!user.email || !user.password) {
    alert("Please fill all fields");
    return;
  }

  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup successful!");
  window.location.href = "login.html";
});
