const express = require('express')
const path = require('path')

const app = express()

const api = require('./routes/api')

// View Engine
// app.set('views', path.join(__dirname, 'views'))
// app.set('view engine', 'ejs')
// app.engine('html', require('ejs').renderFile)

console.log(__dirname)
// Set static folder
app.use(express.static(path.join(__dirname, './public/dist/hACk')))

app.use('/api', api)

// set static
app.get('/*', (req, res) => {


  res.sendFile(path.join(__dirname, './public/dist/hACk/index.html'));

})


app.listen(3003, () => console.log('started listening'))
