const Stack = require('../stack');

const evalRPN = function (expresion) {
	let stack = new Stack();
	let a = 0;
	let b = 0;	

	for(e of expresion) {
		switch(e) {
			case '+':
						stack.push(stack.pop() + stack.pop());
						break;
			case '*':
						stack.push(stack.pop() * stack.pop());
						break;
			case '-':
					    a = stack.pop();
						b = stack.pop();
						stack.push(a - b);						
						break;
			case '/':
					    a = stack.pop();
						b = stack.pop();
						stack.push(a / b);						
						break;
			default:
						stack.push(e);
						break;
		}
	}

	return stack.pop();
};

module.exports = evalRPN;
