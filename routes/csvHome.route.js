import express from "express";
import CsvHomeController from "../controller/csvHome.controller.js";
import { uploadFile } from "../config/csvFile.upload.config.js";
import viewRouter from "./fileView.route.js";

// 2. Initialize Express router.
const homeRouter = express.Router();

const csvHomeController = new CsvHomeController();

homeRouter.get("/", (req, res) => {
  csvHomeController.getHome(req, res);
});

homeRouter.post("/", uploadFile.single("csvFile"), (req, res) => {
  csvHomeController.uploadFile(req, res);
});

homeRouter.post("/delete", (req, res) => {
  csvHomeController.deleteCsvFile(req, res);
});

homeRouter.use("/view", viewRouter);

export default homeRouter;
