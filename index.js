
var Word = require("./Word.js");
var inquirer = require('inquirer');


var numOfGuesses = 10;

var words = ["Lets Go Crazy", "I Would Die 4 U", "Purple Rain",
				"Little Red Corvette", "When Doves Cry", "Rasberry Beret",
					"Kiss", "Controversy"];
					
var ranNum = Math.floor(Math.random() * words.length);

var currentWord = new Word(words[ranNum]);
var guessedLetters = [];

console.log("Welcome to the Prince Hangman Game! Try and guess your favorite Prince hits.");


var askLetter = function(){

	if(numOfGuesses > 0){

		inquirer.prompt([
				{
					name: "letter",
					message: "Guess a letter: "
				}
				]).then(function(choice){

					if(!guessedLetters.includes(choice.letter)){
						guessedLetters.push(choice.letter);

						if(currentWord.wordArray.includes(choice.letter.toUpperCase()) || currentWord.wordArray.includes(choice.letter.toLowerCase())){
							console.log("CORRECT!");
							currentWord.guess(choice.letter);
							console.log(currentWord.toWord());
							console.log("Number of guesses remaining: " + numOfGuesses + "\n");
						}
						else{
							console.log("INCORRECT");
							numOfGuesses += -1;
							console.log(currentWord.toWord());
							console.log("Number of guesses remaining: " + numOfGuesses + "\n");

						}
					}
					else{
						console.log("You've guessed that letter already! Guess again!");
						numOfGuesses += -1;
						console.log("Number of guesses remaining: " + numOfGuesses + "\n");

					}

					if(currentWord.toWord() === words[ranNum]){
						console.log("You've won! Great job!");
					}
					else{
						askLetter();
					}
				});
	}
	else{
		console.log("You lost! The word was : " + words[ranNum]);
		console.log("Sorry bye bye!")
	}


}	

askLetter();

