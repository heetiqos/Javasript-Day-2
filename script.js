// Basic Exercise 1
let random= Math.floor(Math.random() * (25 - (-5)) + (-5));
if (random < 10) {
    console.log("The weather is cold");
} 
else {
    console.log("The weather is moderate");
}

//Basic Exercise 2
let favoriteFoods = ["Pizza", "Hamburger", "Ice cream", "Chocolate"];

function randomFood(junks) {
    let randomIndex = Math.floor(Math.random () * junks.length);
    return junks[randomIndex];
}
console.log("My favorite food is " + randomFood (favoriteFoods));

//Basic Exercise 3
function crystalGazer(NUmberofChildren, PartnersName, GeographicLocation, JobTitle) {
    return `You will be a ${JobTitle} in ${GeographicLocation} married to ${PartnersName} with ${NUmberofChildren} children.`;
}
console.log(crystalGazer (2, "Shawen", "Thailand", "Web Developer"));

//Basic Exercise 4
function ageCalculator(BirthYear, CurrentYear) {
    let age1 = CurrentYear - BirthYear;
    let age2 = age1 - 1;
    return `You are either ${age1} or ${age2} years old.`;
}
console.log(ageCalculator(1995, 2024));

//Basic Exercise 5
const date = new Date();
let Year = date.getFullYear();
console.log(ageCalculator(1995, Year));

//Basic Exercise 6
function DegreeRadianCon(degrees) {
    let radiant = degrees * Math.PI / 180;
    return radiant;
}
console.log(DegreeRadianCon(90));

//Basic Exercise 7
function Box(width, height, depth) {
    let area = width * height;
    let volume = width * height * depth;
    return `The area of the box is ${area}.\nThe volume of the box is ${volume}.`;
}
console.log(Box(2,7,5));

//Intermediate #1
let Capitalize = function (one) {
    let sentence = one.charAt(0).toUpperCase() + one.slice(1);
        return sentence;
}
console.log(Capitalize("i am a web developer"));

//Intermediate #2
function grade(math, physics, english) {
    let sum = math + physics + english;
    let avg = sum / 3;
    return `Sum ${sum}<br>Average ${avg}`;
}
document.write(grade(3,4,5));

//Advanced
function timeConvert(minutes) {
    let mins = minutes% 60;  // gives me 20 mins
    let hours = (minutes - mins) / 60; // will give me 3 hours
    return `${minutes} minutes = ${hours} hours and ${mins} minutes.`;
}
console.log(timeConvert(200));

