require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin');

(async function() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const email = "admin@example.com";
    const plain = "admin1234";

    const exists = await Admin.findOne({ email });
    if (exists) {
      console.log("Admin already exists:", exists.email);
      process.exit(0);
    }

    const hashed = await bcrypt.hash(plain, 10);
    const admin = new Admin({ email, password: hashed, name: "Super Admin" });
    await admin.save();
    console.log("Admin created:", email, "password:", plain);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
