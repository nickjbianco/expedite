// This function takes in multiple arrays, as many as you want. It will return one master nested array.
// The first nested array will return a group of the first elements in the given arrays, the second nested array
// will return a group of the second elements in the given arrays, so on and so forth...

const zip = (...arrays) => {
  const givenLists = [...arrays];
  const zippedList = [];

  let endLength = 0;
  givenLists.forEach((list) =>
    list.length > endLength ? (endLength = list.length) : endLength
  );

  for (let i = 0; i < endLength; i++) {
    const eleGroup = [];
    givenLists.forEach((list) => {
      const currEle = list[i];
      currEle && eleGroup.push(currEle);
    });
    zippedList.push(eleGroup);
  }

  return zippedList;
};
