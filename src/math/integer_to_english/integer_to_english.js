const integerToEnglish = function (number) {
	THOUSANDS    = [ "", "Thousand", "Million", "Billion" ];

	if (number == 0)
      return "Zero";

    let i = 0;
    let words = '';
	
    while (number > 0) {
      if (number % 1000 != 0) {
        words = helper(number % 1000)
            + THOUSANDS[i] + " "
            + words;
		}
      number /= 1000;
      i++;
    }

    return words.trim();
}

const helper = function (number) {
	LESS_THAN_20 = [ "", "One", "Two", "Three",
      "Four", "Five", "Six", "Seven",
      "Eight", "Nine", "Ten", "Eleven",
      "Twelve", "Thirteen", "Fourteen",
      "Fifteen", "Sixteen",
      "Seventeen", "Eighteen",
      "Nineteen" ];
  
 	TENS = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty","Seventy", "Eighty", "Ninety"];	

	if (number== 0) {
      return "";
    } else if (number< 20) {
      return LESS_THAN_20[number] + " ";
    } else if (number< 100) {
      return TENS[number/ 10] + " "
          + helper(number% 10);
    } else
      return LESS_THAN_20[number/ 100]
          + " Hundred "
          + helper(number% 100);
}

console.log(integerToEnglish(0));
console.log(integerToEnglish(5));
module.exports = integerToEnglish;
