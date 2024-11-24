const inventoryImages = {
    "key": "assets/items/key.png",
    "wallet": "assets/items/wallet.png",
    "lamp": "https://www.megavoxels.com/wp-content/uploads/2024/07/how-to-make-pixel-art-candy-6.webp",
    "plate": "assets/items/plate.png",
    "silverware": "https://img.freepik.com/premium-vector/apple-pixel-art-style_553915-88.jpg",
    "soap": "assets/items/soap.png",
    "chair:": "https://cloud-lhqcn70mv-hack-club-bot.vercel.app/0image.png",
    "candy": "https://www.megavoxels.com/wp-content/uploads/2024/07/how-to-make-pixel-art-candy-6.webp"
}

function isInInventory(item) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i][0] === item) {
            return true;
        }
    }
}

function itemQuantity(item) {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i][0] === item) {
            return inventory[i][1];
        }
    }
    return 0;
}

function itemWasNeeded(item) {
    for (let i = 0; i < completedQuests.length; i++) {
        if (completedQuests[i][0] === item) {
            return true;
        }
    }
    return false;
}

function addItemToInventory(item, amount) {
    if (amount === undefined) amount = 1;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i][0] === item) {
            inventory[i][1] += amount;
            return;
        }
    }
    inventory.push([item, 1]);
    if (personNeedsItem("you", item)) giveItems("you", item);
    newLine(`Added ${amount} ${item}(s) to inventory`);
}

function removeItemFromInventory(item, amount) {
    if (amount === undefined) amount = 1;
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i][0] === item) {
            inventory[i][1] -= amount;
            if (inventory[i][1] === 0) {
                inventory.splice(i, 1);
            }
            newLine(`Removed ${amount} ${item}(s)`);
            return;
        }
    }
    newLine("You don't a(n) " + item);
}

function showInventoryDialog() {
    let inventoryBox = document.createElement("div");  
    newLine(`Inventory: ${(inventory.length === 0) ? " is empty" : ""}`);

  
    inventoryBox.classList.add("dialog");

    for (let i = 0; i < inventory.length; i++) {
        let container = document.createElement("div");
        container.style.display = "inline-block";
        let itemInfo = document.createElement("p");
    
        let item = inventory[i][0];
        let quantity = inventory[i][1];
        let itemImage = document.createElement("img");

        itemInfo.innerText = `${item} x${quantity}`;

        itemImage.src = inventoryImages[item];
        itemImage.style.width = "100px";
        itemImage.style.height = "100px";
        itemImage.style.margin = "10px";
        container.append(itemInfo)
        container.append(itemImage);
        inventoryBox.append(container);
    }

    document.querySelector(".lines").append(inventoryBox);
    return inventoryBox;
  }