require("dotenv").config();

const express = require("express");
const sequelize = require("./db");
const app = express();
const models = require("./models/models");
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
app.use(cors());
app.use(express.json());
app.use("/api", router);

//last middleware
app.use(errorHandler);

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();

    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
