const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./files/video");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const filter = function (req, file, cb) {
    console.log(file);
    if(file.mimetype == "video/mp4" || file.mimetype == "video/mkv" ||
       file.mimetype == "video/mov" || file.mimetype == "video/wmv"){
        cb(null, true);
    }
    else {
        cb(null, false);
        return cb(new Error("only mp4, mkv, mov, wmv are supported"));
    }   
};

const videoUpload = multer({
    storage: storage,
    fileFilter: filter
});

module.exports = videoUpload;


