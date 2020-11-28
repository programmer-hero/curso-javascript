const exercicio02 = require('../../src/exercicio-02');

describe('Exercicio-02', () => {
  it('should return "Equilátero"', () => {
    expect(exercicio02.classificaTriangulo(2, 2, 2)).toEqual('Equilátero');
    expect(exercicio02.classificaTriangulo(50, 50, 50)).toEqual('Equilátero');
  });
  it('should return "Isósceles"', () => {
    expect(exercicio02.classificaTriangulo(2, 3, 3)).toEqual('Isósceles');
    expect(exercicio02.classificaTriangulo(50, 500, 500)).toEqual('Isósceles');
  });
  it('should return "Escaleno"', () => {
    expect(exercicio02.classificaTriangulo(2, 3, 4)).toEqual('Escaleno');
    expect(exercicio02.classificaTriangulo(50, 500, 600)).toEqual('Escaleno');
  });
});
