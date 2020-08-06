const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:true}))

app.post('/usuarios', (request, response) => {
    console.log(request.body)
    response.send('<h1>Parabéns ! Informações incluídas com sucesso.</h1>')
})

app.get('/usuarios', (request, response) => {
    console.log(request.query)
    response.send('<h1>Parabéns ! Informações incluídas com sucesso.</h1>')
})



app.post('/usuarios/:id', (request, response) => {
    console.log(`Código de aleração enviado: ${request.params.id}`)
    console.log(request.body)
    response.send('<h1>Parabéns ! Informações alteradas com sucesso.</h1>')
})

console.log('FormServer is started on port 3003')
app.listen(3003)
