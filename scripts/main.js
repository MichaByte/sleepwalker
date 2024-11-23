let gameRunning = false;
let inputSelected = false;
let event = 1;

// Terminal code
let commandHistory = [];
let commandHistoryIndex = 0;
let inputElement = document.querySelector(".terminal-input");
inputElement.value = "";
inputElement.focus();

document.querySelector(".terminal-input").addEventListener("keydown", (e) => {
  if (e.keyCode == 38 || e.keyCode == 40) {
    commandHistory.push("");
    if (commandHistory.length == 0) return;
    if (e.keyCode == 38) {
      if (commandHistory[commandHistoryIndex - 1]) commandHistoryIndex--;
    }
    else {
      if (commandHistoryIndex + 1 < commandHistory.length) commandHistoryIndex++;
      else {
        inputElement.value = "";
        commandHistory.pop();
        return;
      }
    }
    inputElement.value = commandHistory[commandHistoryIndex];
    commandHistory.pop();
  }
  if (e.keyCode != 13) return;

  let input = inputElement.value;
  inputElement.value = "";

  commandHistory.push(input);
  commandHistoryIndex = commandHistory.length;

  let inputLine = document.createElement("div");

  inputLine.innerHTML = `<span class="terminal-text">you@sleepwalker.quest:~</span>$&nbsp;<span class="terminal-input" style="inline-block">${input}</span>`;
  newLine(inputLine.innerHTML);
  
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
        newLine("color <valid css color>: changes the color of the terminal text");
        break;
      case "clear":
        clearTerminal();
        break;
      case "start":
        startGame();
        break;
      case "about":
        newLine(
          "Welcome to Sleepwalker, a text adventure game developed in 24 hours for Hackclub Counterspell, Washington DC."
        );
        break;
      case "time":
        newLine(new Date());
        break;
      case "color":
        console.log(keywords[1]);
        document.documentElement.style.setProperty('--terminal-text-color', keywords[1]);
        break;
      case "testdialog":
        newDialog("https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg", "Kitty:", "Meow!");
        break;
      case "nevergonna":
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
      default:
        newLine("could not find command <b>" + input + "</b>");
        newLine("try the command <b>help</b> to see possible commands");
    }
  } else {
    switch (keywords[0]) {
      case "1":
        gameInput(1);
        break;
      case "2":
        gameInput(2);
        break;
      case "3":
        gameInput(3);
        break;
    }
  }
}

function newLine(content, className, styles) {
  let newLine = document.createElement("span");
  newLine.classList.add("line");
  if (className) newLine.classList.add(className);
  newLine.innerHTML = content;
  document.querySelector(".lines").append(newLine);
  let shell = document.getElementById("shell");
  shell.scrollTop = shell.scrollHeight;
  return newLine;
}

function newDialog(image, speaker, text, className) {
  let newLine = document.createElement("div");
  let textContainer = document.createElement("div");
  let speakerImage = document.createElement("img");
  let speakerName = document.createElement("p");
  let dialogText = document.createElement("p");

  speakerImage.src = image;
  speakerImage.style.width = "150px";
  speakerImage.style.height = "150px";
  speakerName.innerHTML = speaker;
  dialogText.innerHTML = text;


  if (className) newLine.classList.add(className);
  newLine.classList.add("dialog");
  newLine.style.display = "grid";
  newLine.style.gridTemplateColumns = "150px auto";

  newLine.append(speakerImage);
  newLine.append(textContainer);
  textContainer.append(speakerName);
  textContainer.append(dialogText);

  document.querySelector(".lines").append(newLine);

  return newLine;
}

function clearTerminal() {
  document.querySelector(".lines").innerHTML = "";
}

function startGame() {
  gameRunning = true;
  newLine(
  'Welcome to Sleepwalker! You will get options on what to say or do, and you can choose between them by simply typing "1", "2", or "3" to select the options with those numbers.'
);
  newLine(
  'You wake up, and you notice you are laying on the ground and not in a bed. You look around your room and notice your room is very out of order and it appears some things have been knocked over. You realize that you seem to have been sleepwalking. <br> You decide to investigate, which room would you like to check out? <br><br> Press "1" to check out your bedroom. <br> Press "2" to check out your kitchen. <br>Press "3" to check out your bathroom.'
);


}

