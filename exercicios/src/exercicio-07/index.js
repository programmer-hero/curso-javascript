/**
 * Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar.
 * Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara.
 * Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que
 * na equação: 3x2 - 5x + 12 os valores seriam respectivamente: 3, -5, 12.
 * Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado,
 * mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor,
 * um string com a frase: “Delta é negativo”.
 */
const bhaskara = (ax2, bx, c) => {
  const resultados = [];
  const delta = bx ** 2 - 4 * ax2 * c;
  if (delta < 0) {
    resultados.push('Delta é negativo');
  } else {
    const x1 = (((-bx + Math.sqrt(delta)) / 2) * 1) / ax2;
    const x2 = (((-bx - Math.sqrt(delta)) / 2) * 1) / ax2;

    resultados.push(x1);
    resultados.push(x2);
  }
  return resultados;
};

const calcularBhaskara = () => {
  console.log('Exercício 07');
  console.log('-------------');
  console.log(bhaskara(1, 3, 2));
  console.log(bhaskara(3, 1, 2));
  console.log(bhaskara(1, -5, 6));
  console.log(bhaskara(3, 5, -5));
  console.log('-------------');
};

module.exports = { calcularBhaskara };
