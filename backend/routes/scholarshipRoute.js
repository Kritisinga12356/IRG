// const express = require("express");
// const upload = require("../middleware/upload");
// const { addScholarship, getScholarships, deleteScholarship } = require("../controllers/scholarshipController");

// const router = express.Router();

// router.post("/add", upload.single("image"), addScholarship);  // ⭐ IMAGE UPLOAD HERE
// router.get("/", getScholarships);
// router.delete("/:id", deleteScholarship);

// module.exports = router;

const express = require("express");
const upload = require("../middleware/upload");

const { 
  addScholarship, 
  getScholarships, 
  updateScholarship,
  deleteScholarship 
} = require("../controllers/scholarshipController");

const router = express.Router();

// ADD (with image)
router.post("/add", upload.single("image"), addScholarship);

// GET All
router.get("/", getScholarships);

// UPDATE (with image)
router.put("/:id", upload.single("image"), updateScholarship);

// DELETE
router.delete("/:id", deleteScholarship);

module.exports = router;
