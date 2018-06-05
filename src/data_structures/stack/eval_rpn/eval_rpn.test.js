const chai = require('chai');
const expect = chai.expect;
const evalRPN = require('./eval_rpn');

describe('stack/evarpn eval reverse polish notation', () => {
	it('should eval and give correct value', () => {
		expect(evalRPN([3,4,'*',30,'+'])).to.equal(42);
	});
});
