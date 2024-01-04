const arr1 = [1, 1, 3, 3, 0, 1, 1];
const arr2 = [4, 4, 4, 3, 3];

// 전형적인 for문으로 풀기
function solution1(arr) {
  let answer = [];

  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] !== answer.at(-1)) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

function solution2(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

console.log(solution1(arr1));
console.log(solution1(arr2));
