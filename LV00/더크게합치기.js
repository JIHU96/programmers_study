/* 문제 설명
연산 ⊕는 두 정수에 대한 연산으로 두 정수를 붙여서 쓴 값을 반환합니다. 예를 들면 다음과 같습니다.

12 ⊕ 3 = 123
3 ⊕ 12 = 312
양의 정수 a와 b가 주어졌을 때, a ⊕ b와 b ⊕ a 중 더 큰 값을 return 하는 solution 함수를 완성해 주세요.

단, a ⊕ b와 b ⊕ a가 같다면 a ⊕ b를 return 합니다.

제한사항
1 ≤ a, b < 10,000
입출력 예
a	b	result
9	91	991
89	8	898 */

// 문자열로 합치는게 더 쉽다고 생각했다
function solution1(a, b) {
  let aPlusB = Number(String(a) + String(b));
  let bPlusA = Number(String(b) + String(a));

  return Math.max(aPlusB, bPlusA);
}

// 생각하니 String() 함수 안쓰고 백틱쓰면 됨;;;
function solution2(a, b) {
  let aPlusB = Number(`${a}${b}`);
  let bPlusA = Number(`${b}${a}`);

  return Math.max(aPlusB, bPlusA);
}

let a1 = 9;
let b1 = 91;

let a2 = 89;
let b2 = 8;

console.log(solution1(a1, b1));
console.log(solution2(a1, b1));
console.log(solution1(a2, b2));
console.log(solution2(a2, b2));
