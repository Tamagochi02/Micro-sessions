import express from 'express'
import fetch from 'node-fetch';
import { get, post, put } from './controllers/accountController.js'

const app = express()
const port = 3000

app.use(express.json())

app.get('/account', get)
app.post('/account', post)

app.listen(port, () => {
    const register = () => fetch('http://localhost:5000/services', {
        method: 'POST',
        body: JSON.stringify({ service_name: 'UsersService', service_port: port.toString() })
    });

    // Register microservice 
    register()
    // Update microservice 
    setInterval(register, 4000)
    console.log(`Example app listening on port ${port}`)
})