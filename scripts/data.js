let gameRunning = false;
let event = 1;
let lastGameInput = 0;
let activePerson = "you";
let completedQuests = [];
let quests = [];
const inventory = [["candy", 2]];
let nextPlaces = [];
let lastPlace = "bedroom";
let activePlace = "bedroom";

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