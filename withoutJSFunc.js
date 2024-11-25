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
