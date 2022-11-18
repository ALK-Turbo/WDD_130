import renderQuote from "./RandomQuote.mjs";

renderQuote("#quoteContainer");


document.getElementById("getQuote").addEventListener('click', function onClick() {
    // get another random quote
    renderQuote("#quoteContainer");
});
