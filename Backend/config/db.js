import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const dbConnect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log("✅ Db connected successfully............");
  } catch (error) {
    console.error("❌ Db connection failed:", error.message);
  }
}
