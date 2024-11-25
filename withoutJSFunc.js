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
