const chai = require('chai');
const expect = chai.expect;
const selectionSort = require('./selection_sort');

describe('sort/selection_sort algorithm', () => {
	it('should work with empty array', () => {
		expect(selectionSort([])).to.eql([]);
	});
	
	it('should work with normal array', () => {
		expect(selectionSort([5,-2,8,3,0,4])).to.eql([-2,0,3,4,5,8]);
	});
});
