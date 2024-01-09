const multer = require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./files/pdf");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname);
    }
});

const filter = function (req, file, cb) {
    console.log(file);
    if(file.mimetype == "application/pdf"){
        cb(null, true);
    }
    else {
        cb(null, false);
        return cb(new Error("only pdf format are supported"));
    }   
};

const pdfUpload = multer({
    storage: storage,
    fileFilter: filter
});

module.exports = pdfUpload;