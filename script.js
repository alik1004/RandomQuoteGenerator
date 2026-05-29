let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://thequoteshub.com/api/random-quote";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.text;
      author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);