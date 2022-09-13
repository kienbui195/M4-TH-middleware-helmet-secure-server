import express, { NextFunction, Request, Response} from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import fs from "fs";

const port = 8000;
const app = express();

app.use(bodyParser.json());
app.use(morgan("common"));
app.use(helmet());

//app.get('/', (req, res, next) => {
    //res.json({
    //    message: "xin chao"
    //})
//})

app.get('/one', (req, res, next) => {
    fs.promises.readFile('./one.txt')
    .then(data => res.send(data))
    .catch(err => next(err))

})

app.use((error: { type: string; }, req: Request, res: Response, next: NextFunction) => {
    if (error.type === 'time-out') res.status(408).send(error)
    else res.status(500).send(error);
})


app.listen(port, () => {
    console.log(`running at http://localhost:${port}`);
    
})