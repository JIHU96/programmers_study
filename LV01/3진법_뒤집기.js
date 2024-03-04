const print = console.log;

// 테스트 실패
function convert_three(n) {
  let arr = [];

  if (n < 3) return n * 3;
  else {
    while (n > 3) {
      arr.push(n % 3);

      n = parseInt(n / 3);

      if (n < 3) {
        arr.push(n % 3);
      }
    }
    arr = arr.reverse();

    let answer = 0;

    arr.map((value, idx) => {
      answer += value * 3 ** idx;
    });

    return answer;
  }
}

const ans = convert_three(1);

print("ans", ans);

print();

function solution(n) {
  const answer = parseInt(n.toString(3).split("").reverse().join(""), 3);
  return answer;
}
