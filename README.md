# Hangman with Constructors!

## What it is

This is a Hangman style game running through the command console utilizing multiple JavaScript constructors. The 
game is focused around Word and Letter constructors. In order to take in user prompts, I also utilized the Inquirer 
NPM package. The hangman game is centered around the hit songs of Prince, which makes it even more compelling and awesome.

## How it works

1. The 'Letter' Constructor

The Letter constructor creates a Letter object that has a letter value (what letter it is), as well as a letterStatus
and checkLetter function. The letterStatus returns the letter if it has been succesfully guessed, and a _ if it has not
in order to fill in the gameboard with dashes. In order to include spaces into the game, they are automatically 'guessed' correctly in order for them to show up on the board. The checkLetter function takes in a letter and sees if that argument is equal to the Letter object's value. 

2. The 'Word' Constructor

The Word constructor creates a Word object that has both a wordArray and a letterArray. The WordArray initially splits apart 
the work into each of its letters, which is then fed to the toLetterArray method in order to fill the letterArray with 
Letter objects of those letters. The toWord function takes all of the letter objects and prints out their value (letter if guessed, _ if not) to the game console. Finally, the guess function takes in a guessed letter and sees if it is contained in the lettersArray, changing the gussed value of the letter if it is.

3. Index.js

The main game logic is ran through index.js. Within it I use the Inquirer package in order to gather user prompts, as
well as create a Word object based on the current Prince song being guessed. The current word being guessed is chosen 
using a random number generator, and is then transformed into a Word object. I then use the methods mentioned previously to check if user chosen letters are in the current word, and if so updating their values to show on the console. The number of guesses and guessed letters are also tracked in order to ensure that the user has 10 guesses and can not repeat any guesses as well. I make use of the includes() method to see if a given letter is within the original wordArray, which I found easier/more efficient than creating a for loop to go through the entire array. 