const hero = 'Woverine'
const concatencacao = 'Olá ' + hero + "!"

const template = `
    Olá
    ${hero}
    !
    `
console.log(template)

console.log(`1 + 1 = ${1 + 1}`)

//funcao up() que recebe um texto como parametro e retorna o texto 
//em letras maiusculas
const up = texto => texto.toUpperCase()

console.log(`Ei ${hero}... ${up('cuidado')}`)
