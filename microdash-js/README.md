# Microdash-JS

![npm](https://img.shields.io/npm/v/microdash-js) ![License](https://img.shields.io/npm/l/microdash-js) 

<!-- ![Downloads](https://img.shields.io/npm/dt/microdash-js) -->

A lightweight, modern utility library for JavaScript and Node.js, providing essential functions like `debounce`, `throttle`, `merge`, and `deepClone`. Designed for optimal **tree-shaking**, keeping your bundle size small.

## 🚀 Features
- 📦 **Lightweight** - Includes only essential utilities.
- 🎯 **Tree-shakable** - No unnecessary dependencies.
- ⚡ **Fast & Efficient** - Optimized implementations.
- 📜 **ESM Support** - Uses modern JavaScript module syntax.

## 📦 Installation

Install via npm:
```sh
npm install microdash-js
```

or using yarn:
```sh
yarn add microdash-js
```

## 🔧 Usage

### 1️⃣ Debounce
Delays function execution until after a specified time has elapsed since the last call.

```javascript
import { debounce } from "microdash-js";

const saveData = debounce(() => {
  console.log("Data saved!");
}, 300);

saveData();
saveData(); // Only the last call after 300ms will execute
```

#### 🏆 Use Cases:
- Auto-saving forms after user stops typing.
- Delaying API requests to prevent excessive calls.
- Search bar input optimization.

### 2️⃣ Throttle
Ensures a function is called at most once in a given time interval.

```javascript
import { throttle } from "microdash-js";

const logScroll = throttle(() => {
  console.log("Scroll event logged!");
}, 500);

document.addEventListener("scroll", logScroll);
```

#### 🏆 Use Cases:
- Handling continuous user interactions like scrolling or resizing.
- Rate-limiting API calls in real-time applications.
- Preventing excessive clicks on buttons.

### 3️⃣ Merge
Deep merges two objects.

```javascript
import { merge } from "microdash-js";

const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };

const result = merge(obj1, obj2);
console.log(result); // { a: 1, b: { c: 2, d: 3 }, e: 4 }
```

#### 🏆 Use Cases:
- Merging configuration settings from multiple sources.
- Combining user preferences with default settings.
- Updating complex state objects in React or Vue.

### 4️⃣ Deep Clone
Creates a deep copy of an object.

```javascript
import { deepClone } from "microdash-js";

const original = { a: 1, b: { c: 2 } };
const copy = deepClone(original);

console.log(copy); // { a: 1, b: { c: 2 } }
console.log(original === copy); // false
```

#### 🏆 Use Cases:
- Creating independent copies of objects to prevent unintended mutations.
- Cloning Redux state before performing operations.
- Backing up complex data structures before modifying them.

## 🧪 Running Tests
Microdash-JS includes unit tests for all functions using Jest. To run the tests:
```sh
npm test
```

## 📜 License
MIT License © 2025 [Soumasish2005](https://github.com/Soumasish2005)

## 🌟 Contributing
Contributions are welcome! Feel free to open issues and submit pull requests.

## 📬 Contact
- GitHub: [microdash-js](https://github.com/Th85534/npm-packages/microdash-js)
- npm: [microdash-js](https://www.npmjs.com/package/microdash-js)
