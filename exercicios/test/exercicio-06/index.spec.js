const exercicio06 = require('../../src/exercicio-06');

describe('Exercicio-06', () => {
  it('should return 120.00 when jurosSimples(100, 10 / 100, 2)', () => {
    expect(exercicio06.jurosSimples(100, 10 / 100, 2)).toEqual('120.00');
  });
  it('should return 121.00 when jurosCompostos(100, 10 / 100, 2)', () => {
    expect(exercicio06.jurosCompostos(100, 10 / 100, 2)).toEqual('121.00');
  });
});
