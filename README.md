# Expedite

# About

- Expedite is a JavaScript utility library for common operations with arrays, objects, strings, numbers and more. It is built with ES6.

# Setup Instructions

1. Run 'npm run build' to build the library.
2. Open Node REPL by running 'node'
3. Assign the library import to a variable (see code below).

```javascript
const expedite = require("./expedite.js").default;
```

# Features + Sample Code

- Utlize 30+ helper methods including flatten, xor, and join.

- This function takes an array of any dimension and returns the one dimensional version.

```javascript
const flatten = (anyList) => {
  let flatList = [];

  anyList.forEach((element) => {
    if (Array.isArray(element)) {
      flatList = flatList.concat(flatten(element));
    } else {
      flatList.push(element);
    }
  });

  return flatList;
};
```

- The function shuffle takes in a list and returns that list in a randomly shuffled order.

```javascript
const shuffle = (list) => {
  const shuffledList = [];

  while (list.length > 0) {
    const randomIdx = Math.floor(Math.random() * list.length);
    shuffledList.push(list[randomIdx]);
    list.splice(randomIdx, 1);
  }

  return shuffledList;
};
```

- parsedInt is a function that accepts a string and converts it into an integer in radix 10.

```javascript
const parsedInt = (str) => {
  if (str.length === 0) return str;

  const intList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let finalInt = 0;
  for (let i = 0; i < str.length; i++) {
    const currEle = str[i];
    intList.forEach((int) => {
      if (`${int}` === currEle) finalInt = finalInt * 10 + int;
    });
  }

  return finalInt;
};
```
