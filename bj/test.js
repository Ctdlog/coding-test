const a = 5;

function test() {
	console.log('1', a);
	var a = 4;
	console.log('2', a);
	a = 3;
	return function () {
		console.log('3', a);
	};
}

test()();
