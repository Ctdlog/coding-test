function twoSquaredMaxNum(n) {
	let max = 0;
	while (Math.pow(2, max) < n) {
		max++;
	}
	return Math.pow(2, max);
}

function solution(queries) {
	// 1. 반복문 돌면서 이전에 원소가 몇 개 들어있는지, 배열의 크기가 몇인지
	// 2. 새로 원소가 추가될 때, 기존 배열의 크기보다 커지면 새로운 크기의 배열을 만들고
	// 3. 기존 배열의 원소 갯수를 복사해서 원소를 추가한다.
	var answer = 0;
	const map = new Map();
	for (let query of queries) {
		const [a, b] = query;
		const prevArr = map.get(a);
		if (prevArr) {
			const [len, maxLen] = prevArr;
			const newCount = len + b;
			if (newCount > maxLen) {
				console.log(len);
				answer += len;
			}
			map.set(a, [newCount, twoSquaredMaxNum(newCount)]);
		} else {
			map.set(a, [b, twoSquaredMaxNum(b)]);
		}
	}
	return answer;
}

const queries = [
	[2, 10],
	[7, 1],
	[2, 5],
	[2, 9],
	[7, 32],
];

console.log(solution(queries));
