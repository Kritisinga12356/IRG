require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const adminRoutes = require("./routes/adminRoutes");
const scholarshipRoutes = require("./routes/scholarships");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// ROUTES
app.use("/api/scholarships", scholarshipRoutes);
app.use("/admin", adminRoutes);
app.use("/api/admin", require("./routes/admin"));

// MONGO CONNECT
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// SERVE FRONTEND IN PRODUCTION
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/build");
  app.use(express.static(frontendPath));

  app.get("*", (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
