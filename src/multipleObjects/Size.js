// This function takes one argument which may be either a string, array or object and returns the overall length of its contents.

const size = (givenArg) => {
  return givenArg.length ? givenArg.length : Object.keys(givenArg).length;
};

export default size;
