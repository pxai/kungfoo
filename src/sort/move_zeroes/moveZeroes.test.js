const chai = require('chai');
const expect = chai.expect;
const moveZeroes = require('./moveZeroes');

describe('sort/move_zeroes algorithm', () => {
	it('should work with empty array', () => {
		expect(moveZeroes([]).length).to.equal(0);
	});
	
	it('should work with normal array', () => {
		let normal = [6, 0, 2, 1, 0, 2, 1, 0, 0, 4];
		let expected = [6, 2, 1, 2, 1, 4, 0, 0, 0, 0];
		expect(moveZeroes(normal)).to.eql(expected);
	});
});
