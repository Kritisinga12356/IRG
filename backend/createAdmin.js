require("dotenv").config();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Admin = require("./models/Admin");

(async function () {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const email = "admin@example.com";  // ← अपना email लिखो
    const plainPassword = "admin1234";  // ← अपना नया password लिखो

    const exists = await Admin.findOne({ email });

    if (exists) {
      console.log("⚠ Admin already exists. Updating password...");

      const hashed = await bcrypt.hash(plainPassword, 10);
      exists.password = hashed;
      await exists.save();

      console.log("✅ Password Updated Successfully!");
      process.exit(0);
    }

    const hashed = await bcrypt.hash(plainPassword, 10);
    const admin = new Admin({
      email,
      password: hashed,
      name: "Super Admin",
    });

    await admin.save();
    console.log("✅ New Admin Created Successfully!");
    console.log("Login Email:", email);
    console.log("Login Password:", plainPassword);

    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
