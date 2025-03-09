# term-colorizer

The `term-colorizer` package is designed to provide functionality for manipulating shell colors and styles. This package allows users to customize their terminal experience by changing text colors, backgrounds, and styles.

![npm](https://img.shields.io/npm/v/term-colorizer) ![License](https://img.shields.io/npm/l/term-colorizer)

## Installation
To install the term-colorizer package, follow these steps:

1. Install the package via npm:
   ```
   npm install term-colorizer
   ```

## Usage
To use the term-colorizer functionality, you can require the package in your JavaScript file and use the provided functions:

```javascript
const { setShellColor, printColoredText, resetShellColor } = require('term-colorizer');

// Set the shell color and print colored text
setterm-colorizer('blue');
printColoredText('This is blue text');
printColoredText('This is also blue text');
// Reset the shell color to default
resetterm-colorizer();
printColoredText('This is default text');
```

## Contributing
Contributions are welcome! If you would like to contribute to the term-colorizer package, please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit them:
   ```
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```
   git push origin feature/YourFeature
   ```
5. Create a pull request.

## License
This package is licensed under the MIT License. See the LICENSE file for more details.