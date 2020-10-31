/**
 * ​Crie uma função que irá receber dois valores, o dividendo e o divisor.
 * A função deverá imprimir o resultado e o resto da divisão destes dois valores.
 */
const divisao = (dividendo, divisor) => {
  console.log("Exercício 04");
  console.log("-------------");
  console.log("Resultado: " + Math.floor(dividendo / divisor));
  console.log(`Resto: ${dividendo % divisor}`);
  console.log("-------------");
};

module.exports = { divisao };
