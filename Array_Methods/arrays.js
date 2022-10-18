const steps = ['one', 'two', 'three'];

function listItemTemplate(item) {
    return `<li>${item}</li>`;
}

const htmlStrings = steps.map(listItemTemplate)

const myList = document.querySelector('#myList');

const html = htmlStrings.join("")

console.log(html)

myList.innerHTML = html

console.log(htmlStrings)
