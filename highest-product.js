const problem1 = [1, 2, 3, 4]; // 24
const problem2 = [0, -1, 10, 7, 5]; // 350
const problem3 = [-5, -2, -1, 0, 0, 1, 1, 5]; // 50

/**
 * Find the highest product by multiplaying 3 elements.
 */

const multiply = (a, b) => a * b;

const solution = (input) => {
  const sorted = input.sort((a, b) => b - a);
  const topTwoHighest = multiply(...sorted.slice(0, 2));
  const topTwoLowest = multiply(...sorted.slice(-2));
  return topTwoHighest > topTwoLowest
    ? topTwoHighest * sorted[2]
    : topTwoLowest * sorted[0];
};

console.log(solution(problem1));
console.log(solution(problem2));
console.log(solution(problem3));
