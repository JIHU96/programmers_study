/* 문제 설명
문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

제한사항
my_string은 숫자와 알파벳으로만 이루어져 있습니다.
1 ≤ my_string의 길이 ≤ 1,000
0 ≤ s ≤ e < my_string의 길이
입출력 예
my_string	s	e	result
"Progra21Sremm3"	6	12	"ProgrammerS123"
"Stanley1yelnatS"	4	10	"Stanley1yelnatS" */

function solution(my_string, s, e) {
  let arr = [...my_string];

  let remainingFront = arr.slice(0, s);
  let toReverse = arr.slice(s, e + 1).reverse();
  let remainingBck = arr.slice(e + 1);

  let answer = [...remainingFront, ...toReverse, ...remainingBck].join("");

  return answer;
}

solution("Progra21Sremm3", 6, 12);
solution("0123", 0, 0); // 기대값: 0123
solution("00000", 0, 1); // 기대값: 00000
