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

### **Exemplo 1**:

```javascript
//Função em JavaScript é First-Class Object (Citizens)
// Higher-order function

//criação de forma literal
//caso não retorne nada, é retornado 'undefined'
//o bloco de código não pode ser omitido (somente com arrow functions)
function funcao1() {}

//armazenar em uma variável uma função anônima (sem nome)
const funcao2 = function () {};

//armazenar em array
const list = [
  function (a, b) {
    return a + b;
  },
  funcao1,
  funcao2,
];

console.log(list[0](5, 5));

//armazenar em um objeto
const object1 = {};
object1.message = function () {
  return "Hello World!";
};
console.log(object1.message());

//passar função como parâmetro para outra função
function execute(paramFunction) {
  console.log("execute() ==>");
  paramFunction();
}

execute(function () {
  console.log("Executando");
});

//uma função pode retornar/conter uma função
function sum(a, b) {
  return function (c) {
    console.log(a + b + c);
  };
}

//executando de forma literal
sum(2, 3)(5);

//armazenar a função em uma variável para depois executar
const mySum = sum(2, 3);
mySum(10);
```

# 4. Parâmetros e Retorno são **opcionais**

### **Exemplo 2**:

```javascript
/**
 * Calcula a área e a retorna caso seja maior que 20.
 * @param {number} largura
 * @param {number} altura
 */
function area(largura, altura) {
  const area = largura * altura;
  if (area > 20) {
    console.log(`Valor acima do permitido: ${area}m2.`);
  } else {
    return area;
  }
}

//4
console.log(area(2, 2));

//NaN
console.log(area(2));

//NaN
console.log(area());

//6
console.log(area(2, 3, 15, 20, 50));

//undefined
console.log(area(5, 5));
```

# 5. Parâmetros variáveis

Uma função em Linguagem JavaScript pode acessar valores dos parâmetros mesmo que os mesmos não sejam definidos na declaração da função.

Isso pode ser feito através de um Array chamado **arguments** e que existe dentro de cada função declarada.

O Exemplo abaixo demonstra uma maneira de acessar e utilizar o array **arguments** para acessar parâmetros variáveis da função **soma()**

### **Exemplo 3**:

```javascript
function soma() {
  let soma = 0;
  for (i in arguments) {
    soma += arguments[i];
  }
  return soma;
}

//retorna zero
console.log(soma());

//retorna 1
console.log(soma(1));

//retorna 6.6
console.log(soma(1.1, 2.2, 3.3));

//retorna 3.3000000000000003Teste
console.log(soma(1.1, 2.2, "Teste"));

//retorna 0abc
console.log(soma("a", "b", "c"));
```

# 5. Parâmetros Padrões

Existem 05 estratégias para definir valores padrẽos aos parâmetros de uma função.

## Estratégia 1: Operador **OR** ( || )

A função soma1(a, b, c) do exemplo abaixo, utiliza o operador OR para gerar o valor padrão 1 de cada parâmetro.

Observe que no exemplo existe um efeito colateral, quando todos os parâmetros forem informados com o valor inicial zero (0).

**soma1(0, 0, 0)** ==> **3**

Isso ocorre, pois na expressão (0 || 1), **zero** é um valor '**falso**' em javascript.

### **Exemplo 4**:

```javascript
//estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
  a = a || 1;
  b = b || 1;
  c = c || 1;
  return a + b + c;
}

//retorna 3
console.log(soma1());

//retorna 5
console.log(soma1(3));

//retorna 6
console.log(soma1(1, 2, 3));

//retorna 3 --> erro de lógica no cálculo
console.log(soma1(0, 0, 0));
```

## Estratégia 2: Operador **ternário**

A função soma2(a, b, c) do exemplo abaixo, utiliza o operador ternário para gerar o valor padrão 1 de cada parâmetro.

### **Exemplo 5**:

