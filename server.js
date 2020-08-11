const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");


var PORT = 3011 || process.env.PORT;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI ||
  "mongodb://cnmiller127:superBase93!@ds055525.mlab.com:55525/heroku_rsb12l8c", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}! http://localhost:3011`);
});

