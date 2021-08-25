let stringSimilarity = require("string-similarity");

function getSimilarQuote(currentQuote, allQuotes) {
  const extractAllQuotes = allQuotes.map((x) => {
    return x.text;
  });
  let quoteIndex = extractAllQuotes.indexOf(currentQuote);
  extractAllQuotes.splice(quoteIndex, 1);//removing the current Quote from the list
  let matchingResult = findSimilarString(currentQuote, extractAllQuotes);
 // console.log(matches);
  let mostSimilarQuote = matchingResult.bestMatch.target;
  const matchingQuote = allQuotes.filter((x) => x.text === mostSimilarQuote);
  return matchingQuote;
}

function getRandomnQuote(currentQuote, allQuotes) {
  const extractAllQuotes = allQuotes.map((x) => {
    return x.text;
  });
  let quoteIndex = extractAllQuotes.indexOf(currentQuote);
  extractAllQuotes.splice(quoteIndex, 1);//removing the current Quote from the list
  let matchingResult = findSimilarString(currentQuote, extractAllQuotes);
  //console.log(matches);
  let mostDifferentQuote = matchingResult.ratings.sort((a, b) => {
    return a.rating - b.rating;
  })[0].target;
  mostDifferentQuote = allQuotes.filter((x) => x.text === mostDifferentQuote);
  return mostDifferentQuote;
}

function findSimilarString(currentQuote, allQuotes) {
  const matchingResult = stringSimilarity.findBestMatch(currentQuote, allQuotes);
  return matchingResult;
}
export { getSimilarQuote, getRandomnQuote};