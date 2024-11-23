let gameRunning = false;
let inputSelected = false;
let event = 1;

// Terminal code
let inputElement = document.querySelector(".terminal-input");
inputElement.value = "";
inputElement.focus();

document.querySelector(".terminal-input").addEventListener("keydown", (e) => {
  if (e.keyCode != 13) return;

  let input = inputElement.value;
  inputElement.value = "";

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
        newDialog("https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg", "Kitty", "Meow!");
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

function newLine(content, className) {
  let newLine = document.createElement("span");
  newLine.classList.add("line");
  if (className) newLine.classList.add(className);
  newLine.innerHTML = content;
  document.querySelector(".lines").append(newLine);

  return newLine;
}

function newDialog(image, speaker, text, className) {
  let newLine = document.createElement("div");
  let speakerImage = document.createElement("img");
  let speakerName = document.createElement("p");
  let dialogText = document.createElement("p");

  speakerImage.src = image;
  speakerImage.style.width = "300px";
  speakerImage.style.height = "300px";
  speakerName.innerHTML = speaker;
  dialogText.innerHTML = text;


  if (className) newLine.classList.add(className);
  newLine.classList.add("dialog");

  newLine.append(speakerImage);
  newLine.append(speakerName);
  newLine.append(dialogText);

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
 gameEvent(event, input)
}

function gameEvent(eventNumber, input){
  if (eventNumber == 1) {
    if (input == 1){
      newLine(
       'As you walk around your bedroom you see your lamp is knocked over, and your desk is messy. You seem to be missing your wallet, as well as your spare key. <br> Where would you like to investigate next? <br><br> Press "1" to check out the kitchen'
      )



  }
}
}