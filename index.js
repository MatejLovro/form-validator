const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 
}

function showSuccess(input) {}

form.addEventListener("submit", function (e) {
  e.preventDefault()
  if (username.value === "") {
    showError(username, "Username is required")
  } else {
    showSuccess(username)
  }
})
