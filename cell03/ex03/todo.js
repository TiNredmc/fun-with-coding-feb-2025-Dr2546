document.addEventListener("DOMContentLoaded", () => {
    const todoListDiv = document.getElementById('ft_list');
    const newButton = document.getElementById('New');

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
        const todoDiv = document.createElement('div');
        todoDiv.textContent = task;
        todoDiv.style.cursor = 'pointer';
        todoDiv.addEventListener('click', () => {
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
            todoListDiv.insertBefore(todoDiv, todoListDiv.firstChild);
            const todos = loadTodosFromCookie();
            todos.unshift(task); // Add the new TO DO at the top
            saveTodosToCookie(todos);
        }
    };

    const removeTodoFromList = (todoDiv) => {
        todoListDiv.removeChild(todoDiv);
        const todos = loadTodosFromCookie();
        const updatedTodos = todos.filter(todo => todo !== todoDiv.textContent);
        saveTodosToCookie(updatedTodos);
    };

    // Load initial list from cookie
    const initialTodos = loadTodosFromCookie();
    initialTodos.forEach(todo => {
        const todoDiv = createTodoDiv(todo);
        todoListDiv.appendChild(todoDiv);
    });

    // Event listener for the 'New' button
    newButton.addEventListener('click', addTodo);
});
