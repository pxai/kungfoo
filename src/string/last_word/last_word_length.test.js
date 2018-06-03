const chai = require('chai');
const expect = chai.expect;
const lastWordLength = require('./last_word_length');

describe('string/last_word_length', () => {
	it('Should return empty for empty ', () => {
		expect(lastWordLength('')).to.equal(0);
	});
	
	it('Should get last word from phrase', () => {
		expect(lastWordLength('This is the end')).to.equal(3);
	});
});
