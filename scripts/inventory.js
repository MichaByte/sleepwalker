const inventoryImages = {
    "key": "https://ih1.redbubble.net/image.2797266866.2128/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    "wallet": "https://www.megavoxels.com/wp-content/uploads/2024/07/Pixel-Art-Flower-5.webp",
    "lamp": "https://www.megavoxels.com/wp-content/uploads/2024/07/how-to-make-pixel-art-candy-6.webp",
    "plate": "https://img.freepik.com/premium-vector/apple-pixel-art-style_553915-88.jpg",
    "silverware": "https://img.freepik.com/premium-vector/apple-pixel-art-style_553915-88.jpg",
    "soap": "https://cloud-lhqcn70mv-hack-club-bot.vercel.app/0image.png",
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