//Tipos em JavaScript: String
const escola = 'ProgrammerHero'
console.log(escola.charAt(4)) //retorna a 4a. letra a partir do zero
console.log(escola.charAt(20)) //retona valor 'vazio' mas não retorna erro!
console.log(escola.charCodeAt(4)) //valor na tabela UNICODE

console.log(escola.indexOf('H'))
console.log(escola.substring(10))
console.log(escola.substring(0, 10))

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!")
console.log(`Escola ${escola}!`)

console.log(escola.replace('m','M'))
console.log(escola.replace('mm', 'MM'))

console.log(escola.replace(/\P/,'*'))   //substitui a primeira letra por *
console.log(escola.replace(/\w/g, '*')) //substitui tudo por *

console.log('Marlo, Aldo, Stefany'.split(','))
console.log("3" + 2) //resultado é 32. A string em cenarios de soma, sempre ganha