```javascript
//estratégia 2
function soma2(a, b, c) {
  a = a !== undefined ? a : 1;
  b = b !== undefined ? b : 1;
  c = c !== undefined ? c : 1;
  return a + b + c;
}

//retorna 3
console.log(soma2());

//retorna 5
console.log(soma2(3));

//retorna 6
console.log(soma2(1, 2, 3));

//retorna 0
console.log(soma2(0, 0, 0));
```

## Estratégia 3: Operador **ternário** com **parâmetros variáveis**

A função soma3(a, b, c) do exemplo abaixo, utiliza a técnica de verificar parâmetros variáveis através do array '**arguments**' para gerar o valor padrão 1 de cada parâmetro.

### **Exemplo 6**:

```javascript
//estratégia 3
function soma3(a, b, c) {
  a = 0 in arguments ? a : 1;
  b = 1 in arguments ? b : 1;
  c = 2 in arguments ? c : 1;
  return a + b + c;
}

//retorna 3
console.log(soma3());

//retorna 5
console.log(soma3(3));

//retorna 6
console.log(soma3(1, 2, 3));

//retorna 0
console.log(soma3(0, 0, 0));
```

## Estratégia 4: Operador **_ternário_** com **validação de tipo**

A função soma4(a, b, c) do exemplo abaixo, utiliza a técnica de verificar o tipo do parâmetro para validar se é necessário gerar o valor padrão 1 de cada parâmetro.

### **Exemplo 7**:

```javascript
//estratégia 4
function soma4(a, b, c) {
  a = isNaN(a) ? 1 : a;
  b = isNaN(b) ? 1 : b;
  c = isNaN(c) ? 1 : c;
  return a + b + c;
}

//retorna 3
console.log(soma4());

//retorna 5
console.log(soma4(3));

//retorna 6
console.log(soma4(1, 2, 3));

//retorna 0
console.log(soma4(0, 0, 0));
```

## Estratégia 5: Informar valor padrão no modelo ES2015

A função soma5(a = 1, b = 1, c = 1) utiliza o modelo padrão apresentado no ES2015.

Somente em casos muito específicos este padrão não pode ser utilizado como por exemplo:

- Necessidade de implementar códigos em navegadores ou ambientes mais antigos que não suportam a especificação ES2015.

### **Exemplo 8**:

```javascript
//ES2015 - estratégia 5 para gerar valor padrão
function soma5(a = 1, b = 1, c = 1) {
  return a + b + c;
}

//retorna 3
console.log(soma5());

//retorna 5
console.log(soma5(3));

//retorna 6
console.log(soma5(1, 2, 3));

//retorna 0
console.log(soma5(0, 0, 0));
```

# 6. A palavra-chave **this**

Um dos aspectos mais importantes da linguagem JavaScript, e um dos mais incompreendidos, é a palavra-chave this.

**this** aponta para o **contexto** onde uma função está sendo executada.

Seu valor dentro de uma função depende de como a função foi invocada. Em uma mesma função, **this** pode ter diferentes valores, em diferentes momentos, dependendo da invocação.

## Regra 1: Método de um objeto

> **Regra 1**: Se a função é chamada como método de um objeto — isto é, chamada com notação de ponto — o valor de ‘this’ dentro da função é o objeto que o chamou.

Esta é a regra mais simples e a que governa a maioria dos casos onde aparece o **this**.

### **Exemplo 9**:

```javascript
const player = {
  name: "Cloud",
  sayName() {
    // Que valor 'this' tem aqui?
    // Temos que olhar o momento que a função é chamada.
    console.log(this.name);
  },
};

//Dentro da função 'sayName' o 'this' é o que está antes do ponto.
//O objeto que chama a função 'sayName' é 'player'.
//Nesta chamada o 'this' será 'player'.
player.sayName();
```

## Regra 2: **bind**, **apply** e **call**

> **Regra 2**: Usando bind, apply e call, o valor de **‘this’** dentro da função é explicitamente setado no primeiro argumento.

