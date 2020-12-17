// This function takes a list of numbers then returns the sum.

const sum = (...nums) => {
  const numList = [...nums];
  let numCount = 0;
  numList.forEach((num) => (numCount += num));
  return numCount;
};

export default sum;
