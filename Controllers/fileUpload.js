const File = require("../models/Files");
const path = require('path');

exports.localFileUpload = async (req, res) => {
    try {
        // Check if files are uploaded
        if (!req.files || Object.keys(req.files).length === 0) {
            return res.status(400).send('No files were uploaded.');
        }

        // Access the uploaded file
        const file = req.files.file;
        console.log(file);

        // Define the path to store the file
        const uploadPath = path.join(__dirname, "/files", Date.now() + path.extname(file.name));

        // Move the file to the desired location
        file.mv(uploadPath, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send(err);
            }

            res.json({
                success: true,
                message: 'Local file uploaded successfully',
            });
        });
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};