Funções em JavaScript são tratadas como objeto, isto é, podem ser passadas como parâmetro para outra função, ser atribuídas a variáveis e possuir seus próprios atributos e métodos.

Por isso é dito que em JavaScript, funções são **first-class citizens** — cidadãos de primeira classe.

Dentre os métodos que qualquer função possui, três deles permitem manipular o this e burlar a regra 1, que são o **bind**, **apply** e **call**.

### **bind**: cria uma nova função fixando o valor do **this**, independente de como a função é invocada.

### **Exemplo 10**:

```javascript
const player = {
  name: "Hermes",
};

const enemy = {
  name: "Prometheus",
};

// Função declarada global.
// Se chamar direto, o 'this' seria 'global' ou 'window'.
const sayName = function () {
  console.log(this.name);
};

// Usando 'bind' para criar novas funções que fazem a mesma coisa
// da função 'sayName', mas definindo o 'this' manualmente.
const sayPlayerName = sayName.bind(player);
const sayEnemyName = sayName.bind(enemy);

sayPlayerName(); // Hermes
sayEnemyName(); // Prometheus
```

### **call e apply**: invoca a função, setando o **this** como primeiro argumento, e repassando os demais para a função invocada.

A diferença entre as duas formas é que no **call** os demais argumentos são passados como argumentos separados, e no **apply** eles são passados como um array.

### **Exemplo 11**:

```javascript
const player = {
  name: "Leonidas de Esparta",
  hp: 100,
  mp: 0,
  printStatus() {
    console.log(`${this.name} tem ${this.hp} de HP e ${this.mp} de MP.`);
  },
};

// Função usa 'this', mas vamos setá-lo no momento da chamada.
const addHPMPToPlayer = function (hp, mp) {
  this.hp += hp;
  this.mp += mp;
  this.printStatus();
};

player.printStatus(); // Cloud tem 100 de HP e 0 de MP.

// Setando o 'this' manualmente usando 'call'
// Cloud terá 150 de HP e 20 de MP.
addHPMPToPlayer.call(player, 50, 20);

// Setando o 'this' manualmente usando 'apply'
// (a única diferença é a forma como passamos os demais argumentos)
// Cloud terá 200 de HP e 40 de MP.
addHPMPToPlayer.apply(player, [50, 20]);
```

## Regra 3: palavra-chave **new**

> **Regra 3**: Se a função é chamada com ‘new’, o valor de ‘this’ é o novo objeto que está sendo criado.

Quando chamamos uma função usando a palavra-chave **new**, internamente um novo contexto é criado (basicamente um objeto vazio) e atribuído ao this.

Ao final da invocação, o **this** é retornado automaticamente.

### **Exemplo 12**:

```javascript
// As linhas comentadas mostram o que o 'new' faz
const Player = function (name) {
  // const this = {}
  this.name = name;
  this.hp = 1000;
  this.mp = 0;
  // return this
};

// Função chamada com 'new'.
// O 'this' será um objeto novo.
const cloud = new Player("Cloud");

// Cloud 1000 0
console.log(cloud.name, cloud.hp, cloud.mp);
```

Usando **class** o método constructor é invocado e o **new** faz a mesma coisa com o **this**.

### **Exemplo 13**:

```javascript
// Usando 'class' o 'new' chama o construtor e faz a mesma coisa com o 'this'
class Player {
  constructor(name) {
    // const this = {}
    this.name = name;
    this.hp = 1000;
    this.mp = 0;
    // return this
  }
}

// Criando um novo Player
const cloud = new Player("Cloud");

// Cloud 1000 0
console.log(cloud.name, cloud.hp, cloud.mp);
```

## Regra 4: Contexto global (default)

> **Regra 4**: Se a chamada da função não se enquadra nas regras anteriores, o **‘this’** é o contexto **global — ‘window’** no navegador ou **‘global’** no Node.js.

