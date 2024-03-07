const express = require("express");
const router = express.Router();

const path = require("path");
const basePath = path.join(__dirname, "../templates");

router.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const number = req.body.number;

  console.log(name);
  console.log(email);
  console.log(number);

  res.sendFile(`${basePath}/register.html`);
});

router.get("/register", (req, res) => {
  res.sendFile(`${basePath}/register.html`);
});

router.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

module.exports = router;
