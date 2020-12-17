// This function takes multiple arguments, the first being the given array you'd like to add on to, and
// the rest may be another array or any value that will be added onto the given array. After you give the
// first array as an argument you may list as many items to concat as you'd like.

const concat = (anyList, ...values) => {
  const givenValues = [...values];

  givenValues.forEach((value) => {
    if (Array.isArray(value)) {
      value.forEach((val) => anyList.push(val));
    } else {
      anyList.push(value);
    }
  });

  return anyList;
};

export default concat;
