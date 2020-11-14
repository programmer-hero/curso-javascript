/**
 * Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * - Equilátero: Os três lados são iguais.
 * - Isósceles: Dois lados iguais.
 * - Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e
 * retorne sua classificação quanto ao tamanho de seus lados.
 * (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
 */
const classificaTriangulo = (lado1, lado2, lado3) => {
  if (lado1 === lado2 && lado2 === lado3) {
    return 'Equilátero';
  }
  if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    return 'Isósceles';
  }
  return 'Escaleno';
};

const calcularTriangulos = () => {
  console.log('Exercício 02');
  console.log('-------------');
  console.log(classificaTriangulo(2, 2, 2)); // equilátero
  console.log(classificaTriangulo(2, 3, 3)); // isósceles
  console.log(classificaTriangulo(2, 3, 4)); // escaleno
  console.log('-------------');
};

module.exports = { calcularTriangulos };
