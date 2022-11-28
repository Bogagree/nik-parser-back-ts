import express from 'express'
import bodyParser from 'body-parser'
import {productsRouter} from './routes/products-router';
import {addressesRouter} from './routes/adressese-route';

const app = express()
const port = process.env.PORT || 3010

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.use('/products', productsRouter)
app.use('/addresses', addressesRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})