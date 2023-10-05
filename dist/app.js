"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const body_parser_1 = __importDefault(require("body-parser"));
const db_connection_1 = require("./config/db.connection");
// import routes from "./routes/main.route";
const app = (0, express_1.default)();
const port = process.env.PORT;
db_connection_1.db.connect(function (err) {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log("DB Connected!");
});
app.use(body_parser_1.default.json());
// app.use(routes)
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
