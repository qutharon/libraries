function getRandomQuote() {
  // Access the global array
  const randomIndex = Math.floor(Math.random() * CRYPTOGRAM_QUOTES.length);
  return CRYPTOGRAM_QUOTES[randomIndex];
}