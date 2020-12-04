// This function takes a string of any length and returns the correctly capitalized version.

const capitalized = (str) => {
  const capitalizedStr = [];

  const chars = str.split("");
  chars.forEach((char, idx) => {
    if (idx === 0) {
      const upperCaseChar = char.toUpperCase();
      capitalizedStr.push(upperCaseChar);
    } else {
      const lowerCaseChar = char.toLowerCase();
      capitalizedStr.push(lowerCaseChar);
    }
  });

  return capitalizedStr.join("");
};
