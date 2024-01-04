// 노가다식 접급
const print = console.log;

function isDivisorsEven(number) {
  let divisor = [];
  let i = 1;

  while (i <= number) {
    if (number % i === 0) {
      divisor.push(i);
    }
    i++;
  }

  const condition = divisor.length % 2 === 0;

  if (condition) return number;
  else return -number;
}

function solution(left, right) {
  let arr = [];

  for (let i = left; i <= right; i++) {
    arr.push(isDivisorsEven(i));
  }

  let answer = arr.reduce((sum, value) => sum + value, 0);

  return answer;
}

const [left1, right1] = [13, 17];
const [left2, right2] = [24, 52];

print(solution(left1, right1));

// 수학 원리 접근

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
