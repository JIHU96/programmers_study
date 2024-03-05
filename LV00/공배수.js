/* 
문제 설명
정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요.

제한사항
10 ≤ number ≤ 100
2 ≤ n, m < 10
입출력 예
number	n	m	result
60	2	3	1
55	10	5	0
*/

// n,m로 나머지가 둘다 0이면 1 반환
function solution(number, n, m) {
  let checkN = number % n == 0;
  let checkM = number % m == 0;
  if (checkN && checkM) return 1;
  return 0;
}

console.log(solution(10, 5, 3));
console.log(solution(8, 8, 4));
