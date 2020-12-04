// This function takes a string and converts it into an integer in radix 10

const parseInt = (str) => {
  const parsedInts = [];

  for (let i = 0; i < str.length; i++) {
    const currEle = str[i];
    for (let j = 0; j < 10; j++) {
      const numStr = `${j}`;
      if (currEle === numStr) {
        parsedInts.push(j);
      }
    }
  }

  if (parsedInts[0] === 0) {
    const modified = parsedInts.slice(1, parsedInts.length);
    return modified.join("");
  }
  return parsedInts.join("");
};
