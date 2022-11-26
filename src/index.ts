import express, {Request, Response} from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = process.env.PORT || 3010

const products = [{id: 1, title: 'banan'}, {id: 2, title: 'moloko'}, {id: 3, title: 'pivo'}]
const addresses = [{id: 1, title: 'gorod N'}, {id: 2, title: 'gorod M'}]

const parserMiddleware = bodyParser.json()
app.use(parserMiddleware)

app.get('/products', (req: Request, res: Response) => {
    const newTitle = req.query.title
    if (req.query.title) {
        if (typeof newTitle === "string") {
            res.send(products.filter(product => product.title.indexOf(newTitle) > -1))
        }
    } else {
        res.send(products)
    }
})
app.get('/products/:id', (req: Request, res: Response) => {
    let product = products.find(product => product.id.toString() === req.params.id);

    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})
app.delete('/products/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1)
            res.send(204)
            return
        }
    }
})
app.post('/products', (req: Request, res: Response) => {
    const newProduct = {id: Math.floor(Math.random()*100), title: req.body.title}
    // const newProduct = {
    //     id: +(new Date()),
    //     title: req.body.title
    // }
    console.log(newProduct)
    products.push(newProduct)
    res.status(201).send(newProduct)
})
app.put('/products/:id', (req: Request, res: Response) => {
    let product = products.find(product => product.id.toString() === req.params.id);
    if (product) {
        product.title = req.body.title
        res.status(200).send(product)
    } else {
        res.send(404)
    }
})

app.get('/addresses', (req: Request, res: Response) => {
    res.send(addresses)
})
app.get('/addresses/:id', (req: Request, res: Response) => {
    let address = addresses.find(address => address.id.toString() === req.params.id);
    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})