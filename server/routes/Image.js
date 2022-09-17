import express from "express";
import multer from "multer";

import { createImage } from "../controllers/Image.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const filename = Date.now() + "-" + file.originalname;
    cb(null, filename);
  },
});
const upload = multer({ storage: storage });

router.post("/image-upload", upload.single("image"), createImage);

export default router;
