"use strict";

const todoForm = document.querySelector('.todoform')
const todoUL = document.querySelector('.todo-ul')

let todoList = []

if (localStorage.getItem('todolist')) {
  const todoArray = JSON.parse(localStorage.getItem('todolist'))

  // if todolist key returns not an array, we delete everything in local storage
  if (typeof todoArray !== 'object') {
    localStorage.removeItem('todolist')
  }



  todoArray.forEach((each, i) => {
    const todoLI = document.createElement('li')
    console.log("each", each)
    todoLI.textContent = each
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    todoLI.appendChild(deleteBtn)
    todoUL.appendChild(todoLI)
    const deleteHandler = (e) => {
      e.target.parentElement.remove()
    }
    deleteBtn.addEventListener('click', deleteHandler)

  })
  todoForm.todoinput.value = ''
}



const submitTodoHandler = (e) => {
  e.preventDefault()
  const todoLI = document.createElement('li')
  const todoText = e.target.elements.todoinput.value.trim()
  todoLI.textContent = todoText
  todoList.push(todoText)
  localStorage.setItem('todolist', JSON.stringify(todoList))

  const deleteBtn = document.createElement('button')
  deleteBtn.textContent = "X"
  todoLI.appendChild(deleteBtn)
  todoUL.appendChild(todoLI)

  const deleteHandler = (e) => {
    e.target.parentElement.remove()
  }
  deleteBtn.addEventListener('click', deleteHandler)

  todoForm.todoinput.value = ''
  console.log('todolist: ', todoList)
}
todoForm.addEventListener('submit', submitTodoHandler)