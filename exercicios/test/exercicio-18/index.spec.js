const { Numbers } = require('../../src/exercicio-18');

const obj = Numbers();

describe('Exercicio-18', () => {
  it('Should return number description for numbers in [0..10]', () => {
    expect.assertions(11);
    expect(obj.getDescription(0)).toBe('Zero');
    expect(obj.getDescription(1)).toBe('Um');
    expect(obj.getDescription(2)).toBe('Dois');
    expect(obj.getDescription(3)).toBe('Tres');
    expect(obj.getDescription(4)).toBe('Quatro');
    expect(obj.getDescription(5)).toBe('Cinco');
    expect(obj.getDescription(6)).toBe('Seis');
    expect(obj.getDescription(7)).toBe('Sete');
    expect(obj.getDescription(8)).toBe('Oito');
    expect(obj.getDescription(9)).toBe('Nove');
    expect(obj.getDescription(10)).toBe('Dez');
  });

  it('Should return "Número inválido" if number not in [0..10]', () => {
    expect.assertions(1);
    expect(obj.getDescription(11)).toBe('Número inválido');
  });
});
