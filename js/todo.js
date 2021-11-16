"use strict";

const todoForm = document.querySelector('.todoform')
const todoUL = document.querySelector('.todo-ul')




const submitTodoHandler = (e) => {
  e.preventDefault()
  const todoLI = document.createElement('li')
  todoLI.textContent = e.target.elements.todoinput.value.trim()
  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = "X"
  todoLI.appendChild(deleteBtn)
  todoUL.appendChild(todoLI)

  const deleteHandler = (e) => {
    e.target.parentElement.remove()
  }
  deleteBtn.addEventListener('click', deleteHandler)

  todoForm.todoinput.value = ''
}
todoForm.addEventListener('submit', submitTodoHandler)