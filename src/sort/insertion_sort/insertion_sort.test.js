const chai = require('chai');
const expect = chai.expect;
const insertionSort = require('./insertion_sort');

describe('sort/insertion_sort algorithm', () => {
	it('should work with empty array', () => {
		expect(insertionSort([])).to.eql([]);
	});
	
	it('should work with normal array', () => {
		expect(insertionSort([5,-2,8,3,0,4])).to.eql([-2,0,3,4,5,8]);
	});
});
