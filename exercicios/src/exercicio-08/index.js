const logger = require('../../logger');

const stringPontuacoes = '10, 20, 20, 8, 25, 3, 0, 30, 1';

const avaliaPontuacoes = (pontuacoes) => {
  const listaPontos = [];
  pontuacoes.split(', ').map((item) => {
    listaPontos.push(Number(item));
    return item;
  });

  pontuacoes.split(', ').map((item) => {
    listaPontos.push(Number(item));
    return item;
  });
  let qtdQuebraRecordes = 0;
  let piorJogo = 1;
  let maiorPontuacao = listaPontos[0];
  let menorPontuacao = listaPontos[0];

  for (let i = 1; i <= listaPontos.length; i++) {
    if (listaPontos[i] > maiorPontuacao) {
      maiorPontuacao = listaPontos[i];
      qtdQuebraRecordes++;
    } else if (listaPontos[i] < menorPontuacao) {
      menorPontuacao = listaPontos[i];
      piorJogo = i + 1;
    }
    logger.info(`maior pontuacao = ${maiorPontuacao}`);
    logger.info(`menor pontuacao = ${menorPontuacao}`);
    logger.info('---------');
  }

  return [qtdQuebraRecordes, piorJogo];
};

const calculaPontuacoes = () => {
  logger.info('Exercício 06');
  logger.info('-------------');
  logger.info(avaliaPontuacoes(stringPontuacoes));
  logger.info('-------------');
};

module.exports = { calculaPontuacoes };
