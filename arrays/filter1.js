const produtos = [
  { nome: 'Notebook', preco: 2499, fragil: true},
  { nome: 'iPad Pro', preco: 4199, fragil: true},
  { nome: 'Copo de Vidro', preco: 12.50, fragil: true},
  { nome: 'Copo de Plástico', preco: 10.50, fragil: false}
]

let filtroFalse = produtos.filter(e => {
  return false
})

let filtroTrue = produtos.filter(e => {
  return true
})

// console.log(filtroFalse)
// console.log(filtroTrue)

//Produtos caros e frágeis
const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil
const naoFragil = produto => !produto.fragil

let produtosCarosEFrageis = produtos.filter(caro).filter(fragil)
let produtosFrageis = produtos.filter(fragil)
let produtosNaoFrageis = produtos.filter(naoFragil)

console.log(produtosCarosEFrageis)
console.log(produtosFrageis)
console.log(produtosNaoFrageis)
