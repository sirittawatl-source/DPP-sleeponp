
$(document).ready(function () {
    const newBtn = $("#new-btn");
    const ftList = $("#ft_list");

    // Save all TO DO items in a cookie
    function saveTodos() {
        const todos = [];

        ftList.find(".todo-item").each(function () {
            todos.push($(this).text());
        });

        document.cookie =
            "todos=" + encodeURIComponent(JSON.stringify(todos)) +
            "; max-age=31536000; path=/; SameSite=Lax";
    }

    // Create a new TO DO item
    function createTodo(text, addToTop = true) {
        const todo = $("<div>")
            .addClass("todo-item")
            .text(text);

        todo.on("click", function (event) {
            event.stopPropagation();

            // Create confirmation window
            const box = $("<div>").addClass("confirm-box");

            const message = $("<p>")
                .text("Do you want to delete this TO DO?");

            const yesBtn = $("<button>")
                .text("Yes");

            const noBtn = $("<button>")
                .text("No");

            yesBtn.on("click", function () {
                todo.remove();
                saveTodos();
                box.remove();
            });

            noBtn.on("click", function () {
                box.remove();
            });

            box.append(message, yesBtn, noBtn);
            $("body").append(box);
        });

        if (addToTop) {
            ftList.prepend(todo);
        } else {
            ftList.append(todo);
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

    // Add a new TO DO when clicking the New button
    newBtn.on("click", function () {
        const text = prompt("Enter a new TO DO:");

        if (text !== null && text.trim() !== "") {
            createTodo(text.trim());
            saveTodos();
        }
    });

    // Load saved items when the page starts
    loadTodos();
});
