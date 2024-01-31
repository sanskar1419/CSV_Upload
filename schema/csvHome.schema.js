import mongoose from "mongoose";

export const csvFileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
    },
    filePath: {
      type: String,
    },
    file: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const CsvFile = mongoose.model("CsvFile", csvFileSchema);

export default CsvFile;
