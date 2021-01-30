const { calculadora } = require('../../src/exercicio-16');

describe('Exercicio-16', () => {
  it('should return 5 if params equals (2, "+", 3)', () => {
    expect(calculadora.calcular(2, '+', 3)).toEqual(5);
    expect(calculadora.status).toBe('Ok!');
  });

  it('should return 0 and calculadora.staus = "Operação inválida" if operation not in [+,-,*,/]', () => {
    expect(calculadora.calcular(2, '%', 3)).toEqual(0);
    expect(calculadora.status).toBe('Operação inválida');
  });

  it('should return -1 if params equals (2, "-", 3)', () => {
    expect(calculadora.calcular(2, '-', 3)).toEqual(-1);
    expect(calculadora.status).toBe('Ok!');
  });

  it('should return 6 if params equals (2, "*", 3)', () => {
    expect(calculadora.calcular(2, '*', 3)).toEqual(6);
    expect(calculadora.status).toBe('Ok!');
  });

  it('should return 0.6666666666666666 if params equals (2, "/", 3)', () => {
    expect(calculadora.calcular(2, '/', 3)).toEqual(0.6666666666666666);
    expect(calculadora.status).toBe('Ok!');
  });
});
