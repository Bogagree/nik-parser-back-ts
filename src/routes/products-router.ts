import {Request, Response, Router} from 'express';

const products = [{id: 1, title: 'banan'}, {id: 2, title: 'moloko'}, {id: 3, title: 'pivo'}]

export const productsRouter = Router({})

productsRouter.get('/', (req: Request, res: Response) => {
    const newTitle = req.query.title
    if (req.query.title) {
        if (typeof newTitle === "string") {
            res.send(products.filter(product => product.title.indexOf(newTitle) > -1))
        }
    } else {
        res.send(products)
    }
})
productsRouter.get('/:id', (req: Request, res: Response) => {
    let product = products.find(product => product.id.toString() === req.params.id);

    if (product) {
        res.send(product)
    } else {
        res.send(404)
    }
})
productsRouter.delete('/:id', (req: Request, res: Response) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1)
            res.send(204)
            return
        }
    }
})
productsRouter.post('/', (req: Request, res: Response) => {
    const newProduct = {id: Math.floor(Math.random()*100), title: req.body.title}
    // const newProduct = {
    //     id: +(new Date()),
    //     title: req.body.title
    // }
    console.log(newProduct)
    products.push(newProduct)
    res.status(201).send(newProduct)
})
productsRouter.put('/:id', (req: Request, res: Response) => {
    let product = products.find(product => product.id.toString() === req.params.id);
    if (product) {
        product.title = req.body.title
        res.status(200).send(product)
    } else {
        res.send(404)
    }
})
