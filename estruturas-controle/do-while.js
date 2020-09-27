/**
 * Retorna um valor aleatório entre 'min' e 'max'
 * @param {number} min 
 * @param {number} max 
 */
function getRandonIntegerBetween(min, max) {
  const value = Math.random() * (max - min) + min
  return Math.floor(value)
}

let option = -1

do {
  option = getRandonIntegerBetween(-1, 10)
  console.log(`Opção escolhida foi ${option}.`)
} while (option != -1)

console.log('Processamento concluído!')