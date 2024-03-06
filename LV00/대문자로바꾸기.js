/* 문제 설명
알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 대문자로 변환하여 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ myString의 길이 ≤ 100,000
myString은 알파벳으로 이루어진 문자열입니다.
입출력 예
myString	result
"aBcDeFg"	"ABCDEFG"
"AAA"	"AAA" */

// 정규식, map, 대문자변환, 문자열<->배열 메서드
// 그냥 myString.toUpperCase();만 해도 되지만 정규식 등에 익숙해지고 싶었다.
function solution(myString) {
  // 대문자 검사 정규식
  const regex = new RegExp(/^[A-Z]/);
  const answer = myString.split("").map((item) => {
    if (item.match(regex)) return item;
    return item.toUpperCase();
  });
  return answer.join("");
}

let input = "aBcDeFg";
console.log(solution(input));
