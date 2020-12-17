// This function takes an array of any dimension and returns the one dimensional version.

const flatten = (anyList) => {
  let flatList = [];

  anyList.forEach((element) => {
    if (Array.isArray(element)) {
      flatList = flatList.concat(flatten(element));
    } else {
      flatList.push(element);
    }
  });

  return flatList;
};

export default flatten;
