/**
 * Returns a random element from the array.
 *
 * @param {Array} arr - The array to sample from.
 * @returns {*} A randomly selected element from the array.
 *
 * @description
 * 1. Math.random() generates a random number between 0 and 1 (not including 1)
 * 2. Multiply by arr.length to get a number between 0 and arr.length (not including arr.length)
 * 3. Math.floor() rounds down to the nearest integer, giving us a valid array index
 * 4. Use that index to return a random element from the array
 */
export const sample = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

/**
 * This function generates an array of numbers within a specified range.
 *
 * @param {number} start - The starting number of the range. If only one parameter is provided,
 *                        this becomes the end value and start defaults to 0.
 * @param {number} end - The end number of the range (exclusive).
 * @param {number} step - Optional increment between numbers (defaults to 1).
 * @returns {Array} - An array containing all numbers from start to end (exclusive) with the given step.
 *
 * Example: range(3) produces [0, 1, 2]
 * Example: range(2, 6) produces [2, 3, 4, 5]
 * Example: range(1, 10, 2) produces [1, 3, 5, 7, 9]
 */
export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};
