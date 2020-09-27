/**
 * Recebe um número e exibe:
 * 'Aprovado => Quadro de Honra'  ==> se 'value' entre 9 e 10.0 
 * 'Aprovado'                     ==> se 'value' entre 7 e 8.99 
 * 'Recuperação'                  ==> se 'value' entre 4 e 6.99 
 * 'Reprovado'                    ==> se 'value' entre 0 e 3.99 
 * @param {number} value 
 */
const computeResult = function(value) {
  switch(Math.floor(value)) {
    case 10:
    case 9:
      console.log('Aprovado ==> Quadro de Honra')
      break
    case 8: case 7:
      console.log('Aprovado')
      break
    case 6: case 5: case 4:
      console.log('Recuperação')
      break
    case 3: case 2: case 1: case 0:
      console.log('Reprovado')
      break
    default:
      console.log('Nota invalida')
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