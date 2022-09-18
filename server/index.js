import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import connect from "./config/db.js";
import imageRouter from "./routes/Image.js";

const app = express();
dotenv.config();

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

// connect to databse
connect();

// routes
/* app.get("/", (req, res) => {
  res.send("Hello World From Server");
}); */
app.use("/api/v1", imageRouter);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
