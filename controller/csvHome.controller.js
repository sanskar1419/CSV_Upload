import CsvHomeRepository from "../repository/csvHome.repository.js";

export default class CsvHomeController {
  constructor() {
    this.csvHomeRepository = new CsvHomeRepository();
  }

  async getHome(req, res) {
    res.status(200).send("Welcome to your Csv Home Page");
  }
}
