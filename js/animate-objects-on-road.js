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

const soundBlueCar = new Audio();

