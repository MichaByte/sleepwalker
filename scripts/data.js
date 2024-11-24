let gameRunning = false;
let inputSelected = false;
let event = 1;
let lastGameInput = 0;
let activePerson = "you";

let quests = [];
const inventory = [["candy", 2]];

const people = {
    "oldmanneighbor": {
        name: "Old Man Henry"
    },
    "femaleneighbor": {
        name: "House Resident"
    },
    "you": {
        name: "You"
    }
}