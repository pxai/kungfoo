const selectionSort = function (numbers) {
    for(let i=0;i<numbers.length-1;i++) {
			let indiceMenor=i;
       for(let j=i+1;j<numbers.length;j++){
         if(numbers[j] < numbers[indiceMenor]) { indiceMenor=j; }
		}
         if(i!=indiceMenor){
			let tmp = numbers[i];
			numbers[i] = numbers[indiceMenor];
            numbers[indiceMenor] = tmp;
         }
	}
	return numbers;
}

module.exports = selectionSort;
