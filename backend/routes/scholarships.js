const express = require("express");
const router = express.Router();
const Scholarship = require("../models/Scholarship");
const auth = require("../middleware/auth.middleware");
const multer = require("multer");
const path = require("path");

// ===============================
// 🟦 MULTER IMAGE UPLOAD SETUP
// ===============================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");  // folder where images will be saved
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // unique name
  }
});

const upload = multer({ storage });

// ===============================
// 🟩 ADD SCHOLARSHIP (with image)
// ===============================
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const scholarship = new Scholarship({
      title: req.body.title,
      description: req.body.description,
      provider: req.body.provider,
      eligibility: req.body.eligibility,
      deadline: req.body.deadline,
      applyLink: req.body.applyLink,
      image: req.file ? req.file.filename : null
    });

    await scholarship.save();
    res.json({ success: true, data: scholarship });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
});


// ===============================
// 🟦 GET ALL SCHOLARSHIPS
// ===============================
router.get("/", async (req, res) => {
  try {
    const scholarships = await Scholarship.find().sort({ createdAt: -1 });
    res.json(scholarships);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch scholarships" });
  }
});


// ===============================
// 🟦 GET SINGLE SCHOLARSHIP
// ===============================
router.get("/:id", async (req, res) => {
  try {
    const scholarship = await Scholarship.findById(req.params.id);
    if (!scholarship) {
      return res.status(404).json({ error: "Scholarship not found" });
    }
    res.json(scholarship);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch scholarship" });
  }
});


// ===============================
// 🟧 UPDATE SCHOLARSHIP
// ===============================
router.put("/:id", auth, async (req, res) => {
  try {
    const updatedScholar = await Scholarship.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedScholar) {
      return res.status(404).json({ error: "Scholarship not found" });
    }

    res.json({
      message: "Scholarship Updated Successfully!",
      updatedScholar,
    });
  } catch (err) {
    res.status(500).json({ error: "Failed to update scholarship" });
  }
});


// ===============================
// 🟥 DELETE SCHOLARSHIP
// ===============================
router.delete("/:id", auth, async (req, res) => {
  try {
    await Scholarship.findByIdAndDelete(req.params.id);
    res.json({ message: "Scholarship deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

module.exports = router;
