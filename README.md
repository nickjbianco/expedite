# Expedite

Expedite is a JavaScript utility library for common operations with arrays, objects, strings, numbers and more. It is built with ES6 and has full test coverage with Jest. Expedite has 30+ methods including flatten, xor, join, and more.

## Setup Instructions

1. Clone library to local computer.
2. Run `npm run build` to build the library.
3. Open Node REPL by running `node`.
4. Assign the library import to a variable (see code below).

```javascript
const expedite = require("./expedite.js").default;
```

5. Use any of libraries built-in methods.

```javascript
> expedite.flatten([[1, 2], [3]])
[ 1, 2, 3 ]
```

## Sample Code

The `flatten` function takes an array of any number of dimensions and returns the elements in a one dimensional array.

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

The `shuffle` function accepts an array and returns a new array in a randomly shuffled order.

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

The `parsedInt` function accepts a string and converts it into an integer in radix 10.

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
