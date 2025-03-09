// This file serves as the main entry point for the shellColor application.
// It contains the core logic for manipulating shell colors or styles.

const colors = {
    reset: "\x1b[0m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m"
};

let currentColor = colors.reset;

function setShellColor(color) {
    currentColor = colors[color.toLowerCase()] || colors.reset;
}

function printColoredText(text) {
    console.log(`${currentColor}${text}${colors.reset}`);
}

function resetShellColor() {
    currentColor = colors.reset;
}

// Example usage
setShellColor('blue');
printColoredText('This is blue text');
resetShellColor();
printColoredText('This is default text');

module.exports = {
    setShellColor,
    printColoredText,
    resetShellColor
};