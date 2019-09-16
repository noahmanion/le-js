function reverse(string) {
	return Array.from(string).reverse.join("")
}

function palindrome(string) {
	let processedCondent = string.toLowerCase();
	return processedCondent === reverse(processedCondent);
}