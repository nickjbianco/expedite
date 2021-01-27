# Expedite

# About

- Expedite is a JavaScript utility library for common operations with arrays, objects, strings, numbers and more. It is built with ES6.

# Setup Instructions

1. Run 'npm run build' to build the library.
2. Open Node REPL by running 'node'
3. Assign the library import to a variable (see code below).

# Features

- Utlize 30+ helper methods including flatten, xor, and join.

# Sample Code

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
