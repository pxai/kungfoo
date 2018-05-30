const insertionSort = function (numbers) {
	for(let i=0;i < numbers.length; i++){
		let j = i;
		let aux=numbers[i];
       	while((i>0)&&(aux<numbers[j-1])){
			numbers[j]=numbers[j-1];
          	j--;
       	}
       	numbers[j]=aux;
     }

	return numbers;
}

module.exports = insertionSort;
