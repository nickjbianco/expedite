// This function takes 2 arguments, a list of items and the single item you'd like to remove.
// The function will return a new list that has ALL of the specified items removed.

export const itemRemoveAll = (list, removeItem) => {
  return list.filter((item) => item.toLowerCase() !== removeItem.toLowerCase());
};
