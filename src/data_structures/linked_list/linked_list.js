
class LinkedList {
	constructor (initial = []) {
		this._elements = initial; 
	}

	size () {
		return this._elements.length;
	}

	add(element) {
		this._elements.push(element);
	}

	find(element) {
		return this._elements.indexOf(element);
	}
}


module.exports = LinkedList;
