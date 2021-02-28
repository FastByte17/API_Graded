const fs = require('fs');
const express = require('express');
const multer = require('multer');
const multerUpload = multer({ dest: 'uploads/'})
const router = express.Router();

router.post('/upload', multerUpload.array('plantimages', 4), (req, res) => {
    console.log(req.files);
    res.send("Success!");
});

module.exports = router;