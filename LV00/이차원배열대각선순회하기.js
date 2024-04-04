/*  문제 설명
2차원 정수 배열 board와 정수 k가 주어집니다.

i + j <= k를 만족하는 모든 (i, j)에 대한 board[i][j]의 합을 return 하는 solution 함수를 완성해 주세요.

제한사항
1 ≤ board의 길이 ≤ 100
1 ≤ board[i]의 길이 ≤ 100
1 ≤ board[i][j] ≤ 10,000
모든 board[i]의 길이는 같습니다.
0 ≤ k < board의 길이 + board[i]의 길이
입출력 예
board	k	result
[[0, 1, 2],[1, 2, 3],[2, 3, 4],[3, 4, 5]]	2	8 */

function solution(board, k) {
  let answer = 0;

  board.forEach((arr, i) => {
    arr.forEach((num, j) => {
      if (i + j <= k) {
        return (answer += num);
      }
    });
  });

  return answer;
}

// reduce로 나중에 바꿔보자

solution(
  [
    [0, 1, 2],
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5],
  ],
  2
);
