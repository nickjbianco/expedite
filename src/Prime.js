// This function takes a number and returns a boolean based on if the number is prime or not.

const prime = (num) => {
  const numList = [];
  for (let i = 2; i < num; i++) {
    numList.push(i);
  }

  let isPrime = false;
  numList.forEach((divisor) => {
    if (num % divisor === 0) {
      isPrime = true;
    }
  });

  return isPrime;
};
