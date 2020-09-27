const list = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]

//sai do laço no índice 5
//break não age dentro de 'if', apenas na 'próxima' execução do laço 'for'
for (let x in list) {
  if (x == 5) {
    break
  }
  console.log(`x = ${list[x]}`)
}

/////////////////////////
//rotulos
//Evite utilizar rotulos !
rotulo1: 
for (let a in list) {
  for (let b in list) {
    if (a == 2 && b == 3) {
      break rotulo1
    }
    console.log(`Par = ${a}, ${b}`)
  }
}
console.log('Fim')