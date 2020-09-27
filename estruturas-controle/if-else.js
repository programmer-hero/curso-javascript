/**
 * Recebe um número e exibe 'Aprovado'
 * caso o valor seja maior ou igual a 7.0, e
 * exibe 'Reprovado' caso seja menor que 7.0
 * @param {number} nota 
 */
const printResult = function(nota) {
  if (nota >= 7) {
    console.log('Aprovado')
  } else {
    console.log('Reprovado')
  }
}

//Aprovado
printResult(8.1)

//Reprovado
printResult(6.1)

//Aprovado
printResult('9.0')

//Reprovado
printResult('Nota=9.0')

