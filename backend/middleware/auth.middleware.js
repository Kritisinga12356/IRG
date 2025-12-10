const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
require("dotenv").config();

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // optional: fetch admin from DB
    const admin = await Admin.findById(decoded.id).select("-password");
    if (!admin) return res.status(401).json({ message: "Invalid token" });

    req.admin = admin; // attach admin to request
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
