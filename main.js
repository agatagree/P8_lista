let size = 10;
let orderElement = 1;

const init = () => {
const btn = document.createElement("button");
btn.textContent = "Create list";
document.body.appendChild(btn);

const ul = document.createElement("ul");
document.body.appendChild(ul);

btn.addEventListener("click", createLiElements);
}

const createLiElements = () => {

for (let i = 1; i < 11; i++) {

    let li = document.createElement("li");
    document.body.appendChild(li);
    li.textContent = "Element no. " + orderElement;
    orderElement++;
    li.style.fontSize = size + "px";
    size++;
    li.style.listStyleType = "none";
    li.style.paddingLeft = "30px";
}
}

init()