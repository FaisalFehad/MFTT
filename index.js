exports.top_3_words = (s) => {
  const result = [];
  if (!s) return result; // stop before starting when no text provided/ an empty string
  // spacial characters removed, lowercased array of the input string
  const splittedString = s.toLowerCase().replace(/'\B|[^a-z'? ]/g, '').split(' ').filter((w) => w.length);
  const wordsCount = {}; // keeps track of repeated words
  const numWord = {}; // allows for different word is repeated by the same amount as others

  // keep key value pairs {word : mentions}
  splittedString.forEach((word) => {
    if (wordsCount[word]) wordsCount[word] = wordsCount[word] += 1;
    else wordsCount[word] = 1;
  });

  // count of the top 3 repeated words
  const topWordRepeats = Object.values(wordsCount).sort().reverse().splice(0, 3);

  // stores the top 3 repeated char as {'repeats': [ [word1, word1], [word2, word2]]}
  // solves a problem where different words are repeated the same number of times
  // only iterate through the top 3 words
  Object.entries(wordsCount).forEach(([key, value]) => {
    if (topWordRepeats.includes(value)) {
      if (numWord[value]) numWord[value] = [numWord[value], key];
      else numWord[value] = key;
    }
  });

  // Using the short list of topWordRepeats, it pushes words into result arr
  // Flattens numWord[num] if it has nested arrays
  // Make sure that no 2 results are repeated
  topWordRepeats.forEach((num) => {
    const w = numWord[num]; // could be an array when multiple words are repeated by the same amount
    if (Array.isArray(w)) {
      w.flat(Infinity).forEach((word) => {
        if (result.length < 3 && !result.includes(word)) result.push(word);
        return result; // to end sooner
      });
    } else result.push(w);
  });

  return result;
};
