/* 문제 설명
문자열 배열 strArr이 주어집니다. strArr의 원소들을 길이가 같은 문자열들끼리 그룹으로 묶었을 때 가장 개수가 많은 그룹의 크기를 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ strArr의 길이 ≤ 100,000
1 ≤ strArr의 원소의 길이 ≤ 30
strArr의 원소들은 알파벳 소문자로 이루어진 문자열입니다.
입출력 예
strArr	result
["a","bc","d","efg","hi"]	2 */

// GPT이용해서 단계별로 답 찾아가기
function solution(strArr) {
  let lengthArray = strArr.map((item) => item.length);

  let makeObject = lengthArray.reduce((acc, currentValue) => {
    // acc 객체에서 현재 숫자(currentValue)의 등장 횟수를 확인하고 업데이트
    // 현재 숫자가 acc 객체에 이미 존재하면 그 값에 1을 더하고, 그렇지 않으면 1로 초기화
    acc[currentValue] = (acc[currentValue] || 0) + 1;

    // 누적된 객체 반환
    return acc;
  }, {});

  const answer = Object.entries(makeObject).reduce((acc, current) => {
    // acc[1]은 누적된 요소의 값(숫자의개수), current[1]은 현재 요소의 값(숫자의개수)
    // 현재 요소의 값이 더 크거나 같으면 현재 요소로 누적값을 업데이트
    // 값이 같을 경우, 키 값(숫자)도 비교하여 더 큰 키 값을 가진 요소로 업데이트
    if (
      !acc ||
      current[1] > acc[1] ||
      (current[1] === acc[1] && current[0] > acc[0])
    ) {
      return current;
    } else {
      return acc;
    }
  }, null);

  return answer[1];
}

// HashMap 이용하기
function solution(strArr) {
  const answer = strArr.reduce((acc, cur) => {
    console.log(acc);
    const length = cur.length;

    acc.set(length, acc.get(length) ? acc.get(length) + 1 : 1);

    return acc;
  }, new Map());

  console.log(answer);

  console.log("----------------");

  console.log([...answer.values()]);

  return Math.max(...[...answer.values()]);
}

console.log(solution(["a", "bc", "d", "efg", "hi"]));
