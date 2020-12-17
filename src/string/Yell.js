// This function takes in a sentence string and will return the yelled version.
// The yelled version is simply all upper cased with 3 exclamation points at the end of the sentence.

const yell = (sentenceStr) => {
  if (!sentenceStr) return sentenceStr;
  const words = sentenceStr.split(" ");
  const yelledWords = words.map((word) => word.toUpperCase());
  const yelledSentence = yelledWords.join(" ") + "!";
  return yelledSentence;
};

export default yell;
