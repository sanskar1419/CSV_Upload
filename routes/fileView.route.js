// Importing necessary module and packages
import express from "express";
import CsvHomeController from "../controller/csvHome.controller.js";

// Initialize Express router.
const viewRouter = express.Router();

// Creating the instance of csvhomecontroller
const csvHomeController = new CsvHomeController();

// Handeling all the request
viewRouter.get("/", (req, res) => {
  csvHomeController.fileViewer(req, res);
});

// exporting data
export default viewRouter;
