require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
// const scholarshipRoutes = require('./routes/scholarships');
const adminRoutes = require('./routes/adminRoutes');


const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/scholarships", require("./routes/scholarships"));
app.use('/admin', adminRoutes);
app.use("/api/admin", require("./routes/admin"));

app.use("/uploads", express.static("uploads"));


// connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(()=> console.log("MongoDB connected"))
.catch(err => console.error(err));

// routes
const scholarshipRoutes = require('./routes/scholarships');
app.use('/api/scholarships', scholarshipRoutes);

// if production, serve frontend build
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'frontend', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'frontend', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
