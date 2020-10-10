/**
 * Funcoes anonomias não possuem nome apos a cláusula 'function'.
 * 1. são atribuidas a variaveis ou constantes
 * 2. são passadas como parametro para funcoes
 * 3. são passadas como retorno de funcoes
 * 4. podem ser declaradas com ou sem a palavra reservada 'function' dentro de 'objetos'
 */

/**
 * Soma dois numeros.
 * @param {number} x
 * @param {number} y
 */
const sum = function (x, y) {
  return x + y;
};

/**
 * Recebe dois numeros e uma função para executar posteriormente.
 * @param {number} a
 * @param {number} b
 * @param {function} functionOperation
 */
const printResult = function (a, b, functionOperation = sum) {
  console.log(functionOperation(a, b));
};

printResult(3, 6);
printResult(6, 9, sum);
printResult(6, 9, function (x, y) {
  return x - y;
});

printResult(6, 9, (x, y) => x * y);

//objeto contendo dois tipos de declaração de funcoes anonimas
const people = {
  speak: function () {
    console.log("Hello World!");
  },
  talk() {
    console.log("Hello World again!");
  },
};

people.speak();
people.talk();
