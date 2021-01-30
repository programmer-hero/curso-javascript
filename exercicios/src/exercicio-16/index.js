const calculadora = {
  status: '',
  calcular(valor1, operacao, valor2) {
    let resultado = 0;
    switch (operacao) {
      case '+':
        resultado = valor1 + valor2;
        this.status = 'Ok!';
        break;
      case '-':
        resultado = valor1 - valor2;
        this.status = 'Ok!';
        break;
      case '*':
        resultado = valor1 * valor2;
        this.status = 'Ok!';
        break;
      case '/':
        resultado = valor1 / valor2;
        this.status = 'Ok!';
        break;
      default:
        resultado = 0;
        this.status = 'Operação inválida';
    }
    return resultado;
  },
};

module.exports = { calculadora };
