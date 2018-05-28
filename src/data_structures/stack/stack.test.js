const chai = require('chai');
const Stack = require('./stack');
const expect = chai.expect;
let sample = null;

describe('Testing stack structure', () => {
	beforeEach(() => {
		sample = new Stack();
	});

	it('should be empty', () => {
		expect(sample.length()).to.equal(0);
	});

	it('should push correctly', () => {
		expect(sample.length()).to.equal(0);
		sample.push(666);
		expect(sample.length()).to.equal(1);
	});

	it('should pop correctly', () => {
		expect(sample.length()).to.equal(0);
		sample.push(666);
		sample.push(42);
		expect(sample.length()).to.equal(2);
		let popped = sample.pop();
		expect(popped).to.equal(42);	
		expect(sample.length()).to.equal(1);
	});
});
