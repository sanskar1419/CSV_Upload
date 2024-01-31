import express from "express";
import CsvHomeController from "../controller/csvHome.controller.js";

// 2. Initialize Express router.
const homeRouter = express.Router();

const csvHomeController = new CsvHomeController();

homeRouter.get("/", (req, res) => {
  csvHomeController.getHome(req, res);
});

export default homeRouter;
