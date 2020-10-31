const jurosSimples = (capitalInicial, taxa, tempo) => {
  return capitalInicial + capitalInicial * taxa * tempo;
};

const jurosCompostos = (capitalInicial, taxa, tempo) => {
  return capitalInicial * (1 + taxa) ** tempo;
};

const calcularJuros = () => {
  console.log("Exercício 06");
  console.log("-------------");
  console.log(jurosSimples(100, 10 / 100, 2));
  console.log(jurosCompostos(100, 10 / 100, 2));
  console.log("-------------");
};

module.exports = { calcularJuros };
