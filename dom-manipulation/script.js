const array = ["text", "category"];

function showRandomQuote() {
  const random = (document.getElementById("quoteDisplay").innerHTML = array);
  const application = Math.random(random);
  return application;
}
function createAddQuoteForm() {
  const divEl = document.createElement("div");
  const append = body.appendChild(divEl);
  const inputEl = document.createElements("input");
  const child = append.appendChild(inputEl);
  return child;
}
