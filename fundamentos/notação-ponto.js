//acessar funcoes e objetos através do ponto (.)

//arredonda para cima
console.log(Math.ceil(6.1))

//arredonda para baixo
console.log(Math.floor(6.1))

//criamos atributos em objetos com a notação ponto
const obj1 = {}
obj1.nome = 'triângulo'
console.log(obj1)

function Obj(nome) {
    //criando um atributo 'nome' (publico)
    //que recebe o valor do parametro 'nome'
    this.nome = nome
}

console.log(new Obj('Quadrado'))

const obj2 = new Obj('Notebook')
const obj3 = new Obj('Celular')

console.log(obj2)
console.log(obj3)
console.log(obj2.nome)
console.log(obj3.nome)