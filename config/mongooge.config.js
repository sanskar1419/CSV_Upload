// Importing Require Packages and module
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Import env variable
const url = process.env.DB_URL;

// Connecting to MongoDB using mongoose
export const connectUsingMongoose = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongodb connected using mongoose");
  } catch (err) {
    console.log("Error while connecting to db");
    console.log(err);
  }
};
