/**
 * Quando utilizamos operadores relacionais, o resultado sempre é 'booleano'
 */

 ////////////////
 // tipos primitivos

//verifica se o 'valor' é 'igual' (true)
console.log('01.', '1' == 1)

//verifica se o 'valor' e o 'tipo' são 'estrimente iguais' (false)
console.log('02.', '1' === 1)

console.log('03.', '3' != 3)
console.log('04.', '3' !== 3)

console.log('05.', 3 < 2)
console.log('06.', 3 > 2)

console.log('07.', 3 <= 2)
console.log('08.', 3 >= 2)


/////////////////////
// tipos complexos
const d1 = new Date(0)
const d2 = new Date(0)

//verifica se são estrimente iguais
console.log('09.', d1 === d2)
console.log('10.', d1 == d2)

//verificar se as 'horas' são estrimente iguais
console.log('11.', d1.getTime() === d2.getTime())

//verificar se as 'horas' são iguais
console.log('12.', d1.getTime() == d2.getTime())

//verificar se 'undefined' é igual a 'null'
console.log('13.', undefined == null)

//verificar se 'undefined' é estritamente igual a 'null'
console.log('13.', undefined === null)
