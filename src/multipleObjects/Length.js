// Function returns the length of a string or an array.

const length = (strArr) => {
  let count = 0;
  if (Array.isArray(strArr)) {
    strArr.forEach((el) => count++);
  } else {
    for (let i = 0; i < strArr.length; i++) count++;
  }
  return count;
};

export default length;
