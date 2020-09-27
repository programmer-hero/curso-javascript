const notas = [6.5, 7.2, 9.8, 8.1, 7.9]

//for in percorre os índices do array, e não pelos valores.
for (let nota in notas) {
  console.log(nota, notas[nota])
}

//objeto
const pessoa = {
  nome: 'João',
  sobrenome: 'da Silva',
  idade: 30,
  peso: 78
}

//for...in percorre as propriedades do objeto.
for(let atributo in pessoa) {
  console.log(`${atributo} = ${pessoa[atributo]}`)
}