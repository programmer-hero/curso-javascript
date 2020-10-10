//funcao factory para criar um objeto fixo
function criarPessoa() {
  return {
    nome: "Pedro",
    sobrenome: "Paulo",
  };
}

console.log(criarPessoa());

//funcao factory para criar um objeto variavel
function criarProduto(nome, preco, desconto = 0.1) {
  return {
    nome,
    preco,
    desconto,
  };
}

console.log(criarProduto("Notebook", 5000));
console.log(criarProduto("iPad", 3000));
