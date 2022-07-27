function getQuote() {
  fetch("https://type.fit/api/quotes/")
    .then((res) => {
      return res.json();
    })
    .then((d) => {
      let x = Math.floor(Math.random() * 1643 + 1);
      displayQuote(d[x]);
    });
}

function displayQuote(quote) {
  document.getElementById("quote").innerHTML = quote.text;
  document.getElementById("author").innerHTML = quote.author;
}
getQuote();
