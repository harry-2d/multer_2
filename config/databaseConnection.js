const mongoose = require("mongoose");

const dbConncect = async() => {
    mongoose
    .connect(process.env.DB_LOCAL_URL)
    .then((con) => {
        console.log(
            `MongoDB connected with  HOST:${con.connection.host} and PORT:${con.connection.port}`
        )
    })
};

module.exports = dbConncect;