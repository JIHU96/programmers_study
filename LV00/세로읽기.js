/* 문제 설명
문자열 my_string과 두 정수 m, c가 주어집니다. my_string을 한 줄에 m 글자씩 가로로 적었을 때 왼쪽부터 세로로 c번째 열에 적힌 글자들을 문자열로 return 하는 solution 함수를 작성해 주세요.

제한사항
my_string은 영소문자로 이루어져 있습니다.
1 ≤ m ≤ my_string의 길이 ≤ 1,000
m은 my_string 길이의 약수로만 주어집니다.
1 ≤ c ≤ m
입출력 예
my_string	m	c	result
"ihrhbakrfpndopljhygc"	4	2	"happy"
"programmers"	1	1	"programmers" */

function solution(my_string, m, c) {
  const newArr = Array.from(
    { length: Math.ceil([...my_string].length / m) },
    (_, index) => [...my_string].slice(index * m, index * m + m)
  );

  let result = "";
  newArr.forEach((item) => (result += item[c - 1]));

  return result;
}

// 다른 사람 풀이
function solution(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m === c - 1).join("");
}

console.log(solution("ihrhbakrfpndopljhygc", 4, 2));
