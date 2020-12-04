// This function takes an array and a number. It will return the array with 'number'
// amount of items dropped from the beginning. Defualt removal will have only the first item removed

const drop = (anyList, num = 1) => {
  return anyList.filter((item, idx) => idx >= num);
};
