let app = require('express')()

let randomLevel = require('./level-random')
let getLevel = require('./level')
let root = require('./root')

app.get('/', root)
app.get('/random', root)

app.get('/level/:id/random', randomLevel)

app.get('/level/:id', getLevel)

app.get('/level', getLevel)

app.listen(process.env.PORT || 80, console.log('Running..'))