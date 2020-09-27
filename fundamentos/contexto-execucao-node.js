let a = 3

//pratica não recomendada !!!
global.b = 123
//console.log(global)

//module.exports
this.c = 456

console.log(this.a) //undefined
console.log(global.b)
console.log(this.c)

// console.log(this == global)
// console.log(this == module.exports)

