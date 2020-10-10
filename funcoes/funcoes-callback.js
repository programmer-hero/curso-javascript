//lista de fabricantes
const manufacturers = ["Mercedes", "Audi", "BMW"];

function print(name, index) {
  console.log(`${index + 1}. ${name}`);
}

//utilizando a função 'print' como parâmetro 'callback' da função 'forEach'
manufacturers.forEach(print);

manufacturers.forEach(function (name) {
  console.log(name);
});

manufacturers.forEach((name) => console.log(name));
