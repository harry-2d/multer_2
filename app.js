const express = require("express");
const app = express();
const multerRouter = require("./router/multerRouter");
const errorMiddleware = require("./middleware/error");
const videoRouter = require("./router/videoRouter");
const pdfRouter = require("./router/pdfRourter");

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

//multer
app.use("/imageUploads", express.static("files/image"));
app.use("/videoUploads", express.static("files/video"));
app.use("/pdfUploads", express.static("files/pdf"));

//using routers
app.use("/api/", 
        multerRouter,
        videoRouter,
        pdfRouter);

//middleware to handle errors
app.use(errorMiddleware);

module.exports = app;