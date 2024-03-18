import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

//db is on another continent
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION FAILED: ", error);
    process.exit(1);
  }
};

export default connectDB;