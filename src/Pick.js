// This function takes an object and an array and returns a new object. The array specifies which key and corresponding
// value will be returned in the new object.

const pick = (anyObj, properties) => {
  const newObj = {};

  properties.forEach((property) => {
    if (anyObj[property]) {
      newObj[property] = anyObj[property];
    }
  });

  return newObj;
};
