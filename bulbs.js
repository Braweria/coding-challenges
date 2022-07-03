const problem = [1, 1, 0, 1, 0, 0, 1, 0];

/**
 * 11101101
 * 11110010
 * 11111101
 * 11111110
 * 11111111
 */

const solution = (bulbs) => {
  let cost = 0;
  for (let num of bulbs) {
    cost % 2 === 0 ? (num = !!num) : (num = !num);
    if (num) {
      continue;
    }
    cost++;
  }
  return cost;
};

console.log(solution(problem));
