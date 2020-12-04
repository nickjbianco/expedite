// This function takes an array and an item returning the last index position
// the item can be found at.

const lastIndexOf = (anyList, item) => {
  let i = anyList.length - 1;
  while (i >= 0) {
    const currentItem = anyList[i];
    if (currentItem === item) {
      return i;
    }
    i--;
  }
};
