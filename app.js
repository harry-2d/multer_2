const express = require("express");
const app = express();
const multerRouter = require("./router/multerRouter");
const errorMiddleware = require("./middleware/error");

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

//multer
app.use("/imageupload", express.static("files/image"));

//using routers
app.use("/api/", multerRouter);

//middleware to handle errors
app.use(errorMiddleware);
module.exports = app;