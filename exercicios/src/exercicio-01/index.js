/**
 * Crie uma função que dado dois valores (passados como parâmetros) mostre no console
 * a soma, subtração, multiplicação e divisão desses valores.
 */
const calcularOperacoes = (op1, op2) => {
  const result = {
    soma: op1 + op2,
    subtracao: op1 - op2,
    multiplicacao: op1 * op2,
    divisao: op1 / op2,
  };
  return result;
};

module.exports = { calcularOperacoes };
