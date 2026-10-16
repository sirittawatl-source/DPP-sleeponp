
$(document).ready(function () {
    const colors = ["red", "green", "blue"];

    let size = 200;
    let colorIndex = 0;

    const balloon = $("#balloon");

    balloon.css({
        width: size + "px",
        height: size + "px",
        "background-color": colors[colorIndex],
        "border-radius": "50%"
    });

    balloon.on("click", function () {
        size += 10;
        colorIndex = (colorIndex + 1) % colors.length;

        if (size >= 420) {
            size = 200;
            colorIndex = 0;
        }

        balloon.css({
            width: size + "px",
            height: size + "px",
            "background-color": colors[colorIndex]
        });
    });

    balloon.on("mouseleave", function () {
        size -= 5;

        if (size < 200) {
            size = 200;
        }

        colorIndex = (colorIndex - 1 + colors.length) % colors.length;

        balloon.css({
            width: size + "px",
            height: size + "px",
            "background-color": colors[colorIndex]
        });
    });
});
