const express = require("express");
const videoUpload = require("../middleware/videoUpload");
const { postVideo, getAllVideos, getOneVideo } = require("../controller/videoController");
const router = express.Router();


router
    .route("/postVideo")
    .post(
        videoUpload.fields([
            {name: 'video', maxCount:1}
        ]),
        postVideo
    );

router
    .route("/getAllVideo")
    .get(
        getAllVideos
    )
 
router
    .route("/getOneVideo/:id")
    .get(
        getOneVideo
    )

    
module.exports = router;    