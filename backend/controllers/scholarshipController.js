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
const cloudinary = require("../config/cloudinary");
const Scholarship = require("../models/Scholarship");

exports.addScholarship = async (req, res) => {
  try {
    let imageUrl = null;

    if (req.file) {
      const uploadRes = await cloudinary.uploader.upload_stream(
        { folder: "scholarships" },
        (err, result) => {
          if (err) console.log(err);
          imageUrl = result.secure_url;
        }
      );
      uploadRes.end(req.file.buffer);
    }

    const newScholarship = await Scholarship.create({
      title: req.body.title,
      description: req.body.description,
      applyLink: req.body.applyLink,
      image: imageUrl,
    });

    res.json({ success: true, scholarship: newScholarship });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};
