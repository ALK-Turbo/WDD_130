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

const lettergrades = ['A', 'B', 'A'];
function getGPA(grade) {
    let points = 0
    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        default:
            points = 1;
            break;
    }
    return points
}
const my_grade = lettergrades.map(getGPA);
console.log(my_grade);

// example 2
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    } else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
console.log(gpaPoints)

function sumPoints(total, current) {
    return total + current;
}
const averageGPA = gpaPoints.reduce(sumPoints, 0) / gpaPoints.length
console.log(averageGPA.toFixed(2))
//try this one again, it is jjust like the one above, just in one line instead of several
const averageGPA2 = gpaPoints.reduce((total, current) => total + current, 0) / gpaPoints.length;
console.log(averageGPA2.toFixed(2))


const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const result = fruits.filter(fruit => fruit.length < 6);
console.log(result);

const fruits2 = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const shortWords = fruits2.filter(function (word) {
    return word.length < 6;
});
console.log(shortWords);

const numbers = [12, 34, 21, 54]
const lucky_number = 21
console.log(numbers.indexOf(lucky_number))

const meals = [
    { name: "Curry", category: "Indian", prepTime: "20min", cookTime: "20min", url: "dom-events.html", imgSrc: "../Images/Curry.jpg" },
    { name: "Tacos", category: "Mexican", prepTime: "10min", cookTime: "10min", url: "dom-events.html", imgSrc: "../Images/Tacos.jpg" },
    { name: "Alfredo", category: "Italian", prepTime: "10min", cookTime: "25min", url: "dom-events.html", imgSrc: "../Images/Alfredo.jpg" }
]

function mealTemplate(meal) {
    return `<li class = "meal-card"><img src="${meal.imgSrc}"><h2>${meal.name}</h2><p class = "meal-category">${meal.category}
    </p><p>PrepTime: ${meal.prepTime}</p><p>CookTime: ${meal.cookTime}</p>`
}
function renderMeals() {
    const htmlMeals = meals.map(mealTemplate);
    const newUl = document.createElement('ul');
    newUl.classList.add("meal-list");
    newUl.insertAdjacentHTML(("afterbegin"),
        htmlMeals.join(''));
    document.querySelector('main').insertAdjacentElement('beforeend', newUl)
}

renderMeals();