function gameInput(number) {
let input = number
 inputSelected = true
 console.log(`Input ${number} has been selected`)
 if (event=="death") {
  endGame()
 }else {
 gameEvent(event, input)
 }
}

function gameEvent(eventNumber, input){
  if (eventNumber == 1) {
    if (input == 1){
      newLine(
       'As you walk around your bedroom, you see your lamp is knocked over, and your desk is a mess. You seem to be missing your wallet, as well as your spare house key. <br> What would you like to investigate next? <br><br> Press "1" to check out the bedroom. <br> Press "2" to check out the bathroom. <br> Press "3" to leave the house'
      )
      event++
} else if (input == 2){
  newLine(
    'You see shattered pots and plates are on the floors. The silverware drawers are empty, and all your chairs seem to be missing. You notice a bag of flour has been spilled on the ground, and there are multiple sets of footsteps. <br> Where would you like to investigate next? <br><br> Press "1" to check out the bedroom. <br> Press "2" to check out the kitchen. <br> Press "3" to leave the house'
   )
   event++
}  else if (input == 3){
  newLine(
    'As you walk into the bathroom, you notice that your toiletries are spilled all over the floor, and the paintings that were on your wall appear to be on the floor. <br> Where would you like to investigate next? <br><br> Press "1" to check out the bedroom. <br> Press "2" to check out the kitchen. <br> Press "3" to leave the house'
   )
   event++
}
}else if (eventNumber == 2) {
  if (input == 1){
    newLine(
     'As you walk around your bedroom you see your lamp is knocked over, and your desk is messy. You seem to be missing your wallet, as well as your spare key. <br> Where would you like to investigate next? <br><br> Press "1" to check out the bedroom. <br> Press "2" to check out the bathroom. <br> Press "3" to leave the house'
    )
} else if (input == 2){
newLine(
  'You see shattered pots and plates are on the floors, silverware is empty, and your chairs seem to be all missing. You notice a bag of flour has been spilled on the ground, and there is multiple sets of footsteps. <br> Where would you like to investigate next? <br><br> Press "1" to check out the bedroom. <br> Press "2" to check out the bathroom. <br> Press "3" to leave the house'
 )
}  else if (input == 3){
newLine(
  'After investigating all the rooms in your house, you decide to go outside and ask your neighbour, who often likes to sit on the porch and ask him what happened. You know he is retired and does not work, but he does not appear to be home. You knock on the door several times and eventually he comes out. After he sees you, he says, "You have no right to show your face around here after what you did last night!".<br> How do you respond? <br><br> Press "1" to say "I am so sorry, I think I was sleepwalking last night, what happened?" <br> Press "2" to say "What the hell are you talking about, old man?"'
 )
 event++
}
}else if (eventNumber == 3){
  if (input==1){
    newDialog("assets/img/oldmanneighbor.png", "<br>Old Man Neighbour:", "<br>You showed up at my house at three in the morning and threw a chair at my window! Sleepwalking or not, you will need to pay for the damages!");
    newLine('<br>How do you respond: <br><br> Press "1" to say "Of course I will pay you back, but do you know if I did anything else when I was sleepwalking?"<br> Press "2" to say "We can talk about payment later, but do you know if I did anything else while I was sleepwalking?"')
    event++
  }else if (input == 2) {
  newDialog("assets/img/oldmanneighbor.png", "<br>Old Man Neighbour:", "<br>Don't be snarky with me, you know damn well you broke my window last night! I'm calling the cops!");
  newLine("<br>He slams the door in your face and refuses to answer any questions you yell at his locked door.")
  newLine('<br>You have lost the game. Press "1" to reset. You will need to run the command "start" again. <br> ', "red")
  event = "death"
}
}else if (eventNumber==4){
  newDialog("assets/img/oldmanneighbor.png", "<br>Old Man Neighbour:", "<br>I believe you went over that way afterward, I was tired and not paying very much attention though. You can go check it out, but I expect you to come back and pay me later!");
}
}
function endGame(){
  gameRunning=false
  clearTerminal()
}