console.log('Atribuicao por Referencia #01')
console.log('-----------------------------')
const produtoA = {descricao: "Curso Javascript 2020"}
console.log('ProdutoA = ', produtoA)
produtoB = produtoA
console.log('ProdutoB = ', produtoB)
produtoB.descricao = 'Curso Desenvolvimento Mobile 2021'
console.log('ProdutoA = ', produtoA)
console.log('ProdutoB = ', produtoB)
console.log('')

console.log('Atribuicao por Referencia #02')
console.log('-----------------------------')
let array1 = [1,2,3]
let array2 = array1
console.log('array1=',array1)
console.log('array2=',array2)
array2.push(4)
console.log('array1=',array1)
console.log('array2=',array2)
array1.push(5)
console.log('array1=',array1)
console.log('array2=',array2)


console.log('Atribuicao por Valor')
console.log('-----------------------------')
let bool1 = true
let bool2 = bool1
console.log(bool1, bool2)
bool1 = false
console.log(bool1, bool2)
console.log('')

console.log('Valores undefined e null')
console.log('-----------------------------')
let preco
console.log(preco)

preco = null
console.log(preco)
// console.log(preco.toString())

const produto = {}
console.log(produto)
produto.preco = 5.99
produto.preco = undefined //não fazer isso. Não é boa prática
console.log(produto.preco)
produto.preco = 10.00

const lista = []
lista.push(10.00)
lista.push('qualquer coisa')
console.log(lista)
