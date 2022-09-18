import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;

// connect to db
const connect = async () => {
  try {
    const conn = await mongoose.connect(MONGODB_URL);

    console.log(`Backend is successfully connected to MongoDB.`);
  } catch (error) {
    console.log("Backend did not get connect to MongoDB.", error.message);
  }
};

export default connect;
