import express, { Express, Request, Response, NextFunction } from "express";
const routes = express.Router();
import "dotenv/config";
import bodyParser from "body-parser";
import { db } from "./config/db.connection";
import transactionRoutes from "./routes/transaction.route";
import cors from "cors"
import corsClientx from "./middlewares/corsx.middleware";
import corsClienty from "./middlewares/corsy.middleware";


const app = express();
const port = process.env.PORT;

db.connect(function (err) {
  if (err) {
    console.log(err)
    throw err;
  }
  console.log("DB Connected!");
});

app.use(bodyParser.json());

app.use(cors(corsClientx))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://clinetx-week15.netlify.app/');
  res.header('Access-Control-Allow-Methods', 'GET, POST');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(cors(corsClienty))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://clienty-week15.netlify.app/');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});


app.use(transactionRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
