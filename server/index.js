import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import imageRouter from "./routes/Image.js";

const app = express();
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

// global middlewares
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cors());
app.use("/uploads", express.static("uploads"));

// routes
/* app.get("/", (req, res) => {
  res.send("Hello World From Server");
}); */
app.use("/api/v1", imageRouter);

// connect to db
mongoose
  .connect(MONGODB_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `Backend is running successfully to database and running at http://localhost:${PORT}/`
      );
    });
  })
  .catch((error) =>
    console.log("Backend did not get connect to MongoDB", error.message)
  );

/* app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
 */
