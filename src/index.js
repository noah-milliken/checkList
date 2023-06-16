import './style.css'
import { todoFactory, todos } from "./todo"

function render() {
    const listItems = document.getElementById('list-items')
    const categoryItems = document.getElementById('category-items')
    categoryItems.innerHTML = ''
    listItems.innerHTML = ''
    todos.forEach((todo, index) => {
        listItems.innerHTML += `
        <div class="todo-item">
        <button class="eddit-button" id="edit-button" data-id=${index}>Edit</button> 
        <p>${todo.category}</p>
        <p>${todo.title}</p>
        <p>${todo.description}</p>
        <p>${todo.dueDate}</p>
        <p>${todo.priority}</p>
        <p>${todo.completed}</p>
        <button class="delete-button" id="delete-button" data-id="${index}">Delete</button>
        
        </div>
        `
    })
    let categories = [...new Set(todos.map(todo => todo.category))]
    categories.forEach((item, index) => {
        categoryItems.innerHTML += `
            <div class="category-item">
            <h3>${item}</h3>
            <button id="add-todo-category" data-id="${index}" data-category="${item}">+</button>
            </div>
        `
    })
}

render()

document.addEventListener('submit', (e) => {
    e.preventDefault()
    const formDiv = document.getElementById('form-container')
    const formName = document.getElementById('hidden-form-id').value
    const form = document.getElementById('todo-input-form')
    if (formName === 'add') {
        const category = document.getElementById('category-input').value
        const title = document.getElementById('title-input').value
        const description = document.getElementById('description-input').value
        const dueDate = document.getElementById('due-date-input').value
        const priority = document.getElementById('priority-input').value
        const checked = document.getElementById('checked-input').value
        const newTodo = todoFactory(category, title, description, dueDate, priority, checked)
        todos.push(newTodo)
        render()
    }
    if (formName === 'edit') {
        const hiddenInput = document.getElementById('hidden-form-id')
        const index = hiddenInput.dataset.index
        const category = document.getElementById('category-input').value
        const title = document.getElementById('title-input').value
        const description = document.getElementById('description-input').value
        const dueDate = document.getElementById('due-date-input').value
        const priority = document.getElementById('priority-input').value
        const checked = document.getElementById('checked-input').value
        todos[index] = { category, title, description, dueDate, priority, checked }
        render()
        form.reset()
    }
    if (formName === 'category') {
        const category = document.getElementById('category-input').value
        const title = document.getElementById('title-input').value
        const description = document.getElementById('description-input').value
        const dueDate = document.getElementById('due-date-input').value
        const priority = document.getElementById('priority-input').value
        const checked = document.getElementById('checked-input').value
        const newTodo = todoFactory(category, title, description, dueDate, priority, checked)
        todos.push(newTodo)
        render()
    }
    formDiv.classList.toggle('hidden')

})

function editForm(id) {
    const todoObj = todos[id]
    console.log(`THe Id is ${id}`)
    addForm(todoObj, 'edit', id)

}
function addCategory(item) {
    addForm({ category: item, title: '', description: '', dueDate: '', priority: 'high', completed: false }, 'category', -1)
}

function addForm(todo = { category: '', title: '', description: '', dueDate: '', priority: 'high', completed: false }, id = 'add', index = '-1') {
    const formContainer = document.getElementById('form-container')
    formContainer.innerHTML = `<form id="todo-input-form">
    <input type='hidden' id='hidden-form-id' value="${id}" data-index="${index}">
    <div>
        <label for="category">Category:</label>
        <input type="text" id="category-input" name="category" value="${todo.category}"}>
    </div>
    <div>
        <label for="title">Title:</label>
        <input type="text" id="title-input" name="title" value="${todo.title}">
    </div>
    <div>
        <label for="description">description:</label>
        <input type="text" id="description-input" name="description" value="${todo.description}">
    </div>
    <div>
        <label for="dueDate">Due Date:</label>
        <input type="date" id="due-date-input" name="dueDate" value="${todo.dueDate}">
    </div>
    <div>
        <label for="priority">Priority:</label>
        <select id="priority-input" name="priority" value="${todo.priority}">
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
        </select>
    </div>
    <label for="checked">Checked:</label>
    <input type="checkbox" id="checked-input" name="checked" value=""${todo.completed}>
    </div>
    <button type="submit" id="add-new-todo">Add todo</button>
</form>`
}
addForm()

document.addEventListener('click', (e) => {
    const formDiv = document.getElementById('form-container')
    if (e.target.id === 'delete-button') {
        todos.splice(e.target.dataset.id, 1)
        render()
    } if (e.target.id === 'edit-button') {
        const id = e.target.dataset.id
        formDiv.classList.toggle('hidden')
        editForm(id)
    }
    if (e.target.id === 'add-todo-category') {
        const item = e.target.dataset.category
        formDiv.classList.toggle('hidden')
        addCategory(item)
    }
    if (e.target.id === 'add-new-item') {
        formDiv.classList.toggle('hidden')
        addForm()
    }
})







