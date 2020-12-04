// This function takes an array and a number. It will return the given array rotated 'number' of times.

const rotate = (anyList, num) => {
  for (let i = 1; i <= num; i++) {
    const lastEle = anyList.pop();
    anyList.unshift(lastEle);
  }
  return anyList;
};
