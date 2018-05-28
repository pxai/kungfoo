const moveZeroes = function (numbers) {

    if (numbers == null || numbers.length === 0)
      return numbers;

    let insertPos = 0;
    
    for (let i=0;i<numbers.length;i++) {
      if (numbers[i] != 0)
        numbers[insertPos++] = numbers[i];
    }

    while (insertPos < numbers.length) {
      numbers[insertPos++] = 0;
    }

	return numbers;
}

module.exports = moveZeroes;
