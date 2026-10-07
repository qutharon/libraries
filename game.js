function getRandomQuote() {
  const quoteList = window.CRYPTOGRAM_QUOTES;
  return quoteList[Math.floor(Math.random() * quoteList.length)];
}