/**
 * Retorna um valor aleatório entre 'min' e 'max'
 * @param {number} min 
 * @param {number} max 
 */
function getRandonIntegerBetween(min, max) {
  const value = Math.random() * (max - min) + min
  return Math.floor(value)
}

let option = 0

while (option != -1) {
  option = getRandonIntegerBetween(-1, 10)
  console.log(`Opção escolhida foi ${option}.`)
}

console.log('Processamento concluído!')