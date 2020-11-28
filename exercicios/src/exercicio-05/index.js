function formatarValorDecimal(valorDecimal) {
  const valorEmReais = `R$ ${valorDecimal
    .toFixed(2)
    .toString()
    .replace('.', ',')}`;
  return valorEmReais;
}

module.exports = { formatarValorDecimal };
