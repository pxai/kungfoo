// comment
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

	print() {
		let result = this._value;
		if (this._right == null) { 
			result +=  "";
		} else {
			result += '\n\t' + this._right.print();
		}

		if (this._left== null) { 
			result += "";
		} else {
			result += '\n\t' + this._left.print();
		}
		return result;
	}

}

let tree = new BinarySearchTree(42);
tree.right=new BinarySearchTree(666);
tree.left=new BinarySearchTree(15);

console.log(tree);
console.log(tree.print());
