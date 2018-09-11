var win = 0;
var loss = 0;
var guess = 9;
var listOfChoices = [];


alert("press key to start")
document.onkeyup = function (event) {
  var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("");
  
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  console.log(computerGuess);
  var userGuess = event.key;

  if (userGuess === computerGuess) {
    win++;
    guess = 9;
    listOfChoices = [];
  }
 
  if (userGuess !== computerGuess) {
    guess--;
    listOfChoices.push(userGuess);
  }

 
  if (guess === 0) {
    loss++;
    guess = 9;
    listOfChoices = [];
  }
  document.getElementById("win").textContent = win;
  document.getElementById("loss").textContent = loss;
  document.getElementById("guess-left").textContent = guess;
  document.getElementById("guesses").textContent = listOfChoices;
};


