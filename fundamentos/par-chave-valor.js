//par nome/valor
//contexto léxico 1
const nome = 'Sócrates' //contexto léxico 1

function exec() {
    const nome = 'Aristóteles' //contexto léxico 2
    return nome
}

//objetos são grupos aninhados de pares nome/valor
const filosofo = {
    nome: 'René',
    sobrenome: 'Descartes',
    idade: 52,
    peso: 72,
    endereco: {
        logradouro: 'Rua dos Pensadores',
        numero: 369
    }
}

console.log(nome)
console.log(exec())
console.log(filosofo)