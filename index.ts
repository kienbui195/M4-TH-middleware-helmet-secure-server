import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";

const port = 8000;
const app = express();

app.use(bodyParser.json());
app.use(morgan("common"));
app.use(helmet());

app.get('/', (req, res, next) => {
    res.json({
        message: "xin chao"
    })
})

app.listen(port, () => {
    console.log(`running at http://localhost:${port}`);
    
})