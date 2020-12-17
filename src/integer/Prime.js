// This function takes a number and returns a boolean based on if the number is prime or not.

const prime = (num) => {
  if (num === 0 || num === 1) return false;
  if (num == 2) return true;

  const numList = [];
  for (let i = 2; i < num; i++) numList.push(i);

  return numList.every((divisor) => num % divisor !== 0);
};

export default prime;
