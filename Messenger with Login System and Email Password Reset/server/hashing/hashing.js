const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const hashes = [];

/**
 * Hashing.
 * @param {string} name - user's name.
 * @param {string} email - user's email address.
 * @param {string} password - user's password.
 * @author [Satoshi Ishida]
 */
const Hashing = (name, email, password) => {
  try {
    let nameHash = "",
      emailHash = "",
      passHash = "";
    // asynchronous.
    bcrypt.hash(name, saltRounds).then(function (hash) {
      nameHash = hash;
      hashes.push({ name: nameHash });
    });
    bcrypt.hash(email, saltRounds).then(function (hash) {
      emailHash = hash;
      hashes.push({ email: emailHash });
    });
    bcrypt.hash(password, saltRounds).then(function (hash) {
      passHash = hash;
      hashes.push({ pass: passHash });
    });
  } catch (err) {
    console.log("Error hashing user credentials: " + err);
  }
};

router.post("/", async (req, res) => {
  try {
    const name = req.body.name,
      email = req.body.email,
      password = req.body.password;

    Hashing(name, email, password);
    /**
     * bcrypt needs time to hash.
     */
    setTimeout(() => {
      res.send(hashes);
    }, 100);
  } catch (err) {
    res.status(404).json({ msg: "Error." });
  }
});

module.exports = router;
