const mongoose = require("mongoose");
require("dotenv").config();

// console.log("MongoDB URL:", process.env.MONGODB_URL); // Debugging line

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL)
        .then(() => {
            console.log("DB connected successfully");
        })
        .catch((error) => {
            console.log("DB connection issue");
            console.error(error);
            process.exit(1);
        });
};
