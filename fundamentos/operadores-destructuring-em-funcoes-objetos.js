const obj = { max: 50, min: 40 }

function rand( {min = 0, max = 1000} ) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

//funcao com objeto completo
console.log(rand(obj))

//funcao com apena 'min'
console.log(rand({ min: 955}))

//funcao com objeto vazio
console.log(rand({}))

//funcao sem objeto (TypeError)
console.log(rand())
