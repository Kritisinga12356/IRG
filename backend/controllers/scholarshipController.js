// const Scholarship = require('../models/Scholarship');

// exports.getAll = async (req, res) => {
//   try {
//     const items = await Scholarship.find().sort({createdAt: -1});
//     res.json(items);
//   } catch (err) { res.status(500).json({ message: err.message }); }
// };

// exports.create = async (req, res) => {
//   try {
//     const { title, description, url, tags } = req.body;
//     if (!title || !url) return res.status(400).json({ message: "title and url required" });
//     const s = new Scholarship({ title, description, url, tags });
//     const saved = await s.save();
//     res.status(201).json(saved);
//   } catch (err) { res.status(500).json({ message: err.message }); }
// };

// exports.delete = async (req, res) => {
//   try {
//     await Scholarship.findByIdAndDelete(req.params.id);
//     res.json({ message: "deleted" });
//   } catch (err) { res.status(500).json({ message: err.message }); }
// };
const Scholarship = require("../models/Scholarship");

// --------------------------------------
// ADD SCHOLARSHIP  (With Multer Image)
// --------------------------------------
exports.addScholarship = async (req, res) => {
  try {
    const newScholarship = await Scholarship.create({
      title: req.body.title,
      description: req.body.description,
      applyLink: req.body.applyLink,
      image: req.file ? req.file.filename : null,
    });

    res.json({ success: true, scholarship: newScholarship });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

// --------------------------------------
// GET ALL SCHOLARSHIPS
// --------------------------------------
exports.getScholarships = async (req, res) => {
  try {
    const scholarships = await Scholarship.find().sort({ _id: -1 });
    res.json(scholarships);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch scholarships" });
  }
};

// --------------------------------------
// UPDATE SCHOLARSHIP  (optional image)
// --------------------------------------
exports.updateScholarship = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      description: req.body.description,
      applyLink: req.body.applyLink,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const updated = await Scholarship.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ error: "Scholarship not found" });
    }

    res.json({ success: true, scholarship: updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --------------------------------------
// DELETE SCHOLARSHIP
// --------------------------------------
exports.deleteScholarship = async (req, res) => {
  try {
    await Scholarship.findByIdAndDelete(req.params.id);
    res.json({ success: true, message: "Scholarship deleted" });
  } catch (err) {
    res.status(500).json({ error: "Delete failed" });
  }
};
