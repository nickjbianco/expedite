// Function returns the length of a string or an array.

const length = (strArr) => {
  let count = 0;
  while (strArr) {
    if (Array.isArray(strArr)) {
      strArr.pop();
    } else {
      strArr.splice(0, count);
    }
    count++;
  }
  return count;
};

console.log(length("hello"));
console.log(length(["hello"]));
