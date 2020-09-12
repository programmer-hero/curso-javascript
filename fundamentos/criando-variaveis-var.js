//var tem 02 escopos
//1. global - visivel em toda aplicação
//2. local - visivel apenas no escopo da função

{
    {
        {
            {
                var varGlobal = 'teste'
                console.log(varGlobal)
            }
        }
    }
}
console.log(varGlobal)

function teste() {
    var varLocal = 369
    console.log(varLocal)
}

teste()

//////////////////////////////
var numero = 1
{
    var numero = 2
    console.log('dentro=', numero)
}
console.log('fora=', numero)