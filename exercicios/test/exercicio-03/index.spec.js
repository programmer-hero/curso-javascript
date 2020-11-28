const exercicio03 = require('../../src/exercicio-03');

describe('Exercicio-03', () => {
  it('should return 2 ** 3 = 8', () => {
    expect(exercicio03.expoente(2, 3)).toEqual(8);
  });

  it('should return 5 ** 2 = 25', () => {
    expect(exercicio03.expoente(5, 2)).toEqual(25);
  });
});
