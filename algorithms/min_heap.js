class minHeap {
	constructor() {
		this.heap = [];
		this.heap.push(-Infinity);
	}
	insert(val) {
		this.heap.push(val);
		this.upheap(this.heap.length - 1);
	}
	upheap(pos) {
		let tmp = this.heap[pos];
		while (tmp < this.heap[parseInt(pos / 2)]) {
			this.heap[pos] = this.heap[parseInt(pos / 2)];
			pos = parseInt(pos / 2);
		}
		this.heap[pos] = tmp;
	}
	get() {
		if (this.heap.length === 2) return this.heap.pop();
		let res = this.heap[1];
		this.heap[1] = this.heap.pop();
		this.downheap(1, this.heap.length - 1);
		return res;
	}
	downheap(pos, len) {
		let tmp = this.heap[pos],
			child;
		while (pos <= parseInt(len / 2)) {
			child = pos * 2;
			if (child < len && this.heap[child] > this.heap[child + 1]) child++;
			if (tmp <= this.heap[child]) break;
			this.heap[pos] = this.heap[child];
			pos = child;
		}
		this.heap[pos] = tmp;
	}
	size() {
		return this.heap.length - 1;
	}
	front() {
		return this.heap[1];
	}
}
