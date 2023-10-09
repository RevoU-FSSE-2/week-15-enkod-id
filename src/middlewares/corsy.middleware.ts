import cors from "cors";

const corsClienty: cors.CorsOptions = {
    origin: "https://clienty-week15.netlify.app/",
    methods: ["GET,POST,PUT,DELETE"],
    allowedHeaders: "Content-Type"
}

export default corsClienty