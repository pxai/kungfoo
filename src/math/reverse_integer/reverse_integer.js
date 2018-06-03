const reverseInteger = function(number) {
	let result = 0;

    while (number != 0) {
      result = (result * 10) + (number % 10);
      number = Math.floor(number/10);
    }

    return (result > Number.MAX_VALUE || 
            result < Number.MIN_VALUE ? 0 : result);
}

module.exports = reverseInteger;
