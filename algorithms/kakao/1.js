function solution(today, terms, privacies) {
	var answer = [];

	const map = new Map();
	for (const term of terms) {
		const [termType, validity] = term.split(' ');
		map.set(termType, +validity);
	}

	const [todayYear, todayMonth, todayDay] = today.split('.').map(Number);
	for (let i = 0; i < privacies.length; i++) {
		const [date, type] = privacies[i].split(' ');
		let [year, month, day] = date.split('.').map(Number);
		const validity = map.get(type);

		// 12개월이 넘어가면 n년 추가
		const nextMonth = month + validity;
		if (nextMonth > 12) {
			const nextYear = Math.floor(nextMonth / 12);
			year = year + nextYear;
			month = nextMonth % 12;
		} else {
			month = nextMonth;
		}

		// 수집 일자가 1일일때만 처리
		if (day === 1) {
			month = month - 1;
			if (month === 0) {
				year = year - 1;
				month = 12;
			}
			day = 28;
		} else {
			day = day - 1;
		}

		console.log(year, month, day);

		// 오늘 날짜랑 비교
		if (todayYear > year) {
			answer.push(i + 1);
		} else if (todayMonth > month) {
			answer.push(i + 1);
		} else if (todayDay > day) {
			answer.push(i + 1);
		}
	}

	return answer;
}

const today = '2022.05.19';
const terms = ['A 6', 'B 12', 'C 3', 'D 20'];
const privacies = [
	'2021.05.01 D',
	'2021.07.01 B',
	'2022.02.19 C',
	'2022.02.20 C',
];

const today2 = '2020.01.01';
const terms2 = ['Z 1', 'D 5'];
const privacies2 = [
	'2019.01.01 D',
	'2019.11.15 Z',
	'2019.08.02 D',
	'2019.07.01 D',
	'2018.12.28 Z',
];

console.log(solution(today2, terms2, privacies2));
