"use strict";



const form = document.querySelector('form')
const submitBtn = document.getElementById('submitbtn')
const greeting = document.querySelector('.greeting')


if (localStorage.getItem('username')) {
  const username = localStorage.getItem('username')
  greeting.textContent = `Hello, ${username}!`
  greeting.classList.remove('hidden')
  form.classList.add('hidden')
}


const submitHandler = e => {

  e.preventDefault()
  greeting.classList.remove('hidden')
  const username = e.target.elements.username.value.trim()
  greeting.textContent = `Hello, ${username}!`
  localStorage.setItem('username', username)
  form.classList.add('hidden')
}
form.addEventListener("submit", submitHandler)