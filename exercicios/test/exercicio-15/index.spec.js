const { revenda } = require('../../src/exercicio-15');

describe('Exercicio-15', () => {
  it('should return "Compra efetuada com sucesso." if choice is "hatch"', () => {
    expect(revenda.comprarVeiculo('hatch')).toBe('Compra efetuada com sucesso.');
  });

  it('should return "Não trabalhamos com este tipo de automóvel aqui." if choice is "SUV" or "bicicleta', () => {
    const EXPECT_MESSAGE = 'Não trabalhamos com este tipo de automóvel aqui.';
    expect(revenda.comprarVeiculo('SUV')).toBe(EXPECT_MESSAGE);
    expect(revenda.comprarVeiculo('bicicleta')).toBe(EXPECT_MESSAGE);
  });

  it('should return "Tem certeza que não prefere este modelo?" if choice is not "hatch"', () => {
    const EXPECT_MESSAGE = 'Tem certeza que não prefere este modelo?';
    expect(revenda.comprarVeiculo('sedan')).toBe(EXPECT_MESSAGE);
    expect(revenda.comprarVeiculo('motocicleta')).toBe(EXPECT_MESSAGE);
    expect(revenda.comprarVeiculo('camionete')).toBe(EXPECT_MESSAGE);
  });
});
