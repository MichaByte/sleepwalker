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
    } else {
      if (commandHistoryIndex + 1 < commandHistory.length)
        commandHistoryIndex++;
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
  if (gameRunning) {
    runGameCommand(keywords, input);
    return;
  }
  switch (keywords[0]) {
    case "help":
      newLine("List of commands:");
      newLine("start: starts the game");
      newLine("clear: clears the terminal");
      newLine("about: shows info about the game");
      newLine("time: shows the current time");
      newLine("sudo rm -rf /: gives free cookies");
      newLine("fetch: shows system info");
      newLine("background <valid css color>: changes the background color");
      newLine(
        "color <valid css color>: changes the color of the terminal text"
      );
      break;
    case "clear":
      clearTerminal();
      break;
    case "start":
      startGame();
      break;
    case "about":
      newLine(
        "Welcome to Sleepwalker, a text adventure game developed in 24 hours (help my teammates are sleeping or playing Minecraft) for Hackclub Counterspell, Washington DC."
      );
      break;
    case "time":
      newLine(new Date());
      break;
    case "echo":
      newLine(keywords.slice(1).join(" "));
      break;
    case "fetch":
    case "fastfetch":
    case "neofetch":
      printNeofetch();
      break;
    case "color":
      document.documentElement.style.setProperty(
        "--terminal-text-color",
        keywords[1]
      );
      break;
    case "background":
      document.documentElement.style.setProperty(
        "--background-color",
        keywords[1]
      );
      break;
    case "testdialog":
      newDialog(
        "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg",
        "Kitty:",
        "Meow!"
      );
      break;
    case "nevergonna":
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    case "sudo":
      if (keywords[1] == "rm" && keywords[2] == "-rf" && keywords[3] == "/") {
        document.body.remove();
      }
    default:
      newLine("could not find command <b>" + input + "</b>");
      newLine("try the command <b>help</b> to see possible commands");
  }
}

function runGameCommand(keywords, input) {
  switch (keywords[0]) {
    case "help":
      newLine("what?: repeats the last text");
      newLine("i: shows inventory");
      newLine("q: shows quests");
      newLine("trash <item> <amount>: removes item from inventory");
    case "what?":
      window[activePlace]();
      break;
    case "exit":
      endGame();
      break;
    case "i":
      showInventoryDialog();
      break;
    case "q":
      showQuestsDialog();
      break;
    case "trash":
      if (keywords[1] === undefined) {
        newLine("Trash what?");
        return;
      }
      removeItemFromInventory(keywords[1], keywords[2]);
      break;
    case "m":
    case "map":
      showMapDialog();
      break;
    case "goto":
      if (keywords[1] === undefined) {
        newLine("Go to where?");
        return;
      }
      goToPlace(keywords[1]);
      break;
    case "1":
      gameInput(1);
      break;
    case "2":
      gameInput(2);
      break;
    case "3":
      gameInput(3);
      break

    default:
      newLine(
        "Invalid input. Please type a number to select an option. '1', '2', '3', or 'what?' to have the last text repeated."
      );
  }
}

function newLine(content, className, options) {
  let line = document.createElement("span");
  line.classList.add("line");
  if (className) line.classList.add(className);
  line.innerHTML = content;
  document.querySelector(".lines").append(line);
  let shell = document.getElementById("shell");
  shell.scrollTop = shell.scrollHeight;

  for (let i = 0; i < options?.length; i++) {
    newLine(options[i]);
  }
  return line;
}

function newDialog(image, speaker, text, className) {
  let activePerson = speaker;
  let newLine = document.createElement("div");
  let textContainer = document.createElement("div");
  let speakerImage = document.createElement("img");
  let speakerName = document.createElement("p");
  let dialogText = document.createElement("p");

  speakerImage.src = image;
  speakerImage.style.width = "150px";
  speakerImage.style.height = "150px";
  speakerName.innerHTML = people[speaker].name;
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

  let itemsNeededByPerson = itemsNeeded(speaker);
  if (itemsNeededByPerson) {
    let itemsNeededString = itemsNeededByPerson.join(", ");
    return true;
  }

  return false;
}

function clearTerminal() {
  document.querySelector(".lines").innerHTML = "";
}

function printNeofetch() {
  newLine(
    `
             .%%                             OS: sleepwalker.quest<br>
         %%%%%..%%                           Host: Browser<br>
       %%::...%%                             JS: ES6<br>
       %%::...%%                             Font: BigBlueTerminal<br>
    %%%::..%%%                               Time: ${new Date().toLocaleTimeString()}<br>
  %%:::::..%%%               :               Date: ${new Date().toLocaleDateString()}<br>
  %%:::==%%                 .:.              <br>
%%:::::..%%             :    .               <br>
%%:::::..%%           .::::.  :              <br>
%%:::::..%%             ::                   <br>
%%::===..%%                                  <br>
%%:::::::::%%%                               <br>
%%:::::::==%%%                       %%      <br>
%%:::::=======%%                  %%%..%%    <br>
%%:::::=======%%                  %%%..%%    <br>
  %%:::::==:::..%%%%+         %%%%...%%      <br>
  %%===:::::::::....=%%%%%%%%%....===%%      <br>
    %%%====::::::::::.........::==%%%        <br>
       %%=========:::::::::-====%%           <br>
       %%=========:::::::::-====%%           <br>
         %%%%%=============#%%%%             <br>
             .%%%%%%%%%%%%%.                 <br>
             `.replace(/ /g, "&nbsp;")
  );
}
