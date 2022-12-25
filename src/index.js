module.exports = function reverse (n) {
  let arr = String(n).split("");
  return (arr[0] === '-') ? arr.slice(1).reverse().join('') : arr.reverse().join('');
};
