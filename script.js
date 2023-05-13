var msg1 = document.getElementById("msg1");
var msg2 = document.getElementById("msg2");
var msg3 = document.getElementById("msg3");
var playAgain = document.getElementById("playAgain");
playAgain.style.display = "none";
// Create a random answer
var ans = Math.floor(Math.random() * 100) + 1;
//console.log(ans); //OK
var guessCnt = 0;
var guessedNums = [];
//guessedNums.push(10);
//console.log(guessedNums); //ok

// function playAgain() {
//   alert("Play again");
//   //Reset(); // Reset previous playing history
// }
// function Reset() {
//   alert("Reset");
// }

function play() {
  var user_guess = document.getElementById("guess").value;
  //console.log(user_guess);//ok

  if (user_guess < 1 || user_guess > 100) {
    alert("Please enter a number between 1 and 100");
  } else {
    guessedNums.push(user_guess); //ok
    //console.log(guessedNums); //ok
    guessCnt += 1;
    if (user_guess > ans) {
      msg1.textContent = `Your guess is too high.`;
      msg2.textContent = `No. of guesses: ${guessCnt}`;
      msg3.textContent = "Guessed numbers are: " + guessedNums;
    } else if (user_guess < ans) {
      msg1.textContent = "Your guess is too low.";
      msg2.textContent = "No. of guesses:" + guessCnt;
      msg3.textContent = "Guessed numbers are: " + guessedNums;
    } else if ((user_guess = ans)) {
      msg1.textContent = "Congrats -- You Win!!";
      msg2.textContent = "The answer was:" + ans;
      msg3.textContent = `You guessed it in ${guessCnt} guesses`;
      document.getElementById("btn").disabled = true;
      document.getElementById("guess").disabled = true;
      //playAgain();
      playAgain.style.display = "block";
    }
  }
}
