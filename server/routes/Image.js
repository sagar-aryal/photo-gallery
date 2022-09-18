import express from "express";

import { createImage, getImages } from "../controllers/Image.js";
import { upload } from "../middlewares/multer.js";

const router = express.Router();

router.post("/image-upload", upload.single("image"), createImage);
router.get("/images", getImages);

export default router;
