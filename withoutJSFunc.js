//1)

// Input: [1, 2, 3, 4]
// Output: [2, 4, 6, 8]

//**Without function */
function double(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i] * 2;
  }

  return result;
}

//With Function

function double2(arr) {
  let result = arr.map((res) => res * 2);
  return result;
}

//2) Filter out even numbers
//without function
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

function filterEven(arr) {
  let result = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // result.push(arr[i]);
      result[j] = arr[i];
      j++;
    }
  }
  return result;
}

function filterEven2(arr) {
  const result = arr.filter((res) => res % 2 === 0);
  return result;
}

//3)
//sum all elements

// Input: [1, 2, 3, 4]
// Output: 10

//without functions

function sum(arr) {
  result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
  }
  return result;
}

function sum2(arr) {
  let result = arr.reduce((sum, current) => sum + current, 0);
  return result;
}

// console.log(sum2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//4)
//Reversing an array
// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]

//without functions

function reverse(arr) {
  let result = [];
  let j = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    //  result.push(arr[i]);
    result[j] = arr[i];
    j++;
  }
  return result;
}

//with functions

// Input: [1, 2, 3, 4]
// Output: [4, 3, 2, 1]

function reverse2(arr) {
  let result = arr.reverse();
  return result;
}

//5)
//Find Maximum Value
// Input: [1, 7, 3, 4]
// Output: 7

//without functions

function maximum(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function maximum2(arr) {
  return Math.max(...arr);
}
console.log(maximum2([10, 7, 90, 29]));
