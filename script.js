const container = document.querySelector("#container");

for (let i = 0; i < (16*16); i++) {
    const box = document.createElement("div");
    box.classList.toggle("box");
    
    container.appendChild(box);
}