exports.top_3_words = (s) => {
  const result = [];
  const splittedString = s.toLowerCase().split(' '); // lowercased array of the input
  const wordsCount = {}; // keeps track of repeated words
  const numWord = {};

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
      const arr = Array(1).fill(key);
      if (numWord[value]) numWord[value] = [numWord[value], arr];
      else numWord[value] = arr;
    }
  });

  // pushes repeated words to results
  topWordRepeats.forEach((num) => {
    if (numWord[num].length === 1 && result.length < 3) result.push(numWord[num][0]);
    else numWord[num][0].map((val) => result.length < 3 && result.push(val)[0]);
  });

  //   console.log(result, 'res');
  return result;
};
