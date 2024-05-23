const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// Middleware to handle JSON and file uploads
app.use(express.json());
app.use(fileUpload());

// Connect DB
const db = require("./config/database");
db.connect();

// Connect Cloudinary
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();

// API route mount
const upload = require("./routes/FileUpload");
app.use('/api/v1/upload', upload);

// Activate server
app.listen(PORT, () => {
    console.log(`App is running at ${PORT}`);
});
