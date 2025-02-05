$(document).ready(function() {
    const todoListDiv = $('#ft_list');
    const newButton = $('#New');

    // Load saved TO DOs from cookie
    const loadTodosFromCookie = () => {
        const cookie = document.cookie.split('; ').find(row => row.startsWith('todos='));
        if (cookie) {
            return JSON.parse(decodeURIComponent(cookie.split('=')[1]));
        }
        return [];
    };

    const saveTodosToCookie = (todos) => {
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);  // Set expiration for 1 year
        document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; expires=" + expirationDate.toUTCString() + "; path=/";
    };

    const createTodoDiv = (task) => {
        const todoDiv = $('<div></div>').text(task);
        todoDiv.on('click', () => {
            if (confirm('Do you want to remove this TO DO?')) {
                removeTodoFromList(todoDiv);
            }
        });
        return todoDiv;
    };

    const addTodo = () => {
        const task = prompt('Enter new TO DO');
        if (task && task.trim() !== '') {
            const todoDiv = createTodoDiv(task);
            todoListDiv.prepend(todoDiv);
            const todos = loadTodosFromCookie();
            todos.unshift(task); // Add the new TO DO at the top
            saveTodosToCookie(todos);
        }
    };

    const removeTodoFromList = (todoDiv) => {
        todoDiv.remove();
        const todos = loadTodosFromCookie();
        const updatedTodos = todos.filter(todo => todo !== todoDiv.text());
        saveTodosToCookie(updatedTodos);
    };

    // Load initial list from cookie
    const initialTodos = loadTodosFromCookie();
    initialTodos.forEach(todo => {
        const todoDiv = createTodoDiv(todo);
        todoListDiv.append(todoDiv);
    });

    // Event listener for the 'New' button
    newButton.on('click', addTodo);
});