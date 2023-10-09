"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes = express_1.default.Router();
require("dotenv/config");
const body_parser_1 = __importDefault(require("body-parser"));
const db_connection_1 = require("./config/db.connection");
const transaction_route_1 = __importDefault(require("./routes/transaction.route"));
const cors_1 = __importDefault(require("cors"));
const corsx_middleware_1 = __importDefault(require("./middlewares/corsx.middleware"));
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
app.use((0, cors_1.default)(corsx_middleware_1.default));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://week-15-fe.netlify.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
});
app.use(transaction_route_1.default);
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
