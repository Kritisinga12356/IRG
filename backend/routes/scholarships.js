const express = require("express");
const router = express.Router();
const Scholarship = require("../models/Scholarship");
const multer = require("multer");
const path = require("path");

// -----------------------------
// MULTER (image upload)
// -----------------------------
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// -----------------------------
// ADD SCHOLARSHIP
// -----------------------------
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const scholarship = await Scholarship.create({
      title: req.body.title,
      description: req.body.description,
      applyLink: req.body.applyLink,
      image: req.file ? req.file.filename : null,
    });

    res.json({ success: true, data: scholarship });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server Error" });
  }
});

// -----------------------------
// GET ALL SCHOLARSHIPS
// -----------------------------
router.get("/", async (req, res) => {
  try {
    console.log("📌 Fetching all scholarships...");
    const scholarships = await Scholarship.find().sort({ _id: -1 });
    console.log("📌 Scholarships:", scholarships);

    // HERE we format
    const BASE_URL = "https://irg-8.onrender.com";
    const formatted = scholarships.map((item) => ({
      _id: item._id,
      title: item.title,
      description: item.description,
      applyLink: item.applyLink,
      image: item.image
        ? `${BASE_URL}/uploads/${item.image}`
        : null,
    }));

    res.json(formatted);

  } catch (err) {
    console.log("❌ ERROR inside /api/scholarships:", err);
    res.status(500).json({ error: err.message });
  }
});


// -----------------------------
// GET ONE
// -----------------------------
router.get("/:id", async (req, res) => {
  try {
    const scholarship = await Scholarship.findById(req.params.id);
    if (!scholarship) {
      return res.status(404).json({ error: "Not found" });
    }
    res.json(scholarship);
  } catch (err) {
    res.status(500).json({ error: "Fetch error" });
  }
});

// -----------------------------
// UPDATE
// -----------------------------
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      description: req.body.description,
      applyLink: req.body.applyLink,
    };

    if (req.file) updateData.image = req.file.filename;

    const updated = await Scholarship.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json({ success: true, data: updated });
  } catch (err) {
    res.status(500).json({ error: "Update failed" });
  }
});

// -----------------------------
// DELETE
// -----------------------------
router.delete("/:id", async (req, res) => {
  try {
    await Scholarship.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
});

module.exports = router;
