const container = document.querySelector("#container");

function removeBoxes() {
    const boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => box.remove());
}

function addBoxes(boxesPerSide) {
    let width;

    for (let i = 0; i < (boxesPerSide ** 2); i++) {
        const box = document.createElement("div");
        box.classList.toggle("box");

        width = (700 / boxesPerSide) - 2;
        box.style.cssText = `flex-basis: ${width}px`;

        container.appendChild(box);
    }
}

function resetGrid() {
    let boxesPerSide = prompt("Enter a number from 1-100 of boxes per side", "16");

    if (boxesPerSide === null || boxesPerSide === "") {
        return;
    } else if (boxesPerSide < 1 || boxesPerSide > 100 || isNaN(boxesPerSide)) {
        alert("The number of boxes per side must be between 1-100. Try again");
        return resetGrid();
    } 

    removeBoxes();
    addBoxes(boxesPerSide);
}

addBoxes(16);

container.addEventListener("mouseover", (event) => {
    let target = event.target;
    target.classList.add("fill-in");
});

const btn = document.querySelector("#reset-btn");
btn.addEventListener("click", resetGrid);

