const anagrams = (wordOne, wordTwo) => {
  const wordOneObj = {};
  const charsOne = wordOne.toLowerCase().split("");
  charsOne.forEach((charOne) => {
    !wordOneObj[charOne] ? (wordOneObj[charOne] = 1) : wordOneObj[charOne]++;
  });

  const wordTwoObj = {};
  const charsTwo = wordTwo.toLowerCase().split("");
  charsTwo.forEach((charTwo) => {
    !wordTwoObj[charTwo] ? (wordTwoObj[charTwo] = 1) : wordTwoObj[charTwo]++;
  });

  if (charsOne.length === charsTwo.length) {
    return charsOne.every(
      (charOne) => wordOneObj[charOne] === wordTwoObj[charOne]
    );
  } else {
    return false;
  }
};
