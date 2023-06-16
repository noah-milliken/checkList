const dom = () => {
    const main = () => {

    }
    const menubar = () => {

    }
    const form = () => {
        const formElement = document.createElement('div')
        formElement.innerHTML`
        <form id="todoForm">
        <label for="category">Category:</label>
        <input type="text" id="categoryInput" required>
        
        <label for="title">Title:</label>
        <input type="text" id="titleInput" required>
        
        <label for="description">Description:</label>
        <input type="text" id="descriptionInput" required>
        
        <label for="dueDate">Due Date:</label>
        <input type="date" id="dueDateInput" required>
        
        <label for="priority">Priority:</label>
        <select id="priorityInput" required>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
        
        <button type="submit">Add Todo</button>
      </form>
        `
    }

    return {
        main,
        menubar,
        form,
    }
}
export default dom