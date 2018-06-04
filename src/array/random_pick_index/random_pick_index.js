const randomPickIndex = function(numbers,target) {
	let result = -1;
	let found = 0;

	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] !== target) continue;
		if (Math.floor(Math.random()* (++found) ) === 0)
			result = i;
	}
	return result;
};

module.exports = randomPickIndex;
