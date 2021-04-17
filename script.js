$("#button").click(function () {
  $("html,body").animate(
    {
      scrollTop: $("#firstPlate").offset().top,
    },
    100
  );
});

function change() {
  location.href = "#firstlate";
}

var quotes = [
  "A good rule to remember for life is that when it comes to plastic surgery and sushi, never be attracted by a bargain.",
  "Keep your friends close and your sushi closer",
  " Let’s get avo-control.   ",
  "Life’s too short to eat bad sushi.",
  "No more Mr. Rice Guy",
  "So much sushi, so little time.",
  "Wake up little sushi.",
  "We dance to a different tuna.",
  "We’re jammin’ with salmon.",
  "You had me at sushi",
];

let quoteScelta = true;
var randomQuote = Math.floor(Math.random() * quotes.length);
let index = 0;

function textOnScreen() {
  var text = document.getElementById("text-on-screen");
  if (quoteScelta == false){
    randomQuote = Math.floor(Math.random() * quotes.length);
    quoteScelta = true;    
}

  text.innerHTML+= quotes[randomQuote].charAt(index);

  index++;
  if (index > quotes[randomQuote].length - 1) {
    index = 0;
    quoteScelta = false;
    text.innerHTML = "";

    
  }
}

setInterval(textOnScreen, 150);

textOnScreen();
