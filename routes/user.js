const express = require("express");
const router = express.Router();

const {signup} = require ('../controllers/user.js');

router.get("/", signup);

module.exports = router;

