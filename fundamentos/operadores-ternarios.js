/**
 * Operadores ternários possuem 03 termos:
 * 1. expressão logica
 * 2. valor retornado se verdadeiro
 * 3. valor retornado se falso
 * @param {numbe} nota 
 */
const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado(7.5))
console.log(resultado(6.5))

const status = resultado(8.5)
console.log(status)