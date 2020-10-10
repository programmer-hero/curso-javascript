//IIFE - Immediately Invoked Function Expression
//Sao funcoes executas assim que são definidas.
//Possui 02 partes principais:
//1. A função anônima propriamente dita. Seu contexto léxico é encapsulado entre os parêntesis.
//2. Corresponde a expressao ().
(function () {
  console.log("Será executado na hora!");
  console.log("Utilizando IIFE é possível fugir do escopo global!");
  console.log("Tudo o que for criado, fica dentro do escopo desta função!");
})();
