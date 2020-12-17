// This function takes 2 arguments, a list of items and the single item you'd like to remove.
// The function will return a new list that has ALL of the specified items removed.

const itemRemoveAll = (list, removeItem) => {
  if (list.length === 0) return list;
  return list.filter((item) => item !== removeItem);
};

export default itemRemoveAll;
