function addQuest(personFor, text, item, amount) {
    newLine("Added new quest! Press \"q\" to see it");
    quests.push([personFor, text, item, amount])
}

function giveItems(person, item, amount) {
    if (!personNeedsItem(person, item)) {
        newLine(`${person} doesn't want your useless ${item}.`)
    }
    // TO-DO: give person as much as they need or as much as you have. if all complete, finish quest
}

function personNeedsItem(person, item) {
    for (let i = 0; i < quests.length; i++) {
        if (quests[i][0] == person && quests[i][2] == item) {
            return true;
        }
    }
    return false;
}

function showQuestsDialog(image, speaker, text, className) {
    let questsBox = document.createElement("div");  
    newLine(`Quests: ${(inventory.length === 0) ? " you have none" : ""}`);

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