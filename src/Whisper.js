// This function takes in a sentence string and will return the whispered version.
// The whispered version is simply all lower cased with an ellipsis at the end of the sentence.

const whisper = (sentenceStr) => {
  const words = sentenceStr.split(" ");
  const whisperedWords = words.map((word) => word.toLowerCase());
  const whisperedSentence = whisperedWords.join(" ") + "...";
  return whisperedSentence;
};
