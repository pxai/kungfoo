class Stack {
	constructor(initial=[]) {
		this._elements = initial;
	}

	length () {
		return this._elements.length;
	}

	push (element) {
		this._elements.push(element);
	}
	
	pop () {
		return this._elements.pop();
	}
}

module.exports = Stack;
