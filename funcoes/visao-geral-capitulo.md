# 1. Função de Orderm Superior (Higher-Order Function)

Em suma, uma **função de ordem superior** é uma função que pode receber uma função como um argumento e pode até mesmo retornar uma função. 

As funções de ordem superior são como funções regulares com uma capacidade adicional de receber e retornar outras funções como argumentos e saída.

O que torna o JavaScript adequado para programação funcional é que ele aceita funções de ordem superior.

Funções de ordem superior são amplamente utilizadas em JavaScript. 

Se você já programa em JavaScript há algum tempo, talvez já os tenha usado sem saber.

# 2. O que é programação funcional

Em termos mais simples, a **Programação Funcional** é uma forma de programação na qual você pode passar funções como parâmetros para outras funções e também retorná-las como valores. 

Na **programação funcional**, pensamos e codificamos em termos de funções.

**JavaScript**, **Haskell**, **Clojure**, **Scala** e **Erlang** são algumas das linguagens que implementam a programação funcional.

# 3. Funções de primeira classe

Se você está aprendendo **JavaScript**, deve ter ouvido que o **JavaScript** trata as funções como **cidadãos de primeira classe** (**first-class citizens** ou **first-class objects** ).

Isso porque em **JavaScript** ou em qualquer outra linguagem de programação funcional, as **funções são objetos**.

Em **JavaScript**, tudo que você pode fazer com outros tipos, como **objeto**, **string** ou **número**, você pode fazer com **funções**. 

Você pode passá-los como **parâmetros** para outras funções (**callbacks**), assim como atribuí-los a **variáveis**. 

É por isso que as **funções** em **JavaScript** são conhecidas como **funções de primeira classe**.

~~~javascript
//Função em JavaScript é First-Class Object (Citizens)
// Higher-order function

//criação de forma literal
//caso não retorne nada, é retornado 'undefined'
//o bloco de código não pode ser omitido (somente com arrow functions)
function funcao1() {}

//armazenar em uma variável uma função anônima (sem nome)
const funcao2 = function() {}

//armazenar em array
const list = [function(a,b) {return a+b}, funcao1, funcao2]

console.log(list[0](5, 5))

//armazenar em um objeto
const object1 = {}
object1.message = function() {return 'Hello World!'}
console.log(object1.message())

//passar função como parâmetro para outra função
function execute(paramFunction) {
  console.log('execute() ==>')
  paramFunction()
}

execute(function() {console.log('Executando')})

//uma função pode retornar/conter uma função
function sum(a, b) {
  return function(c) {
    console.log(a + b + c)
  }
}

//executando de forma literal
sum(2, 3)(5)

//armazenar a função em uma variável para depois executar
const mySum = sum(2, 3)
mySum(10)
~~~

# 4. Parâmetros e Retorno são **opcionais**

~~~javascript
function area(largura, altura) {
  const area = largura * altura
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`)
  } else {
    return area
  }
}

//4
console.log(area(2, 2))

//NaN
console.log(area(2))

//NaN
console.log(area())

//6
console.log(area(2, 3, 15, 20, 50))

//undefined
console.log(area(5, 5))
~~~
