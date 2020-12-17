// This function takes an object to query and a path to check.
// The functions returns a boolean indicating whether or not the given path
// is a direct property of the give object.

const has = (givenObj, givenPath) => {
  const allKeys = Object.keys(givenObj);
  return allKeys.includes(givenPath);
};

export default has;
