const convert = require('../lib/convert')
const apiBCB = require('../lib/api.bcb')

const calcularCotacao = (req, res) => {
    const { cotacao, quantidade } = req.query
    if (cotacao && quantidade) {
        const conversao = convert.convert(cotacao, quantidade)
        res.render('cotacao', {
            error: false,
            cotacao: convert.toMoney(cotacao),
            quantidade: convert.toMoney(quantidade),
            conversao: convert.toMoney(conversao)
        })
    } else {
        res.render('cotacao', {
            error: 'Valores inválidos'
        })
    }
}
const getCotacao = async (req, res) => {
    const cotacaoAtual = await apiBCB.getCotacao()
    res.render('home', {
        cotacao: cotacaoAtual
    })
}
module.exports = {
    calcularCotacao,
    getCotacao
}