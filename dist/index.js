"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3010;
const products = [{ id: 1, title: 'banan' }, { id: 2, title: 'moloko' }, { id: 3, title: 'pivo' }];
const addresses = [{ id: 1, title: 'gorod N' }, { id: 2, title: 'gorod M' }];
const parserMiddleware = (0, body_parser_1.default)({});
app.use(parserMiddleware);
app.get('/products', (req, res) => {
    // res.send(products)
    if (req.query.title) {
        res.send(products.filter(product => product.title.indexOf(req.query.title) > -1));
    }
    else {
        res.send(products);
    }
});
app.get('/products/:id', (req, res) => {
    let product = products.find(product => product.id.toString() === req.params.id);
    if (product) {
        res.send(product);
    }
    else {
        res.send(404);
    }
});
app.delete('/products/:id', (req, res) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === +req.params.id) {
            products.splice(i, 1);
            res.send(204);
            return;
        }
    }
});
app.post('/products', (req, res) => {
    // let newProduct = {id: Math.floor(Math.random()*100), title: req.body.title}
    const newProduct = {
        id: +(new Date()),
        title: req.body.title
    };
    products.push(newProduct);
    res.status(201).send(newProduct);
});
app.put('/products/:id', (req, res) => {
    let product = products.find(product => product.id.toString() === req.params.id);
    if (product) {
        product.title = req.body.title;
        res.status(200).send(product);
    }
    else {
        res.send(404);
    }
});
app.get('/addresses', (req, res) => {
    res.send(addresses);
});
app.get('/addresses/:id', (req, res) => {
    let address = addresses.find(address => address.id.toString() === req.params.id);
    if (address) {
        res.send(address);
    }
    else {
        res.send(404);
    }
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
