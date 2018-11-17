//Isaac WU Psychic Game

// Reference: Rock, Paper, or Scissors Game.
// Create variables that hold references to the places in the HTML where we want to display things.
var gameGuide = document.getElementById("guide-text");
var wordMatch = document.getElementById("win-text");
var wordNoMatch = document.getElementById("losses-text");
var leftChances = document.getElementById("guesses-left");
var playerTried = document.getElementById("player-typed");

// Creating variables to hold the number of wins, losses, left chances, words typed.
var wins = 0;
var losses = 0;
var left = 9;
var tried = []; //tried MUST BE array, for push letters behind!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Creates an array that lists out all of the options
var computertype = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// This function is run whenever the user presses a key.
document.onkeydown = function (event) {

  // Determines which key was pressed.
  var userGuess = event.key.toUpperCase();
  tried.push(userGuess); //push everytime userGuess behind tried!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // tried.join(" and "); // why not work?

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computertype[Math.floor(Math.random() * computertype.length)].toUpperCase(); //random pick up number!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // This logic determines the outcome of the game (win/loss), and increments the appropriate number
  if (userGuess === computerGuess) {
    wins++;
    tried = []; //reset
    console.log (computerGuess)
  } else if (userGuess !== computerGuess) {
    left--;
    console.log (computerGuess)
  }

  if (left === 0) {
    losses++;
    tried = []; //reset
    left = 9; //reset
  }


  // Change the guide words
  gameGuide.textContent = "The Game Begin_";

  // Display the user and computer guesses, and wins/losses/left/tried.
  wordMatch.textContent = "Wins: " + wins;
  wordNoMatch.textContent = "Losses: " + losses;
  leftChances.textContent = "Left Chances: " + left;
  playerTried.textContent = "You had typed: " + tried;
};

