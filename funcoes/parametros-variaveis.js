function soma() {
  let somatorio = 0;
  for (let i in arguments) {
    somatorio += arguments[i];
  }
  return somatorio;
}

//retorna zero
console.log(soma());

//retorna 1
console.log(soma(1));

//retorna 6.6
console.log(soma(1.1, 2.2, 3.3));

//retorna 3.3000000000000003Teste
console.log(soma(1.1, 2.2, "Teste"));

//retona 0abc
console.log(soma("a", "b", "c"));
