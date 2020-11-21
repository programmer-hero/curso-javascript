const logger = require('../../logger');

const jurosSimples = (ci, tx, tmp) => ci + ci * tx * tmp;

const jurosCompostos = (cp, taxa, tempo) => cp * (1 + taxa) ** tempo;

const calcularJuros = () => {
  logger.info('Exercício 06');
  logger.info('-------------');
  logger.info(jurosSimples(100, 10 / 100, 2));
  logger.info(jurosCompostos(100, 10 / 100, 2));
  logger.info('-------------');
};

module.exports = { calcularJuros };
