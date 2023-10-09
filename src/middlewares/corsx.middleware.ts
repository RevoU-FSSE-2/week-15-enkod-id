import { Express } from "express";
import cors from "cors";

const corsClientx: cors.CorsOptions = {
    origin: "https://week-15-fe.netlify.app",
    methods: ["GET,POST"],
    allowedHeaders: "Content-Type"
}

export default corsClientx