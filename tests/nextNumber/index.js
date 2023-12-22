/**
 * imagine you have a bunch of numbers in a line, and each number tells you where the next number in line is. For example, if you have:

1, 4, -1, 3, 2

Here's what it means:

Start at number 1.
The next number is at position 4 in the line (which is 2).
Number 2 is the last one because it's -1.
Number 3 is at position 3.
Number 4 is at position 2.
So it's like a chain where each number tells you where to find the next number until you reach -1, which means the end of the chain.
 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
[1, 4, -1, 3, 2][(2, -1, 1, 0, 0, 0)];

function solution(A = [1, 4, -1, 3, 2]) {
  // Implement your solution here
  const indexes = new Set();

  const checkNext = (index) => {
    indexes.add(index);

    if (index === -1) {
      return;
    }

    const nextIndex = index < 0 ? A.at(index) : A[index];

    if (indexes.has(nextIndex)) {
      return;
    }

    indexes.add(nextIndex);
    checkNext(nextIndex);
  };

  checkNext(A[0]);
  return indexes.size;
}

exports.solution = solution;
