const app = require("./app");
const dbConncect = require("./config/databaseConnection");

//handling uncaught exceptions
process.on("uncaughtException", (err) => {
    console.log("Error", err.stack);
    console.log("Uncaught Exception. Shutting down...");
    process.exit(1);
})

//configuring config file
require("dotenv").config({path:"config/config.env"});

//connecting to the database
dbConncect();

//connecting to the server
const server = app.listen(process.env.PORT, () => {
    console.log(
        `server connected with http://localhost:` +
        process.env.PORT +
        ` in ` +
        process.env.NODE_ENV + 
        ` mode.`

    );
});

//Handle unhandled promise rejections'
process.on("unhandledRejection", (err) => {
    console.log("Error:", err.message);
    console.log("Unhandled promise rejection. Shutting down...");
    server.close(() => {
      process.exit(1);
    });
  });
