import express from "express";
import dotenv from "dotenv";
import path from "path";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

// global middlewares
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello World From Server");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
