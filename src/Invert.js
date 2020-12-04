// This function takes an object and will invert the key and values.

const invert = (anyObj) => {
  let flippedObj = {};
  const allKeys = Object.keys(anyObj);
  allKeys.forEach((key) => {
    const val = anyObj[key];
    flippedObj = {
      ...flippedObj,
      [val]: key,
    };
  });
  return flippedObj;
};
