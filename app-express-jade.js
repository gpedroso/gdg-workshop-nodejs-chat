// Inicializa as bibliotecas para nossa aplicação Node.js
const express = require('express')
const app = express()
const port = 3000

// Cria o servidor
const server = require('http').createServer(app)

//Importa módulo de rotas
const home = require('./routes/home')
const gdg = require('./routes/gdg')

// Definindo as rotas
app.use('/', home)
app.use('/gdg', gdg)

// Informa qual o compilador de html o node.js vai usar
// bem como o caminho da pasta dos arquivos
app.set('view engine', 'jade') // <<< NEW
app.set('views', './views') // <<< NEW

server.listen(3000)
