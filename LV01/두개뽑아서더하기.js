function solution(numbers) {
  const result = [];

  numbers.map((number, index) => {
    numbers.slice(index + 1).map((otherNumber) => {
      const sum = number + otherNumber;
      result.push(sum);
    });
  });

  const arrange = new Set(result);
  const answer = Array.from(arrange);

  return answer.sort((a, b) => a - b);
}
