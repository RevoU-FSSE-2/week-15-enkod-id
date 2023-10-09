import express from "express";
const routes = express.Router();
import "dotenv/config";
import bodyParser from "body-parser";
import { db } from "./config/db.connection";
import transactionRoutes from "./routes/transaction.route";
import cors from "cors"
import corsClientx from "./middlewares/corsx.middleware";


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
app.use(transactionRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
