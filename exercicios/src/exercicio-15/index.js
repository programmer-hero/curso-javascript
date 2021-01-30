const revenda = {
  comprarVeiculo(veiculo) {
    let mensagem = '';
    switch (veiculo) {
      case 'hatch':
        mensagem = 'Compra efetuada com sucesso.';
        break;
      case 'sedan':
      case 'motocicleta':
      case 'camionete':
        mensagem = 'Tem certeza que não prefere este modelo?';
        break;
      default:
        mensagem = 'Não trabalhamos com este tipo de automóvel aqui.';
    }
    return mensagem;
  },
};

module.exports = { revenda };
