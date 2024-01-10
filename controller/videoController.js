const Video = require("../Model/Video");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");

//adding new videos
exports.postVideo = catchAsyncErrors( async( req, res, next) => {
    if(req.files == undefined) {
        return next (new ErrorHandler("Invalid Video", 401));
    }

    if(!req.files.video) {
        res.status(400).json({
            success: true,
            message: "video files are required"
        });
    }

    req.body.video = req.files.video[0].filename;
    const video = await new Video(req.body).save();

    res.status(200).json({
        success: true,
        message: "Video uploaded Successfully",
        data: video, 
    });
});

//getting all videos
exports.getAllVideos = catchAsyncErrors( async(req, res, next) => {
    const video = await Video.find();

    res.status(200).json({
        success: true,
        message: "all videos fetched",
        data: video 
    });
})

//getting single video by id
exports.getOneVideo = catchAsyncErrors( async(req, res, next) => {
    const video = await Video.findById(req.params.id);

    res.status(200).json({
        success:true,
        message: "Single Video Fetched",
        data: video
    })
})