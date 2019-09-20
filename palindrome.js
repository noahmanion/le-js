function reverse(string) {
	return Array.from(string).reverse().join("");
}

function Phrase(content) {
	this.content = content;


	//returns true if phrase is a palindrome
	this.palindrome = function palindrome() {
		let processedContent = this.content.toLowerCase();
		return processedContent === reverse(processedContent);
	}

	//LOUDER!
	this.louder = function louder() {
		return this.content.toUpperCase();
	}
}