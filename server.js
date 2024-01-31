import app from "./index.js";
import { connectUsingMongoose } from "./config/mongooge.config.js";

const port = 9000;
app.listen(port, () => {
  console.log(`Server is up and running on the port :: ${port}`);
  connectUsingMongoose();
});
