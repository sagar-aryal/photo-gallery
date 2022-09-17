import mongoose from "mongoose";

const imageSchema = mongoose.Schema({
  image: {
    type: String,
    requred: true,
  },
  createdAt: {
    type: String,
    default: new Date(),
  },
});

export default mongoose.model("Image", imageSchema);
