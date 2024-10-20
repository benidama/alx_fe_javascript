const array = ["text", "category"];
const newQuote = document.getElementById("newQuote");
newQuote.addEventListener("click", addQuote);

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

function addQuote() {
  return createAddQuoteForm();
}

const loacal = localStorage.setItem("Name", "Martin");
const gatting = localStorage.getItem(Name);
function importFromJsonFile(event) {
  const fileReader = new FileReader();
  // fileReader.onload = function (event) {
  //   const importedQuotes = JSON.parse(event.target.result);
  //   quotes.push(...importedQuotes);
  //   saveQuotes();
  //   alert("Quotes imported successfully!");
  // };
  // fileReader.readAsText(event.target.files[0]);
}
