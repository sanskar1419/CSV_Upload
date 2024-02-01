// Importing Require Packages and module
import express from "express";
import CsvHomeController from "../controller/csvHome.controller.js";
import { uploadFile } from "../config/csvFile.upload.config.js";
import viewRouter from "./fileView.route.js";

// Initialize Express router.
const homeRouter = express.Router();

// Creating the instance of chomecontroller
const csvHomeController = new CsvHomeController();

// Handling all the request
homeRouter.get("/", (req, res) => {
  csvHomeController.getHome(req, res);
});

homeRouter.post("/", uploadFile.single("csvFile"), (req, res) => {
  csvHomeController.uploadFile(req, res);
});

homeRouter.post("/delete", (req, res) => {
  csvHomeController.deleteCsvFile(req, res);
});

// Redirecting all the request to view router
homeRouter.use("/view", viewRouter);

// Exporting home router
export default homeRouter;
