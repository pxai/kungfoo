const lastWordLength = function (phrase) {
	return phrase.trim().length - phrase.trim().lastIndexOf(' ') -1;
}

module.exports = lastWordLength;
