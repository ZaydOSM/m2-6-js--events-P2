let p = document.querySelector('p');
let size = 1;
let newSize = 0;

window.addEventListener("keydown", function (event) {
    switch (event.key) {
    case "ArrowDown":
        goSmall();
        break;
    case "ArrowUp":
        goBig();
        break;
    default:
        return false;
    }
    event.preventDefault();
    return false;
}, true);

function goBig () {
    if (size < 3) {
        size = size + 0.1;
        document.querySelector('p').style.transform = `scale(${size})`;
    } else {
        p.innerText = "💥";
    }
}

function goSmall () {
    if (size > 0.1) {
        if (p.innerText !== "💥") {
        size = size - 0.1;
        document.querySelector('p').style.transform = `scale(${size})`;
        }
    }
}