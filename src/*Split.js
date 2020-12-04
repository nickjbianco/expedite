// This function takes a string, a seperator (single item) and a desired optional endlength.
// The given string will be modified into an array.
// The given seperator indicates which part of the string is to be remoc

const split = (str, seperator, endLength) => {
  let splitList = [];

  for (let i = 0; i < str.length; i++) {
    const currChar = str[i];
    let currCharGroup = "";
    if (currChar !== seperator) {
      currCharGroup = currCharGroup.concat(currChar);
    }
  }

  // const modifiedList = splitList.slice(0, endLength);
  return splitList;
};

console.log(split("a-b-c", "b", 2));
