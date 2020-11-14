const jurosSimples = (ci, tx, tmp) => ci + ci * tx * tmp;

const jurosCompostos = (cp, taxa, tempo) => cp * (1 + taxa) ** tempo;

const calcularJuros = () => {
  console.log('Exercício 06');
  console.log('-------------');
  console.log(jurosSimples(100, 10 / 100, 2));
  console.log(jurosCompostos(100, 10 / 100, 2));
  console.log('-------------');
};

module.exports = { calcularJuros };
