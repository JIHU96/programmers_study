/* 문제 설명
알파벳 소문자로 이루어진 문자열 myString이 주어집니다. 알파벳 순서에서 "l"보다 앞서는 모든 문자를 "l"로 바꾼 문자열을 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ myString ≤ 100,000
myString은 알파벳 소문자로 이루어진 문자열입니다.
입출력 예
myString	result
"abcdevwxyz"	"lllllvwxyz"
"jjnnllkkmm"	"llnnllllmm" */

// 일단 보자마자 든 생각: 유니코드로 처리하자
function solution(myString) {
  // 문자열 -> 유니코드: 문자/문자열.charCodeAt(index)
  let answer = [...myString].map((item) => {
    if (item.charCodeAt() <= 108) return "l";
    else return item;
  });

  return answer.join("");
}

// 정규식을 이용하자
const solution = (myString) => myString.replace(/[a-k]/g, "l");

console.log(solution("abcdevwxyz"));
