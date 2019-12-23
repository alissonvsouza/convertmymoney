$(function() {
    $('#formulario-cotacao').submit(function(e) {
        const cotacao = $('input[name="cotacao"]').val()
        const quantidade = $('input[name="quantidade"]').val()

        if(!cotacao || cotacao <= 0) {
            alert('Informe o valor de cotação')
            e.preventDefault()
        } else if (!quantidade || quantidade <= 0) {
            alert('Informe a quantidade')
            e.preventDefault()
        }
    })
})
