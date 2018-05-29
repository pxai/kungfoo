const chai = require('chai');
const expect = chai.expect;
const LinkedList = require('./linked_list');

let linkedList;

describe('Testing Linked List structure', () => {

	beforeEach(() => {
		linkedList = new LinkedList();		
	});

	it('should exist', () => {
		expect(LinkedList).to.exist;	
	});
	
	it('should be empty', () => {
		expect(linkedList.size()).to.equal(0);	
	});

	it('should add correctly', () => {
		linkedList.add(666);
		expect(linkedList.size()).to.equal(1);
	});

	it('should find existing element', () => {
		linkedList = new LinkedList([88,42,15,666]);
		expect(linkedList.find(15)).to.equal(2);
	});
});
