const app = require('./app')()
const port = process.env.PORT || 3000

app.listen(port, err => {
    if (err) {
        console.log('err', err)
    } else {
        console.log('ConvertMyMoney is running.')
    }
})

