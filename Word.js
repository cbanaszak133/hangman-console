
var Letter = require("./Letter.js");

function Word(word){
	this.wordArray = word.split("");

	this.letterArray = this.toLetterArray(this.wordArray);

	this.guess = function(letter){
		for(var i = 0; i < this.letterArray.length; i++){
	   		this.letterArray[i].checkLetter(letter);
		}
	};

};

Word.prototype.toLetterArray = function (wordArray) {

	var lArr = [];

	for(var i = 0; i < this.wordArray.length; i++){
		lArr.push(new Letter(this.wordArray[i]));
	}

	return lArr;

};

Word.prototype.toWord = function(){
	var word = "";
	
	for(var i = 0; i < this.letterArray.length; i++){
		word += this.letterArray[i].letterStatus();
	}

	return word;

};


module.exports = Word;
