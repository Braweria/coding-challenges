const problem = [1, 2, 3, 4]; // 24
const problem2 = [0, -1, 10, 7, 5]; // 350

/**
 * Find the highest product by multiplaying 3 elements.
 */

const solution = (input) =>
  input
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, curr) => acc * curr);

console.log(solution(problem));
console.log(solution(problem2));
