const express = require("express");
const db = require("../connect.js");

const router = express.Router();
const {
  bookDemo,
  getbookDemo,
  contact,
  getContacts,
  saveTrialData,
  getAllTrialData,
} = require("../controllers/authController");

router.post("/book_demo", bookDemo);
router.get("/getbookDemo", getbookDemo);
router.post("/contact", contact);
router.get("/getcontacts", getContacts);
router.post("/saveTrialData", saveTrialData);
router.get("/getAllTrialData", getAllTrialData);

module.exports = router;
