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
 * PassHashing.
 * @param {string} password - user's password.
 * @author [Satoshi Ishida]
 */
const PassHashing = (password) => {
  try {
    let passHash = "";

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
    const password = req.body.pass;

    PassHashing(password);
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
