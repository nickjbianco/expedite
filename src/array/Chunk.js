// This function accepts an array and a whole number. The function returns a nested array
// of grouped elements split based on the given number. If the array can not be
// split evenely, the last group will be the remainder of elements.

const chunk = (list, number) => {
  const chunked = [];

  list.forEach((ele) => {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === number) {
      chunked.push([ele]);
    } else {
      last.push(ele);
    }
  });

  return chunked;
};

export default chunk;
