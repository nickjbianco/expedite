// This function takes a collection of arrays and spits out one array with the elements
// of the symmetrical difference, meaning The element cannot be in more then one of the given arrays.
// import { uniqueElements } from "./UniqueElements";

const xor = (...arrays) => {
  const givenArrays = [...arrays];
  let xorArr = [];

  givenArrays.forEach((givenArr) => {
    givenArr.forEach((item) => xorArr.push(item));
  });

  //   return uniqueElements(xorArr);
  return xorArr;
};

console.log(xor([2, 1], [2, 3]));