No exemplo abaixo a chamada não é feita como **método de um objeto** (regra 1), não é usado **bind**, **call**, **apply** (regra 2), nem é usado o **new** (regra 3).

O **this** é o contexto global.

### **Exemplo 14**:

```javascript
// Constante no objeto 'global'
global.playerName = "Tidus";

const sayGlobalName = function () {
  console.log(this);
  console.log(this.playerName);
};

// A chamada abaixo não se enquadra a nenhuma das outras regras,
// portanto o 'this' na função é o objeto global
// ('window' no navegador ou 'global' no Node.js)
// Tidus
sayGlobalName();
```

## **this** e **Arrow Functions**

Diferente de funções declaradas com **function**, as **arrow functions** não criam um novo contexto, mas sim utilizam o **mesmo contexto** (o mesmo this) da função onde ela é declarada (**função pai**).

### **Exemplo 15**:

```javascript
const player = {
  name: "Musashi",
  weapon: "Katana Sword",
  sayNameAndAttack() {
    console.log(this.name);

    // Uma 'arrow function'!
    // O 'this' dentro dela vai ser o mesmo que aqui fora
    window.setTimeout(() => {
      console.log(`${this.name} ataca com a ${this.weapon}`);
    }, 1000);
  },
};

// Musashi
// Musashi ataca com a Katana Sword
player.sayNameAndAttack();
```

# 7. **Arrow Functions**

Funções arrows são sempre funções anônimas. Elas precisam ser atribuídas a uma constante ou variável para ser invocada posteriormente.

### **Exemplo 16**:

```javascript
let dobro = function (a) {
  return 2 * a;
};

dobro = (a) => {
  return 2 * a;
};

let ola = function () {
  return "Ola";
};

dobro = (a) => 2 * a; //return implícito

ola = () => "Olá";
ola = (_) => "Olá";
```

## **Arrow Functions** e **bind**

O método **bind** não consegue modificar o contexto do this em **Funções Arrow**.

**Arrow Functions** sempre irão manter o contexto do **this** mesmo que o desenvolvedor tente modificar seu contexto através de **bind**, **call** ou **apply**.

### **Exemplo 17**:

```javascript
console.log("***** Function *****");

let compareWithThis = function (context) {
  console.log(this === context);
};

compareWithThis(global);

const obj = {};
compareWithThis = compareWithThis.bind(obj);
compareWithThis(global);
compareWithThis(obj);

console.log("***** Arrow Function *****");

let compareWithThisArrow = (context) => {
  console.log(this === context);
};

compareWithThisArrow(global);
compareWithThisArrow(module.exports);

console.log("***** Arrow Function e bind *****");

compareWithThisArrow = compareWithThisArrow.bind(obj);
compareWithThisArrow(obj);
compareWithThisArrow(module.exports);
```

# 8. **Funções Anônimas**

**Funções anônimas** são funções que não possuem nomes.

**Funções anônimas** são sempre atribuídas a **variáveis** ou **constantes** em JavaScript.

Uma função do tipo Arrow é sempre uma função anônima.

Funções anônimas podem ser declaradas dentro de objetos com ou sem a palavra reservada **"function"**.

### **Exemplo 18**:

```javascript
/**
 * Soma dois numeros
 * @param {number} x
 * @param {number} y
 */
const sum = function (x, y) {
  return x + y;
};

/**
 * Exibe no console o resultado da soma
 * @param {number} a
 * @param {number} b
 * @param {function} operation
 */
const printResult = function (a, b, operation = sum) {
  console.log(operation(a, b));
};

printResult(3, 6);

printResult(6, 9, sum);

printResult(6, 9, function (x, y) {
  return x - y;
});

//funções arrow são sempre funções anônimas
printResult(6, 9, (x, y) => x * y);

/**
 * Objeto contendo dois tipos de funções anônimas.
 */
const people = {
  speak: function () {
    console.log("Hello World!");
  },
  talk() {
    console.log("Hello World again!");
  },
};

people.speak();
people.talk();
```

