import express, {Request, Response} from 'express'


const app = express()
const port = 3010

app.get('/', (req: Request, res: Response) => {
    let helloMessage = 'Hello Natasha, Gleb and Alisa and Bogagree and IT-Incubator!';
    res.send(helloMessage)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})