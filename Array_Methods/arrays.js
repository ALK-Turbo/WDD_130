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
