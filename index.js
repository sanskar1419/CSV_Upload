import "./env.js";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import homeRouter from "./routes/csvHome.route.js";

const app = new express();

app.use(express.static("assets"));

app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));

app.use(expressEjsLayouts);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", homeRouter);

export default app;
