// // Importing Require Packages and module
import mongoose from "mongoose";
import CsvFile from "../schema/csvHome.schema.js";
import fs from "fs";

// Defining class and all the method related to database operation
export default class CsvHomeRepository {
  // Sending all the csv file from db
  async getAll() {
    try {
      const files = await CsvFile.find({});
      return files;
    } catch (err) {
      console.log(err);
      throw new Error("Something Went Wrong");
    }
  }

  // Saving file to db
  async saveFileToDatabase(file) {
    try {
      const newRecord = new CsvFile(file);
      const savedRecord = await newRecord.save();
      return savedRecord;
    } catch (err) {
      console.log(err);
      throw new Error("Something Went Wrong");
    }
  }

  // Deleting the file based on id
  async delete(id) {
    try {
      const file = await CsvFile.findOne({ _id: id });
      fs.unlink(file.filePath, (err) => {
        if (err) console.log(err);
        else console.log("File is deleted");
      });
      await CsvFile.deleteOne({ _id: id });
    } catch (err) {
      console.log(err);
      throw new Error("Something Went Wrong");
    }
  }
}
