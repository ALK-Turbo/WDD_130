let favoriteFoods = ["Curry", " Chocolate", " Pizza"];

const newP = document.createElement("p");
const tday = new Date();
const tod = tday.getDay();

newP.textContent = `My Favorite Foods: ${favoriteFoods}`;
document.body.appendChild(newP);

const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];
const today = new Date();
console.log(today);
const day = today.getDay();
console.log(day);
const todayElement = document.querySelector("#displayToday");
todayElement.textContent = weekday[day];


console.log(tod);
console.log("It worked");
