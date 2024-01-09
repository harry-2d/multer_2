const multer = require("multer");
const Multer = require("../Model/Multer");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

//adding new images
exports.postImage = catchAsyncErrors( async(req, res, next) => {
    if(req.files == undefined) {
        return next(new ErrorHandler("Invalid Image", 401));
    }

    if(!req.files.image) {
        res.status(400).json({
            success: false,
            message: "Image uploaded"
        });
    }

    req.body.image = req.files.image[0].filename;
    const multer = await new Multer(req.body).save();

    res.status(400).json({
        success: true,
        message: "Image added Successfully",
        data: multer
    });
    
});

//get all images
exports.getAllImage = catchAsyncErrors( async(req, res, next) => {
    const imageCount = await Multer.countDocuments();
    const  image = await Multer.find().sort({ createdAt: 1});

    res.status(400).json({
        success:true,
        message:"All images fetched",
        count: imageCount,
        data: image
    });
});
