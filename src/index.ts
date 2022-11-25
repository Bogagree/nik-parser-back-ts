import express, {Request, Response} from 'express'


const app = express()
const port = process.env.PORT || 3010

app.get('/', (req: Request, res: Response) => {
    let helloMessage = 'Hello Natasha!';
    res.send(helloMessage)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})