# 9. **Funções Callback**

Callback siginfica "chamar de volta".
São funções que quando passadas como parâmetro de outra função, são invocadas a cada "evento" disparado na função principal.

Um exemplo muito comum é utilizar funções 'callback' como parâmetros para a função 'forEach'.

Outro exemplo onde as funções 'callback' são muito utilizadas são em funções do tipo 'Ajax'. Neste tipo de função, são passados como parâmetros 02 funções 'callback':

- Uma para tratar as requisições que receberam respostas sem erro;
- Uma para tratar os erros da requisição (caso ocorra falha)

### **Exemplo 19**:

```javascript
//lista de fabricantes
const manufacturers = ["Mercedes", "Audi", "BMW"];

/**
 * Imprime o índice e o nome.
 * @param {string} name
 * @param {number} index
 */
function print(name, index) {
  console.log(`${index + 1}. ${name}`);
}

//utilizando a função 'print' como parâmetro 'callback' da função 'forEach'
manufacturers.forEach(print);

//criando uma função 'callback' para exibir o conteúdo da lista
manufacturers.forEach(function (name) {
  console.log(name);
});

//criando uma função 'callback' do tipo 'Arrow' para exibir o conteúdo da lista
manufacturers.forEach((manufacturer) => console.log(manufacturer));
```

Mas existe ganho real ao utilizar funções do tipo 'Callback' ?
Uma abordagem interessante para utilizar funções 'Callback' é o cenário de manipulação de 'arrays'.

Imagine que você precisa filtrar um array de notas para criar um novo array com o resultado obtido no filtro.

O exemplo abaixo demonstra abordagens com e sem 'callback' para demosntrar o ganho ao utilizar o recurso de calbacks.

### **Exemplo 20**:

```javascript
const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//sem callback
let notasBaixas1 = [];
for (let i in notas) {
  if (notas[i] < 7) {
    notasBaixas1.push(notas[i]);
  }
}

console.log(notasBaixas1);

//com callback
//se o resultado da função callback for verdadeiro,
//os itens válidos serão filtrados criando um
//'novo' array resultante.
const notasBaixas2 = notas.filter(function (nota) {
  return nota < 7;
});

console.log(notasBaixas2);

//versão menos verbosa
const notasBaixas3 = notas.filter((nota) => nota < 7);
console.log(notasBaixas3);
```

Funções 'callback' são muito utilizadas no navegador.

Um exemplo simples de sua utilização é quando registramos o click do mouse para executar uma função.

### **Exemplo 21**:

```javascript
//Função callback para manipular eventos de click do mouse na tag 'body'
document.getElementsByTagName("body")[0].onclick = function (event) {
  console.log("O evento ocorreu!");
};
```

# 10. **Funções Construtoras**

Funções construtora tem forte relação ao paradigma 'orientado a objeto'.

Elas servem para 'criar' instâncias de novos objetos.

Podemos criar funções 'publicas' e funções 'privadas' dentro de funções construtoras.

Para criar funções públicas, basta utilizar o modificador 'this' com a notação ponto antes do nome das funções.

### **Exemplo 22**:

```javascript
function Carro(velocidadeMaxima = 200, delta = 5) {
  //atributo privado
  let velocidadeAtual = 0;

  //metodo público
  this.acelerar = function () {
    if (velocidadeAtual + delta <= velocidadeMaxima) {
      velocidadeAtual += delta;
    } else {
      velocidadeAtual = velocidadeMaxima;
    }
  };

  //metodo público
  this.getVelocidadeAtual = function () {
    return velocidadeAtual;
  };
}

//objeto criado a partir da função construtora
const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

//objeto criado a partir da função construtora
const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

//analisando o tipo da Função constutora
console.log(typeof Carro);

//analisando o tipo do objeto 'ferrari'
console.log(typeof ferrari);
```

# 11. **Tipos de declarações**

Existem basicamente 03 tipos de declarações de funções em javascript.

