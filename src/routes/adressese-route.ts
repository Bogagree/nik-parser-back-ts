import {Request, Response, Router} from 'express';

const addresses = [{id: 1, title: 'gorod N'}, {id: 2, title: 'gorod M'}]


export const addressesRouter = Router({})

addressesRouter.get('/', (req: Request, res: Response) => {
    res.send(addresses)
})
addressesRouter.get('/:id', (req: Request, res: Response) => {
    let address = addresses.find(address => address.id.toString() === req.params.id);
    if (address) {
        res.send(address)
    } else {
        res.send(404)
    }
})