
class LinkedList {
	constructor (value = null, next = null){
		this._value = value;
		this._next = next; 
	}

	size () {
		if (this._value == null) {
			console.log('Is null')
			return 0;
		} else if (this._value != null && this._next == null) {
			console.log('Is one')
			return 1;
		} else {
			console.log('One and...');
			return 1 + this.size(this._next);
		}
	}

	add(element) {
		this._next = new LinkedList(element, null);
	}

	find(element) {
/*		let pos = 0;
		let first = this;

		if (this._next == null) {
			return this._value === element?0:-1;
		}

		do {
			if (this._value === element) {
				this = first;
				return pos;
			}
			this = this._next;
			pos++;
		}	while(this._next != null);
		
		this = first;
		return -1;
		*/
	}
}


module.exports = LinkedList;
