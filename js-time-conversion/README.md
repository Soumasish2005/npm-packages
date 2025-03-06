# ⏳ Time Converter (toMilliseconds & fromMilliseconds)

A simple and lightweight npm package to **convert time strings to milliseconds** and **convert milliseconds back into readable formats**.

![npm](https://img.shields.io/npm/v/js-time-conversion?color=yellow&label=npm)  

🚀 **Features:**
- Convert time strings like `"2h"`, `"30m"`, `"45s"`, `"1.5d"` into **milliseconds**.
- Convert milliseconds into **human-readable time formats**.
- Works with **floating-point values** (`"1.5h"` → `5400000` ms).
- Lightweight with **zero dependencies**.

## 📦 Installation
You can install the package using npm:

```sh
npm install js-time-conversion
```

Or using Yarn:

```sh
yarn add js-time-conversion
```

## 🔧 Usage
Import the package in your JavaScript/Node.js project:

```javascript
const { toMilliseconds, fromMilliseconds } = require("js-time-conversion");
```

### **Convert Time Strings to Milliseconds**
```javascript
console.log(toMilliseconds("2h"));   // 7200000
console.log(toMilliseconds("30m"));  // 1800000
console.log(toMilliseconds("45s"));  // 45000
console.log(toMilliseconds("1.5d")); // 129600000
```

### **Convert Milliseconds to Readable Time Format**
```javascript
console.log(fromMilliseconds(7200000));    // "2h"
console.log(fromMilliseconds(1800000));    // "30m"
console.log(fromMilliseconds(45000));      // "45s"
console.log(fromMilliseconds(129600000));  // "1.5d"
```

## 📜 API Reference

### `toMilliseconds(timeString)`
**Converts a time string to milliseconds.**  

| Parameter  | Type   | Description                                      | Example |
|------------|--------|--------------------------------------------------|---------|
| `timeString` | `string` | Time string with unit (`s`, `m`, `h`, `d`) | `"2h"` → `7200000` |

- **Throws an error** if the input format is invalid.

---

### `fromMilliseconds(ms)`
**Converts milliseconds to a human-readable time format.**  

| Parameter | Type     | Description                                 | Example |
|-----------|---------|---------------------------------------------|---------|
| `ms`      | `number` | Milliseconds to be converted              | `7200000` → `"2h"` |

---

## 🚨 Error Handling
If an invalid format is provided, the function throws an error:

```javascript
console.log(toMilliseconds("xyz")); // ❌ Error: Invalid time format. Use '1s', '2m', '3h', '1.5d'.
```

---

## 🛠️ Running Tests
To test the package, create a file `test.js` and run:

```javascript
const { toMilliseconds, fromMilliseconds } = require("./index");

// Example tests
console.log(toMilliseconds("2h") === 7200000); // true
console.log(fromMilliseconds(7200000) === "2h"); // true
```

Run the test:
```sh
node test.js
```

---

## 📌 Contributing
Want to improve this package? Feel free to **fork** and submit a **pull request**.

1. Clone the repository:
   ```sh
   git clone https://github.com/Soumasish2005/npm-packages.git
   ```
2. Make changes and push to a new branch.
3. Submit a **Pull Request**!

---

## 📜 License
This package is licensed under the **MIT License**.

---

### 🚀 Enjoy using **Time Converter**? Give it a ⭐ on GitHub!
