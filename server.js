const express = require('express')           
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const hbs = require('express-hbs')
const expressValidator = require('express-validator')
const session = require('express-session')

const app = express()
const PORT = 3000

const user = require('./routes/user.route')
app.use('/user',user)

app.get('/', (req, res) => {
  res.send('hello')
})

app.listen(PORT, () => {
  console.log('Servidor rodando na porta ', PORT)
})

app.use(express.static('public'))
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
}))
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookieParser())

app.use(expressValidator())

app.use(session({ secret: 'commiting-passwords-is-horrible-practice', resave: false, saveUninitialized: true }))
