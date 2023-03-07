import express from "express";
import cors from "cors";
import AppError from "./utils/appError.js";
import errorHandler from "./utils/errorHandler.js";
import { ROUTES } from "./routes/index.js"

//app.use(api, Router);
const app  = express()

app.use(cors("*"))


app.use("/path/api", ROUTES.path)

const PORT = 3000;
app.listen(PORT, () => {
 console.log(`server running on port ${PORT}`);
});

export default app;