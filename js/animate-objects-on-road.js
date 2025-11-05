"use strict";

// hent DOM elementer -
const getRedCar = document.getElementById("redCar"); // intet . grundet det er et id i html
const getPoliceCar = document.getElementById("policeCar");
const getBlueCar = document.getElementById("blueCar");

const getSun = document.querySelector(".sun"); // . fordi det er en classe i html
const getScene = document.querySelector(".scene");

// henter lydfiler
const soundRedCar = new Audio();
soundRedCar.src = "../sound/red-car-horn.wav";

const soundPoliceCar = new Audio();
soundPoliceCar.src = "../sound/police-car-sound.wav";

const soundBlueCar = new Audio();
soundBlueCar.src = "../sound/blue-car-sound.wav";

// Tilføj advent listeners

if (getRedCar) {
  getRedCar.addEventListener("click", () => {
    soundRedCar.play();
  });
}

if (getPoliceCar) {
  getPoliceCar.addEventListener("click", () => {
    soundPoliceCar.play();
  });
}

if (getBlueCar) {
  getBlueCar.addEventListener("click", () => {
    soundBlueCar.play();

  });
}
