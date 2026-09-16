import express from 'express'
const port = 4000
const app = express()
import { generateName, generateNames } from "josiah-random-name-kit";

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.get('/', (req, res) => {
    const value = parseInt(req.query.value)
    if(!value){
        res.sendStatus(404).json({
            message: 'You must include a query'
        })
    }
    res.json({
        names: generateNames(value)
    })
})






app.listen(port, console.log('server started'))

