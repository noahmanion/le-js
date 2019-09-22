function reverse(string) {
	return Array.from(string).reverse().join("");
}

function Phrase(content) {
	this.content = content;

	this.processedContent = function processedContent() {
		return this.content.toLowerCase();
	}

	//returns true if phrase is a palindrome
	this.palindrome = function palindrome() {
		return this.processedContent() === reverse(this.processedContent());
	}

	//LOUDER!
	this.louder = function louder() {
		return this.content.toUpperCase();
	}
}

function TranslatedPhrase (content, trasnslation) {
	this.content = content;
	this.translation = trasnslation;

	// use processed content off of the translation rather than the content
	this.processedContent = function processedContent () {
		return this.translation.toLowercase();
	}
}

TranslatedPhrase.prototype = new Phrase();