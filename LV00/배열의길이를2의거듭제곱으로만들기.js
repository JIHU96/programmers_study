/* 제 설명
정수 배열 arr이 매개변수로 주어집니다. arr의 길이가 2의 정수 거듭제곱이 되도록 arr 뒤에 정수 0을 추가하려고 합니다. arr에 최소한의 개수로 0을 추가한 배열을 return 하는 solution 함수를 작성해 주세요.

제한사항
1 ≤ arr의 길이 ≤ 1,000
1 ≤ arr의 원소 ≤ 1,000
입출력 예
arr	result
[1, 2, 3, 4, 5, 6]	[1, 2, 3, 4, 5, 6, 0, 0]
[58, 172, 746, 89]	[58, 172, 746, 89] */

function solution(arr) {
  let array = [...arr];
  let length = arr.length;

  let target = Math.log(length) / Math.log(2); // log2(n)

  if (target % 1 === 0) return array;

  let howMany = 2 ** Math.ceil(target) - length;

  if (howMany !== 0) {
    for (let index = 0; index < howMany; index++) {
      array.push(0);
    }
  }

  return array;
}

// 위 풀이를 단축시킨 풀이
function solution(arr) {
  const length = arr.length;
  const totalLength = 2 ** Math.ceil(Math.log2(length));
  return [...arr, ...new Array(totalLength - length).fill(0)];
}

console.log(solution([1, 2, 3, 4, 5, 6]));
console.log(solution([58, 172, 746, 89]));
console.log(solution([1]));
