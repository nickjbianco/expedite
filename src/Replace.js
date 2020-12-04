// This function takes 3 arguments.
// First, is the string you'd like to modify.
// Second, is the pattern you'd like to replace.
// Third, is the pattenr youd'd lke to replace it with.
// Function returns the modifed string.

const replace = (anyStr, removePattern, replacePattern) => {
  const chars = anyStr.split(" ");
  chars.forEach((char, idx) => {
    if (char === removePattern) {
      chars[idx] = replacePattern;
    }
  });
  return chars.join(" ");
};
