const stringPontuacoes = "10, 20, 20, 8, 25, 3, 0, 30, 1";

const avaliaPontuacoes = (pontuacoes) => {
  let listaPontos = [];
  pontuacoes.split(", ").map((item) => {
    listaPontos.push(Number(item));
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
    console.log(`maior pontuacao = ${maiorPontuacao}`);
    console.log(`menor pontuacao = ${menorPontuacao}`);
    console.log("---------");
  }

  return [qtdQuebraRecordes, piorJogo];
};

console.log(avaliaPontuacoes(stringPontuacoes));
