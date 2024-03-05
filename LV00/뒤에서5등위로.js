/*
문제 설명
정수로 이루어진 리스트 num_list가 주어집니다. num_list에서 가장 작은 5개의 수를 제외한 수들을 오름차순으로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
6 ≤ num_list의 길이 ≤ 30
1 ≤ num_list의 원소 ≤ 100
입출력 예
num_list	result
[12, 4, 15, 46, 38, 1, 14, 56, 32, 10]	[15, 32, 38, 46, 56]
*/

// 원본 유지를 위해 input값을 복사 -> 정렬 메서드 & 제거 메서드 사용
function solution(num_list) {
  let answer = [...num_list];
  answer.sort((a, b) => a - b);
  answer.splice(5);
  return answer;
}

const num_list = [12, 4, 15, 46, 38, 1, 14, 56, 32, 10];
const result = [15, 32, 38, 46, 56];

console.log(solution(num_list));
console.log(result);
