/**
 * Recebe um número e exibe 'Aprovado'
 * caso o valor seja maior ou igual a 7.0, 
 * exibe 'Recuperação' caso o valor seja menor 
 * que 7.0 e maior que 4.0, e exibe 'Reprovado'
 * caso a nota seja menor que 4.0..
 * @param {number} nota 
 */
const printResult = function(nota) {
  if (nota >= 7)
    console.log('Aprovado')
  else if (nota >= 4)
    console.log('Recuperação')
  else
    console.log('Reprovado')
}

//Aprovado
printResult(8.1)

//Recuperação
printResult(6.1)

//Reprovado
printResult(3.99)

/////////////////////////////////////////
/**
 * Protótio de função
 * Retorna true se número estiver entre os valores
 * 'begin' e 'end'
 * @param {number} begin 
 * @param {number} end 
 */
Number.prototype.between = function(begin, end) {
  return (this >= begin) && (this <= end)
}

const computeResult = function(value) {
  if (value.between(9, 10)) {
    console.log('Aprovado ==> Quadro de Honra')
  } else if (value.between(7, 8.99)) {
    console.log('Aprovado')
  } else if (value.between(4, 6.99)) {
    console.log('Recuperação')
  } else if (value.between(0, 3.99)) {
    console.log('Reprovado')
  } else {
    console.log('Nota inválida')
  }
}

//Aprovado => Quadro de Honra
computeResult(10)

//Aprovado
computeResult(8.9)

//Recuperação
computeResult(6.5)

//Reprovado
computeResult(2.5)

//Nota inválida
computeResult(-1)

//Nota inválida
computeResult(11)



