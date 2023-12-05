const moveZeros = (arr) => {
  let res = [];
  let temp = [];

  for (const value of arr) {
    value !== 0 ? res.push(value) : temp.push(value);
  }

  return res.concat(...temp);
};

const moveZeros2 = (arr) => {
  return arr.filter((el) => el !== 0).concat(arr.filter((el) => el === 0));
};

console.log(moveZeros([false, 1, 0, 1, true, 2, 5, "5", "a", 8, 0]));
console.log(moveZeros2([false, 1, 0, 1, true, 2, 5, "5", "a", 8, 0]));
