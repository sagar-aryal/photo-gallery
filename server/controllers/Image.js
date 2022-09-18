import Image from "../models/Image.js";
import ImageModel from "../models/Image.js";

export const createImage = async (req, res) => {
  try {
    const url = req.protocol + "://" + req.get("host");
    const createImage = new Image({
      image: url + "/uploads/" + req.file.filename,
    });
    createImage.save();
    res
      .status(200)
      .json({ message: "Image uploaded successfully", createImage });
  } catch (error) {
    res.status(500).json({
      message: "Something went wroung with create image",
      error,
    });
  }
};

export const getImages = async (req, res) => {
  try {
    const images = await ImageModel.find();
    res.status(200).json({ message: "Successfull", images });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wround with getting images", error });
  }
};
