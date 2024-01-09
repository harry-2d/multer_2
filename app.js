const express = require("express");
const app = express();
const multerRouter = require("./router/multerRouter");
const errorMiddleware = require("./middleware/error");
const videoRouter = require("./router/videoRouter");

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

//multer
app.use("/imageUploads", express.static("files/image"));
app.use("/videoUploads", express.static("files/video"));

//using routers
app.use("/api/", 
        multerRouter,
        videoRouter);

//middleware to handle errors
app.use(errorMiddleware);
module.exports = app;