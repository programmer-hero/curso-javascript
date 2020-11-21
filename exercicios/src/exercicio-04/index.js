const logger = require('../../logger');
/**
  Crie uma função que irá receber dois valores,
  o dividendo e o divisor.
  A função deverá imprimir o resultado e o resto
  da divisão destes dois valores.
 */
const divisao = (dividendo, divisor) => {
  logger.info('Exercício 04');
  logger.info('-------------');
  logger.info(`Resultado: ${Math.floor(dividendo / divisor)}`);
  logger.info(`Resto: ${dividendo % divisor}`);
  logger.info('-------------');
};

module.exports = { divisao };
