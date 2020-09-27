const list = [1, 2, 3, 4, 5, 6, 7, 8 ,9, 10]

//pula a execução do índice 6
for (let y in list) {
  if (y == 5) {
    continue
  }
  console.log(`x = ${list[y]}`)
}