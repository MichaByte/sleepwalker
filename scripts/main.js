function startGame() {
  gameRunning = true;
  newLine(
    'Welcome to Sleepwalker! You will get options on what to say or do, and you can choose between them by simply typing the number before each option.'
  );
  newLine(
    'You wake up and notice you are lying on the ground and not in bed. You look around your room and notice it\'s very out of order. Some of the large furniture has been knocked over. You realize that you must have been sleepwalking. <br> You decide to investigate further.'
  );
  bedroom();
}

function gameInput(number) {
  let input = number;
  lastGameInput = input;
  activePlace = nextPlaces[input - 1];
  window[nextPlaces[input - 1]]();
}

const rooms = {
  bedroom: {
    clean: false
  },
  kitchen: {
    clean: false
  },
  bathroom: {
    clean: false
  },
  oldman: {
    visited: false,
    happy: false
  },
  femaleneighbor: {
    visited: false,
    happy: false
  }
}

function bedroom() {
  if (!rooms.bedroom.clean) {
    if (!itemWasNeeded("wallet") && !itemWasNeeded("key")) {
      rooms.bedroom.clean = true;
      bedroom();
      return;
    }
    newLine(
      'As you walk around your bedroom, you see your lamp is knocked over, and your desk is a mess. You seem to be missing your wallet, as well as your spare house key. <br> What would you like to investigate next?',
      "",
      ['Press "1" to check out the kitchen.', 'Press "2" to check out the bathroom', 'Press "3" to leave the house',]
    );
    nextPlaces = ["kitchen", "bathroom", "outside"];
    addQuest("you", "Find the wallet you lost while sleepwalking", "wallet", 1);
    addQuest("you", "Find the key you lost while sleepwalking", "key", 1);
  }
  else {
    newLine('It\'s your room. The bed is made, the desk is clean, and everything is in it\'s place. Where do you want to go next?', "",
      ['Press "1" to check out the kitchen.', 'Press "2" to go to the bathroom', 'Press "3" to leave the house']);
    nextPlaces = ["kitchen", "bathroom", "outside"];
  }
}
function kitchen() {
  if (!rooms.kitchen.clean) {
    if (!itemWasNeeded("plate")) {
      rooms.kitchen.clean = true;
      kitchen();
      return;
    }
    newLine(
      'There are shards of fine china and dented pots strewn across the floor. The silverware drawers are empty, and all your chairs seem to be missing. You notice a bag of flour spilled on the ground, and there are multiple sets of footsteps in the fine white powder. <br> Where would you like to investigate next?',
      "",
      ['Press "1" to check out the bedroom.', 'Press "2" to check out the bathroom.', 'Press "3" to leave the house']
    );
    nextPlaces = ["bedroom", "bathroom", "outside"];
    addQuest("you", "Get new plates to replace the ones you broke", "plates", 2);
  }
  else {
    newLine('The kitchen is clean, the dishes stacked, and everything is in its place. Where would you like to go next?', "",
      ['Press "1" to check out the bedroom.', 'Press "2" to check out the bathroom.', 'Press "3" to leave the house']
    );
    nextPlaces = ["bedroom", "bathroom", "outside"];
  }
}
function bathroom() {
  if (!rooms.bathroom.clean) {
    newLine(
      'As you walk into the bathroom, you notice that your toiletries are spilled all over the floor, and the paintings that were once on your wall are on the floor. <br> Where would you like to investigate next?',
      "",
      ['Press "1" to check out the bedroom.', 'Press "2" to check out the kitchen.', 'Press "3" to leave the house']
    );
    rooms.bathroom.clean = true;
    nextPlaces = ["bedroom", "kitchen", "outside"];  
  }
  else {
    newLine('The marble surfaces sparkle, the toiletries are in their place, and the paintings are up on the wall, staring down upon the toilet.');
    newLine('Where would you like to go next?', "",
      ['Press "1" to check out the bedroom.', 'Press "2" to check out the kitchen.', 'Press "3" to leave the house']
    );
    nextPlaces = ["bedroom", "kitchen", "outside"];
  }
}
function outside() {
  newLine(
    "After investigating all the rooms in your house, you decide to go outside. From here, you can go to the park or stop by and visit your neighbor.",
    "",
    ['Press "1" to go to the park.', 'Press "2" to visit your neighbor.']
  );
  nextPlaces = ["park", "oldmanHouse"];
}
function park() {
  newLine("It's the park at the end of your neighborhood. There's a walking trail that goes through the woods with benches scattered along either side.");
  if (!park.visited) {
    newLine("Oh! It's your wallet lying next to a park bench. You pick it up.");
    addItemToInventory("wallet");
    addItemToInventory("money", 3);
  }
  newLine('Press "1" to go back');
  nextPlaces = ["outside"];
}
function oldmanHouse() {
  newLine("You go to talk to your neighbor, who often likes to sit on the porch and ask him what happened. You know he is retired and does not work, but he does not appear to be home. You knock on the door several times and eventually he comes out. After he sees you, he talks to you.");
  let needsSomething = newDialog(
    "assets/img/oldmanneighbor.png",
    "oldmanneighbor",
    "<br>You have no right to show your face around here after what you did last night!"
  );
  newLine(
    'How do you respond?',
    "",
    ['Press "1" to say "I am so sorry, I think I was sleepwalking last night, what happened?"', 'Press "2" to say "What the hell are you talking about, old man?']
  );
  nextPlaces = ["questionOldman", "angryOldman"];
  if (needsSomething) newLine('<br>Press "g" to give items');
}
function questionOldman() {
  let needsSomething = newDialog(
    "assets/img/oldmanneighbor.png",
    "oldmanneighbor",
    "<br>You showed up at my house at three in the morning and threw a chair at my window! Sleepwalking or not, you will need to pay for the damages!"
  );
  newLine(
    'How do you respond?',
    "",
    ['Press "1" to say "Of course I will pay you back, but do you know if I did anything else when I was sleepwalking?"', 'Press "2" to say "We can talk about payment later, but do you know if I did anything else while I was sleepwalking?"']
  );
  nextPlaces = ["leaveOldman", "leaveOldman"];
  if (needsSomething) newLine('<br>Press "g" to give items');
}
function angryOldman() {
  newDialog(
    "assets/img/oldmanneighbor.png",
    "oldmanneighbor",
    "Don't be snarky with me, you know damn well you broke my window last night! I'm calling the cops!"
  );
  newLine(
    "He slams the door in your face and refuses to answer any questions you yell at his locked door."
  );
  newLine(
    'You have lost the game. Press "1" to reset. You will need to run the command "start" again. <br> ',
    "red"
  );
  nextPlaces = ["endGame"];
}
function leaveOldman() {
  let needsSomething = newDialog(
    "assets/img/oldmanneighbor.png",
    "oldmanneighbor",
    "I believe you went over that way afterward, I was tired and not paying very much attention though. You can go check it out, but I expect you to come back and pay me later!"
  );
  newLine("Oh! There's a key on the floor, you pick it up.");
  addItemToInventory("key");
  newLine(
    '<br>You start walking in the direction he pointed, and as you walk, you feel the area is vaguely familiar, but you can not put your finger on it. “I must be starting to remember parts of my sleepwalking”, You think to yourself.<br>After some walking, you come across a stream and you see a tree branch that you could use to cross the stream. You also see a bridge in the distance, but it appears to be a few minutes walk away. What would you like to do?',
    "",
    ['Press "1" to cross the thin tree branch', 'Press "2" to walk to the bridge and cross it.']
  );
  nextPlaces = ["crossBranch", "crossBridge"];
  if (needsSomething) newLine('<br>Press "g" to give items');
}
function crossBranch() {
  newLine(
    "<br>As you cross the tree branch, it snaps beneath your weight. You fall into the stream, and the current takes you far from your home."
  );
  newLine(
    'You have lost the game. Press "1" to reset.',
    "red",
    ['Press "1" to reset. You will need to run the command "start" again.']
  );
  nextPlaces = ["endGame"];
}
function crossBridge() {
    newLine(
      "You cross the stream and get to another house. You start to have a foggy memory of your dream, and you definitely remember this house. You walk up to the house and knock on the door <br>"
    );
    let needsSomething = newDialog("assets/img/femaleneighbor.png", "femaleneighbor", "Who are you, and what do you want?");
    newLine(
      'What would you  like to say:',
      "",
      ['Press "1" to say "Why are you so upset?"', 'Press "2" to say "Did you see me around here last night?"']
    );
    if (needsSomething) newLine('<br>Press "g" to give items');
    nextPlaces = ["femaleNeighbor"];
}
function femaleNeighbor() {
  let needsSomething = newDialog(
    "assets/img/femaleneighbor.png",
    "femaleneighbor",
    "Someone ripped all the plants out of my garden last night! Do you have any idea who it could have been?"
  );
  newLine(
    'How would you like to respond:',
    "",
    ['Press "1" to say "I have been sleep walking recently and was told I came over here, the person who tore out your plants might have been me..."', 'Press "2" to say "I am sorry to hear that, hope you can find who did it."']
  );
  if (needsSomething) newLine('<br>Press "g" to give items');
  nextPlaces = ["angryFemaleNeighbor", "leaveFemaleNeighbor"];
}
function angryFemaleNeighbor() {
  newDialog("assets/img/femaleneighbor.png", "femaleneighbor", "WHAT THE HELL! You are going to stay here for the rest of the day, and replant for me, or I will be calling the cops!");
  newLine(
    'You have lost the game.',
    "red",
    ['Press "1" to reset. You will need to run the command "start" again.']
  );
  nextPlaces = ["endGame"];
}
function leaveFemaleNeighbor() {
  newDialog("assets/img/femaleneighbor.png", "femaleneighbor", "Ok, but you better let me know if you find out anything. And it\'d be great if you could get me some plants to replace the ones that were stolen.");
  newLine("You continue heading down the road, where you see something flying in the wind. You catch it - it's a map!");
  newLine("You have found a map! Press 'm' to view it.");
}



function endGame() {
  gameRunning = false;
  clearTerminal();
}

function howtoplay() {
  if (document.getElementsByClassName("play")[0]) {
    var instructions = document.getElementsByClassName("play")[0]
    instructions.remove()
  } else {

    newLine(`Welcome to Sleepwalker! Navigate a world of mysteries and challenges to complete your quest and make things right with your neighbors. Here’s how: <br><br>
Getting Started:
<br>
<br>
Run the “start” command to begin the game inside the terminal input.
<br>
Controls:
<br>
<br>
Keyboard: Use digits (e.g. 1, 2, 3) to select options, and press i to view your items.
<br>
Actions: Press [Enter] to confirm choices or interact with objects.
<br>
Objective:
<br>
<br>
Talk with your neighbors and explore your community to learn about what you’ve been doing at night. Use strategy to progress through levels while unraveling the story.
<br>
Hints:
<br>
<br>
Explore Everything: Each object or area might hold a clue.
<br>
Plan Ahead: Some puzzles require careful timing or logical sequences.
<br>
Tips for Success:
<br>
<br>
Keep an eye out for hidden bonuses or shortcuts.
<br>
Use headphones for a fully immersive experience.
`, "play")
  }
}
