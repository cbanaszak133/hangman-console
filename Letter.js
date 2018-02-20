
function Letter(letter){
	this.letter = letter;

	if(this.letter === " "){
		this.guessed = true;
	}
	else{
		this.guessed = false;
    }

	this.letterStatus = function(){
		if(this.guessed){
			return this.letter;
		}
		else{
			return "_";
		}
	};

	this.checkLetter = function(guessedL){
		if (guessedL.toUpperCase() === this.letter || guessedL.toLowerCase() === this.letter){
			this.guessed = true;
		}
	};
};

module.exports = Letter;