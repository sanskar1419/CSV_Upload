// Importing Require Packages and module
import mongoose from "mongoose";

// Defining file schema
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

// Defining the variable through which we will access this db
const CsvFile = mongoose.model("CsvFile", csvFileSchema);

// Export
export default CsvFile;
