exports.top_3_words = (s) => {
  let result = '';
  const splittedString = s.toLowerCase().split(' '); // lowercased array of the input

  const wordsCount = {}; // keeps track of repeated words
  splittedString.forEach((word) => {
    if (wordsCount[word]) wordsCount[word] = wordsCount[word] += 1;
    else wordsCount[word] = 1;
  });

  const topWordRepeats = Object.values(wordsCount).sort().reverse().splice(0, 3); // top 3 char counts

  // eslint-disable-next-line no-restricted-syntax
  for (const [word, count] of Object.entries(wordsCount)) {
    if (topWordRepeats.includes(count)) result += `${word} `;
  }

  return [result.slice(0, -1)]; // remove space at the end of the string
};
