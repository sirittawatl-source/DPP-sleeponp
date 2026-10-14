const newBtn = document.getElementById("new-btn");
const ftList = document.getElementById("ft_list");

// Save all TO DO items in a cookie
function saveTodos() {
    const todos = [];

    ftList.querySelectorAll(".todo-item").forEach(function (item) {
        todos.push(item.textContent);
    });

    document.cookie =
        "todos=" + encodeURIComponent(JSON.stringify(todos)) +
        "; max-age=31536000; path=/; SameSite=Lax";
}

// Create a TO DO element
function createTodo(text, addToTop = true) {
    const todo = document.createElement("div");

    todo.className = "todo-item";
    todo.textContent = text;

    todo.addEventListener("click", function () {
        const answer = confirm("Do you want to delete this TO DO?");

        if (answer) {
            todo.remove();
            saveTodos();
        }
    });

    if (addToTop) {
        ftList.prepend(todo);
    } else {
        ftList.appendChild(todo);
    }
}

// Load saved TO DO items from the cookie
function loadTodos() {
    const cookie = document.cookie
        .split("; ")
        .find(function (item) {
            return item.startsWith("todos=");
        });

    if (!cookie) {
        return;
    }

    try {
        const todos = JSON.parse(
            decodeURIComponent(cookie.substring("todos=".length))
        );

        if (Array.isArray(todos)) {
            todos.forEach(function (text) {
                if (typeof text === "string") {
                    createTodo(text, false);
                }
            });
        }
    } catch (error) {
        console.error("Could not load TO DO items:", error);
    }
}

// Add a new TO DO
newBtn.addEventListener("click", function () {
    const text = prompt("Enter a new TO DO:");

    if (text !== null && text.trim() !== "") {
        createTodo(text.trim());
        saveTodos();
    }
});

// Load saved items when the page starts
loadTodos();const newBtn = document.getElementById("new-btn");
const ftList = document.getElementById("ft_list");

// Save all TO DO items in a cookie
function saveTodos() {
    const todos = [];

    ftList.querySelectorAll(".todo-item").forEach(function (item) {
        todos.push(item.textContent);
    });

    document.cookie =
        "todos=" + encodeURIComponent(JSON.stringify(todos)) +
        "; max-age=31536000; path=/; SameSite=Lax";
}

// Create a TO DO element
function createTodo(text, addToTop = true) {
    const todo = document.createElement("div");

    todo.className = "todo-item";
    todo.textContent = text;

    todo.addEventListener("click", function () {
        const answer = confirm("Do you want to delete this TO DO?");

        if (answer) {
            todo.remove();
            saveTodos();
        }
    });

    if (addToTop) {
        ftList.prepend(todo);
    } else {
        ftList.appendChild(todo);
    }
}

// Load saved TO DO items from the cookie
function loadTodos() {
    const cookie = document.cookie
        .split("; ")
        .find(function (item) {
            return item.startsWith("todos=");
        });

    if (!cookie) {
        return;
    }

    try {
        const todos = JSON.parse(
            decodeURIComponent(cookie.substring("todos=".length))
        );

        if (Array.isArray(todos)) {
            todos.forEach(function (text) {
                if (typeof text === "string") {
                    createTodo(text, false);
                }
            });
        }
    } catch (error) {
        console.error("Could not load TO DO items:", error);
    }
}

// Add a new TO DO
newBtn.addEventListener("click", function () {
    const text = prompt("Enter a new TO DO:");

    if (text !== null && text.trim() !== "") {
        createTodo(text.trim());
        saveTodos();
    }
});

// Load saved items when the page starts
loadTodos();

