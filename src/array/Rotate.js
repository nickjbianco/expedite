// This function takes an array and a number. It will return the given array rotated 'number' of times.

const rotate = (anyList, num) => {
  if (anyList.length < 2) return anyList;
  for (let i = 1; i <= num; i++) {
    const lastEle = anyList.pop();
    anyList.unshift(lastEle);
  }
  return anyList;
};

export default rotate;
