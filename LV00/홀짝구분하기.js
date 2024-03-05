/* 
문제 설명
자연수 n이 입력으로 주어졌을 때 만약 n이 짝수이면 "n is even"을, 홀수이면 "n is odd"를 출력하는 코드를 작성해 보세요.

제한사항
1 ≤ n ≤ 1,000
입출력 예
입력 #1

100
출력 #1

100 is even
입력 #2

1
출력 #2

1 is odd
*/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let result = "odd";
rl.on("line", function (line) {
  result = line % 2 == 0 ? "even" : "odd";
  console.log(`${line} is ${result}`);
}).on("close", function () {
  n = Number(input[0]);
});
