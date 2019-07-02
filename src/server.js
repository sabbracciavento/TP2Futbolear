const express = require('express')
const { port } = require('./config')
const partidosRouter = require('./routes/partidosRouter')
const jugadoresRouter = require('./routes/jugadoresRouter')
const dbP = require('./data/DAOpartidos/DAOpartidosDB')
const dbJ = require('./data/DAOjugadores/DAOjugadoresDB')

const app = express()

app.use(express.json())

app.set('json spaces', 4)

app.use('/api/partidos', partidosRouter)
app.use('/api/jugadores', jugadoresRouter)

app.listen(port, () => {
    console.log(`servidor inicializado en puerto ${port}`)
})

dbP.create()
dbJ.create()
