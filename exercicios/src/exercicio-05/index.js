function formatarValorDecimal(valorDecimal) {
  console.log('Exercício 05');
  console.log('-------------');
  const valorEmReais = `R$ ${valorDecimal
    .toFixed(2)
    .toString()
    .replace('.', ',')}`;

  console.log(valorEmReais);
  console.log('-------------');
}

module.exports = { formatarValorDecimal };
