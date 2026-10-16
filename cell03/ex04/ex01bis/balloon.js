const balloon = document.getElementById("balloon");

let size = 200;
let colorIndex = 0;

const colors = ["red", "green", "blue"];

balloon.addEventListener("click", function () {
    size += 10;

    colorIndex = (colorIndex + 1) % 3;

    if (size > 420) {
        size = 200;
        colorIndex = 0;
    }

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
});

balloon.addEventListener("mouseleave", function () {
    size = Math.max(200, size - 5);

    colorIndex = (colorIndex - 1 + 3) % 3;

    balloon.style.width = size + "px";
    balloon.style.height = size + "px";
    balloon.style.backgroundColor = colors[colorIndex];
});
