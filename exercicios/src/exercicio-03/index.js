const logger = require('../../logger');
/**
 * Crie uma função que recebe dois parâmetros, base e expoente,
 * e retorne a base elevada ao expoente.
 */
const expoente = (base, exp) => {
  // método novo:
  const resultado = base ** exp;
  return resultado;
};

const calcularExpoentes = () => {
  logger.info('Exercício 03');
  logger.info('-------------');
  logger.info(expoente(2, 3));
  logger.info('-------------');
};

module.exports = { calcularExpoentes };
