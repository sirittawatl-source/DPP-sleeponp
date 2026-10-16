const form = document.getElementById("calc-form");
const left = document.getElementById("left");
const right = document.getElementById("right");
const operator = document.getElementById("operator");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const a = left.value;
    const b = right.value;

    // Check positive integers or zero
    if (
        a.trim() === "" ||
        b.trim() === "" ||
        !/^\d+$/.test(a) ||
        !/^\d+$/.test(b)
    ) {
        alert("Error :(");
        return;
    }

    const num1 = Number(a);
    const num2 = Number(b);

    // Check division or modulo by zero
    if ((operator.value === "/" || operator.value === "%") && num2 === 0) {
        alert("It's over 9000!");
        return;
    }

    let result;

    switch (operator.value) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            break;

        case "%":
            result = num1 % num2;
            break;
    }

    alert(result);
    console.log(result);
});

// Alert every 30 seconds
setInterval(function () {
    alert("Please, use me...");
}, 30000);