- Function Declaration
- Function Expression
- Function Named Expression

### **Exemplo 23**:

```javascript
console.log(soma(3, 6));

//function declaration
function soma(x, y) {
  return x + y;
}

//function expression
const sub = function (x, y) {
  return x - y;
};
console.log(sub(3, 6));

//function named expression
const multi = function multi(x, y) {
  return x * y;
};
console.log(multi(3, 6));
```

# 12. **Contexto Léxico**

Em JavaScript, toda função carrega consigo o 'contexto' ao qual foi definida.

Observe que no exemplo abaixo, ao invocarmos a função 'exec()', o valor impresso no console é 'Global', e não 'Local'.

### **Exemplo 24**:

```javascript
const valor = "Global";

function myFunction() {
  console.log(valor);
}

myFunction();

function exec() {
  const valor = "Local";
  myFunction();
}

exec();
```

Este é um conceito importante para endendermos o que são 'closures'.

# 13. **Closures**

Closure é o escopo criado quando uma função é declarada. A Clousure 'envolve' a função.

Esse escopo permite a função acessar e manipular variáveis externas à função.

### **Exemplo 25**:

```javascript
//contexto léxico em ação !
const x = "Global";

function fora() {
  const x = "Local";
  function dentro() {
    return x;
  }
  return dentro();
}

const minhaFuncao = fora;
console.log(minhaFuncao());
```

# 14. **Funções Factory**

Funções Factory são **'funções construtoras'**.

São funções que **'retornam objetos'**.

Factory é um Design Patter (Padrão de projeto) utilizado em diversas linguagens de programação, e muito utilizada em JavaScript.

### **Exemplo 26**:

```javascript
/**
 * Função Factory para criar um objeto com atributos fixos.
 */
function criarPessoa() {
  return {
    nome: "Pedro",
    sobrenome: "Paulo",
  };
}

console.log(criarPessoa());

/**
 * Funcao Factory para criar um objeto com atributos variáveis e fixos.
 * @param {string} nome
 * @param {number} preco
 */
function criarProduto(nome, preco, desconto = 0.1) {
  return {
    nome,
    preco,
    desconto,
  };
}
console.log(criarProduto("Notebook", 5000));
console.log(criarProduto("iPad", 3000));
```

# 15. **Classes vs. Funções Factory**

Classes são formas diferentes de se implementar funções em JavaScript.

Classes são Funções escritas de forma diferente.

### **Exemplo 27**:

```javascript
/**
 * Exemplo Classe
 */
class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`Meu nome é ${this.nome}`);
  }
}

const p1 = new Pessoa("João");
p1.falar();

/**
 * Exemplo Factory
 * @param {string} nome
 */
const criarPessoa = (nome) => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`),
  };
};

const p2 = criarPessoa("Marcos");
p2.falar();

/**
 * Exemplo Factory
 * @param {string} nome
 */
function PessoaFactory(nome) {
  this.falar = function () {
    console.log(`Meu nome é ${nome}`);
  };
}

const p3 = new PessoaFactory("José");
p3.falar();
```

# 16. **IIFE**

IIFE (Immediately Invoked Function Expression) é uma função em JavaScript que é executada assim que definida.

É um Design Pattern também conhecido como Self-Executing Anonymous Function e contém duas partes principais. A primeira é a função anônima cujo escopo léxico é encapsulado entre parênteses. Isso previne o acesso externo às variáveis declaradas na IIFE, bem como evita que estas variáveis locais poluam o escopo global.

A segunda parte corresponde à criação da expressão (), por meio da qual o interpretador JavaScript avaliará e executará a função.

### **Exemplo 28**:

```javascript
//IIFE - Immediately Invoked Function Expression

(function () {
  console.log("Será executado na hora!");
  console.log("Utilizando IIFE é possível fugir do escopo global!");
  console.log("Tudo o que for criado, fica dentro do escopo desta função!");
})();
```
