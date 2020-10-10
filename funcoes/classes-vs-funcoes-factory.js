//exemplo de Classe
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const joao = new Pessoa("João");
joao.falar();

//exemplo Factory
const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};

const marcos = criarPessoa("Marcos");
marcos.falar();

//exemplo Factory
function PessoaFactory(nome) {
  this.falar = function () {
    console.log(`Meu nome é ${nome}`);
  };
}

const jose = new PessoaFactory("José");
jose.falar();
