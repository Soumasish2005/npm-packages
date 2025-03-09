const { setShellColor, printColoredText, resetShellColor } = require('./src/index');

// Test setShellColor and printColoredText functions
console.log('Testing setShellColor and printColoredText functions:');
setShellColor('red');
printColoredText('This is red text');
printColoredText('This is also red text');
setShellColor('green');
printColoredText('This is green text');
setShellColor('yellow');
printColoredText('This is yellow text');
setShellColor('blue');
printColoredText('This is blue text');
setShellColor('magenta');
printColoredText('This is magenta text');
setShellColor('cyan');
printColoredText('This is cyan text');
setShellColor('white');
printColoredText('This is white text');
setShellColor('invalidColor');
printColoredText('This is text with an invalid color');

// Test resetShellColor function
console.log('\nTesting resetShellColor function:');
resetShellColor();
printColoredText('This is default text');