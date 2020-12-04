// This function takes an object and returns a 2d nested array of the key value pairs.

const objToPairs = (anyObj) => {
  const allKeys = Object.keys(anyObj);
  const pairsList = allKeys.map((key) => [key, anyObj[key]]);
  return pairsList;
};
