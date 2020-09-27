/**
 * Recebe um número e exibe um resultado
 * caso o valor seja maior ou igual a 7.0
 * @param {number} nota 
 */
function goodNews(nota) {
  if (nota >= 7) {
    console.log('Aprovado com ', nota)
  }
}

//Aprovado com 8.1
goodNews(8.1)

//Não exibe resultado
goodNews(6.1)

//////////////////

/**
 * Recebe um valor e exibe um resoltado caso
 * o valor seja reconhecido como verdadeiro
 * @param {*} value 
 */
function ifTrueShow(value) {
  if (value) {
    console.log("O valor é verdadeiro... ", value)
  }
}

//Não exibe resultado
ifTrueShow()
ifTrueShow(null)
ifTrueShow(undefined)
ifTrueShow(NaN)
ifTrueShow(0)

//Exibe resultado
ifTrueShow(-1)
ifTrueShow(' ')
ifTrueShow('?')
ifTrueShow([])
ifTrueShow([1, 2])
ifTrueShow({})

//////////////////////
/**
 * Exibe o parametro 'value' no console caso seja
 * maior que 7.0.
 * Exibe a string 'Hello' sempre.
 * @param {number} value 
 */
function oneInstruction(value) {
  if (value > 7)
    console.log(value)
    console.log('Hello')
}

oneInstruction(6)
oneInstruction(8)

////////////////////////
/**
 * Sempre exibe o parametro 'value' no console.
 * @param {number} value 
 */
function alwaysShow(value) {
  if (value > 7); {
    console.log(value)
  }
}

alwaysShow(1)
alwaysShow(2)
