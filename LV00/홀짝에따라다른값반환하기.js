/* 문제 설명
양의 정수 n이 매개변수로 주어질 때, n이 홀수라면 n 이하의 홀수인 모든 양의 정수의 합을 return 하고 n이 짝수라면 n 이하의 짝수인 모든 양의 정수의 제곱의 합을 return 하는 solution 함수를 작성해 주세요.

제한사항
1 ≤ n ≤ 100
입출력 예
n	result
7	16
10	220 */

function solution(n) {
  let start = 0;
  const cond = n % 2 !== 0;
  if (cond) start = 1;

  let answer = 0;
  for (let value = start; value <= n; value += 2) {
    if (cond) answer += value;
    else answer += value ** 2;
  }

  return answer;
}

// 다른 사람 풀이
// 등차수열 합공식 같은걸 썼다.
// 수학공식 활용을 할 생각을 먼저 해야겠다 ㅠㅠ
