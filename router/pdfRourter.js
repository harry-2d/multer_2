const express = require("express");
const pdfUpload = require("../middleware/pdfUpload");
const { postPdf } = require("../controller/pdfController");
const router = express.Router();

router
    .route("/postPdf")
    .post(
        pdfUpload.fields([
            {name: 'pdf', maxCount: 1}
        ]),
        postPdf
    )

module.exports = router;