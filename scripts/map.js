function showMapDialog() {
    console.log("pntuhsntehsaonethusanoet")
    newLine("Use goto <number> to move to a location.");
    newLine("1. home");
    newLine("2. old man's house");
    newLine("3. women's house");
    newLine("4. park");
    newLine("5. store");
}

function goToPlace(number) {
    switch (number) {
        case "1":
            bedroom();
            break;
        case "2":
            outside();
            break;
        case "3":
            activePlace = "femaleneighbor";
            break;
        case "4":
            activePlace = "park";
            break;
        case "5":
            activePlace = "store";
            break;
        default:
            newLine("Invalid location");
            return;
    }
    window[activePlace]();
}