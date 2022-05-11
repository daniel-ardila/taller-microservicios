const express = require('express')
require('./db/mongoose')
const app = express()
const port =  3000

const personRoute = require('./routers/person')

app.use(express.json())
app.use(personRoute)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})