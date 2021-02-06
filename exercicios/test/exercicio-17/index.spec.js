const { RH } = require('../../src/exercicio-17');

describe('Exercicio-17', () => {
  it('Should return 1100, if salary=1000 and plan="A"', () => {
    const obj = RH('A', 1000);
    expect(obj.calculateSalary()).toEqual(1100);
    expect(obj.msg).toBe('Plano valido');
  });

  it('Should return 0, if plan is invalid (not A, B or C)', () => {
    const obj = RH('D', 1000);
    expect(obj.calculateSalary()).toEqual(0);
    expect(obj.msg).toBe('Plano inválido');
  });

  it('Should return 1100, if salary=1000 and plan="A"', () => {
    const obj = RH('B', 1000);
    expect(obj.calculateSalary()).toEqual(1150);
    expect(obj.msg).toBe('Plano valido');
  });

  it('Should return 1100, if salary=1000 and plan="A"', () => {
    const obj = RH('C', 1000);
    expect(obj.calculateSalary()).toEqual(1200);
    expect(obj.msg).toBe('Plano valido');
  });
});
