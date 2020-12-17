// This function accepts a list of any items and simply reverses them

const reverse = (itemList) => {
  const reversedList = [];
  itemList.forEach((item) => reversedList.unshift(item));
  return reversedList;
};

export default reverse;
