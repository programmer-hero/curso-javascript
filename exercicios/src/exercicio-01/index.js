/**
 * Crie uma função que dado dois valores (passados como parâmetros) mostre no console
 * a soma, subtração, multiplicação e divisão desses valores.
 */
const calcularOperacoes = (op1, op2) => {
  console.log('Exercício 01');
  console.log('-------------');
  console.log(
    `soma=${op1 + op2}, subtracao=${op1 - op2}, multiplicacao=${
      op1 * op2
    }, divisão=${op1 / op2}`,
  );
  console.log('-------------');
};

// calcularOperacoes(1, 2);

module.exports = { calcularOperacoes };
