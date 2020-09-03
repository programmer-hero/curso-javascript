//criação de forma literal
const notas = [7.7, 8.9, 6.5, 9.8]

//acessando valores por índices
console.log(notas[0], notas[3])

//acessando índices que não existem
console.log(notas[4])

//criar conteudo no indice 4
notas[4] = 8.5
console.log(notas)

//criar índices em qualquer posição
notas[10] = 7.0
console.log(notas)

//vericar a quantidade de itens
console.log('qtd.itens=', notas.length)

//arrays são heterogeneos
notas.push({})
notas.push({codigo: 0, nome: 'Beltrano'})
console.log(notas)

//captuar o último elemento e remover do array
let objeto = notas.pop()
console.log('objeto=', objeto)
console.log(notas)

//remover o último elemento
delete notas[11]
console.log(notas)

//arrays em javascript são do tipo 'Object' (objeto)
console.log(typeof notas)
