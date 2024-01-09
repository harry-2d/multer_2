const express = require("express");
const videoUpload = require("../middleware/videoUpload");
const { postVideo } = require("../controller/videoController");
const router = express.Router();


router
    .route("/postVideo")
    .post(
        videoUpload.fields([
            {name: 'video', maxCount:1}
        ]),
        postVideo
    );

module.exports = router;    