const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema({
    pdf: {
        type: String,
        required: true
    },
 },
 {timestamps: true}
);

module.exports = mongoose.model("Pdf", pdfSchema);