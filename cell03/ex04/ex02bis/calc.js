
$(document).ready(function () {
    $("#calc-form").on("submit", function (event) {
        event.preventDefault();

        const left = $("#left").val().trim();
        const right = $("#right").val().trim();
        const operator = $("#operator").val();

        // Check that both inputs are non-negative integers
        if (
            left === "" ||
            right === "" ||
            !/^\d+$/.test(left) ||
            !/^\d+$/.test(right)
        ) {
            alert("Error :(");
            return;
        }

        const a = Number(left);
        const b = Number(right);
        let result;

        // Prevent division or modulo by zero
        if ((operator === "/" || operator === "%") && b === 0) {
            alert("It's over 9000!");
            console.log("It's over 9000!");
            return;
        }

        // Perform the calculation
        switch (operator) {
            case "+":
                result = a + b;
                break;
            case "-":
                result = a - b;
                break;
            case "*":
                result = a * b;
                break;
            case "/":
                result = a / b;
                break;
            case "%":
                result = a % b;
                break;
        }

        alert(result);
        console.log(result);
    });

    // Display a reminder every 30 seconds
    setInterval(function () {
        alert("Please use me...");
    }, 30000);
});
