const chai = require('chai');
const expect = chai.expect;
const integerToEnglish = require('./integer_to_english');

describe('math/integer_to_english', () => {
	it('should convert correctly', () => {
		expect(integerToEnglish(0)).to.equal('Zero');
		//expect(integerToEnglish(5)).to.equal('Five');
//		expect(integerToEnglish(42)).to.equal('Forty Two');
//		expect(integerToEnglish(666)).to.equal('Six Hundred Sixty Six');
	});
});  
