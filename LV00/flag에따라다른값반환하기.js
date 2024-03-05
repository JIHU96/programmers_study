/*문제 설명
두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.

제한사항
-1,000 ≤ a, b ≤ 1,000
입출력 예
a	b	flag	result
-4	7	true	3
-4	7	false	-11*/

// flag로 분기해야하는데 로직은 심플하니 예전에 배운 조건문 clean coding을 적용하였다
function solution(a, b, flag) {
  const result = { true: a + b, false: a - b };
  return result[flag];
}

let a = -4;
let b = 7;

console.log(solution(a, b, true));
console.log(solution(a, b, false));
