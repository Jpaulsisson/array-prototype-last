// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// Example 1:
// Input: nums = [1,2,3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.

// Example 2:
// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.


//////// first attempt //////////
Array.prototype.last = function() {
  if (this.length === 0) {
    return -1;
  }
  let thing = this.slice(-1);           ///// had to dig a little on MDN for the 
  return thing;                         ///// syntax but generally a simple question. this was fun
  }

  const array = [1,2,3];
  const empty = [];
  const zeroes = [0,0,0,0];

  console.log(array.last());
  console.log(empty.last());
  console.log(zeroes.last());