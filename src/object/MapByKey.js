// This function takes 2 arguments, an array of objects and a key within the object.
// It will return a list of all values that correspond to the given key.

const mapByKey = (objList, key) => {
  const mappedVals = [];
  objList.forEach((obj) => {
    if (key in obj) mappedVals.push(obj[key]);
  });
  return mappedVals;
};

export default mapByKey;
