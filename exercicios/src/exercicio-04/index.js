/**
  Crie uma função que irá receber dois valores,
  o dividendo e o divisor.
  A função deverá imprimir o resultado e o resto
  da divisão destes dois valores.
 */
const divisao = (dividendo, divisor) => {
  const result = {
    resultado: Math.floor(dividendo / divisor),
    resto: dividendo % divisor,
  };
  return result;
};

module.exports = { divisao };
