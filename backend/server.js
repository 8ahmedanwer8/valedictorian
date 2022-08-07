const express = require("express");
const dotenv = require("dotenv");

const path = require("path");

dotenv.config();
const app = express();

app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API Running!");
});

app.get("/info", (req, res) => {
  console.log(req);
  res.send({
    uni: `mcmaster`,
    program: "mechatronics engineering",
  });
});

const PORT = process.env.PORT;

const server = app.listen(
  PORT,
  console.log(`Server running on PORT ${PORT}...`)
);
