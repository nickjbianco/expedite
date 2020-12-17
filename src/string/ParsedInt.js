// This function takes a string and converts it into an integer in radix 10.

const parsedInt = (str) => {
  if (str.length === 0) return str;

  const intList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let finalInt = 0;
  for (let i = 0; i < str.length; i++) {
    const currEle = str[i];
    intList.forEach((int) => {
      if (`${int}` === currEle) finalInt = finalInt * 10 + int;
    });
  }

  return finalInt;
};

export default parsedInt;
