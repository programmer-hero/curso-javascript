const exercicio05 = require('../../src/exercicio-05');

describe('Exercicio-05', () => {
  it('should return "R$ 0,30" if param = (0.1+0.2)', () => {
    expect(exercicio05.formatarValorDecimal(0.1 + 0.2)).toEqual('R$ 0,30');
  });
  it('should return "R$ 0,50" if param = (0.5000000)', () => {
    expect(exercicio05.formatarValorDecimal(0.5)).toEqual('R$ 0,50');
  });
  it('should return "R$ 11,00" if param = (10.99999998)', () => {
    expect(exercicio05.formatarValorDecimal(10.99999998)).toEqual('R$ 11,00');
  });
});
