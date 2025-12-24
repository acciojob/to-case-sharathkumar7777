function toCase(str) {
    if (str === "") return "-";

    const lower = str.toLowerCase();
    const upper = str.toUpperCase();

    return `${lower}-${upper}`;
}


// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
