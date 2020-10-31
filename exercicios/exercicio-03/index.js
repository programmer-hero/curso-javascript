/**
 * Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
 */
const expoente = (base, expoente) => {
  //método antigo:
  let resultado = Math.pow(base, expoente);

  //método novo:
  resultado = base ** expoente;

  return resultado;
};

const calcularExpoentes = () => {
  console.log("Exercício 03");
  console.log("-------------");
  console.log(expoente(2, 3));
  console.log("-------------");
};

module.exports = { calcularExpoentes };
