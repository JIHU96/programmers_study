/*  문제 설명
정수 start_num와 end_num가 주어질 때, start_num부터 end_num까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

제한사항
0 ≤ start_num ≤ end_num ≤ 50
입출력 예
start_num	end_num	result
3	10	[3, 4, 5, 6, 7, 8, 9, 10] */

// 전형적인 for문 사용
function solution(start_num, end_num) {
  var answer = [];
  for (let index = start_num; index <= end_num; index++) {
    answer.push(index);
  }
  return answer;
}

//Array() 함수 사용
function solution(start, end) {
  return Array(end - start + 1)
    .fill(start)
    .map((x, idx) => x + idx);
  // n개의 길이를 갖는 배열을 선언하고 그 안을 초기값을 채운 후,
  // map 함수로 loop
}

console.log(solution());
