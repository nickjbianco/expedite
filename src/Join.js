// This function takes an array and a 'seperator'. The function returns a string
// by taking all elements in the given array, placing the 'seperator' between them
// within a single string.

const join = (anyList, seperator) => {
  let finalStr = "";

  let i = 0;
  while (i < anyList.length - 1) {
    const item = anyList[i];
    const itemAndSeperator = `${item}${seperator}`;
    finalStr += itemAndSeperator;
    i++;
  }

  return finalStr.concat(anyList[anyList.length - 1]);
};
