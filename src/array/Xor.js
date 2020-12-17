// This function takes a collection of arrays and spits out one array with the elements
// of the symmetrical difference, meaning The element cannot be in more then one of the given arrays.

const xor = (...arrays) => {
  const givenArrays = [...arrays];
  const xorObj = {};

  givenArrays.forEach((arr) => {
    arr.forEach((ele) => {
      if (!(ele in xorObj)) {
        xorObj[ele] = 1;
      } else {
        xorObj[ele]++;
      }
    });
  });

  const allKeys = Object.keys(xorObj);
  const vals = allKeys.filter((key) => {
    if (xorObj[key] === 1) return xorObj[key];
  });
  return vals.map((val) => parseInt(val));
};

export default xor;
