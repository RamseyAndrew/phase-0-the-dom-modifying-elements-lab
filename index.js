const element = document.createElement("div")
document.body.appendChild(element);
const ul = document.createElement("ul");

for (let i = 0; i < 100; i++) {
  const li = document.createElement("li");
  li.textContent = `Item ${i}`;
  ul.appendChild(li);
}       
element.appendChild(ul);

const main = document.getElementById("main");
if (main) {
  main.remove();
}

const newHeader = document.createElement("h1");

newHeader.id = "victory";

newHeader.textContent = "Ramsey Anyona is the champion";

document.body.appendChild(newHeader);