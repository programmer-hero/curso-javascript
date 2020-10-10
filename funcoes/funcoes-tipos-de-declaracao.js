console.log(soma(3, 6));

//function declaration
function soma(x, y) {
  return x + y;
}

//function expression
const sub = function (x, y) {
  return x - y;
};

//function named expression
const multi = function multiply(x, y) {
  return x * y;
};

console.log(sub(9, 6));
console.log(multi(3, 6));
