import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors"

import bodyParser from "body-parser";
import userRouter from "./routes/userRoute.js";
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
dotenv.config();
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    


  })
  .catch((error) => console.log(`${error} did not connect`));

app.use(userRouter);