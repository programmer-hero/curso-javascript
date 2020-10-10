//Funcoes Arrow são sempre funcoes anônimas

//funcao anonima trival
let dobro = function (a) {
  return 2 * a;
};

let ola = function () {
  return "Ola!";
};

//funcao arrow
dobro = (a) => {
  return 2 * a;
};

//na funcao arrow o 'return' é implicito
ola = () => "Olá";
ola = (_) => "Olá";
