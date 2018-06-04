const chai = require('chai');
const expect = chai.expect;
const randomPickIndex = require('./random_pick_index');

describe('array/random_pick_index problem', () => {
	it('should return any index', () => {
		const numbers = [2,3,6,5,4,3,5,6,2,0];
		for (let i = 0;i<100;i++) {
			let result = randomPickIndex(numbers,3);
			expect(result === 1 || result === 5).to.equal(true);
		}
	})
});
