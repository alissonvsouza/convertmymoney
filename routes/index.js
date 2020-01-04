const init = () => {
    const cotacao = require('../controllers/cotacao')
    const router = require('express').Router()

    router.get('/', cotacao.getCotacao)
    router.get('/cotacao', cotacao.calcularCotacao)

    return router
}
module.exports = init
