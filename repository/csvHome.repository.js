import mongoose from "mongoose";
import CsvFile from "../schema/csvHome.schema.js";
import fs from "fs";

export default class CsvHomeRepository {
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
