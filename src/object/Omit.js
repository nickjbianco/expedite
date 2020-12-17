// This function takes an object and an array and returns a new object. The array specifies which key and corresponding
// value will be omitted in the new object.

const omit = (givenObj, pathsToOmit) => {
  const newObj = {};

  const givenObjKeys = Object.keys(givenObj);
  const newObjKeys = givenObjKeys.filter((key) => !pathsToOmit.includes(key));
  newObjKeys.forEach((key) => (newObj[key] = givenObj[key]));

  return newObj;
};

export default omit;
