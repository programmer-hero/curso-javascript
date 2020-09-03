let isAtivo = false
console.log('isAtivo = ', isAtivo)

isAtivo = true
console.log('isAtivo = ', isAtivo)

//Agora começa o interessante
isAtivo = 1
//exibe o valor numerico de 'isAtivo'
console.log('isAtivo = ', isAtivo) 
//exibe o valor booleano de 'isAtivo'
console.log('isAtivo = ', !!isAtivo)

console.log('... Valores Verdadeiros ...')

//numeros inteiros (positivos e negativos), menos o zero !
console.log(!!3)
console.log(!!-1)

//strings com no mínimo um espaço em branco
console.log(!!' ')
console.log(!!'texto')

//listas (vazias ou com valor)
console.log(!![])
console.log(!!['arroz', 'feijão', 'café'])

//objetos (vazios ou com conteúdo)
console.log(!!{})
console.log(!!{nome:'Fulano', sobrenome: 'da Silva'})

//tipo Infinity (infinito)
console.log(!!Infinity)

//valores 'verdadeiros' atribuídos a variáveis.
//não confundir com o resultado da operação, mas sim se o valor atribuído
//é verdadeiro
console.log(!!(isAtivo = true))

console.log('... Valores Falsos ...')

//zero
console.log(!!0)

//strings vazias
console.log(!!'')

//valores nulos
console.log(!!null)

//valores não numéricos
console.log(!!NaN)

//valores undefinded (indefinidos)
console.log(!!undefined)

//valores falsos atribuídos a variáveis
console.log(!!(isAtivo = false))

/******************************/

console.log('... expressões booleanas ...')

console.log('... operador OU ...')
//se um dos valores for 'verdadeiro', o resultado é verdadeiro
console.log(!!('' || null || 0 || ' '))

//a expressão OU retorna sempre o 'primeiro valor' verdadeiro
//e da 'esquerda' para a 'direita'
//vamos tirar a dupla negação para conferir
console.log(('' || null || 0 || 'Teste'))
console.log(('' || null || 0 || 'Teste' || 123))
console.log(('' || null || 0 || '' || 123))

//operador OR na prática:
let nome = ''
console.log(nome || 'Nome Desconhecido')

console.log('... operador AND ...')
//Operador AND
//Se todos os valores forem 'verdadeiros', o resultado é verdadeiro
console.log(!!('Teste' && [] && {} && -1 && Infinity))

//a expressão AND sempre retorna o ultimo valor verdadeiro
console.log(('Teste' && [] && {} && -1 && Infinity))

//operador AND na prática:
let link = '#inicio'
link && console.log('Expressão a executar')
