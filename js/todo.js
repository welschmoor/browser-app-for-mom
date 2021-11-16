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

    todoLI.textContent = each
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "X"
    todoLI.appendChild(deleteBtn)
    todoUL.appendChild(todoLI)

    const deleteHandler = (e) => {
      e.target.parentElement.remove()
      console.log("<>", e.target.parentElement.innerText.slice(0, -1))
      const noteToDelete = e.target.parentElement.textContent.slice(0, -1)
      const newSave = todoArray.filter(each=> {
        console.log("<>comp<>", noteToDelete, each)
        console.log("bool", each !== noteToDelete)
        return each !== noteToDelete
      })
      console.log(newSave)
      localStorage.removeItem('todolist')
      localStorage.setItem('todolist', JSON.stringify(newSave))
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
    const todoArray = JSON.parse(localStorage.getItem('todolist'))
    e.target.parentElement.remove()
    console.log("<>", e.target.parentElement.textContent)
    const noteToDelete = e.target.parentElement.textContent
    const newSave = todoArray.filter(each=> {
      console.log("each", each)
      each !== noteToDelete
    })
    console.log(newSave)
    localStorage.removeItem('todolist')
    localStorage.setItem('todolist', JSON.stringify(newSave))
  }
  deleteBtn.addEventListener('click', deleteHandler)

  todoForm.todoinput.value = ''
  console.log('todolist: ', todoList)
}
todoForm.addEventListener('submit', submitTodoHandler)