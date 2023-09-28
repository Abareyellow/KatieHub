let quote = {};
let text = $("#text");
let author = $("#author");
let button = $("#new-quote");
let background = $("html");
let tweet = $("#tweet-quote");

button.on("click", getQuote);

function getQuote() {
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes",
    headers: { "X-Api-Key": "S67VB1bz5XcY9qvOPc5xCA==N5g9O7LkSsgek7vp" },
    contentType: "application/json",
    success: function (result) {
      console.log(result);
      quote = result[0];
      console.log(quote);
      change(quote.quote, quote.author);
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    }
  });
}

function change(quote, auth) {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  text.text(`"${quote}"`);
  author.text(`- ${auth}`);

  background.css("background-color", `rgb(${red}, ${green}, ${blue})`);
}