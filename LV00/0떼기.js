/* 문제 설명
정수로 이루어진 문자열 n_str이 주어질 때, n_str의 가장 왼쪽에 처음으로 등장하는 0들을 뗀 문자열을 return하도록 solution 함수를 완성해주세요.

제한사항
2 ≤ n_str ≤ 10
n_str이 "0"으로만 이루어진 경우는 없습니다.
입출력 예
n_str	result
"0010"	"10"
"854020"	"854020" */

function solution(n_str) {
  let arr = [...n_str];
  let answer = [...n_str];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] !== "0") break;
    else answer.shift();
  }

  return answer.join("");
}

// 다른 사람 풀이
// 왜 숫자로 바꿔서 앞자리 없앨 생각을 못했을까...
const solution = (str) => String(Number(str));

console.log(solution("0010"));
console.log(solution("854020"));
