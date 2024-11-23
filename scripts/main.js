// Terminal code
let inputElement = document.querySelector(".terminal-input");
inputElement.value = "";
inputElement.focus();
var gameRunning = false
var inputSelected = false
var input = 0

document.querySelector(".terminal-input").addEventListener("keydown", (e) => {
    if (e.keyCode != 13) return;

    let input = inputElement.value;
    inputElement.value = "";

    let inputLine = document.querySelector(".current-line").cloneNode(true);
    inputLine.childNodes[1].style.backgroundColor = "red";
    // inputLine.querySelector(".terminal-input").outerHTML = `<span>${input}</span>`;
    newLine(inputLine.outerHTML, "main-line");
    let keywords = input.split(" ");

    runCommand(keywords, input);
});

function runCommand(keywords, input) {
    if (gameRunning == false) {

    switch (keywords[0]) {
        case "help":
           newLine("List of commands:");
           newLine("start: starts the game");
           newLine("clear: clears the terminal");
           newLine("about: shows info about the game");
           newLine("time: shows the current time");
           break;
        case "clear":
           clearTerminal();
           break;
        case "start":
           newLine("Starting Game..."); 
           startGame()
           break;
        case "about":
           newLine("Welcome to Sleepwalker, a text adventure game developed in 24 hours for Hackclub Counterspell, Washington DC.");
           break;
        case "time":
           newLine(new Date());
           break;
        default:
           newLine("could not find command <b>" + input + "</b>");
           newLine("try the command <b>help</b> to see possible commands");
    }
} else {
    switch (keywords[0]) {
        case "1":
           gameInput(1)
           break;
        case "2":
           gameInput(2)
           break;
        case "3":
           gameInput(3)
           break;
    }
} 
}




function newLine(content, className) {
   let newLine = document.createElement("span");
   newLine.classList.add("line");
   if (className) newLine.classList.add(className);
   newLine.innerHTML = content;
   document.querySelector(".lines").append(newLine);

   if (document.querySelector("#lastline")) document.querySelector("#lastline").id = "";
   newLine.id = "lastline";

   return newLine;
}

function clearTerminal() {
    document.querySelector(".lines").innerHTML = "";
}

function startGame(){
    gameRunning = true
} 

function gameInput(number) {
input = number
inputSelected = true
console.log(`Input ${number} has been selected`)
}