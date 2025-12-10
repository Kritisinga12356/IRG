// const mongoose = require('mongoose');

// const ScholarshipSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: { type: String },
//   url: { type: String, required: true }, // official scholarship link
//   tags: [String],
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('Scholarship', ScholarshipSchema);
// const mongoose = require("mongoose");

// const ScholarshipSchema = new mongoose.Schema({
//   title: { type: String, required: true },
//   description: String,
//   provider: String,
//   eligibility: String,
//   deadline: String,
//   applyLink: String,     // 👈 Official Website URL
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Scholarship", ScholarshipSchema);

const mongoose = require("mongoose");

const ScholarshipSchema = new mongoose.Schema({
  title: String,
  description: String,
  applyLink: String,
  image: String, // IMPORTANT
});

module.exports = mongoose.model("Scholarship", ScholarshipSchema);
