// Importing Require Packages and module
import "./env.js";
import express from "express";
import bodyParser from "body-parser";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import homeRouter from "./routes/csvHome.route.js";

//  Executes the express function by calling it with an empty arguments list and assign it to app constant
const app = new express();

// Making asset folder publicly visible.
app.use(express.static("assets"));

// Use express ejs layout
app.use(expressEjsLayouts);

// Extracting css and js link and script
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Setup the view engine as ejs
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));

// Use body parser to parse the client data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Redirecting all the request to home router
app.use("/", homeRouter);

export default app;
