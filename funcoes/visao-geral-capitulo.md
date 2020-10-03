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
