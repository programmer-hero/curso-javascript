const logger = require('../../logger');

function formatarValorDecimal(valorDecimal) {
  logger.info('Exercício 05');
  logger.info('-------------');
  const valorEmReais = `R$ ${valorDecimal
    .toFixed(2)
    .toString()
    .replace('.', ',')}`;

  logger.info(valorEmReais);
  logger.info('-------------');
}

module.exports = { formatarValorDecimal };
