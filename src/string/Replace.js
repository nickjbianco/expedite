// This function takes 3 arguments.
// First, is the string you'd like to modify.
// Second, is the character you'd like to replace.
// Third, is the character youd'd lke to replace it with.
// Function returns the modifed string.

const replace = (anyStr, removeChar, replaceChar) => {
  if (anyStr.length === 0) return anyStr;
  const chars = anyStr.split("");
  chars.forEach((char, idx) => {
    if (char === removeChar) {
      chars[idx] = replaceChar;
    }
  });
  return chars.join("");
};

export default replace;
