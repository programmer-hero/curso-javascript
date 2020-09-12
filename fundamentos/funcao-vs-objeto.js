//tipo objeto é uma funcao
console.log(typeof Object)

//um 'novo objeto' é um 'object'
console.log(typeof new Object)
console.log(typeof new Object())

//criando objeto a partir de uma função
const Usuario = function() {}
console.log(typeof Usuario)
console.log(typeof new Usuario)
console.log(typeof new Usuario())

//uma 'classe' é essencialmente uma função
//a 'classe' é uma 'atalho' de sintaxe para uma função
class Cliente {}
console.log(typeof Cliente)
console.log(typeof new Cliente)
console.log(typeof new Cliente())

const cliente2 = {
    nome: 'Julio',
    endereco: {
        logradouro: 'Rua ABC',
        numero: 3
    }
}
