// This function takes an 2 arrays as arguments. The first array is an array of items, while
// the second array is an array of indices (whole numbers). The function will return a new array
// with the elements removed from the given array based on the given indices.

const pullAt = (itemList, indices) => {
  return itemList.filter((item, idx) => {
    return indices.every((index) => idx !== index);
  });
};
