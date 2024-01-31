import express from "express";
import CsvHomeController from "../controller/csvHome.controller.js";

// 2. Initialize Express router.
const viewRouter = express.Router();

const csvHomeController = new CsvHomeController();

viewRouter.get("/", (req, res) => {
  csvHomeController.fileViewer(req, res);
});

export default viewRouter;
