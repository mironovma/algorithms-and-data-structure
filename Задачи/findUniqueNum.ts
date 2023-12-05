const findUniq = (arr: number[]) => {
  let uniqueNumbers = arr.filter(
    (value, _, selfArr) => selfArr.indexOf(value) === selfArr.lastIndexOf(value)
  );

  return uniqueNumbers[0];
};

console.log(findUniq([1, 1, 2, 1, 3, 3]));
