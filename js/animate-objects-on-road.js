"use strict";

// Hent DOM elementer

const getRedCar = document.getElementById("redCar");
const getPoliceCar = document.getElementById("policeCar");
const getBlueCar = document.getElementById("blueCar");

// Hent også lige baggrund og sol

const sun = document.querySelector(".sun");
const scene = document.querySelector(".scene");

// Sæt lyde på bilerne + opretter lyd objekter
const soundRedCar = new Audio();
    soundRedCar.src = "../sound/red-car-horn.wav";

const soundPoliceCar = new Audio();
    soundPoliceCar.src = "../sound/police-car-sound.wav";

const soundBlueCar = new Audio();
    soundBlueCar.src = "../sound/blue-car-sound.wav";

// Tilføj event listeners til bilerne

if (getRedCar) {
    getRedCar.addEventListener("click", ()=> {
        soundRedCar.play();
    })
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

// Solen skal have en funktion

if (sun && scene) {
    sun.addEventListener("click", ()=> {
        scene.classList.toggle("night");
    });
}




