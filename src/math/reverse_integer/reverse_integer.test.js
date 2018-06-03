const chai = require('chai');
const expect = chai.expect;
const reverseInteger = require('./reverse_integer');

describe('math/reverse_integer', () => {
	it('should reverse an integer', () => {
		expect(reverseInteger(12345)).to.equal(54321);
	});
});
