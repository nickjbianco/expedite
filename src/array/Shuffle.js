// This function takes in a list and returns that list in a randomly shuffled order.

const shuffle = (list) => {
  const shuffledList = [];

  while (list.length > 0) {
    const randomIdx = Math.floor(Math.random() * list.length);
    shuffledList.push(list[randomIdx]);
    list.splice(randomIdx, 1);
  }

  return shuffledList;
};

export default shuffle;
