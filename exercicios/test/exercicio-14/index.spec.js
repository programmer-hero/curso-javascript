const { hortifruti } = require('../../src/exercicio-14');

describe('Exercicio-14', () => {
  it('should return "Não vendemos esta fruta aqui." if fruit is "maçã"', () => {
    expect(hortifruti.venderFruta('maçã')).toBe('Não vendemos esta fruta aqui.');
  });

  it('should return "Erro, fruta inválida." if fruit is "morango"', () => {
    expect(hortifruti.venderFruta('morango')).toBe('Erro, fruta inválida.');
    expect(hortifruti.venderFruta('alcatra')).toBe('Erro, fruta inválida.');
  });

  it('should return "Estamos com escassez de kiwi." if fruit is "kiwi"', () => {
    expect(hortifruti.venderFruta('kiwi')).toBe('Estamos com escassez de kiwi.');
  });

  it('should return "Aqui está, custa R$ 3,00 o quilo." if fruit is "melancia"', () => {
    expect(hortifruti.venderFruta('melancia')).toBe('Aqui está, custa R$ 3,00 o quilo.');
  });
});
