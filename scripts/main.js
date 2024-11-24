function startGame() {
  gameRunning = true;
  newLine(
    'Welcome to Sleepwalker! You will get options on what to say or do, and you can choose between them by simply typing "1", "2", or "3" to select the options with those numbers.'
  );
  newLine(
    'You wake up and notice you are lying on the ground and not in bed. You look around your room and notice it\'s very out of order. Some of the large furniture has been knocked over. You realize that you must have been sleepwalking. <br> You decide to investigate further. Which room would you like to check out? <br><br> Press "1" to stay in your bedrooom. <br> Press "2" to check out your kitchen. <br>Press "3" to check out your bathroom.'
  );
}

function gameInput(number) {
  let input = number;
  lastGameInput = input;
  inputSelected = true;
  if (event == "death") {
    endGame();
  } else {
    gameEvent(event, input);

  }
}


function gameEvent(eventNumber, input) {
  if (eventNumber == 1) {
    if (input == 1) {
      newLine(
        'As you walk around your bedroom, you see your lamp is knocked over, and your desk is a mess. You seem to be missing your wallet, as well as your spare house key. <br> What would you like to investigate next? <br><br> Press "1" to check out the bedroom. <br> Press "2" to check out the kitchen. <br> Press "3" to leave the house'
      );
      addQuest("you", "Find the wallet you lost while sleepwalking", "wallet", 1);
      addQuest("you", "Find the key you lost while sleepwalking", "key", 1);
      event++;
    } else if (input == 2) {
      newLine(
        'There are shards of fine china and dented pots strewn across the floor. The silverware drawers are empty, and all your chairs seem to be missing. You notice a bag of flour spilled on the ground, and there are multiple sets of footsteps in the fine white powder. <br> Where would you like to investigate next? <br><br> Press "1" to check out the bedroom. <br> Press "2" to check out the kitchen. <br> Press "3" to leave the house'
      );
      addQuest("you", "Get new plates to replace tthe ones you broke", "plates", 2);
      event++;
    } else if (input == 3) {
      newLine(
        'As you walk into the bathroom, you notice that your toiletries are spilled all over the floor, and the paintings that were one on your wall are on the floor. <br> Where would you like to investigate next? <br><br> Press "1" to check out the bedroom. <br> Press "2" to check out the kitchen. <br> Press "3" to leave the house'
      );
      event++;
    }
  } else if (eventNumber == 2) {
    if (input == 1) {
      newLine(
        'As you walk around your bedroom you see your lamp is knocked over, and your desk is messy. You seem to be missing your wallet, as well as your spare key. <br> Where would you like to investigate next? <br><br> Press "1" to check out the bedroom. <br> Press "2" to check out the bathroom. <br> Press "3" to leave the house'
      );
    } else if (input == 2) {
      newLine(
        'You see shattered pots and plates are on the floors, silverware is empty, and your chairs seem to be all missing. You notice a bag of flour has been spilled on the ground, and there is multiple sets of footsteps. <br> Where would you like to investigate next? <br><br> Press "1" to check out the bedroom. <br> Press "2" to check out the kitchen. <br> Press "3" to leave the house'
      );
    } else if (input == 3) {
      event++
      newLine(
        "After investigating all the rooms in your house, you decide to go outside and ask your neighbour, who often likes to sit on the porch and ask him what happened. You know he is retired and does not work, but he does not appear to be home. You knock on the door several times and eventually he comes out. After he sees you, he talks to you.<br>"
      );
      let needsSomething = newDialog(
        "assets/img/oldmanneighbor.png",
        "oldmanneighbor",
        "<br>You have no right to show your face around here after what you did last night!"
      );
      newLine(
        'How do you respond? <br><br> Press "1" to say "I am so sorry, I think I was sleepwalking last night, what happened?" <br> Press "2" to say "What the hell are you talking about, old man?'
      );
      if (needsSomething) newLine('<br>Press "g" to give items');

    }
  } else if (eventNumber == 3) {
    if (input == 1) {
      let needsSomething = newDialog(
        "assets/img/oldmanneighbor.png",
        "oldmanneighbor",
        "<br>You showed up at my house at three in the morning and threw a chair at my window! Sleepwalking or not, you will need to pay for the damages!"
      );
      newLine(
        '<br>How do you respond: <br><br> Press "1" to say "Of course I will pay you back, but do you know if I did anything else when I was sleepwalking?"<br> Press "2" to say "We can talk about payment later, but do you know if I did anything else while I was sleepwalking?"'
      );
      if (needsSomething) newLine('<br>Press "g" to give items');

      event++;
    } else if (input == 2) {
      let needsSomething = newDialog(
        "assets/img/oldmanneighbor.png",
        "oldmanneighbor",
        "Don't be snarky with me, you know damn well you broke my window last night! I'm calling the cops!"
      );
      newLine(
        "<br>He slams the door in your face and refuses to answer any questions you yell at his locked door."
      );
      newLine(
        '<br>You have lost the game. Press "1" to reset. You will need to run the command "start" again. <br> ',
        "red"
      );
      if (needsSomething) newLine('<br>Press "g" to give items');

      event = "death";
    }
  } else if (eventNumber == 4) {
    let needsSomething = newDialog(
      "assets/img/oldmanneighbor.png",
      "oldmanneighbor",
      "I believe you went over that way afterward, I was tired and not paying very much attention though. You can go check it out, but I expect you to come back and pay me later!"
    );
    newLine("Oh! There's a key on the floor, you pick it up.");
    addItemToInventory("key");
    newLine(
      '<br>You start walking in the direction he pointed, and as you walk, you feel the area is vaguely familiar, but you can not put your finger on it. “I must be starting to remember parts of my sleepwalking”, You think to yourself.<br>After some walking, you come across a stream and you see a tree branch that you could use to cross the stream. You also see a bridge in the distance, but it appears to be a few minutes walk away. What would you like to do? <br><br> Press "1" to cross the thin tree branch <br> Press "2" to walk to the bridge then cross it.'
    );
    if (needsSomething) newLine('<br>Press "g" to give items');

    event++;
  } else if (eventNumber == 5) {
    if (input == 1) {
      newLine(
        "<br>As you cross the tree branch, it snaps beneath your weight. You fall into the stream, and the current takes you far from your home."
      );
      newLine(
        '<br>You have lost the game. Press "1" to reset. You will need to run the command "start" again. <br> ',
        "red"
      );
      event = "death";
    } else if (input == 2) {
      newLine(
        "You cross the stream and get to another house. You start to have a foggy memory of your dream, and you definitely remember this house. You walk up to the house and knock on the door <br>"
      );
      let needsSomething = newDialog("assets/img/femaleneighbor.png", "House Resident:", "Who are you, and what do you want?");
      newLine(
        '<br> What would you  like to say: <br><br> Press "1" to say "Why are you so upset?" <br> Press "2" to say "Did you see me around here last night?"'
      );
      if (needsSomething) newLine('<br>Press "g" to give items');

      event++;
    }
  } else if (eventNumber == 6) {
    if (input == 1) {
      let needsSomething = newDialog(
        "assets/img/femaleneighbor.png",
        "femaleneighbor",
        "<br>Someone ripped all the plants out of my garden last night and stole them!"
      );
      newLine(
        '<br> How would you like to respond: <br><br> Press "1" to say "I have been sleep walking recently and was told I came over here, the person who tore out your plants might have been me..." <br> Press "2" to say "I am sorry to hear that, hope you can find who did it."  '
      );
      if (needsSomething) newLine('<br>Press "g" to give items');

      event++;
    } else if (input == 2) {
      let needsSomething = newDialog(
        "assets/img/femaleneighbor.png", "femaleneighbor",
        "SOMEONE came to my house and ripped up and stole all the plants from my garden last night, do you know who that was?"
      );
      newLine(
        '<br> How would you like to respond: <br><br> Press "1" to say "Sorry, I think that might have been me..." <br> Press "2" to say "Nope, was not me, I will let you know if I hear anything about it."  '
      );
      if (needsSomething) newLine('<br>Press "g" to give items');

      event++;
    }
  } else if (eventNumber == 7) {
    if (input == 1) {
      newDialog(
        "assets/img/femaleneighbor.png", "femaleneighbor",
        "WHAT THE HELL! You are going to stay here for the rest of the day, and replant for me, or I will be calling the cops!"
      );
      newLine(
        '<br>You have lost the game. Press "1" to reset. You will need to run the command "start" again. <br> ',
        "red"
      );

      // the new person dialog doesnt work
      event = "death";
    } else if (input == 2) {
      newDialog(
        "assets/img/femaleneighbor.png", "femaleneighbor",
        "<br>Ok, but you better let me know if you find out anything. And it'd be great if you could get me some plants to replace the ones that were stolen."
      );
      addQuest("femaleneighbor", "Find some plants to replace the ones you stole", "plants", 4); // uh if you select this dialog you dont admit you stole anything so this does not make sense
      newLine("<br> You continue heading down the trail");
    }
  }
}
function endGame() {
  gameRunning = false;
  event = 1;
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
  console.log(document.getElementsByClassName("play")[0])
}
