const chai = require('chai');
const expect = chai.expect;
const singleNumber = require('./single_number')

describe('bit/single_number', () => {
	it('should work normal array', () => {
		expect(singleNumber([4,2,42,2,4,5,5])).to.equal(42);
	});
});
