//Dados
const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//Configurar Nunjucks (template engine)
const nunjucks = require('nunjucks')
const { urlencoded } = require('express')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
//Configurar aquivos estáticos (css, js, img)
server
    //receber os dados pelo body
    .use(express.urlencoded({ extended: true }))
    .use(express.static("public"))
    //Rotas da Aplicaçãp
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(5500)