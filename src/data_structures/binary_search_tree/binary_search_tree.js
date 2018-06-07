
class BinarySearchTree {

	constructor(value) {
		this._value = value;
		this._right = null;
		this._left = null;
	}
	
	get value() {
		return this._value;
	}

	set value(value) {
		this._value = value;
	}

	get right() {
		return this._right;
	}

	set right(right) {
		this._right = right;
	}

	get left() {
		return this._left;
	}

	set left(left) {
		this._left = left;
	}
}
