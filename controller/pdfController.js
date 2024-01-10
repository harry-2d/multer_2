const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ErrorHandler = require("../utils/errorHandler");
const Pdf = require("../Model/Pdf");

//adding new pdf file
exports.postPdf = catchAsyncErrors( async(req, res, next) => {
        
    if(req.files == undefined){
        return next(new ErrorHandler("Invalid pdf", 401 ));
    }

    
    if(!req.files.pdf){
        res.status(400).json({
            success: true,
            message: "upload pdf file correctly"
        });
    }
    

    req.body.pdf = req.files.pdf[0].filename;
    const pdf = await new Pdf(req.body).save();

    res.status(200).json({
        success: true,
        message: "pdf added successfully",
        data: pdf
    })
});

//getting all pdf files
exports.getAllPdf = catchAsyncErrors( async( req, res, next) => {
    const pdf = await Pdf.find();

    res.status(200).json({
        success: true,
        message: "All pdf files fetched",
        data: pdf
    });
});

//getOnepdf
exports.getOnePdf = catchAsyncErrors( async(req, res, next) => {
    const pdf = await Pdf.findById(req.params.id);

    res.status(200).json({
        success: true,
        message: "Single pdf file fetched",
        data: pdf
    });
});