const logger = require('../../logger');
/**
 * Crie uma função que dado dois valores (passados como parâmetros) mostre no console
 * a soma, subtração, multiplicação e divisão desses valores.
 */
const calcularOperacoes = (op1, op2) => {
  logger.info('Exercício 01');
  logger.info('-------------');
  const result = {
    soma: op1 + op2,
    subtracao: op1 - op2,
    multiplicacao: op1 * op2,
    divisao: op1 / op2,
  };

  logger.info(
    `soma=${result.soma}, subtracao=${result.subtracao}, multiplicacao=${result.multiplicacao}, divisão=${result.divisao}`,
  );
  logger.info('-------------');

  return result;
};

module.exports = { calcularOperacoes };
