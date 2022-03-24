function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

/** Call-Stack
 * fib(3) => fib(2) + fib(1) => 1 + 1 = 2
 * fib(4) => fib(3) + fib(2) => 2 + 1 = 3
 * fib(5) => fib(4) + fib(3) => 3 + 2 = 5
 */

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution

/**
 * if n < 2, just return n
 * recurse should have fibonacci(arr, n)
 *
 * base case should be if arr.length >= n return arr[arr.length - n]
 */
