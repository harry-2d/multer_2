const mongoose = require('mongoose');

const multerSchema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
   
    },
  { timestamps: true }
);

module.exports = mongoose.model("Multer", multerSchema);