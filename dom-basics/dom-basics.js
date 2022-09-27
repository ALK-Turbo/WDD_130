const newParagraph = document.createElement("p");
newParagraph.textContent = "Hello World from Javascript";
document.body.appendChild(newParagraph);

const myList = ["one", "two", "three"];



const newList = document.createElement('ul');
newList.innerHTML = `<li>${myList[0]}</li><li>${myList[1]}</li><li>one</li><li>one</li><li>one</li>`;
document.body.appendChild(newList);