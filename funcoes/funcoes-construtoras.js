/**
 * Funcao construtora.
 * Cria um objeto do tipo Carro
 * @param {number} velocidadeMaxima
 * @param {number} delta
 */
function Carro(velocidadeMaxima = 200, delta = 5) {
  //atributo privado
  let velocidadeAtual = 0;

  //metodo publico
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  //metodo publico
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

//objeto criado a partir da função construtora
const uno = new Carro();
uno.acelerar();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

//objeto criado a partir da função construtora
const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

//analisando o tipo da função construtora
console.log(typeof Carro);

//analisando o tipo do objeto 'ferrari'
console.log(typeof ferrari);
console.log(ferrari);
