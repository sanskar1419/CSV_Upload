import CsvFileModel from "../model/csvFile.model.js";
import CsvHomeRepository from "../repository/csvHome.repository.js";
import multer from "multer";
const upload = multer().single("csvFile");

export default class CsvHomeController {
  constructor() {
    this.csvHomeRepository = new CsvHomeRepository();
  }

  async getHome(req, res) {
    const files = await this.csvHomeRepository.getAll();
    res.render("home", {
      title: "CSV Home",
      errorMessage: null,
      files: files,
    });
    // res.status(200).send("Welcome to your Csv Home Page");
  }

  async uploadFile(req, res) {
    try {
      if (!req.file) {
        return res.status(400).send("Need to select a file");
      }
      if (req.file.mimetype != "text/csv") {
        return res
          .status(400)
          .send("File must be a CSV file with extension .csv");
      }
      const maxSize = 15 * 1024 * 1024;
      if (req.file.size >= maxSize) {
        return res.status(400).send("File size should be less then 15MB");
      }
      const newCsvFile = new CsvFileModel(
        req.file.originalname,
        req.file.path,
        req.file.filename
      );
      const createdRecord = await this.csvHomeRepository.saveFileToDatabase(
        newCsvFile
      );
      console.log(createdRecord);
      res.redirect("back");
    } catch (err) {
      console.log(err);
      throw new Error("Something Went Wrong");
    }
  }

  async deleteCsvFile(req, res) {
    try {
      const { id } = req.query;
      await this.csvHomeRepository.delete(id);
      res.redirect("back");
    } catch (err) {
      console.log(err);
      throw new Error("Something Went Wrong");
    }
  }
}
