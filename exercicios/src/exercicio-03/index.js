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
  console.log('Exercício 03');
  console.log('-------------');
  console.log(expoente(2, 3));
  console.log('-------------');
};

module.exports = { calcularExpoentes };
