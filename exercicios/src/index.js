const logger = require('../logger');

const exercicio05 = require('./exercicio-05');
const exercicio06 = require('./exercicio-06');
const exercicio07 = require('./exercicio-07');
const exercicio08 = require('./exercicio-08');

logger.info('-------------------------------------------');
logger.info('*** Lista de Exercícios JavaScript 2020 ***');
logger.info('-------------------------------------------');

exercicio05.formatarValorDecimal(0.1 + 0.2);
exercicio06.calcularJuros();
exercicio07.calcularBhaskara();
exercicio08.calculaPontuacoes();
