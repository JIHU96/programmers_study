/* 문제 설명
1부터 6까지 숫자가 적힌 주사위가 세 개 있습니다. 세 주사위를 굴렸을 때 나온 숫자를 각각 a, b, c라고 했을 때 얻는 점수는 다음과 같습니다.

세 숫자가 모두 다르다면 a + b + c 점을 얻습니다.
세 숫자 중 어느 두 숫자는 같고 나머지 다른 숫자는 다르다면 (a + b + c) × (a2 + b2 + c2 )점을 얻습니다.
세 숫자가 모두 같다면 (a + b + c) × (a2 + b2 + c2 ) × (a3 + b3 + c3 )점을 얻습니다.
세 정수 a, b, c가 매개변수로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

제한사항
a, b, c는 1이상 6이하의 정수입니다.
입출력 예
a	b	c	result
2	6	1	9
5	3	3	473
4	4	4	110592 */

// Set의 길이 측정 메서드: size
function solution(a, b, c) {
  const checkDiff = new Set([a, b, c]).size;

  switch (checkDiff) {
    case 3:
      return a + b + c;
    case 2:
      return (a + b + c) * (a ** 2 + b ** 2 + c ** 2);
    case 1:
      return 3 * a * (3 * a ** 2) * (3 * a ** 3);
    default:
      return;
  }
}

solution(2, 6, 1);
solution(5, 3, 3);
solution(4, 4, 4);
