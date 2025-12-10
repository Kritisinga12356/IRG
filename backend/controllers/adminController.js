const Admin = require("../models/Admin");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email || !password) return res.status(400).json({ success:false, message:"Provide email and password" });

    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(400).json({ success:false, message:"Admin not found" });

    const match = await bcrypt.compare(password, admin.password);
    if (!match) return res.status(400).json({ success:false, message:"Invalid credentials" });

    const token = jwt.sign({ id: admin._id, email: admin.email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || "1d"
    });

    res.json({ success:true, token, admin: { id: admin._id, email: admin.email, name: admin.name } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success:false, message:"Server error" });
  }
};
