function getAngryDog(numberOfWoofs) {
    let woofString = "";
    for (let i = 0; i < numberOfWoofs; i++) {
        woofString += "woof ";
    }
    return woofString.trim(); // Trims any trailing space if necessary
}
