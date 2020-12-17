// This function takes an array and an item. It will replace all elements in the given array with
// the given item.

const fill = (anyList, item) => {
  anyList.forEach((oldItem, idx) => (anyList[idx] = item));
  return anyList;
};

export default fill;
