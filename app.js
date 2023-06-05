const express = require("express");
require("dotenv").config();
const app = express();

const routes = require("./routes");

//Parse JSON bodies
app.use(express.json());

//Mount routes
app.use("/", routes);

const port = process.env.PORT || 3030;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
