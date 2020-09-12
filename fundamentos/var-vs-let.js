/*
    VAR vs LET em 03 ROUNDS
*/
 /***********************************
  * ROUND 01
  ***********************************/
console.log('--------')
console.log('ROUND 01')
console.log('--------')
//var em laço 'for'
for (var i=0; i<10; i++) {
    console.log('var i = ', i)
}
console.log('var i = ', i)

//let em laço for
for (let a=0; a<10; a++) {
    console.log('let a = ', a)
}
//console.log('let a = ', a)

//mas quem vence?
//let - mais segurança no código
//let - menor consumo de memória, pois a variável tem tempo de vida menor

 /***********************************
  * ROUND 02
  ***********************************/
 console.log('--------')
 console.log('ROUND 02')
 console.log('--------')
 const funcoes = []

 for (var i=0; i<10; i++) {
     //adicionar uma função anônima a cada item da lista
     funcoes.push(function(){
         console.log(i)
     })
 }
 funcoes[3]()
 funcoes[6]()
 funcoes[9]()

 /**********************/
 const funcoes2 = []
 for (let i=0; i<10; i++) {
    //adicionar função anônima a cada item da lista
    funcoes2.push(function() {
        console.log(i)
    })
 }

funcoes2[3]()
funcoes2[6]()
funcoes2[9]()

//mas quem vence ?
//let - por ter escopo de bloco, o valor da variável é memorizada de forma correta.

/***********************************
 * ROUND 03
 ***********************************/
console.log('--------')
console.log('ROUND 03')
console.log('--------')

//var - tem Hoisting (içamento)
//comportamento padrão de var

console.log('var b = ', b)
var b = 2
console.log('var b = ', b)

// var b
// console.log('var b = ', b)
// var b = 2
// console.log('var b = ', b)

//com let não exite Hoisting, e o interpretador javascript irá abortar a execução
console.log('let c = ', c)
let c = 3
console.log('let c = ', c)

//mas quem vence?
//let - pois força o desenvolvedor a programar de forma correta
//let - impede que o interpretador leia todas as linhas do código, para
//      tentar fazer Hoisting ou emitir erro. (performance)
