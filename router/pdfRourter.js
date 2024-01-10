const express = require("express");
const pdfUpload = require("../middleware/pdfUpload");
const { postPdf, getAllPdf, getOnePdf } = require("../controller/pdfController");
const router = express.Router();

router
    .route("/postPdf")
    .post(
        pdfUpload.fields([
            {name: 'pdf', maxCount: 1}
        ]),
        postPdf
    )

router
    .route("/getAllPdf")
    .get(
        getAllPdf
    )

router
    .route("/getOnePdf/:id")
    .get(
        getOnePdf
    )
module.exports = router;