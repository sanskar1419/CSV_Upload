import mongoose from "mongoose";

export const csvFileSchema = new mongoose.Schema(
  {
    originalFileName: {
      type: String,
    },
    filePath: {
      type: String,
    },
    filename: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const CsvFile = mongoose.model("CsvFile", csvFileSchema);

export default CsvFile;
