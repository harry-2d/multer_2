const express = require("express");
const imageUpload = require("../middleware/imageUpload");
const { postImage, getAllImage} = require("../controller/multerController");
const router = express.Router();

router
    .route("/postImage")
    .post(
        imageUpload.fields([
            {name: 'image', maxCount:1}
        ]),
        postImage
    );

router
    .route("/getAllImage")
    .get(
        getAllImage
    )
   
module.exports = router;    