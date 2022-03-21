const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = 'hidden'
const USERNAME_KEY = 'username'

function onLoginSubmit(event) {
  event.preventDefault()
  loginForm.style.display = 'none'
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  paintGreeting(username)
}

function paintGreeting(username) {
  greeting.innerText = `Hello, ${username}`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
  loginForm.style.display = 'flex'
  loginForm.addEventListener('submit', onLoginSubmit)
} else {
  loginForm.style.display = 'none'
  paintGreeting(savedUsername)
}
