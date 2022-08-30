require("dotenv").config({ path: "./config.env" });
const express = require("express");
const errorHandler = require("./middlewares/error");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/article");
app.use("/api/course");

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
