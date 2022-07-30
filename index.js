// javascript

const inputEl = document.getElementById("input-el");
const Btn = document.getElementById("submit-btn");
// console.log(inputEl.value)
// lenght
const length = document.getElementById("display-length");
//volume
const volume = document.getElementById("display-volume");
//mass
const mass = document.getElementById("display-mass");

//output
let outputEl = document.getElementById("display-out");

const metertofeet = 3.281;
const litertogallons = 0.264;
const kilogramToPounds = 2.204;

Btn.addEventListener("click", function () {
  displayLength();
  displayValume();
  displayMass();
});

function displayLength() {
  let inputValue = inputEl.value;
  let meter = inputValue * metertofeet;
  let feet = inputValue / metertofeet;
  length.innerHTML = `<p> ${inputValue} meters = ${meter.toFixed(
    3
  )} Feet | ${inputValue} feet = ${feet.toFixed(3)} Meters `;
}

// valume converter

function displayValume() {
  let inputValue = inputEl.value;
  let liter = inputValue * litertogallons;
  let gallons = inputValue / litertogallons;
  volume.innerHTML = `<p> ${inputValue} liters = ${liter.toFixed(
    3
  )} gallons | ${inputValue} gallons = ${gallons.toFixed(3)} liters `;
}

// mass converter

function displayMass() {
  let inputValue = inputEl.value;
  let kilo = inputValue * kilogramToPounds;
  let pounds = inputValue / kilogramToPounds;
  mass.innerHTML = `<p> ${inputValue} Kilograms = ${kilo.toFixed(
    3
  )} Pounds | ${inputValue} Pounds = ${pounds.toFixed(3)} Kilograms `;
}
