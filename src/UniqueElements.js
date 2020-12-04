// This function takes and array and will return an array with all the duplicate elements removed.

export const uniqueElements = (anyList) => {
  const uniquesOnly = [];
  anyList.forEach(
    (item) => !uniquesOnly.includes(item) && uniquesOnly.push(item)
  );
  return uniquesOnly;
};
