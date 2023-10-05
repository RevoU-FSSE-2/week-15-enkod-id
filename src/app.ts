import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import { db } from "./config/db.connection";
// import routes from "./routes/main.route";


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
// app.use(routes)


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
